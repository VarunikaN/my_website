#!/usr/bin/env python3
"""Render Power BI-style and Tableau-style dashboard pages as PNG screenshots."""

from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np
import pandas as pd
from matplotlib.gridspec import GridSpec

ROOT = Path(__file__).resolve().parents[1]
EXTRACTS = ROOT / "data" / "bi_extracts"
PBIX = ROOT / "powerbi" / "screenshots"
TAB = ROOT / "tableau" / "screenshots"


def load() -> dict[str, pd.DataFrame]:
    stockout = pd.read_csv(EXTRACTS / "v_stockout_risk.csv")
    stockout["is_stockout_risk"] = stockout["is_stockout_risk"].map(
        lambda x: str(x).strip().lower() in {"t", "true", "1", "yes"}
    )
    return {
        "daily": pd.read_csv(EXTRACTS / "v_daily_sales.csv", parse_dates=["full_date"]),
        "stores": pd.read_csv(EXTRACTS / "v_store_performance.csv"),
        "category": pd.read_csv(EXTRACTS / "v_category_contribution.csv"),
        "stockout": stockout,
        "monthly": pd.read_csv(EXTRACTS / "v_monthly_kpis.csv"),
    }


def money(v: float) -> str:
    if abs(v) >= 1_000_000:
        return f"${v/1_000_000:.2f}M"
    if abs(v) >= 1_000:
        return f"${v/1_000:.1f}K"
    return f"${v:,.0f}"


def kpi_card(ax, title: str, value: str, subtitle: str, accent: str) -> None:
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis("off")
    ax.add_patch(
        mpatches.FancyBboxPatch(
            (0.02, 0.08),
            0.96,
            0.84,
            boxstyle="round,pad=0.02,rounding_size=0.04",
            linewidth=0,
            facecolor="#ffffff",
            edgecolor="none",
        )
    )
    ax.add_patch(mpatches.Rectangle((0.02, 0.08), 0.015, 0.84, color=accent, linewidth=0))
    ax.text(0.08, 0.72, title.upper(), fontsize=9, color="#6b7280", fontweight="bold")
    ax.text(0.08, 0.38, value, fontsize=20, color="#111827", fontweight="bold")
    ax.text(0.08, 0.16, subtitle, fontsize=8, color="#9ca3af")


def style_axes(ax, title: str) -> None:
    ax.set_title(title, loc="left", fontsize=11, fontweight="bold", color="#111827", pad=8)
    ax.spines[["top", "right"]].set_visible(False)
    ax.spines[["left", "bottom"]].set_color("#d1d5db")
    ax.tick_params(colors="#6b7280", labelsize=8)
    ax.set_facecolor("#ffffff")
    ax.grid(axis="y", color="#e5e7eb", linewidth=0.7)
    ax.set_axisbelow(True)


