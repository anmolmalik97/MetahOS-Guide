---
sidebar_position: 13
---

# Bulk Report Export

The **Completed** worklist can export many approved reports at once as a single ZIP file, instead of downloading them one by one.

## At a glance

```steps
fa-filter | Filter the Completed list | Narrow down to the reports you want.
fa-download | Download reports as ZIP | Ask for all of them in one file.
fa-file-archive-o | ZIP is built | Each report becomes a PDF inside the archive.
fa-list-alt | Manifest included | A list records what came out and what did not.
```

## Exporting

1. Open the **Completed** worklist.
2. Apply the filters that describe the batch you need — date range, department, authority and so on.
3. Click **Download Reports (ZIP)**.

The archive is assembled in your browser as each report is fetched, so progress is visible while it runs and a large batch does not have to finish before anything appears.

## What goes into the archive

Only **approved, uncleared** tests are exported. A file is produced per lab order, named from the details that identify it:

```
<bill number>_<UHID>_<patient name>.pdf
```

Any part that is missing is simply left out of the name. If two orders would produce the same file name — the same bill re-registered, or an order split across departments — a numbered suffix is added (`... (2).pdf`) so no report is silently overwritten inside the ZIP.

## The manifest

Every export includes a **manifest** listing each order and what happened to it:

| Status | Meaning |
| --- | --- |
| **Exported** | The report is in the archive. |
| **Skipped** | Nothing to export — for example no approved, uncleared test on that order. |
| **Failed** | The report could not be fetched or generated. The reason is recorded. |

:::tip
Check the manifest before treating an export as complete. A failed row tells you exactly which order to re-export, rather than leaving you to compare the archive against the worklist by hand.
:::
