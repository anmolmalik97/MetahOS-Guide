---
sidebar_position: 1
---

# Workflow Engine Overview

The Workflow Engine routes a record (for example a leave request, an attendance
regularisation, or a consolidated doctor bill) through a defined sequence of **steps**.
At each step the record sits with a particular **role**; the holder of that role takes an
**action** (approve, send back, request changes, comment) that moves the record to the
next step.

## Workflow at a glance

```steps
fa-file-text-o | Record submitted | We send it off to the next person.
fa-sitemap | Step in role queue | Here is what happens at this step.
fa-eye | Action taken | Here is what happens at this step.
fa-check | Move to next step | Here is what happens at this step.
fa-sitemap | Final step? | Here is what happens at this step.
fa-check-circle | Completed | All done — great job!
fa-bell | Escalation | If it waits too long, a bigger boss is told.
```

## Key Concepts

- **Workflow definition** — the template. It lists the **steps** (each with a `key`,
  `label`, the `roleKey` that owns it, optional default assignees, and SLA hours) and the
  **transitions** (from-step → action → to-step, optionally limited to certain roles).
- **Workflow instance** — one record flowing through a definition. It tracks the
  **current** step/role, a full **history** of actions taken, and per-step SLA timing.
- **Steps and transitions** — a definition has a `startStepKey` and one or more
  `endStepKeys`. Reaching an end step via an **approve** action marks the instance
  **completed**.

## Actions

The actions available at a step are derived from the definition's transitions and the
acting user's roles. The standard actions are:

- **Approve** — advance the record to the next step.
- **Send back** — return the record to an earlier step; a comment is **required**.
- **Return to sender** — bounce the record straight back to whoever last sent it; a
  comment is **required**.
- **Request changes** / **Comment** — annotate without advancing; a comment is **required**.

A user can only act when the current step is assigned to one of their roles, and only the
transitions their roles are allowed to use are offered.

## Inputs

Some workflows let the current role attach or edit structured **inputs** on the record
(for example correcting figures before approving). Each edit is appended to the
instance's input history together with who made it, so nothing is overwritten silently.

## Where to Go Next

- [Reviewing & Taking Action](./reviewing-and-actions.md) — the reviewer screen, filters,
  and the single submit button.
- [OTP & One-Day Password (ODP)](./otp-and-odp.md) — extra verification before approving.
- [SLA & Escalation](./sla-and-escalation.md) — first- and second-level SLA timers.
- [Doctor Consolidated Reports](./doctor-consolidated-reports.md) — the bill-review flow
  for doctors.
