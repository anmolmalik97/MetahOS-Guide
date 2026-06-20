---
sidebar_position: 4
---

# CGHS Item Price Update (Admin Script)

For large CGHS rate revisions, MetahOS ships an operator script that updates item prices in bulk from a CSV, rather than editing items one by one in the UI. This is an administrative / deployment task run by the MetahOS operations team, not an in-app screen.

## At a glance

```steps
fa-lock | Load CSV per authority | Here is what happens at this step.
fa-circle-o | Match rows by CGHS Code | Here is what happens at this step.
fa-plus | Parse new rates from rateColumn | Here is what happens at this step.
fa-circle-o | Missing or unchanged? | Here is what happens at this step.
fa-circle-o | Skip row | Here is what happens at this step.
fa-circle-o | dryRun? | Here is what happens at this step.
fa-file-text-o | Report planned changes only | We make a neat report to share.
fa-money | Update prices in batches | Here is what happens at this step.
fa-file-text-o | Write indexed run report | We make a neat report to share.
```

:::caution
This script changes live item prices. It should only be run by the MetahOS operations team, against the correct authority, after the inputs have been reviewed. Always start with a **dry run**.
:::

## What It Does

The script reads a CSV of CGHS items and their new rates, matches each row to the existing item **by code (and name to disambiguate)** for a given **assigning authority**, and updates the item's price. It can update prices for several authorities in one run, each driven by its own CSV.

## How a Run Works

1. The CSV is loaded and each row is matched to an item by **CGHS Code** for the configured authority.
2. New rates are parsed; rows that are missing or unchanged are skipped (the script compares money values and ignores no-op updates).
3. With `dryRun` on, the script writes a report of the planned changes only.
4. With `dryRun` off, prices are updated in batches and a final report is written.

## The Run Report

Each run writes an **indexed** JSON log (the file name is prefixed with an incrementing number, so previous reports are preserved). The report lists matched, updated, skipped and unchanged counts so the change can be audited and reconciled against the source CSV.

:::note
This script complements the in-app [CGHS Service-Item Tools](./cghs-service-item-tools.md). Use the in-app tools for interactive create/copy with a guided dry-run; use this script for large, repeatable rate revisions across multiple authorities.
:::
