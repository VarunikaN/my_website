#!/usr/bin/env python3
"""Load processed star-schema CSVs into PostgreSQL."""

from __future__ import annotations

import argparse
import os
from pathlib import Path

import pandas as pd
import psycopg

ROOT = Path(__file__).resolve().parents[1]
PROCESSED = ROOT / "data" / "processed"
SQL_DIR = ROOT / "sql"

TABLE_ORDER = [
    ("dim_date", "dim_date.csv"),
    ("dim_store", "dim_store.csv"),
    ("dim_product", "dim_product.csv"),
    ("dim_customer", "dim_customer.csv"),
    ("fact_sales", "fact_sales.csv"),
    ("fact_inventory", "fact_inventory.csv"),
]


def connect_url(args: argparse.Namespace) -> str:
    return args.database_url or os.environ.get(
        "DATABASE_URL",
        "postgresql://retail:retail@localhost:5432/retail_ops",
    )


def run_sql_file(conn: psycopg.Connection, path: Path) -> None:
    with path.open() as f:
        conn.execute(f.read())
    conn.commit()


def truncate_all(conn: psycopg.Connection) -> None:
    conn.execute(
        """
        TRUNCATE TABLE
            retail.fact_inventory,
            retail.fact_sales,
            retail.dim_customer,
            retail.dim_product,
            retail.dim_store,
            retail.dim_date
        RESTART IDENTITY CASCADE
        """
    )
    conn.commit()


def load_table(conn: psycopg.Connection, table: str, csv_path: Path) -> int:
    df = pd.read_csv(csv_path)
    cols = list(df.columns)
    col_list = ", ".join(cols)
    copy_sql = f"COPY retail.{table} ({col_list}) FROM STDIN WITH (FORMAT CSV, HEADER TRUE)"
    with conn.cursor() as cur:
        with cur.copy(copy_sql) as copy:
            with csv_path.open("r", encoding="utf-8") as f:
                while data := f.read(8192):
                    copy.write(data)
    conn.commit()
    return len(df)


def reset_sequences(conn: psycopg.Connection) -> None:
    statements = [
        "SELECT setval(pg_get_serial_sequence('retail.dim_store','store_key'), COALESCE((SELECT MAX(store_key) FROM retail.dim_store), 1))",
        "SELECT setval(pg_get_serial_sequence('retail.dim_product','product_key'), COALESCE((SELECT MAX(product_key) FROM retail.dim_product), 1))",
        "SELECT setval(pg_get_serial_sequence('retail.dim_customer','customer_key'), COALESCE((SELECT MAX(customer_key) FROM retail.dim_customer), 1))",
        "SELECT setval(pg_get_serial_sequence('retail.fact_sales','sales_key'), COALESCE((SELECT MAX(sales_key) FROM retail.fact_sales), 1))",
        "SELECT setval(pg_get_serial_sequence('retail.fact_inventory','inventory_key'), COALESCE((SELECT MAX(inventory_key) FROM retail.fact_inventory), 1))",
    ]
    for stmt in statements:
        conn.execute(stmt)
    conn.commit()


def main() -> None:
    parser = argparse.ArgumentParser(description="Load retail star schema into Postgres")
    parser.add_argument("--database-url", default=None)
    parser.add_argument("--data-dir", type=Path, default=PROCESSED)
    parser.add_argument("--skip-schema", action="store_true")
    args = parser.parse_args()

    url = connect_url(args)
    with psycopg.connect(url) as conn:
        if not args.skip_schema:
            run_sql_file(conn, SQL_DIR / "schema.sql")
            print("Applied schema.sql")

        truncate_all(conn)
        for table, filename in TABLE_ORDER:
            path = args.data_dir / filename
            if not path.exists():
                raise FileNotFoundError(f"Missing {path}; run prepare_star_schema.py first")
            n = load_table(conn, table, path)
            print(f"Loaded {table}: {n:,} rows")

        # fact tables use serial PKs not in CSV — add them via DEFAULT by inserting differently
        # Our CSVs for facts do not include sales_key/inventory_key; COPY column list matches CSV.
        reset_sequences(conn)
        run_sql_file(conn, SQL_DIR / "views.sql")
        print("Applied views.sql")

        counts = conn.execute(
            """
            SELECT 'fact_sales' AS t, COUNT(*) FROM retail.fact_sales
            UNION ALL SELECT 'fact_inventory', COUNT(*) FROM retail.fact_inventory
            UNION ALL SELECT 'dim_store', COUNT(*) FROM retail.dim_store
            """
        ).fetchall()
        for row in counts:
            print(f"  {row[0]}={row[1]:,}")


if __name__ == "__main__":
    main()
