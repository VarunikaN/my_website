# Tableau calculated fields

Paste these into Tableau after connecting to `data/bi_extracts/` CSVs (or live Postgres views).

## Profit Margin
```
SUM([Profit]) / SUM([Sales])
```

## Stockout Flag (if using string/bool cast issues)
```
IF [Is Stockout Risk] THEN 1 ELSE 0 END
```

## Days of Supply Band
```
IF [Days Of Supply] <= 3 THEN "Critical"
ELSEIF [Days Of Supply] <= 7 THEN "Watch"
ELSE "Healthy"
END
```

## Recommended sheets (done as screenshots in this repo)

1. Regional performance bar (color = margin)
2. Category × month profit heatmap
3. Stockout story (3 beats + replenishment table)

Open `tableau/screenshots/` for the finished page exports. Rebuild live in Tableau Desktop/Public from the extracts using [BUILD.md](BUILD.md).
