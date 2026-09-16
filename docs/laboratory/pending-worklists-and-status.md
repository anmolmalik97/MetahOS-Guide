---
sidebar_position: 8
---

# Pending Worklists & Report Status

The **Pending** worklist is where most lab work happens. This page covers how a test is classified into a status, how the worklist can be split into one screen per status, and how the status filter is controlled per role.

## At a glance

```steps
fa-list | Pending (All) | One list with every test that still needs work.
fa-flask | Sample Pending | The sample has not been collected, received or accessioned yet.
fa-pencil | Report Pending | The sample is ready, so results can be typed in.
fa-check-square-o | Approval Pending | Results were submitted and a pathologist must sign off.
fa-check | Report Approved | The report is approved and the PDF exists.
fa-ban | Rejection | The sample was rejected and needs attention.
```

## The status of a test

Every test (package) on a lab order is classified into exactly one status. The classification is done **on the server**, so the badge on screen, the counts in the header, the PDF export and the sub-module lists can never disagree with each other.

| Status | Meaning |
| --- | --- |
| `SAMPLE_PENDING` | The sample has not yet been collected, received or accessioned. |
| `REPORT_PENDING` | The sample is ready and results can now be entered. |
| `APPROVAL_PENDING` | Results were submitted and are waiting for a pathologist to approve. |
| `COMPLETED` | The report has been approved and generated for that test. |
| `CLEARED` | The order line has been cleared (billed / closed). |
| `REJECTION` | The sample was rejected at collection, at acceptance or by the department. |

:::info
A single bill can hold several tests in different statuses at once — one test awaiting a sample while another is already approved. Each test carries its own sample, results and report.
:::

## One worklist per status

Sites can replace the single **Pending** tab with a set of per-status sub-modules in the Lab sidebar:

- **Sample Pending**
- **Report Pending**
- **Approval Pending**
- **Report Approved**
- **Pending (All)** — the combined list, still available alongside them

All of these are the same worklist screen with the status locked, so the columns, filters, bulk actions and export behave identically on each one.

:::note Why "Report Approved" and not "Completed"
The **Report Approved** sub-module is scoped to tests that are approved but **not yet cleared**. The separate top-level **Completed** worklist has a wider scope — fully completed orders. The different name keeps the two apart.
:::

### Rows now show only the status you asked for

When you filter by a status — whether through a sub-module or through the **Lab Status** dropdown — each row is narrowed to just the tests in that status, and the status badges and counters are recalculated from that narrowed set. A row left with no matching tests drops out of the list entirely.

This applies to the on-screen list and to the **Export PDF**, so a printed worklist always matches what you saw.

The exported PDF includes a **Bill Number** column, so a printed worklist can be reconciled against billing without going back to the screen.

## Who can see which status

Each per-status sub-module carries its own permission, granted in the Role editor:

| Sub-module | Permission |
| --- | --- |
| Sample Pending | `access_lab_sample_pending` |
| Report Pending | `access_lab_report_pending` |
| Approval Pending | `access_lab_approval_pending` |
| Report Approved | `access_lab_report_approved` |

These are deliberately **independent** of the combined `access_lab_pending`, so a role can be given a single status worklist — a phlebotomy team that only ever sees Sample Pending, for example — without access to the full list.

:::caution New permissions start switched off
These permissions are not on any existing role. After the sub-modules are turned on for your site, an administrator must grant them explicitly, or the new sidebar entries will not appear for anyone.
:::

### Restricting the Lab Status dropdown

The **Lab Status** dropdown on the worklist can also be restricted per role, so a user only sees the statuses they are meant to work on:

| Dropdown option | Permission |
| --- | --- |
| Sample Pending | `access_lab_status_sample_pending_filter` |
| Report Pending | `access_lab_status_report_pending_filter` |
| Approval Pending | `access_lab_status_approval_pending_filter` |
| Completed | `access_lab_status_completed_filter` |
| Rejection | `access_lab_status_rejection_filter` |

If a user does not hold the permission for a status, that option is hidden from the dropdown and cannot be applied.

## Rejected samples

**Rejection** is a status in its own right, so rejected samples can be pulled up as a worklist rather than being hunted for. A test is counted as rejected when the most recent action on its sample was a rejection, at any of the three stages:

- **Collection** — the sample was rejected when it was collected.
- **Acceptance** — the sample was rejected on receipt at the lab.
- **Department** — the department rejected the sample (for example, insufficient quantity or a haemolysed sample).

Because the latest action wins, a sample that was rejected and then re-collected and accepted is **not** shown as rejected — it returns to its normal place in the flow.

## Department segregation

Lab lists, counts and bulk approval are scoped to the departments the signed-in user is allowed to work in, so a technician in Biochemistry does not see or act on Microbiology work. This scoping is applied on the server for the list, the export and bulk approval alike.
