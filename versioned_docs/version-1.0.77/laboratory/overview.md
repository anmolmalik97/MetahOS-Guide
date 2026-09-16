---
sidebar_position: 1
---

# Laboratory Overview

The Laboratory module in MetahOS manages the full diagnostic lab lifecycle — from booking a test, collecting and accessioning samples, entering and approving results, generating the PDF report, and finally delivering the report to the patient or referring doctor.

## Workflow at a glance

```steps
fa-calendar | Test booked | Someone asks to begin, like booking a ride.
fa-clock-o | Sample pending | We wait our turn in line.
fa-flask | Collected | We pick up the sample, like collecting a parcel.
fa-barcode | Received and accessioned | The lab gives it a sticker and a number.
fa-pencil | Result entry | The lab writes down what they found.
fa-check | Approved? | A grown-up checks and says "yes, go ahead!"
fa-file-text-o | Report generated | We make a neat report to share.
fa-paper-plane | Delivered to patient or doctor | We hand the report to the right person.
```

This section documents the lab features introduced and enhanced across recent sprints. Use the sidebar to jump to a specific workflow:

- **Pending Worklists & Report Status** — how a test is classified, the per-status worklists, rejected samples and who can see which status.
- **Accession & the Lab Scanner** — single-stage accession and accessioning samples by scanning their barcodes.
- **Home Collection & Riders** — booking a test for at-home sample collection and managing the rider who picks up the sample.
- **Sample & Barcode Tracking** — collection, receipt, accession, barcode printing and the report-status lifecycle.
- **Outsourced Tests** — sending a test to an external lab, and merging its report into the patient's combined report.
- **Consultation Lab Orders** — lab tests ordered during a consultation and billed onto the consultation bill.
- **Parameters & Interpretation** — building tests with reference ranges, interpretation categories, computed (formula) parameters and analyzer/machine data.
- **Lab Macros & Reporting** — the TinyMCE macro editor, report entry, approval, and printing.
- **Report Navigation, Saving & Audit History** — Prev/Next through a worklist, saving a part-finished report, and the change history of a result.
- **Turnaround Time & Alerts** — per-test TAT configuration and pathologist alerts.
- **Sending Reports** — auto-send to patients, emailing reports, and the External LIS integration.
- **Bulk Report Export** — downloading many approved reports at once as a ZIP.

## How a lab order flows through the system

The lab work-list is organised around a report-status lifecycle that every test (package) moves through:

| Status | Meaning |
| --- | --- |
| `SAMPLE_PENDING` | The sample has not yet been collected / received / accessioned. |
| `REPORT_PENDING` | The sample is ready and results can now be entered. |
| `APPROVAL_PENDING` | Results were submitted and are waiting for a pathologist to approve. |
| `COMPLETED` | The report PDF has been generated for the test. |
| `CLEARED` | The order line has been cleared (billed/closed). |
| `REJECTION` | The sample was rejected at collection, at acceptance or by the department. |

A lab order can contain several tests (called *packages*). Each test tracks its own sample, results, activities and report URL independently, so a single order can have some tests still awaiting samples while others are already approved.

:::info
The work-list sub-screens — Orders, Consultation Orders, Pending, Completed, Cleared, Queue, Appointments, Home Collection, Lab Scanner, Manage Test and Manage Macros — are individually permission-gated based on the user's assigned role.
:::

The **Pending** worklist can also be split into one screen per status — Sample Pending, Report Pending, Approval Pending and Report Approved — each with its own permission. See [Pending Worklists & Report Status](./pending-worklists-and-status.md).
