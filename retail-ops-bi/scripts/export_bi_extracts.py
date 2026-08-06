#!/usr/bin/env python3
"""Export Postgres KPI views to CSV extracts for Power BI / Tableau Desktop."""

from __future__ import annotations

import argparse
import os
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "bi_extracts"

VIEWS = [
    "v_daily_sales",
    "v_store_performance",
    "v_category_contribution",
    "v_stockout_risk",
    "v_monthly_kpis",
]


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--container", default="retail-ops-postgres")
    parser.add_argument("--output", type=Path, default=OUT)
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)

    for view in VIEWS:
        dest = args.output / f"{view}.csv"
        sql = f"\\copy (SELECT * FROM retail.{view}) TO STDOUT WITH CSV HEADER"
        result = subprocess.run(
            ["docker", "exec", args.container, "psql", "-U", "retail", "-d", "retail_ops", "-c", sql],
            check=True,
            capture_output=True,
        )
        dest.write_bytes(result.stdout)
        lines = dest.read_text().count("\n")
        print(f"Wrote {dest.name}: {lines - 1:,} rows")


if __name__ == "__main__":
    main()
