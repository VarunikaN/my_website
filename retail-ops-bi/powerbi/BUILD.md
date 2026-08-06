# Power BI build guide

Target: **2 pages** — already rendered in `screenshots/`.
Rebuild live in Power BI Desktop (Windows) from Postgres or the CSV extracts.

## Fastest path (CSV extracts)

1. Get data → **Text/CSV** → import each file in `data/bi_extracts/`
2. Or Get data → **PostgreSQL** (`localhost` / `retail_ops` / user `retail`)
3. Paste measures from [`measures.dax`](measures.dax)

## Connection (live Postgres)

1. Get data → **PostgreSQL database**
2. Server: `localhost` · Database: `retail_ops` · Port: `5432`
3. User / password: `retail` / `retail` (local docker only)
4. Import these objects from schema `retail`:
   - `v_daily_sales`
   - `v_store_performance`
   - `v_category_contribution`
   - `v_stockout_risk`
   - `v_monthly_kpis`

## Page 1 — Executive ✅

Shipped screenshot: `screenshots/01_executive_page.png`

| Visual | Fields |
|--------|--------|
| Card | Total Sales |
| Card | Total Profit |
| Card | Profit Margin % |
| Card | Orders |
| Line chart | Sales & Profit by Year-Month |
| Donut | Sales by Category |
| Table | Top 10 stores by sales |
| Slicers | Region, Year |

## Page 2 — Operations ✅

Shipped screenshot: `screenshots/02_operations_page.png`

| Visual | Fields |
|--------|--------|
| Card | SKUs at stockout risk |
| Bar | At-risk count by Category |
| Table | Stockout detail |
| Bar | Bottom 10 stores by margin |
| Matrix | Region × Category sales |

## Publish back to GitHub

1. Save workbook as `powerbi/retail_ops_command_center.pbix` when you have Desktop
2. Export pages to PNG → replace files in `screenshots/` if you want native Power BI chrome
