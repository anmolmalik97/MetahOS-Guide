---
sidebar_position: 54
---

# HR Access Control & Permissions

The HR module is protected at two levels: a single **module gate** that controls who can
reach HR at all, and **route-level permissions** that control individual actions inside
it. This means hiding a menu in the UI is never the only safeguard — the server
re-checks permission on every write.

## At a glance

```steps
fa-user | User request to HR | Here is what happens at this step.
fa-circle-o | Has access_hr_module? | Here is what happens at this step.
fa-times | Blocked from HR admin | Here is what happens at this step.
fa-map-marker | Has route permission? | Here is what happens at this step.
fa-times | Action rejected by server | Oops — it goes back to be fixed.
fa-eye | UI shows menu | Here is what happens at this step.
fa-circle-o | Server re-checks on every write | Here is what happens at this step.
fa-circle-o | Action committed | Here is what happens at this step.
```

## Module Gate

Every HR administration endpoint sits behind the HR module permission. A user
without it cannot open HR admin pages and cannot call HR admin APIs directly.

Employee attendance punching is deliberately **outside** this gate, so an ordinary
employee can punch in and out without being granted full HR admin access.

## Route-Level Permissions

Within HR, each capability has its own permission. The UI hides menus the user
cannot use, and the server independently rejects any request the user is not entitled to
make. Permission is re-validated on every server-side write, so changing a user's role
takes effect immediately.

## What Each Gate Protects

- **HR Dashboard** is protected by a dashboard access permission.
- **HR Admin** shell (departments, shifts, holidays, leave, approvals, config) is shown
  based on the HR-related permissions assigned to the user, and each tab inside is gated
  individually.
- **Editing HR Config** and overriding leave/attendance requires an HR config permission.
- **Editing a department** requires a department edit permission.
- **Approving attendance corrections** requires an attendance correction permission.

:::caution
A user may hold both an HR role and a Manager role. The UI keeps the two scopes visually
separate, but the underlying permissions still apply independently — a manager-only user
cannot reach HR admin functions, and an HR-only user is limited to the HR keys they
hold.
:::
