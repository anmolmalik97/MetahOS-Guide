---
sidebar_position: 52
---

# Leave Requests & Approvals

Leave is managed from a single **Leave Requests** surface under HR → Leave Management.
Applying for your own leave and approving other people's leave now live on the **same
screen** rather than two separate pages, so approvers no longer have to switch contexts.

## At a glance

```steps
fa-calendar | Leave Requests surface | Someone asks for a day off.
fa-circle-o | Select scope | Here is what happens at this step.
fa-mobile | Apply Leave | Someone asks for a day off.
fa-clock-o | Request pending | We wait our turn in line.
fa-clock-o | Open pending request | We wait our turn in line.
fa-mobile | Approve or reject? | A grown-up checks and says "yes, go ahead!"
fa-mobile | Request approved | A grown-up checks and says "yes, go ahead!"
fa-times | Request rejected | Oops — it goes back to be fixed.
```

## The Merged Surface

The screen has one toolbar with three controls:

- **Scope** — a segmented control that switches between the requests you can act on:
  - **My Leave** — leave you have applied for. (Empty state: *"You haven't applied for
    any leave yet."*)
  - **Approvals** — requests waiting for *your* approval. This scope only appears for
    users who can approve. (Empty state: *"No requests are awaiting your approval."*)
- **Status tabs** — **All**, **Pending**, **Approved**, **Rejected**. On wider screens
  these are buttons; on small screens they collapse into a dropdown.
- **Assigning Authority filter** plus an **Apply Leave** button and a refresh control.

This means a manager can review their team's pending approvals and check their own
leave balance from one place by flipping the scope.

## Applying for Leave

Press **Apply Leave** and complete the request. Administrators with the appropriate permission can raise a leave request on behalf of another employee; everyone else applies only for themselves.

## Approving or Rejecting

From the **Approvals** scope, open a request and choose to approve or reject it.

:::caution
Approval is not just hidden in the UI — every action is re-checked on the server. A user without the appropriate approval role cannot approve leave by calling the API directly.
:::
