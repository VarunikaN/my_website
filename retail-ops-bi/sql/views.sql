-- KPI views for Power BI / Tableau (connect to these, not raw facts only)
SET search_path TO retail, public;

-- Daily sales rollup
CREATE OR REPLACE VIEW v_daily_sales AS
SELECT
    d.full_date,
    d.year_num,
    d.quarter,
    d.month_num,
    d.month_name,
    s.region,
    s.state,
    s.city,
    p.category,
    p.sub_category,
    SUM(f.sales_amount) AS sales,
    SUM(f.profit)       AS profit,
    SUM(f.quantity)     AS units,
    COUNT(DISTINCT f.order_id) AS orders
FROM fact_sales f
JOIN dim_date d     ON d.date_key = f.order_date_key
JOIN dim_store s    ON s.store_key = f.store_key
JOIN dim_product p  ON p.product_key = f.product_key
GROUP BY 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;

-- Store performance scorecard
CREATE OR REPLACE VIEW v_store_performance AS
SELECT
    s.store_id,
    s.city,
    s.state,
    s.region,
    COUNT(DISTINCT f.order_id) AS orders,
    SUM(f.sales_amount) AS sales,
    SUM(f.profit) AS profit,
    CASE WHEN SUM(f.sales_amount) = 0 THEN 0
         ELSE ROUND(SUM(f.profit) / SUM(f.sales_amount) * 100, 2)
    END AS profit_margin_pct,
    SUM(f.quantity) AS units
FROM fact_sales f
JOIN dim_store s ON s.store_key = f.store_key
GROUP BY s.store_id, s.city, s.state, s.region;

-- Category contribution
CREATE OR REPLACE VIEW v_category_contribution AS
SELECT
    p.category,
    p.sub_category,
    SUM(f.sales_amount) AS sales,
    SUM(f.profit) AS profit,
    ROUND(
        100.0 * SUM(f.sales_amount) / NULLIF(SUM(SUM(f.sales_amount)) OVER (), 0),
        2
    ) AS sales_share_pct
FROM fact_sales f
JOIN dim_product p ON p.product_key = f.product_key
GROUP BY p.category, p.sub_category;

-- Current stockout risk (latest inventory snapshot)
CREATE OR REPLACE VIEW v_stockout_risk AS
SELECT
    d.full_date AS as_of_date,
    s.store_id,
    s.city,
    s.state,
    s.region,
    p.product_id,
    p.product_name,
    p.category,
    p.sub_category,
    i.on_hand_qty,
    i.reorder_point,
    i.avg_daily_sales,
    i.days_of_supply,
    i.is_stockout_risk
FROM fact_inventory i
JOIN dim_date d    ON d.date_key = i.as_of_date_key
JOIN dim_store s   ON s.store_key = i.store_key
JOIN dim_product p ON p.product_key = i.product_key
WHERE i.as_of_date_key = (SELECT MAX(as_of_date_key) FROM fact_inventory);

-- Monthly KPIs with prior-month comparison helpers
CREATE OR REPLACE VIEW v_monthly_kpis AS
SELECT
    d.year_num,
    d.month_num,
    d.month_name,
    s.region,
    SUM(f.sales_amount) AS sales,
    SUM(f.profit) AS profit,
    COUNT(DISTINCT f.order_id) AS orders,
    COUNT(DISTINCT f.customer_key) AS active_customers
FROM fact_sales f
JOIN dim_date d  ON d.date_key = f.order_date_key
JOIN dim_store s ON s.store_key = f.store_key
GROUP BY d.year_num, d.month_num, d.month_name, s.region;
