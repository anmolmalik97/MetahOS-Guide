---
sidebar_position: 2
---

# Downloading & Merging Bill PDFs

When you need many bills as PDFs at once — for example for an audit, a contract reconciliation or a monthly archive — use the **Export Bills** tool in Bill Management. It saves every matching bill as an individual PDF and can then combine them into one (or a few) merged PDFs.

## At a glance

```steps
fa-money | Filter bills | We pick only what we want to see.
fa-money | Open Export Bills | Here is what happens at this step.
fa-circle-o | Choose folder | Here is what happens at this step.
fa-download | Set download preferences | Here is what happens at this step.
fa-circle-o | Existing PDFs found? | Here is what happens at this step.
fa-money | Skip existing bills | Here is what happens at this step.
fa-circle-o | Render individual PDFs | Here is what happens at this step.
fa-circle-o | Merge into parts | Here is what happens at this step.
fa-circle-o | Final combined PDF | Here is what happens at this step.
```

## Step 1: Open Export Bills

From the Bills list, apply your filters (date range, assigning authority, camp, doctor, department, payment method, contract, IP/OP/Pharmacy, etc.) and open **Export Bills**.

## Step 2: Choose a folder

Click **Choose Folder** and pick (or create) a folder on your computer. MetahOS creates a sub-folder named after your hospital and the download date, and saves the bill PDFs there directly. Folder access is required to proceed.

:::caution
The download writes files straight to your local disk and can take a while for large date ranges. Keep the tab open — a progress dialog will warn **"Please don't close this tab"** until it finishes.
:::

## Step 3: Set download preferences

- **Only contract bills** — restrict the export to contract bills.
- **Exclude zero amount bills** — skip bills with no amount (on by default).
- **Merge downloaded PDFs after export** — after saving the individual PDFs, combine them without re-rendering (recommended for large exports).
- **Bills per merged file** — how many bills go into each merged part (default 200).
- **Skip existing merged parts (resume)** — re-run safely; already-created parts are skipped.
- **Create a final combined PDF after parts** — also produce one combined PDF from all the parts.
- **Skip if final PDF already exists (resume)** — don't regenerate the final combined PDF if it is already present.

## Step 4: Skip already-downloaded bills

If the chosen folder already contains bill PDFs, MetahOS detects them and offers a **Skip existing bills** choice:

- **Yes** — resume; only new bills are rendered and saved.
- **No** — re-render every bill from the start.

## Merging Without Re-downloading

If you have already downloaded the individual PDFs, you can skip straight to combining them with **Merge existing PDFs**. This scans the folder and produces the merged part files (and an optional final combined PDF) without contacting the server again.

:::note
Merged files are named **"&lt;Hospital&gt; Bills - Merged - Part 001.pdf"** per part, and the final combined file is **"... - Merged - All.pdf"** (or simply **"... - Merged.pdf"** when there is only one part). The progress dialog reports the saved, failed and skipped counts and the final file's location.
:::
