-- Sample analytical queries (interview-ready SQL)
-- Run after schema + load + views
SET search_path TO retail, public;

-- 1) MoM sales growth by region
WITH monthly AS (
    SELECT
        d.year_num,
        d.month_num,
        s.region,
        SUM(f.sales_amount) AS sales
    FROM fact_sales f
    JOIN dim_date d ON d.date_key = f.order_date_key
    JOIN dim_store s ON s.store_key = f.store_key
    GROUP BY 1, 2, 3
)
SELECT
    year_num,
    month_num,
    region,
    sales,
    LAG(sales) OVER (PARTITION BY region ORDER BY year_num, month_num) AS prev_month_sales,
    ROUND(
        100.0 * (sales - LAG(sales) OVER (PARTITION BY region ORDER BY year_num, month_num))
        / NULLIF(LAG(sales) OVER (PARTITION BY region ORDER BY year_num, month_num), 0),
        2
    ) AS mom_growth_pct
FROM monthly
ORDER BY region, year_num, month_num;

-- 2) YoY sales by category
WITH yearly AS (
    SELECT
        d.year_num,
        p.category,
        SUM(f.sales_amount) AS sales
    FROM fact_sales f
    JOIN dim_date d ON d.date_key = f.order_date_key
    JOIN dim_product p ON p.product_key = f.product_key
    GROUP BY 1, 2
)
SELECT
    year_num,
    category,
    sales,
    LAG(sales) OVER (PARTITION BY category ORDER BY year_num) AS prev_year_sales,
    ROUND(
        100.0 * (sales - LAG(sales) OVER (PARTITION BY category ORDER BY year_num))
        / NULLIF(LAG(sales) OVER (PARTITION BY category ORDER BY year_num), 0),
        2
    ) AS yoy_growth_pct
FROM yearly
ORDER BY category, year_num;

-- 3) Top 10 and bottom 10 stores by profit margin
(
    SELECT 'top' AS band, *
    FROM v_store_performance
    WHERE sales > 1000
    ORDER BY profit_margin_pct DESC
    LIMIT 10
)
UNION ALL
(
    SELECT 'bottom' AS band, *
    FROM v_store_performance
    WHERE sales > 1000
    ORDER BY profit_margin_pct ASC
    LIMIT 10
);

-- 4) Discount abuse: high discount, low/negative profit
SELECT
    p.category,
    p.sub_category,
    ROUND(AVG(f.discount)::numeric, 3) AS avg_discount,
    SUM(f.sales_amount) AS sales,
    SUM(f.profit) AS profit,
    COUNT(*) AS line_items
FROM fact_sales f
JOIN dim_product p ON p.product_key = f.product_key
WHERE f.discount >= 0.2
GROUP BY 1, 2
HAVING SUM(f.profit) < 0
ORDER BY profit ASC
LIMIT 20;

-- 5) Customer segment mix and average order value
SELECT
    c.segment,
    COUNT(DISTINCT f.order_id) AS orders,
    COUNT(DISTINCT c.customer_key) AS customers,
    SUM(f.sales_amount) AS sales,
    ROUND(SUM(f.sales_amount) / NULLIF(COUNT(DISTINCT f.order_id), 0), 2) AS aov
FROM fact_sales f
JOIN dim_customer c ON c.customer_key = f.customer_key
GROUP BY c.segment
ORDER BY sales DESC;

-- 6) Shipping mode latency (order → ship days)
SELECT
    f.ship_mode,
    COUNT(*) AS lines,
    ROUND(AVG(sd.full_date - od.full_date)::numeric, 2) AS avg_ship_days,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY sd.full_date - od.full_date) AS median_ship_days
FROM fact_sales f
JOIN dim_date od ON od.date_key = f.order_date_key
JOIN dim_date sd ON sd.date_key = f.ship_date_key
GROUP BY f.ship_mode
ORDER BY avg_ship_days;

-- 7) Products driving most profit in each region (rank)
WITH ranked AS (
    SELECT
        s.region,
        p.product_name,
        p.category,
        SUM(f.profit) AS profit,
        RANK() OVER (PARTITION BY s.region ORDER BY SUM(f.profit) DESC) AS rnk
    FROM fact_sales f
    JOIN dim_store s ON s.store_key = f.store_key
    JOIN dim_product p ON p.product_key = f.product_key
    GROUP BY 1, 2, 3
)
SELECT * FROM ranked WHERE rnk <= 5 ORDER BY region, rnk;

-- 8) Stockout risk concentration by region / category
SELECT
    region,
    category,
    COUNT(*) FILTER (WHERE is_stockout_risk) AS at_risk_skus,
    COUNT(*) AS tracked_skus,
    ROUND(
        100.0 * COUNT(*) FILTER (WHERE is_stockout_risk) / NULLIF(COUNT(*), 0),
        2
    ) AS risk_pct
FROM v_stockout_risk
GROUP BY region, category
ORDER BY risk_pct DESC;

-- 9) Slow movers: high on-hand, low velocity
SELECT
    store_id,
    city,
    product_name,
    category,
    on_hand_qty,
    avg_daily_sales,
    days_of_supply
FROM v_stockout_risk
WHERE avg_daily_sales < 0.05 AND on_hand_qty > 20
ORDER BY on_hand_qty DESC
LIMIT 25;

-- 10) Rolling 3-month sales by region
WITH monthly AS (
    SELECT
        d.year_num,
        d.month_num,
        MAKE_DATE(d.year_num, d.month_num, 1) AS month_start,
        s.region,
        SUM(f.sales_amount) AS sales
    FROM fact_sales f
    JOIN dim_date d ON d.date_key = f.order_date_key
    JOIN dim_store s ON s.store_key = f.store_key
    GROUP BY 1, 2, 3, 4
)
SELECT
    region,
    month_start,
    sales,
    ROUND(
        SUM(sales) OVER (
            PARTITION BY region
            ORDER BY month_start
            ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
        )::numeric,
        2
    ) AS rolling_3m_sales
FROM monthly
ORDER BY region, month_start;
