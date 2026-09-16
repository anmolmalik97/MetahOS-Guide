---
sidebar_position: 2
---

# Session & Device Management

The platform limits how many devices an account can be logged in on at once, detects
extra logins, and lets a user log out their other devices when they hit the limit.

## At a glance

```steps
fa-check | Successful login | Here is what happens at this step.
fa-lock | Under allowedNLogins? | Here is what happens at this step.
fa-lock | Record new session | Here is what happens at this step.
fa-lock | Active-session conflict | Here is what happens at this step.
fa-circle-o | Force logout others? | Here is what happens at this step.
fa-lock | Login refused | Here is what happens at this step.
fa-lock | Clear existing sessions | Here is what happens at this step.
fa-check | Sessions validated on each refresh | Here is what happens at this step.
fa-lock | Expired or removed sessions logged out | Here is what happens at this step.
```

## Maximum Concurrent Logins

Each account may hold a configurable number of **active sessions**. Every successful
login records a session (with its session id, IP, user-agent and creation time) and an
expiry. When a login would exceed the limit, it is refused with a
*"Maximum of N device login(s) allowed."* response.

## Multiple-Login Detection & "Log Out Other Devices"

When a user is already at their session limit, the login response signals an
**active-session conflict** and includes details of the existing session (IP, device,
when it started). The user can then choose to **log out their other devices** and sign in:

- Sending the login again with the "force logout other sessions" option clears all
  existing sessions for that account and creates a fresh one.
- This lets someone who left a session open elsewhere reclaim access without an
  administrator's help.

## Auto-Logout & Session Expiry

Sessions carry their own expiry (a few days) and are validated on every token refresh:

- Expired sessions are filtered out automatically, freeing up a slot under the
  `allowedNLogins` limit.
- On refresh, if the session is no longer in the account's valid list (for example
  because another device forced a logout), it is removed and the request is rejected as
  unauthorised — effectively logging that device out.
- Logging out explicitly removes only that device's session and clears its cookie.

## Login Logs

Every login is recorded in **Login Logs** (visible in the HR module) with
the user, type (user / doctor / patient), timestamp, IP, browser/user-agent and
location. Administrators can search and review these to spot unexpected access.

:::tip
If a user reports being unable to log in with a *"maximum devices"* message, they can
log out their other devices from the login screen — there is no need to wait for sessions
to expire.
:::
