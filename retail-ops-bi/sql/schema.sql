-- Retail Ops Command Center — PostgreSQL star schema
-- Run against database retail_ops (docker-compose creates it)

DROP SCHEMA IF EXISTS retail CASCADE;
CREATE SCHEMA retail;
SET search_path TO retail, public;

-- ---------------------------------------------------------------------------
-- Dimensions
-- ---------------------------------------------------------------------------

CREATE TABLE dim_date (
    date_key        INTEGER PRIMARY KEY,          -- YYYYMMDD
    full_date       DATE NOT NULL UNIQUE,
    day_of_week     SMALLINT NOT NULL,            -- 1=Mon .. 7=Sun
    day_name        TEXT NOT NULL,
    week_of_year    SMALLINT NOT NULL,
    month_num       SMALLINT NOT NULL,
    month_name      TEXT NOT NULL,
    quarter         SMALLINT NOT NULL,
    year_num        INTEGER NOT NULL,
    is_weekend      BOOLEAN NOT NULL
);

CREATE TABLE dim_store (
    store_key       SERIAL PRIMARY KEY,
    store_id        TEXT NOT NULL UNIQUE,         -- e.g. US-South-Henderson-KY
    city            TEXT NOT NULL,
    state           TEXT NOT NULL,
    region          TEXT NOT NULL,
    country         TEXT NOT NULL DEFAULT 'United States',
    postal_code     TEXT
);

CREATE TABLE dim_product (
    product_key     SERIAL PRIMARY KEY,
    product_id      TEXT NOT NULL UNIQUE,
    product_name    TEXT NOT NULL,
    category        TEXT NOT NULL,
    sub_category    TEXT NOT NULL
);

CREATE TABLE dim_customer (
    customer_key    SERIAL PRIMARY KEY,
    customer_id     TEXT NOT NULL UNIQUE,
    customer_name   TEXT NOT NULL,
    segment         TEXT NOT NULL
);

-- ---------------------------------------------------------------------------
-- Facts
-- ---------------------------------------------------------------------------

CREATE TABLE fact_sales (
    sales_key       BIGSERIAL PRIMARY KEY,
    order_id        TEXT NOT NULL,
    order_date_key  INTEGER NOT NULL REFERENCES dim_date (date_key),
    ship_date_key   INTEGER REFERENCES dim_date (date_key),
    store_key       INTEGER NOT NULL REFERENCES dim_store (store_key),
    product_key     INTEGER NOT NULL REFERENCES dim_product (product_key),
    customer_key    INTEGER NOT NULL REFERENCES dim_customer (customer_key),
    ship_mode       TEXT,
    sales_amount    NUMERIC(12, 4) NOT NULL,
    quantity        INTEGER NOT NULL,
    discount        NUMERIC(6, 4) NOT NULL DEFAULT 0,
    profit          NUMERIC(12, 4) NOT NULL,
    CONSTRAINT fact_sales_qty_positive CHECK (quantity > 0)
);

CREATE TABLE fact_inventory (
    inventory_key       BIGSERIAL PRIMARY KEY,
    as_of_date_key      INTEGER NOT NULL REFERENCES dim_date (date_key),
    store_key           INTEGER NOT NULL REFERENCES dim_store (store_key),
    product_key         INTEGER NOT NULL REFERENCES dim_product (product_key),
    on_hand_qty         INTEGER NOT NULL,
    reorder_point       INTEGER NOT NULL,
    avg_daily_sales     NUMERIC(10, 4) NOT NULL,
    days_of_supply      NUMERIC(10, 2),
    is_stockout_risk    BOOLEAN NOT NULL DEFAULT FALSE,
    UNIQUE (as_of_date_key, store_key, product_key)
);

-- ---------------------------------------------------------------------------
-- Indexes
-- ---------------------------------------------------------------------------

CREATE INDEX idx_fact_sales_order_date ON fact_sales (order_date_key);
CREATE INDEX idx_fact_sales_store ON fact_sales (store_key);
CREATE INDEX idx_fact_sales_product ON fact_sales (product_key);
CREATE INDEX idx_fact_sales_customer ON fact_sales (customer_key);
CREATE INDEX idx_fact_inventory_date ON fact_inventory (as_of_date_key);
CREATE INDEX idx_fact_inventory_risk ON fact_inventory (is_stockout_risk)
    WHERE is_stockout_risk = TRUE;
CREATE INDEX idx_dim_store_region ON dim_store (region);
CREATE INDEX idx_dim_product_category ON dim_product (category);
