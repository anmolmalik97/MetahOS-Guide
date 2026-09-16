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

### Reviewing any doctor's bills without approving them

A third capability sits between the two: **review any**
(`DOCTOR_CONSOLIDATED_REVIEW_ANY`). It lets a user of **any** type — not only a
doctor — review **any** doctor's consolidated bills, while never being able to
approve them.

This is for a billing or audit team that should check a doctor's day before it
reaches the approver, without holding approval authority themselves. The two are
granted separately, so review-any can never be escalated into approve-any.

Holders of review-any get:

- A **Pending My Review** worklist view, which they land on by default. It shows
  bills at the review step across every doctor — including bills an approver has
  sent back — scoped to the sites they can access.
- A **doctor and department selector** on the queue, so the list can be narrowed
  to one doctor or one department. The same filter applies to the CSV export.
- **Context-aware labels**: the queue tab reads **Review Queue**, and the bulk
  action reads **Send for Approval** rather than an approval label.

The status dropdown is hidden in this view, because the step is fixed on the
server — the view always means "waiting for my review".

The permission is granted from the Role Manager like any other.

## Policy number on the bill row

Where a bill carries a **policy number**, it is shown under the patient in both the
Review and the Approval tables, and it stays visible after the day has been submitted
— so a reviewer does not have to open the underlying bill to see which scheme or card
a charge was raised against.

The label follows the scheme in use at your site, so a card number is described the way
your team actually refers to it.

The row's print action is labelled **View Bill Details**, since it opens the bill's
detail for checking rather than producing a patient-facing document.

:::note
The policy number is a review aid on screen. The CSV export is unchanged.
:::

## Reports and History

Each consolidated record keeps a versioned review history: which bills were reviewed,
by whom, and when. Action events are indexed by reviewer role and time so consolidated
reporting on doctor approvals can be produced for any period.

:::tip
Because the consolidation is per doctor per day, a reviewer can clear an entire day's
billing for a doctor in a single approval instead of opening each bill, while the
audit trail still records every underlying bill that was covered.
:::
