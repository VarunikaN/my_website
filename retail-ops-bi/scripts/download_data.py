#!/usr/bin/env python3
"""Download the public Sample Superstore CSV."""

from __future__ import annotations

import argparse
from pathlib import Path
from urllib.request import urlretrieve

DEFAULT_URL = "https://csvbase.com/djkoogy/Sample-Superstore.csv"
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "raw" / "superstore.csv"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default=DEFAULT_URL)
    parser.add_argument("--output", type=Path, default=OUT)
    args = parser.parse_args()
    args.output.parent.mkdir(parents=True, exist_ok=True)
    print(f"Downloading {args.url}")
    urlretrieve(args.url, args.output)
    print(f"Saved {args.output} ({args.output.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
