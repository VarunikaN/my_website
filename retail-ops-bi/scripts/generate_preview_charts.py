#!/usr/bin/env python3
"""Generate README preview charts from processed CSVs (no Postgres required)."""

from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
PROC = ROOT / "data" / "processed"
PBIX = ROOT / "powerbi" / "screenshots"
TAB = ROOT / "tableau" / "screenshots"


def style() -> None:
    plt.rcParams.update(
        {
            "figure.facecolor": "#f7f4ef",
            "axes.facecolor": "#f7f4ef",
            "axes.edgecolor": "#2c2a26",
            "axes.labelcolor": "#2c2a26",
            "xtick.color": "#2c2a26",
            "ytick.color": "#2c2a26",
            "text.color": "#2c2a26",
            "font.size": 11,
            "axes.grid": True,
            "grid.color": "#d9d2c5",
            "grid.linewidth": 0.6,
        }
    )


def main() -> None:
    style()
    PBIX.mkdir(parents=True, exist_ok=True)
    TAB.mkdir(parents=True, exist_ok=True)

    sales = pd.read_csv(PROC / "fact_sales.csv")
    stores = pd.read_csv(PROC / "dim_store.csv")
    products = pd.read_csv(PROC / "dim_product.csv")
    dates = pd.read_csv(PROC / "dim_date.csv")
    inv = pd.read_csv(PROC / "fact_inventory.csv")

    s = sales.merge(dates, left_on="order_date_key", right_on="date_key")
    s = s.merge(stores, on="store_key")
    s = s.merge(products, on="product_key")

    # Power BI preview: monthly sales + profit
    monthly = (
        s.groupby(["year_num", "month_num"], as_index=False)
        .agg(sales=("sales_amount", "sum"), profit=("profit", "sum"))
        .sort_values(["year_num", "month_num"])
    )
    monthly["label"] = (
        monthly["year_num"].astype(str)
        + "-"
        + monthly["month_num"].astype(str).str.zfill(2)
    )

    fig, ax = plt.subplots(figsize=(10, 4.5))
    ax.plot(monthly["label"], monthly["sales"], color="#1f4e5f", linewidth=2.2, label="Sales")
    ax.plot(monthly["label"], monthly["profit"], color="#c45c26", linewidth=2.0, label="Profit")
    ax.set_title("Executive trend — monthly sales & profit")
    ax.set_xlabel("Month")
    ax.set_ylabel("USD")
    ax.legend(frameon=False)
    for i, label in enumerate(ax.get_xticklabels()):
        label.set_visible(i % 3 == 0)
        label.set_rotation(45)
        label.set_ha("right")
    fig.tight_layout()
    fig.savefig(PBIX / "01_exec_monthly_trend.png", dpi=140)
    plt.close(fig)

    # Power BI preview: category margin
    cat = s.groupby("category", as_index=False).agg(
        sales=("sales_amount", "sum"), profit=("profit", "sum")
    )
    cat["margin_pct"] = cat["profit"] / cat["sales"] * 100
    fig, ax = plt.subplots(figsize=(7, 4))
    bars = ax.bar(cat["category"], cat["margin_pct"], color=["#1f4e5f", "#3d7a6c", "#c45c26"])
    ax.set_title("Category profit margin %")
    ax.set_ylabel("Margin %")
    for b, v in zip(bars, cat["margin_pct"]):
        ax.text(b.get_x() + b.get_width() / 2, v + 0.4, f"{v:.1f}%", ha="center", fontsize=9)
    fig.tight_layout()
    fig.savefig(PBIX / "02_category_margin.png", dpi=140)
    plt.close(fig)

    # Tableau-style: region sales
    region = s.groupby("region", as_index=False)["sales_amount"].sum().sort_values("sales_amount")
    fig, ax = plt.subplots(figsize=(7, 4))
    ax.barh(region["region"], region["sales_amount"], color="#1f4e5f")
    ax.set_title("Regional sales performance")
    ax.set_xlabel("Sales (USD)")
    fig.tight_layout()
    fig.savefig(TAB / "01_region_sales.png", dpi=140)
    plt.close(fig)

    # Tableau-style: stockout risk by category
    invp = inv.merge(products, on="product_key")
    risk = (
        invp.groupby("category", as_index=False)
        .agg(at_risk=("is_stockout_risk", "sum"), skus=("is_stockout_risk", "count"))
    )
    risk["risk_pct"] = risk["at_risk"] / risk["skus"] * 100
    fig, ax = plt.subplots(figsize=(7, 4))
    ax.bar(risk["category"], risk["risk_pct"], color="#c45c26")
    ax.set_title("Stockout risk rate by category")
    ax.set_ylabel("% of tracked SKUs at risk")
    fig.tight_layout()
    fig.savefig(TAB / "02_stockout_risk.png", dpi=140)
    plt.close(fig)

    print(f"Wrote screenshots to {PBIX} and {TAB}")


if __name__ == "__main__":
    main()
