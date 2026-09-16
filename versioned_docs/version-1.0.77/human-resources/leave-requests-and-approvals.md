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

## Leave types that allow a check-in

A leave type carries an **Allow Check In** flag. It exists for work-from-home style leave, where the person is on "leave" from the office but is genuinely working.

When a leave type has **Allow Check In** turned on:

- The person can punch in and out on a day covered by that leave.
- The geofence is not enforced for that punch, since they are deliberately not at the site.
- The day is counted as **worked** in the daily attendance summary, rather than being written off as leave.

When the flag is off, the day is treated as ordinary leave and punches are not expected.

:::tip
Create a dedicated **WFH** leave type with **Allow Check In** turned on, rather than reusing an existing leave type. It keeps remote working visible in attendance reporting instead of hiding it inside a leave balance.
:::

:::note Half days
Somebody on half-day leave can work the other half regardless of the leave type's flag, so half-day punches are always accepted.
:::

## Holiday calendar

Holidays are maintained as a calendar of dated entries. Editing a holiday keeps the dates already entered against it, so amending one date in a set does not clear the rest.
