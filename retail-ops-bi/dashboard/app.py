"""Interactive Retail Ops dashboards — mirrors Power BI + Tableau page specs."""

from __future__ import annotations

from pathlib import Path

import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import streamlit as st

ROOT = Path(__file__).resolve().parents[1]
EXTRACTS = ROOT / "data" / "bi_extracts"

st.set_page_config(page_title="Retail Ops Command Center", layout="wide", page_icon="📊")


@st.cache_data
def load_data():
    daily = pd.read_csv(EXTRACTS / "v_daily_sales.csv", parse_dates=["full_date"])
    stores = pd.read_csv(EXTRACTS / "v_store_performance.csv")
    category = pd.read_csv(EXTRACTS / "v_category_contribution.csv")
    stockout = pd.read_csv(EXTRACTS / "v_stockout_risk.csv")
    stockout["is_stockout_risk"] = stockout["is_stockout_risk"].map(
        lambda x: str(x).strip().lower() in {"t", "true", "1", "yes"}
    )
    monthly = pd.read_csv(EXTRACTS / "v_monthly_kpis.csv")
    return daily, stores, category, stockout, monthly


daily, stores, category, stockout, monthly = load_data()

page = st.sidebar.radio(
    "Dashboard page",
    [
        "Power BI · Executive",
        "Power BI · Operations",
        "Tableau · Regional",
        "Tableau · Heatmap",
        "Tableau · Stockout Story",
    ],
)

regions = ["All"] + sorted(daily["region"].dropna().unique().tolist())
region = st.sidebar.selectbox("Region filter", regions)
view = daily if region == "All" else daily[daily["region"] == region]
stores_view = stores if region == "All" else stores[stores["region"] == region]
stock_view = stockout if region == "All" else stockout[stockout["region"] == region]

if page == "Power BI · Executive":
    st.title("Power BI · Executive")
    st.caption("Sales · profit · margin · store leaders")
    total_sales = view["sales"].sum()
    total_profit = view["profit"].sum()
    margin = 100 * total_profit / total_sales if total_sales else 0
    c1, c2, c3, c4 = st.columns(4)
    c1.metric("Total Sales", f"${total_sales:,.0f}")
    c2.metric("Total Profit", f"${total_profit:,.0f}")
    c3.metric("Profit Margin %", f"{margin:.1f}%")
    c4.metric("Order count (daily sum)", f"{view['orders'].sum():,.0f}")

    m = (
        view.assign(month=view["full_date"].dt.to_period("M").dt.to_timestamp())
        .groupby("month", as_index=False)
        .agg(sales=("sales", "sum"), profit=("profit", "sum"))
    )
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=m["month"], y=m["sales"], name="Sales", line=dict(color="#2563eb", width=2.5)))
    fig.add_trace(go.Scatter(x=m["month"], y=m["profit"], name="Profit", line=dict(color="#d97706", width=2.2)))
    fig.update_layout(title="Monthly sales & profit", height=360, margin=dict(l=20, r=20, t=50, b=20))
    st.plotly_chart(fig, use_container_width=True)

    left, right = st.columns([1, 1.4])
    cat = view.groupby("category", as_index=False)["sales"].sum()
    left.plotly_chart(
        px.pie(cat, names="category", values="sales", hole=0.45, title="Sales by category"),
        use_container_width=True,
    )
    top = stores_view.sort_values("sales", ascending=False).head(10)[
        ["city", "state", "region", "sales", "profit", "profit_margin_pct"]
    ]
    right.subheader("Top 10 stores by sales")
    right.dataframe(top, use_container_width=True, hide_index=True)

