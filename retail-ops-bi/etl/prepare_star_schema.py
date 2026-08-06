#!/usr/bin/env python3
"""Transform raw Superstore CSV into star-schema CSVs + synthetic inventory."""

from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "data" / "raw" / "superstore.csv"
OUT = ROOT / "data" / "processed"


def _clean_columns(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    df.columns = (
        df.columns.str.replace("\ufeff", "", regex=False)
        .str.strip()
        .str.lower()
        .str.replace(" ", "_")
        .str.replace("-", "_")
    )
    if "csvbase_row_id" in df.columns:
        df = df.drop(columns=["csvbase_row_id"])
    if "row_id" in df.columns:
        df = df.drop(columns=["row_id"])
    return df


def build_date_dim(dates: pd.Series) -> pd.DataFrame:
    uniq = pd.to_datetime(pd.Series(dates.dropna().unique())).sort_values()
    frame = pd.DataFrame({"full_date": uniq})
    frame["date_key"] = frame["full_date"].dt.strftime("%Y%m%d").astype(int)
    # Monday=1 .. Sunday=7
    frame["day_of_week"] = frame["full_date"].dt.dayofweek + 1
    frame["day_name"] = frame["full_date"].dt.day_name()
    frame["week_of_year"] = frame["full_date"].dt.isocalendar().week.astype(int)
    frame["month_num"] = frame["full_date"].dt.month
    frame["month_name"] = frame["full_date"].dt.month_name()
    frame["quarter"] = frame["full_date"].dt.quarter
    frame["year_num"] = frame["full_date"].dt.year
    frame["is_weekend"] = frame["day_of_week"].isin([6, 7])
    return frame[
        [
            "date_key",
            "full_date",
            "day_of_week",
            "day_name",
            "week_of_year",
            "month_num",
            "month_name",
            "quarter",
            "year_num",
            "is_weekend",
        ]
    ]


def main() -> None:
    parser = argparse.ArgumentParser(description="Prepare retail star-schema CSVs")
    parser.add_argument("--input", type=Path, default=RAW)
    parser.add_argument("--output", type=Path, default=OUT)
    parser.add_argument("--seed", type=int, default=42)
    args = parser.parse_args()

    rng = np.random.default_rng(args.seed)
    args.output.mkdir(parents=True, exist_ok=True)

    raw = _clean_columns(pd.read_csv(args.input))
    raw["order_date"] = pd.to_datetime(raw["order_date"])
    raw["ship_date"] = pd.to_datetime(raw["ship_date"])
    raw["store_id"] = (
        raw["country"].str.replace(" ", "", regex=False)
        + "-"
        + raw["region"]
        + "-"
        + raw["city"].str.replace(" ", "", regex=False)
        + "-"
        + raw["state"].str.replace(" ", "", regex=False)
    )

    dim_date = build_date_dim(pd.concat([raw["order_date"], raw["ship_date"]]))

    dim_store = (
        raw[["store_id", "city", "state", "region", "country", "postal_code"]]
        .drop_duplicates("store_id")
        .sort_values("store_id")
        .reset_index(drop=True)
    )
    dim_store.insert(0, "store_key", dim_store.index + 1)
    dim_store["postal_code"] = dim_store["postal_code"].astype("Int64").astype(str)

    dim_product = (
        raw[["product_id", "product_name", "category", "sub_category"]]
        .drop_duplicates("product_id")
        .sort_values("product_id")
        .reset_index(drop=True)
    )
    dim_product.insert(0, "product_key", dim_product.index + 1)

    dim_customer = (
        raw[["customer_id", "customer_name", "segment"]]
        .drop_duplicates("customer_id")
        .sort_values("customer_id")
        .reset_index(drop=True)
    )
    dim_customer.insert(0, "customer_key", dim_customer.index + 1)

    date_map = dict(zip(dim_date["full_date"], dim_date["date_key"]))
    store_map = dict(zip(dim_store["store_id"], dim_store["store_key"]))
    product_map = dict(zip(dim_product["product_id"], dim_product["product_key"]))
    customer_map = dict(zip(dim_customer["customer_id"], dim_customer["customer_key"]))

    fact_sales = pd.DataFrame(
        {
            "order_id": raw["order_id"],
            "order_date_key": raw["order_date"].map(date_map).astype(int),
            "ship_date_key": raw["ship_date"].map(date_map).astype(int),
            "store_key": raw["store_id"].map(store_map).astype(int),
            "product_key": raw["product_id"].map(product_map).astype(int),
            "customer_key": raw["customer_id"].map(customer_map).astype(int),
            "ship_mode": raw["ship_mode"],
            "sales_amount": raw["sales"].astype(float),
            "quantity": raw["quantity"].astype(int),
            "discount": raw["discount"].astype(float),
            "profit": raw["profit"].astype(float),
        }
    )

    # Synthetic inventory snapshot from trailing sales velocity
    max_order = raw["order_date"].max()
    window_start = max_order - pd.Timedelta(days=90)
    recent = raw[raw["order_date"] >= window_start].copy()
    velocity = (
        recent.groupby(["store_id", "product_id"], as_index=False)["quantity"]
        .sum()
        .rename(columns={"quantity": "qty_90d"})
    )
    velocity["avg_daily_sales"] = velocity["qty_90d"] / 90.0
    velocity["store_key"] = velocity["store_id"].map(store_map).astype(int)
    velocity["product_key"] = velocity["product_id"].map(product_map).astype(int)

    # Sample SKUs to keep inventory fact manageable (~8k rows)
    if len(velocity) > 8000:
        velocity = velocity.sample(n=8000, random_state=args.seed)

    on_hand = np.maximum(
        0,
        np.round(
            velocity["avg_daily_sales"].to_numpy() * rng.uniform(5, 45, len(velocity))
            + rng.integers(0, 8, len(velocity))
        ).astype(int),
    )
    reorder = np.maximum(
        2,
        np.round(velocity["avg_daily_sales"].to_numpy() * 10).astype(int),
    )
    days_supply = np.where(
        velocity["avg_daily_sales"].to_numpy() > 0,
        on_hand / velocity["avg_daily_sales"].to_numpy(),
        999.0,
    )
    fact_inventory = pd.DataFrame(
        {
            "as_of_date_key": int(max_order.strftime("%Y%m%d")),
            "store_key": velocity["store_key"].to_numpy(),
            "product_key": velocity["product_key"].to_numpy(),
            "on_hand_qty": on_hand,
            "reorder_point": reorder,
            "avg_daily_sales": velocity["avg_daily_sales"].round(4).to_numpy(),
            "days_of_supply": np.round(days_supply, 2),
            "is_stockout_risk": on_hand <= reorder,
        }
    )

    dim_date.to_csv(args.output / "dim_date.csv", index=False)
    dim_store.to_csv(args.output / "dim_store.csv", index=False)
    dim_product.to_csv(args.output / "dim_product.csv", index=False)
    dim_customer.to_csv(args.output / "dim_customer.csv", index=False)
    fact_sales.to_csv(args.output / "fact_sales.csv", index=False)
    fact_inventory.to_csv(args.output / "fact_inventory.csv", index=False)

    print(f"Wrote star-schema CSVs to {args.output}")
    print(
        f"  dim_date={len(dim_date):,}  dim_store={len(dim_store):,}  "
        f"dim_product={len(dim_product):,}  dim_customer={len(dim_customer):,}"
    )
    print(
        f"  fact_sales={len(fact_sales):,}  fact_inventory={len(fact_inventory):,}  "
        f"stockout_risk={int(fact_inventory['is_stockout_risk'].sum()):,}"
    )


if __name__ == "__main__":
    main()
