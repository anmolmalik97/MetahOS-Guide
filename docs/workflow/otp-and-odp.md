---
sidebar_position: 3
---

# OTP & One-Day Password (ODP)

For sensitive approvals, the Workflow Engine can require the reviewer to verify a code
before their action is committed. Two schemes are supported: a standard **OTP** (a fresh
one-time password sent each time) and a **One-Day Password (ODP)** (one code that stays
valid for the whole day for a given user and role).

## At a glance

```steps
fa-mobile | Take action (approve) | A grown-up checks and says "yes, go ahead!"
fa-circle-o | Check role and action lists | Here is what happens at this step.
fa-mobile | Send OTP or daily code | Here is what happens at this step.
fa-truck | Deliver code | We hand the report to the right person.
fa-circle-o | Enter code to verify | Here is what happens at this step.
fa-circle-o | Action committed | Here is what happens at this step.
```

## When Verification Is Required

The workflow definition decides this through three lists:

- The list of roles that must verify.
- The list of actions that require OTP verification (for example `approve`).
- The list of roles that use the One-Day Password scheme.

The reviewer screen requires a code when:

- The current role is in the One-Day Password roles list **and** the action is **approve** (ODP), **or**
- The action is in the list of actions that require OTP verification **and** the current role is in
  the list of roles that must verify (standard OTP).

## Standard OTP Flow

When a standard OTP applies, the platform generates a fresh code and sends it to the
reviewer's registered mobile and email. The reviewer enters it to validate, and the
action proceeds. A new code is generated each time, and resends are throttled to **once
per minute**.

## One-Day Password (ODP) Flow

For roles configured to use the One-Day Password scheme, the OTP is upgraded to a **One-Day Password**:

- A single deterministic 4-digit code is valid for that **user + role for the whole
  calendar day** (in the configured timezone).
- The reviewer requests it once (it is sent to their mobile/email), then re-uses the
  same code for every approval that day — they do not have to wait for a new SMS on each
  action.
- Requests are throttled to once per minute, and the platform records when the code was
  last sent, last verified, and how many failed attempts have occurred.

This keeps high-volume approvers (who may sign off on many records a day) from being
flooded with one OTP per action, while still requiring a verified code.

:::info OTP becomes ODP for required roles
A role that previously triggered a new OTP on every action can be switched to the daily
scheme simply by adding it to the One-Day Password roles list in the workflow definition.
The reviewer experience changes from "new code each time" to "one code for the day".
:::