def render_powerbi_exec(data: dict[str, pd.DataFrame]) -> None:
    daily = data["daily"]
    stores = data["stores"]
    category = data["category"]

    total_sales = daily["sales"].sum()
    total_profit = daily["profit"].sum()
    margin = 100 * total_profit / total_sales
    orders = daily["orders"].sum()

    monthly = (
        daily.assign(month=daily["full_date"].dt.to_period("M").dt.to_timestamp())
        .groupby("month", as_index=False)
        .agg(sales=("sales", "sum"), profit=("profit", "sum"))
        .sort_values("month")
    )
    cat = category.groupby("category", as_index=False).agg(sales=("sales", "sum"))
    top_stores = stores.sort_values("sales", ascending=False).head(10)

    fig = plt.figure(figsize=(14, 8.5), facecolor="#f3f4f6")
    fig.suptitle(
        "Retail Ops Command Center  ·  Power BI  ·  Executive",
        fontsize=15,
        fontweight="bold",
        color="#111827",
        y=0.98,
    )
    fig.text(0.5, 0.955, "Sales · Profit · Margin · Store leaders", ha="center", fontsize=9, color="#6b7280")

    gs = GridSpec(3, 4, figure=fig, height_ratios=[0.9, 2.2, 2.2], hspace=0.45, wspace=0.28, left=0.05, right=0.97, top=0.90, bottom=0.07)

    cards = [
        ("Total Sales", money(total_sales), "All regions · all years", "#2563eb"),
        ("Total Profit", money(total_profit), f"Margin {margin:.1f}%", "#059669"),
        ("Profit Margin %", f"{margin:.1f}%", "Profit ÷ Sales", "#d97706"),
        ("Order Lines*", f"{orders:,.0f}", "*sum of daily order counts", "#7c3aed"),
    ]
    for i, (t, v, s, c) in enumerate(cards):
        kpi_card(fig.add_subplot(gs[0, i]), t, v, s, c)

    ax_trend = fig.add_subplot(gs[1, :3])
    style_axes(ax_trend, "Monthly sales & profit")
    ax_trend.plot(monthly["month"], monthly["sales"], color="#2563eb", lw=2.2, label="Sales")
    ax_trend.plot(monthly["month"], monthly["profit"], color="#d97706", lw=2.0, label="Profit")
    ax_trend.legend(frameon=False, fontsize=8)
    ax_trend.set_ylabel("USD", fontsize=8)

    ax_donut = fig.add_subplot(gs[1, 3])
    colors = ["#2563eb", "#059669", "#d97706"]
    wedges, *_ = ax_donut.pie(
        cat["sales"],
        labels=cat["category"],
        colors=colors,
        wedgeprops=dict(width=0.45, edgecolor="#f3f4f6"),
        textprops=dict(fontsize=8, color="#374151"),
        startangle=90,
    )
    ax_donut.set_title("Sales by category", loc="left", fontsize=11, fontweight="bold", color="#111827")

    ax_table = fig.add_subplot(gs[2, :])
    ax_table.axis("off")
    ax_table.set_title("Top 10 stores by sales", loc="left", fontsize=11, fontweight="bold", color="#111827", pad=8)
    cell = top_stores[["city", "state", "region", "sales", "profit", "profit_margin_pct"]].copy()
    cell["sales"] = cell["sales"].map(lambda x: money(x))
    cell["profit"] = cell["profit"].map(lambda x: money(x))
    cell["profit_margin_pct"] = cell["profit_margin_pct"].map(lambda x: f"{x:.1f}%")
    table = ax_table.table(
        cellText=cell.values,
        colLabels=["City", "State", "Region", "Sales", "Profit", "Margin %"],
        loc="center",
        cellLoc="left",
    )
    table.auto_set_font_size(False)
    table.set_fontsize(8)
    table.scale(1, 1.35)
    for (r, c), cell_obj in table.get_celld().items():
        cell_obj.set_edgecolor("#e5e7eb")
        if r == 0:
            cell_obj.set_facecolor("#e5e7eb")
            cell_obj.get_text().set_fontweight("600")
        else:
            cell_obj.set_facecolor("#ffffff")

    fig.savefig(PBIX / "01_executive_page.png", dpi=150)
    plt.close(fig)


