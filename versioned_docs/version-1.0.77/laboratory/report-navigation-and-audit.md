---
sidebar_position: 12
---

# Report Navigation, Saving & Audit History

This page covers working through a queue of reports without going back to the list each time, saving a report deliberately, and seeing exactly who changed a result and when.

## At a glance

```steps
fa-list | Open a report from a list | Start from the worklist you were already working in.
fa-pencil | Enter results | Type in what the analyser or bench produced.
fa-save | Save | Your edits are recorded, with who made them.
fa-check | Approve | A pathologist signs the report off.
fa-arrow-right | Next | Move straight to the next report in the same list.
fa-history | Audit history | Look back at every change made to a result.
```

## Prev / Next through a worklist

Reports no longer have to be opened one at a time from the list. **Prev** and **Next** appear both in the Lab Reports modal and on the full report screen.

Next and Prev walk the **same list you opened the report from**, with the filters and sorting you had applied. If you were looking at Approval Pending for one department sorted oldest-first, Next gives you the next report in exactly that sequence.

If you opened the report without a list behind it, Next falls back to the approval queue — the oldest report still waiting for your approval, restricted to the departments, interpretation categories and sites you are allowed to approve for.

:::info
Prev and Next are always available, whatever your report permissions and whatever state the test is in — so navigation never dead-ends on a report you are not allowed to act on.
:::

## Separate permissions for pending and completed reports

The single report-button permission has been split in two:

| Permission | Where it applies |
| --- | --- |
| `access_lab_pending_report_button` | All the pending worklists |
| `access_lab_completed_report_button` | The Completed worklist and Report Approved |

This lets a role open reports that are still in progress without being able to reach finished ones, or the reverse.

:::note Existing roles keep working
The old combined permission is still honoured as a fallback, so any role that already had it keeps access on both sides until it is explicitly re-assigned.
:::

## Saving a report

Result entry has an explicit **save** step, so a part-finished report can be put down and picked up again without being submitted for approval.

Parameters flagged as **hide in print if empty** can now be left blank and saved. Previously they were treated as required, which made a report with a blank flagged parameter impossible to save.

:::caution Blank rows are hidden, not deleted
A flagged parameter left empty is omitted from the **printed** report only. It stays in the saved report, so re-opening the report — or turning the flag off later — brings it back with everything else intact.
:::

## Audit history for results

Open **Audit History** from the report screen to see the full change history of a test's results.

Each entry records:

- The **parameter** that changed.
- The **value before** and the **value after**.
- **Who** made the change, by name.
- **When** it was made.

This covers edits made after a result was first entered, giving a complete trail for a corrected or amended report.

## Viewing lab results from the patient journey

A **lab results** popup is available from the patient journey, showing the results for an order without leaving the patient's record. Access is controlled by `view_patient_lab_report`, so results can be exposed to front-office or clinical staff without granting them the lab worklists.

Results in this view are listed by **booking date**, and the barcode and sample ID are shown alongside them so a result can be traced back to the physical tube.
