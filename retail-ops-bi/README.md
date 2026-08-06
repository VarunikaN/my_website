# Retail Ops Command Center

End-to-end BI portfolio project: **PostgreSQL star schema → analytical SQL → Power BI + Tableau dashboard pages**.

A mid-size retailer needs daily visibility into sales, margin, and inventory risk across locations. This repo models Sample Superstore data as a warehouse, exposes KPI views, ships dashboard page screenshots, and includes a live Streamlit app that mirrors the Power BI / Tableau page specs.

## Stack

| Layer | Tool |
|-------|------|
| Warehouse | PostgreSQL 16 |
| Transform / load | Python (pandas + psycopg) |
| Executive + ops pages | Power BI layout (+ DAX measures) |
| Regional / heatmap / stockout story | Tableau layout (+ calculated fields) |
| Interactive demo | Streamlit (same pages, filterable) |

## Project structure

```text
retail-ops-bi/
  sql/                 schema, KPI views, interview-ready queries
  etl/                 star-schema prep + Postgres loader
  scripts/             download, export extracts, render dashboard PNGs
  data/bi_extracts/    CSV views for Power BI / Tableau Desktop
  dashboard/           interactive Streamlit app
  powerbi/             BUILD guide, DAX measures, page screenshots
  tableau/             BUILD guide, calculated fields, page screenshots
  docs/                ERD, data dictionary, KPI definitions
```

## Quick start

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

python scripts/download_data.py
python etl/prepare_star_schema.py

# Postgres (Compose plugin or plain Docker)
docker compose up -d
# docker run -d --name retail-ops-postgres \
#   -e POSTGRES_DB=retail_ops -e POSTGRES_USER=retail -e POSTGRES_PASSWORD=retail \
#   -p 5432:5432 postgres:16-alpine

python etl/load_to_postgres.py
python scripts/export_bi_extracts.py
python scripts/render_dashboard_pages.py

streamlit run dashboard/app.py
```

Connection string (local Docker):

```text
postgresql://retail:retail@localhost:5432/retail_ops
```

Open in Desktop BI tools (optional, Windows / Tableau Public):

- Connect to Postgres **or** import `data/bi_extracts/*.csv`
- [powerbi/BUILD.md](powerbi/BUILD.md) + [powerbi/measures.dax](powerbi/measures.dax)
- [tableau/BUILD.md](tableau/BUILD.md) + [tableau/calculated_fields.md](tableau/calculated_fields.md)

## Warehouse model

Star schema in schema `retail`:

- **Dims:** `dim_date`, `dim_store`, `dim_product`, `dim_customer`
- **Facts:** `fact_sales` (order lines), `fact_inventory` (synthetic stock snapshot)
- **Views:** `v_daily_sales`, `v_store_performance`, `v_category_contribution`, `v_stockout_risk`, `v_monthly_kpis`

See [docs/erd.md](docs/erd.md) and [docs/data_dictionary.md](docs/data_dictionary.md).

## SQL skills demonstrated

`sql/sample_queries.sql` includes:

1. MoM growth by region (window + `LAG`)
2. YoY growth by category
3. Top / bottom stores by profit margin
4. High-discount profit leaks
5. Segment AOV
6. Ship-mode latency
7. Top products per region (`RANK`)
8. Stockout concentration
9. Slow movers
10. Rolling 3-month sales

## Dashboard pages (completed)

### Power BI · Executive

![Executive page](powerbi/screenshots/01_executive_page.png)

### Power BI · Operations

![Operations page](powerbi/screenshots/02_operations_page.png)

### Tableau · Regional performance

![Regional performance](tableau/screenshots/01_regional_performance.png)

### Tableau · Category × month heatmap

![Heatmap](tableau/screenshots/02_category_month_heatmap.png)

### Tableau · Stockout story

![Stockout story](tableau/screenshots/03_stockout_story.png)

## Business insights (from this warehouse build)

| Finding | Evidence |
|---------|----------|
| Overall margin is modest | **$2.30M** sales → **$286K** profit (**12.5%** margin) |
| West leads sales *and* margin | West **$725K** sales / **14.9%** margin; Central trails at **7.9%** |
| Furniture is the margin problem | Furniture margin **2.5%** vs Technology **17.4%** and Office Supplies **17.0%** |
| Discounting destroys table profit | High-discount (≥20%) **Tables** alone: **−$31K** profit |
| Stockout watchlist is real | **317 / 1,206** tracked store-SKU rows flagged stockout risk |
| Home Office wins on AOV | AOV: Home Office **$473** · Corporate **$466** · Consumer **$449** |

## Decisions this dashboard enables

- Which stores need a margin review despite strong sales?
- Which categories are growing YoY but destroying profit via discounting?
- Where are stockout risks concentrated this week?
- Is segment mix shifting average order value?

## Data source

[Sample Superstore](https://csvbase.com/djkoogy/Sample-Superstore) (Tableau sample retail dataset). Inventory is synthetic — see data dictionary.

## License

Portfolio / educational use. Superstore sample data remains subject to its original terms.