def render_powerbi_ops(data: dict[str, pd.DataFrame]) -> None:
    stockout = data["stockout"]
    stores = data["stores"]
    daily = data["daily"]

    at_risk = int(stockout["is_stockout_risk"].sum())
    tracked = len(stockout)
    risk_by_cat = (
        stockout.groupby("category", as_index=False)
        .agg(at_risk=("is_stockout_risk", "sum"))
        .sort_values("at_risk", ascending=False)
    )
    bottom = stores[stores["sales"] > 1000].sort_values("profit_margin_pct").head(10)
    matrix = (
        daily.groupby(["region", "category"], as_index=False)["sales"]
        .sum()
        .pivot(index="region", columns="category", values="sales")
        .fillna(0)
    )
    detail = stockout[stockout["is_stockout_risk"]].sort_values("days_of_supply").head(12)

    fig = plt.figure(figsize=(14, 8.5), facecolor="#f3f4f6")
    fig.suptitle(
        "Retail Ops Command Center  ·  Power BI  ·  Operations",
        fontsize=15,
        fontweight="bold",
        color="#111827",
        y=0.98,
    )
    fig.text(0.5, 0.955, "Stockouts · weak-margin stores · region × category", ha="center", fontsize=9, color="#6b7280")

    gs = GridSpec(2, 3, figure=fig, height_ratios=[1.2, 1.5], hspace=0.4, wspace=0.3, left=0.06, right=0.97, top=0.90, bottom=0.06)

    ax_kpi = fig.add_subplot(gs[0, 0])
    kpi_card(ax_kpi, "SKUs at stockout risk", f"{at_risk:,}", f"{at_risk/tracked*100:.1f}% of {tracked:,} tracked", "#dc2626")

    ax_bar = fig.add_subplot(gs[0, 1])
    style_axes(ax_bar, "At-risk count by category")
    ax_bar.bar(risk_by_cat["category"], risk_by_cat["at_risk"], color="#dc2626")
    ax_bar.set_ylabel("SKU rows", fontsize=8)

    ax_bottom = fig.add_subplot(gs[0, 2])
    style_axes(ax_bottom, "Bottom 10 stores by margin")
    labels = bottom["city"] + ", " + bottom["state"].str[:2]
    ax_bottom.barh(labels[::-1], bottom["profit_margin_pct"][::-1], color="#d97706")
    ax_bottom.set_xlabel("Margin %", fontsize=8)

    ax_heat = fig.add_subplot(gs[1, 0])
    style_axes(ax_heat, "Region × category sales")
    im = ax_heat.imshow(matrix.values, aspect="auto", cmap="Blues")
    ax_heat.set_xticks(range(len(matrix.columns)))
    ax_heat.set_xticklabels(matrix.columns, fontsize=8, rotation=20, ha="right")
    ax_heat.set_yticks(range(len(matrix.index)))
    ax_heat.set_yticklabels(matrix.index, fontsize=8)
    ax_heat.grid(False)
    fig.colorbar(im, ax=ax_heat, fraction=0.046, pad=0.04)

    ax_detail = fig.add_subplot(gs[1, 1:])
    ax_detail.axis("off")
    ax_detail.set_title("Stockout detail (lowest days of supply)", loc="left", fontsize=11, fontweight="bold", pad=8)
    show = detail[["city", "region", "product_name", "on_hand_qty", "reorder_point", "days_of_supply"]].copy()
    show["product_name"] = show["product_name"].str.slice(0, 32)
    show["days_of_supply"] = show["days_of_supply"].map(lambda x: f"{x:.1f}")
    table = ax_detail.table(
        cellText=show.values,
        colLabels=["City", "Region", "Product", "On hand", "Reorder", "DOS"],
        loc="center",
        cellLoc="left",
    )
    table.auto_set_font_size(False)
    table.set_fontsize(7.5)
    table.scale(1, 1.3)
    for (r, c), cell_obj in table.get_celld().items():
        cell_obj.set_edgecolor("#e5e7eb")
        cell_obj.set_facecolor("#fee2e2" if r > 0 else "#fecaca")
        if r == 0:
            cell_obj.get_text().set_fontweight("600")

    fig.savefig(PBIX / "02_operations_page.png", dpi=150)
    plt.close(fig)


