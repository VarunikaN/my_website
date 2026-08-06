# Tableau build guide

Target: visuals that **do not duplicate** Power BI — geo/region ranking, heatmap, stockout story.
Page screenshots are already in `screenshots/`.

## Fastest path (CSV extracts)

1. Connect → **Text file** → open CSVs in `data/bi_extracts/`
2. Relationship / join on shared dimensions as needed (`region`, `category`, …)
3. Add fields from [`calculated_fields.md`](calculated_fields.md)

## Connection (live Postgres)

1. Connect → **PostgreSQL**
2. Server `localhost` · Port `5432` · Database `retail_ops`
3. Username `retail` · Password `retail`
4. Schema `retail` — use:
   - `v_daily_sales`
   - `v_store_performance`
   - `v_stockout_risk`

## Sheet 1 — Regional performance ✅

Screenshot: `screenshots/01_regional_performance.png`

- Rows: Region / State
- Columns: `SUM(Sales)`
- Color: Profit Margin = `SUM([Profit]) / SUM([Sales])`

## Sheet 2 — Category × month heatmap ✅

Screenshot: `screenshots/02_category_month_heatmap.png`

- Columns: Month
- Rows: Category
- Color: `SUM(Profit)` (diverging)

## Sheet 3 — Stockout risk story ✅

Screenshot: `screenshots/03_stockout_story.png`

1. Where sales concentrate  
2. Where margin leaks  
3. Where stockouts threaten + replenishment table  

## Keep Power BI and Tableau distinct

| Tool | Job in this repo |
|------|------------------|
| Power BI | Exec KPI cards + ops tables |
| Tableau | Region ranking + heatmap + stockout story |
