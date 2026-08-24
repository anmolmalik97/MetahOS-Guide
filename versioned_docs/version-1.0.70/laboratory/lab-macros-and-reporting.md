---
sidebar_position: 5
---

# Lab Macros & Reporting

This page covers the rich-text **macro editor**, entering and approving results, and printing the lab report.

## At a glance

```steps
fa-picture-o | Macros: tables and images | The pictures are saved safely.
fa-file-text-o | Enter results (REPORT_PENDING) | We wait our turn in line.
fa-mobile | Submit (APPROVAL_PENDING) | We wait our turn in line.
fa-user-md | Pathologist approves (APPROVED) | A grown-up checks and says "yes, go ahead!"
fa-file-text-o | Generate report PDF | We make a neat report to share.
fa-user-md | Send to referring doctor and corporate | Here is what happens at this step.
fa-file-text-o | Print or save report | We make a neat report to share.
```

## Lab macros (TinyMCE editor)

Lab macros are reusable report templates (for example a standard histopathology layout). The macro editor is built on **TinyMCE** and supports:

- **Formatting** — bold, italic, underline, bulleted and numbered lists.
- **Tables** — insert and edit tables (bordered, full-width by default). This is what enables **tables inside remarks / notes** on a report.
- **Images** — inserted images are **uploaded to S3** automatically. The editor uses an upload handler that posts the image, stores it, and inserts the returned URL — there are no local/base64 images left in the saved content.

:::tip
Because tables and images are first-class in the editor, you can build descriptive, formatted narrative reports (common in histopathology, cytology and microbiology) without leaving MetahOS.
:::

### Creating and editing a macro

1. Go to **Manage Macros**.
2. Click to add a macro, give it a **name**, and build the content in the editor.
3. Choose the macro's scope: a macro can be marked **for all authorities**, or restricted to specific **authorities** (sites).
4. Save.

:::caution
Macro names must be unique (case-insensitive) within their authority scope. Trying to create or rename a macro to a name that already exists returns *"Macro with macro name … already exist."*
:::

## Entering results

Once a sample is ready (`REPORT_PENDING`), open the test and enter results:

- For table-based tests, fill in each parameter value. Out-of-range values are flagged automatically (see [Parameters & Interpretation](./parameters-and-interpretation.md)).
- For narrative tests (no-table reports), use the rich-text editor and macros to compose the report.
- **Submit** the results to move the test to `APPROVAL_PENDING`. Submitting records a `SUBMIT` activity with the submitter's name and signature.

:::note
The result entry screen supports auto-save. Auto-saved writes do not push a `SUBMIT` activity — only an explicit submit does.
:::

## Approving reports

A pathologist reviews and **approves** the submitted results. Approval:

- Records an `APPROVED` activity (with approver name, qualification and signature).
- Generates the report PDF and stores its URL on the test and order.
- Sends the report to the referring doctor, and (for corporate contracts) emails the report to the corporate contact.

:::info
Approval can be scoped to a user's own department or across all departments, depending on the role assigned. Department-level and IC-level restrictions can further narrow which results a user may approve.
:::

### Bulk approve

You can approve multiple orders at once. MetahOS processes each order, approves all of its pending-for-approval packages, generates the report, and reports back how many were approved. Rejected or already-approved packages are skipped.

## Printing the report

The report is rendered as a PDF with a detailed header (patient demographics, bill/sample IDs, referred-by, prescribed-by, barcode, generated-by, qualification and assigning authority).

Key printing behaviours:

- **Abnormal values are printed in bold.**
- **Reference ranges marked `hiddenInPrint` are omitted** from the printed report.
- **Print test-wise** — each test can be printed individually (per-package report URLs), or as a combined report.
- Hidden ranges, interpretation labels and colour cues follow the configuration described in [Parameters & Interpretation](./parameters-and-interpretation.md).

## Saving a report

A generated report can be explicitly **saved** against the order so it is retrievable later.