def render_tableau_regional(data: dict[str, pd.DataFrame]) -> None:
    daily = data["daily"]
    region = (
        daily.groupby("region", as_index=False)
        .agg(sales=("sales", "sum"), profit=("profit", "sum"))
        .assign(margin=lambda d: 100 * d["profit"] / d["sales"])
        .sort_values("sales")
    )
    state = (
        daily.groupby(["region", "state"], as_index=False)["sales"]
        .sum()
        .sort_values("sales", ascending=False)
        .head(15)
        .sort_values("sales")
    )

    fig = plt.figure(figsize=(14, 8), facecolor="#1e1e1e")
    fig.suptitle(
        "Retail Ops  ·  Tableau  ·  Regional Performance",
        fontsize=15,
        fontweight="bold",
        color="#f5f5f5",
        y=0.97,
    )
    fig.text(0.5, 0.935, "Ranked regions and states · color encodes profit margin", ha="center", fontsize=9, color="#a3a3a3")

    gs = GridSpec(1, 2, figure=fig, wspace=0.28, left=0.08, right=0.96, top=0.88, bottom=0.1)
    cmap = plt.cm.RdYlGn

    ax1 = fig.add_subplot(gs[0, 0])
    ax1.set_facecolor("#262626")
    norms = (region["margin"] - region["margin"].min()) / (region["margin"].max() - region["margin"].min() + 1e-9)
    colors = cmap(norms)
    ax1.barh(region["region"], region["sales"], color=colors)
    ax1.set_title("Sales by region (color = margin)", loc="left", color="#f5f5f5", fontsize=11, fontweight="bold")
    ax1.tick_params(colors="#d4d4d4", labelsize=9)
    ax1.spines[["top", "right", "left", "bottom"]].set_color("#404040")
    ax1.set_xlabel("Sales USD", color="#a3a3a3", fontsize=8)
    for y, row in region.iterrows():
        ax1.text(row["sales"] * 0.02, list(region["region"]).index(row["region"]), f"{row['margin']:.1f}%", color="#111", fontsize=8, va="center")

    ax2 = fig.add_subplot(gs[0, 1])
    ax2.set_facecolor("#262626")
    ax2.barh(state["state"] + " (" + state["region"].str[0] + ")", state["sales"], color="#60a5fa")
    ax2.set_title("Top 15 states by sales", loc="left", color="#f5f5f5", fontsize=11, fontweight="bold")
    ax2.tick_params(colors="#d4d4d4", labelsize=8)
    ax2.spines[["top", "right", "left", "bottom"]].set_color("#404040")
    ax2.set_xlabel("Sales USD", color="#a3a3a3", fontsize=8)

    fig.savefig(TAB / "01_regional_performance.png", dpi=150)
    plt.close(fig)


def render_tableau_heatmap(data: dict[str, pd.DataFrame]) -> None:
    daily = data["daily"]
    heat = (
        daily.assign(month=daily["full_date"].dt.to_period("M").astype(str))
        .groupby(["category", "month"], as_index=False)["profit"]
        .sum()
        .pivot(index="category", columns="month", values="profit")
        .fillna(0)
    )
    # keep last 18 months for readability
    heat = heat.iloc[:, -18:]

    fig = plt.figure(figsize=(14, 7), facecolor="#1e1e1e")
    fig.suptitle(
        "Retail Ops  ·  Tableau  ·  Category × Month Profit Heatmap",
        fontsize=15,
        fontweight="bold",
        color="#f5f5f5",
        y=0.97,
    )
    fig.text(0.5, 0.93, "Diverging profit — red = loss pressure, green = healthy", ha="center", fontsize=9, color="#a3a3a3")

    ax = fig.add_subplot(111)
    ax.set_facecolor("#262626")
    vmax = np.percentile(np.abs(heat.values), 95)
    im = ax.imshow(heat.values, aspect="auto", cmap="RdYlGn", vmin=-vmax, vmax=vmax)
    ax.set_yticks(range(len(heat.index)))
    ax.set_yticklabels(heat.index, color="#e5e5e5", fontsize=10)
    ax.set_xticks(range(len(heat.columns)))
    ax.set_xticklabels(heat.columns, rotation=45, ha="right", color="#a3a3a3", fontsize=7)
    ax.tick_params(length=0)
    for spine in ax.spines.values():
        spine.set_color("#404040")
    cbar = fig.colorbar(im, ax=ax, fraction=0.03, pad=0.02)
    cbar.ax.yaxis.set_tick_params(color="#a3a3a3")
    plt.setp(cbar.ax.yaxis.get_ticklabels(), color="#a3a3a3", fontsize=8)
    cbar.set_label("Profit USD", color="#a3a3a3")

    fig.tight_layout(rect=[0.03, 0.03, 0.98, 0.90])
    fig.savefig(TAB / "02_category_month_heatmap.png", dpi=150)
    plt.close(fig)


