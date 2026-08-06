# Data dictionary

Schema: `retail`

## Dimensions

| Table | Grain | Key | Notes |
|-------|-------|-----|-------|
| `dim_date` | One row per calendar day | `date_key` (YYYYMMDD) | Shared by orders, ship dates, inventory snapshot |
| `dim_store` | One row per city-state location | `store_key` | Built from Country-Region-City-State; Superstore has no native store ID |
| `dim_product` | One row per product | `product_key` | Category / sub-category hierarchy |
| `dim_customer` | One row per customer | `customer_key` | Segment = Consumer / Corporate / Home Office |

## Facts

| Table | Grain | Measures |
|-------|-------|----------|
| `fact_sales` | Order line | `sales_amount`, `quantity`, `discount`, `profit` |
| `fact_inventory` | Store × product as-of latest order date | `on_hand_qty`, `reorder_point`, `avg_daily_sales`, `days_of_supply`, `is_stockout_risk` |

## Inventory note

Sample Superstore has no inventory feed. `fact_inventory` is **synthetic**: trailing 90-day unit velocity → on-hand and reorder point with a seeded random buffer. Use it to practice stockout / slow-mover dashboards, not as real warehouse truth.

## Views for BI tools

| View | Use in |
|------|--------|
| `v_daily_sales` | Trends, filters by region/category |
| `v_store_performance` | Store scorecards |
| `v_category_contribution` | Mix / contribution charts |
| `v_stockout_risk` | Ops / inventory page |
| `v_monthly_kpis` | MoM / executive tiles |
