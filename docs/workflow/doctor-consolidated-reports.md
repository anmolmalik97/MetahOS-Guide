---
sidebar_position: 5
---

# Doctor Consolidated Reports

Doctors generate many individual bills across a day. Reviewing each one separately is
slow, so the Workflow Engine provides a **consolidated** view that gathers a doctor's
bills for a period into a single reviewable record, and a self/all reviewer model that
controls who may sign them off.

## At a glance

```steps
fa-user-md | Doctor's bills for the day | Here is what happens at this step.
fa-eye | Engine builds day review | Someone takes a careful look first.
fa-clock-o | Consolidated record enters queue | Here is what happens at this step.
fa-eye | Reviewer role allowed? | Someone takes a careful look first.
fa-user-md | All-doctor reviewer | Someone takes a careful look first.
fa-eye | Self-review | Someone takes a careful look first.
fa-mobile | Approve, send back, or return | A grown-up checks and says "yes, go ahead!"
fa-plus | Action event added to history | Here is what happens at this step.
```

## What Gets Consolidated

For each doctor, the engine builds a **day review** that rolls up the day's bills with
their key clinical and financial context — patient identity (name, UHID, mobile),
medicines, suggested and follow-up investigations, working diagnosis, bill totals,
item and payment details. These are presented together so a reviewer sees the whole
day at once rather than bill-by-bill.

Consolidated records flow through the workflow as a **queue** with the usual current
step / role / history, and each review action (approve, send back, return to sender) is
captured as an **action event** with the reviewer, role, timestamps and comment.

## Reviewer Approval: Self vs. All

Who may approve a doctor's consolidated report is controlled by the **review action
roles** on the definition:

- A reviewer whose role can approve **any** doctor's report (for example a role such as
  *approve any consolidated*) acts as an all-doctor reviewer.
- A doctor reviewing **their own** consolidated report acts in a self-review capacity.

The definition's `reviewActionRoles` list names the roles entitled to take review
actions on the consolidated workflow, which is how the "self vs. all" reviewer
distinction is enforced.

## Reports and History

Each consolidated record keeps a versioned review history: which bills were reviewed,
by whom, and when. Action events are indexed by reviewer role and time so consolidated
reporting on doctor approvals can be produced for any period.

:::tip
Because the consolidation is per doctor per day, a reviewer can clear an entire day's
billing for a doctor in a single approval instead of opening each bill, while the
audit trail still records every underlying bill that was covered.
:::