def render_tableau_stockout_story(data: dict[str, pd.DataFrame]) -> None:
    stockout = data["stockout"]
    daily = data["daily"]
    risk = stockout[stockout["is_stockout_risk"]]
    by_region = risk.groupby("region", as_index=False).size().rename(columns={"size": "at_risk"}).sort_values("at_risk")
    sales_region = daily.groupby("region", as_index=False)["sales"].sum()

    fig = plt.figure(figsize=(14, 8.5), facecolor="#1e1e1e")
    fig.suptitle(
        "Retail Ops  ·  Tableau Story  ·  Stockout Risk",
        fontsize=15,
        fontweight="bold",
        color="#f5f5f5",
        y=0.98,
    )
    fig.text(
        0.5,
        0.95,
        "Story: Where sales concentrate → where margin leaks → where stockouts threaten",
        ha="center",
        fontsize=9,
        color="#a3a3a3",
    )

    gs = GridSpec(2, 2, figure=fig, hspace=0.35, wspace=0.28, left=0.08, right=0.96, top=0.88, bottom=0.08)

    ax1 = fig.add_subplot(gs[0, 0])
    ax1.set_facecolor("#262626")
    ax1.bar(sales_region["region"], sales_region["sales"], color="#60a5fa")
    ax1.set_title("1 · Sales concentration", loc="left", color="#f5f5f5", fontsize=11, fontweight="bold")
    ax1.tick_params(colors="#d4d4d4", labelsize=8)
    ax1.spines[["top", "right"]].set_visible(False)
    ax1.spines[["left", "bottom"]].set_color("#404040")

    cat_margin = (
        daily.groupby("category", as_index=False)
        .agg(sales=("sales", "sum"), profit=("profit", "sum"))
        .assign(margin=lambda d: 100 * d.profit / d.sales)
    )
    ax2 = fig.add_subplot(gs[0, 1])
    ax2.set_facecolor("#262626")
    ax2.bar(cat_margin["category"], cat_margin["margin"], color=["#f87171" if m < 5 else "#4ade80" for m in cat_margin["margin"]])
    ax2.set_title("2 · Margin leaks by category", loc="left", color="#f5f5f5", fontsize=11, fontweight="bold")
    ax2.tick_params(colors="#d4d4d4", labelsize=8)
    ax2.spines[["top", "right"]].set_visible(False)
    ax2.spines[["left", "bottom"]].set_color("#404040")
    ax2.set_ylabel("Margin %", color="#a3a3a3", fontsize=8)

    ax3 = fig.add_subplot(gs[1, 0])
    ax3.set_facecolor("#262626")
    ax3.barh(by_region["region"], by_region["at_risk"], color="#f97316")
    ax3.set_title("3 · Stockout threats by region", loc="left", color="#f5f5f5", fontsize=11, fontweight="bold")
    ax3.tick_params(colors="#d4d4d4", labelsize=8)
    ax3.spines[["top", "right"]].set_visible(False)
    ax3.spines[["left", "bottom"]].set_color("#404040")

    ax4 = fig.add_subplot(gs[1, 1])
    ax4.set_facecolor("#262626")
    ax4.axis("off")
    ax4.set_title("Priority replenishment list", loc="left", color="#f5f5f5", fontsize=11, fontweight="bold")
    top = risk.sort_values("days_of_supply").head(8)[["city", "category", "on_hand_qty", "reorder_point"]]
    lines = ["City · Category · On hand / Reorder", ""]
    for _, r in top.iterrows():
        lines.append(f"{r['city'][:14]:<14}  {r['category']:<16}  {int(r['on_hand_qty']):>3}/{int(r['reorder_point'])}")
    ax4.text(0.02, 0.95, "\n".join(lines), va="top", ha="left", family="monospace", fontsize=9, color="#e5e5e5")

    fig.savefig(TAB / "03_stockout_story.png", dpi=150)
    plt.close(fig)


def main() -> None:
    PBIX.mkdir(parents=True, exist_ok=True)
    TAB.mkdir(parents=True, exist_ok=True)
    # remove old preview-only charts so README points at full pages
    for old in [
        PBIX / "01_exec_monthly_trend.png",
        PBIX / "02_category_margin.png",
        TAB / "01_region_sales.png",
        TAB / "02_stockout_risk.png",
    ]:
        if old.exists():
            old.unlink()

    data = load()
    render_powerbi_exec(data)
    render_powerbi_ops(data)
    render_tableau_regional(data)
    render_tableau_heatmap(data)
    render_tableau_stockout_story(data)
    print(f"Power BI pages → {PBIX}")
    print(f"Tableau pages  → {TAB}")


if __name__ == "__main__":
    main()