elif page == "Power BI · Operations":
    st.title("Power BI · Operations")
    st.caption("Stockouts · weak-margin stores · region × category")
    at_risk = int(stock_view["is_stockout_risk"].sum())
    st.metric("SKUs at stockout risk", f"{at_risk:,}", f"{at_risk / max(len(stock_view), 1) * 100:.1f}% of tracked")

    risk_cat = (
        stock_view.groupby("category", as_index=False)
        .agg(at_risk=("is_stockout_risk", "sum"))
        .sort_values("at_risk", ascending=False)
    )
    c1, c2 = st.columns(2)
    c1.plotly_chart(
        px.bar(risk_cat, x="category", y="at_risk", title="At-risk count by category", color_discrete_sequence=["#dc2626"]),
        use_container_width=True,
    )
    bottom = stores_view[stores_view["sales"] > 1000].sort_values("profit_margin_pct").head(10)
    c2.plotly_chart(
        px.bar(
            bottom,
            x="profit_margin_pct",
            y="city",
            orientation="h",
            title="Bottom 10 stores by margin",
            color_discrete_sequence=["#d97706"],
        ),
        use_container_width=True,
    )

    matrix = view.groupby(["region", "category"], as_index=False)["sales"].sum()
    st.plotly_chart(
        px.density_heatmap(matrix, x="category", y="region", z="sales", title="Region × category sales", color_continuous_scale="Blues"),
        use_container_width=True,
    )
    st.subheader("Stockout detail")
    st.dataframe(
        stock_view[stock_view["is_stockout_risk"]]
        .sort_values("days_of_supply")
        .head(25)[
            ["city", "region", "product_name", "category", "on_hand_qty", "reorder_point", "days_of_supply"]
        ],
        use_container_width=True,
        hide_index=True,
    )

elif page == "Tableau · Regional":
    st.title("Tableau · Regional Performance")
    region_kpi = (
        view.groupby("region", as_index=False)
        .agg(sales=("sales", "sum"), profit=("profit", "sum"))
        .assign(margin=lambda d: 100 * d["profit"] / d["sales"])
        .sort_values("sales")
    )
    fig = px.bar(
        region_kpi,
        x="sales",
        y="region",
        color="margin",
        orientation="h",
        color_continuous_scale="RdYlGn",
        title="Sales by region (color = margin %)",
    )
    st.plotly_chart(fig, use_container_width=True)
    state = (
        view.groupby(["region", "state"], as_index=False)["sales"]
        .sum()
        .sort_values("sales", ascending=False)
        .head(15)
    )
    st.plotly_chart(
        px.bar(state, x="sales", y="state", color="region", orientation="h", title="Top 15 states by sales"),
        use_container_width=True,
    )

elif page == "Tableau · Heatmap":
    st.title("Tableau · Category × Month Profit Heatmap")
    heat = view.assign(month=view["full_date"].dt.to_period("M").astype(str))
    heat = heat.groupby(["category", "month"], as_index=False)["profit"].sum()
    months = sorted(heat["month"].unique())[-18:]
    heat = heat[heat["month"].isin(months)]
    st.plotly_chart(
        px.density_heatmap(
            heat,
            x="month",
            y="category",
            z="profit",
            color_continuous_scale="RdYlGn",
            title="Profit heatmap (last 18 months)",
        ),
        use_container_width=True,
    )

else:
    st.title("Tableau Story · Stockout Risk")
    st.markdown("**1. Where sales concentrate → 2. Where margin leaks → 3. Where stockouts threaten**")
    sales_region = view.groupby("region", as_index=False)["sales"].sum()
    cat_margin = (
        view.groupby("category", as_index=False)
        .agg(sales=("sales", "sum"), profit=("profit", "sum"))
        .assign(margin=lambda d: 100 * d.profit / d.sales)
    )
    risk = stock_view[stock_view["is_stockout_risk"]]
    by_region = risk.groupby("region", as_index=False).size().rename(columns={"size": "at_risk"})

    a, b, c = st.columns(3)
    a.plotly_chart(px.bar(sales_region, x="region", y="sales", title="1 · Sales concentration"), use_container_width=True)
    b.plotly_chart(px.bar(cat_margin, x="category", y="margin", title="2 · Margin by category"), use_container_width=True)
    c.plotly_chart(px.bar(by_region, x="region", y="at_risk", title="3 · Stockout threats"), use_container_width=True)
    st.subheader("Priority replenishment list")
    st.dataframe(
        risk.sort_values("days_of_supply").head(20)[
            ["city", "region", "category", "product_name", "on_hand_qty", "reorder_point", "days_of_supply"]
        ],
        use_container_width=True,
        hide_index=True,
    )
