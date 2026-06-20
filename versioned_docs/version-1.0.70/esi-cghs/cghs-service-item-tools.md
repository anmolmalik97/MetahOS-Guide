---
sidebar_position: 2
---

# CGHS Service-Item Tools

The **Bulk Operations Hub** (Service Item Manager) provides CGHS-specific tools for creating and copying service items against the CGHS rate list. The CGHS tabs are gated behind a permission so only authorised operators can run them.

## At a glance

```steps
fa-circle-o | Bulk Operations Hub | Here is what happens at this step.
fa-lock | Permission granted? | Here is what happens at this step.
fa-times | Only general create/duplicate | Here is what happens at this step.
fa-plus | CGHS Template Create / Full Copy | Here is what happens at this step.
fa-upload | Upload sheet / pick authorities | Here is what happens at this step.
fa-circle-o | Run dry-run (required) | Here is what happens at this step.
fa-eye | Review create/update/skip counts | Someone takes a careful look first.
fa-circle-o | Inputs unchanged? | Here is what happens at this step.
fa-mobile | Apply to catalogue | Here is what happens at this step.
fa-circle-o | Run dry-run again | Here is what happens at this step.
```

## The Bulk Operations Hub

The hub presents one isolated operation at a time to avoid action overlap. The CGHS operations are:

- **CGHS Template Create** — create CGHS items from a template sheet. **Dry-run required.**
- **CGHS Full Copy** — code-based full upsert of items from a source authority to one or more target authorities. **Dry-run required.**

Both CGHS operations are marked **"Dry-run required"**: you must run a preview before any data is written.

## Downloading the CGHS Template

Download the CGHS template in **CSV** or **XLSX** from the CGHS Create tab. The template columns are:

| Column | Purpose |
| --- | --- |
| CGHS Code | The new CGHS code |
| CGHS TREATMENT PROCEDURE/INVESTIGATION LIST | The new item name |
| Old Code | The existing item's code (to copy settings from) |
| Old Name | The existing item's name (to disambiguate) |
| Tier 1 / Tier 2 / Tier 3 Non-NABH | Rate columns |

## CGHS Template Create

## Step 1: Prepare the sheet

Fill the template with the new CGHS code and name, the **Old Code / Old Name** of the matching existing item to copy settings from, and the tier rate columns.

## Step 2: Upload and select options

Upload the sheet (up to 5 MB) and choose the **target authority**, the **rate column** to read the price from, a **default service type** (used when the source item's type can't be carried over), and the **pricing payer group** the new price is recorded against.

## Step 3: Run the dry-run

Run the preview. MetahOS reports, before writing anything: how many items it will **create**, plus rows it will skip — existing codes, duplicates in the sheet, rows with missing code/name or price, and old-item references that are **missing** or **ambiguous**. Review the summary and samples.

## Step 4: Apply

Apply the plan. The dry-run preview is fingerprinted; if the sheet or options change between the preview and the apply, the apply is rejected with **"Run dry-run again"** to guarantee you only commit exactly what you reviewed. New items are created carrying over the copied settings, the chosen type, the price and a pricing entry for the selected payer group.

## CGHS Full Copy

The **Full Copy** operation upserts items from a **source authority** to one or more **target authorities**, matched by item code. You choose the source authority, the target authorities and the service types to include. The dry-run reports, per target authority, how many items will be **updated** vs. **inserted**, and what will be **skipped** (duplicate codes on either side, or references such as bed pricing, assessments, surgery checklists, payer groups or line items that are missing or ambiguous in the target authority). As with Create, the apply step re-validates the fingerprint and refuses to run if the inputs changed.

:::caution
CGHS Create and Full Copy write to the live item catalogue. Always read the dry-run summary carefully — especially the skipped, missing and ambiguous counts — before applying.
:::

:::note
Every preview and apply run writes an indexed log so the operation can be audited afterwards.
:::
