# KPI definitions

| KPI | Definition | Source |
|-----|------------|--------|
| **Sales** | Sum of `sales_amount` | `fact_sales` |
| **Profit** | Sum of `profit` | `fact_sales` |
| **Profit margin %** | `profit / sales * 100` | `v_store_performance` / measures |
| **Orders** | Distinct `order_id` | `fact_sales` |
| **AOV** | Sales / orders | sample query #5 |
| **MoM growth %** | `(this_month - prior_month) / prior_month` by region | sample query #1 |
| **YoY growth %** | `(this_year - prior_year) / prior_year` by category | sample query #2 |
| **Active customers** | Distinct customers in period | `v_monthly_kpis` |
| **Stockout risk** | `on_hand_qty <= reorder_point` | `fact_inventory` |
| **Days of supply** | `on_hand_qty / avg_daily_sales` | `fact_inventory` |
| **Slow movers** | Low velocity + high on-hand | sample query #9 |

## Decisions these KPIs support

1. Which regions need inventory replenishment this week?
2. Which categories grow in sales but destroy margin via discounting?
3. Which stores underperform on margin despite decent volume?
4. Is corporate vs consumer mix shifting AOV?
