---
sidebar_position: 1
---

# Login Protection

The login flow is hardened with several layers that protect accounts from guessing
attacks and abuse: a CAPTCHA challenge, account lockout after repeated failures, and
optional multi-factor OTP. These apply to both staff users and doctors.

## At a glance

```steps
fa-lock | Login attempt | Here is what happens at this step.
fa-check | CAPTCHA valid? | Here is what happens at this step.
fa-times | Reject, password never checked | Oops — it goes back to be fixed.
fa-lock | Account locked? | Here is what happens at this step.
fa-circle-o | Try again in N minutes | Here is what happens at this step.
fa-lock | Password correct? | Here is what happens at this step.
fa-times | Increment failure counter | Here is what happens at this step.
fa-mobile | Multi-factor OTP on? | Here is what happens at this step.
fa-mobile | Verify OTP | Here is what happens at this step.
fa-lock | Login succeeds | Here is what happens at this step.
```

## CAPTCHA

When enabled, login requires a Google reCAPTCHA token. The server verifies the token
with Google before checking any credentials; a missing or failed token returns a
*"Captcha verification is required / failed"* error and the password is never evaluated.

## Account Lockout

Repeated failed logins lock the account temporarily:

- Each failed attempt increments a counter on the account.
- After the maximum number of failures, the account is **locked** for a set duration and
  the failure counter is reset.
- While locked, login returns *"Account locked. Try again in N minute(s)"*.
- A successful login, or the lock simply expiring, clears the counter.

Defaults are **10 failed attempts** and a **15-minute** lock. Both are configurable, and
lockout can be disabled entirely.

For doctors who share a contact number (where that is permitted), the failure counter and
lock are applied across all matching doctor records so the protection cannot be sidestepped.

## Multi-Factor OTP

When `hasMultifactorAuthentication` is enabled, a correct password is not enough — the
platform sends a one-time password to the user's mobile and email, which must be entered
to complete login. The OTP is valid for **10 minutes**, and resends are throttled to once
per minute. Entering a wrong OTP counts as a failed attempt for lockout purposes.

:::tip
CAPTCHA, account lockout and multi-factor OTP are independent. You can run any
combination — for example CAPTCHA plus lockout without OTP, or all three together.
:::
