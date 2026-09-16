---
sidebar_position: 4
---

# Leads Management

The Leads worklist is where calls, WhatsApp enquiries, referrals and camp follow-ups are tracked through to resolution. Recent sprints refined the columns shown, the way cleared and resolved leads are recorded, and how follow-ups are surfaced.

## Workflow at a glance

```steps
fa-user | New lead | A new person shows interest — yay, someone new to help!
fa-mobile | Contacted? | We reach out to say hello.
fa-whatsapp | Call or WhatsApp | A WhatsApp message is sent.
fa-clock-o | Follow-up scheduled | We pick a time on the calendar.
fa-eye | Outcome | Here is what happens at this step.
fa-calendar | Scheduled or billed | We pick a time on the calendar.
fa-times | Cleared | We mark it as taken care of.
fa-check | Resolved | We close it — finished and tidy.
```

## The Leads worklist

Each lead row shows the contact, name, any attached files, symptoms and the lead type, along with action buttons to call, add notes, snooze (reschedule), follow up, clear, schedule and resolve the lead.

## Follow-up details column

A dedicated **Follow-up Details** column shows the most recent follow-up assignment for each lead at a glance:

- **On** — the due date and time of the latest follow-up.
- **By** — the team member who assigned it.
- **Reason** — the note attached to the follow-up.

If a lead has no follow-up assignment yet, the column simply shows a dash.

:::note
The follow-up history is stored against each lead, so the column always reflects the **latest** assignment while the full chain of previous assignments is preserved.
:::

## Created date handling

The **Created** column drives the lead's follow-up due date and is sortable (it defaults to ascending order so the most pressing leads surface first). The worklist handles missing or blank dates gracefully, showing a dash instead of an invalid date. A lead whose due date is now or in the past is tagged with an **OverDue** badge.

A due-date filter lets you separate leads that are **due** from those **not due** yet.

## Resolving a lead

When a lead is resolved, MetahOS records the full context, shown in the **Resolved on** column:

- **Date** — when it was resolved.
- **User** — the team member who resolved it (the resolving user).
- **Reason** — the resolving reason captured at the time.

Once a lead is resolved, the Clear and Resolve buttons are disabled for that row to prevent duplicate actions.

## Cleared leads: "cleared on" and "cleared by"

Leads can be **cleared** (closed without a full resolution). When you switch the worklist to show cleared leads, three extra columns appear:

- **Cleared reason** — the reason entered when clearing.
- **Cleared on** — the date and time the lead was cleared.
- **Cleared by** — the name of the team member who cleared it.

These columns only display when the cleared-leads view is active, keeping the default worklist focused on open leads.

:::info
Each lead stores `isCleared`, `clearedOn`, `clearedBy` and `reasonForClearing`, alongside the resolution fields `isResolved`, `resolvedAt`, `resolvedBy` and `resolvingReason`. This gives a clean separation between leads that were *cleared* and leads that were *resolved*.
:::

## Info button removal

The older per-row **Info** popover button on the leads worklist has been removed to simplify the row. Screening and follow-up context is now reached through the dedicated follow-up and schedule actions and the Follow-up Details column, rather than a separate info popover.

## Exporting leads

Camp follow-up leads can be exported to CSV with the **Export CSV** action, optionally filtered by camp and a date range. The export includes follow-up date, screening date, camp name, patient demographics, risk level and the user who created the lead.

:::caution Patient privacy in exports
When the `maskPatientDataInExport` configuration flag is enabled, sensitive patient fields (name, date of birth, age, gender, mobile, UHID and partner name) are masked in the exported CSV.
:::
