---
sidebar_position: 3
---

# Passwords & Password Reset

Passwords are governed by a configurable strength policy, cannot be reused, and are reset
through a verified OTP flow. Every change is logged.

## At a glance

```steps
fa-circle-o | Request reset code | Here is what happens at this step.
fa-mobile | OTP sent, hash returned | Here is what happens at this step.
fa-mobile | Enter OTP | Here is what happens at this step.
fa-mobile | OTP matches hash? | Here is what happens at this step.
fa-times | Rejected | Oops — it goes back to be fixed.
fa-lock | Set new password | Here is what happens at this step.
fa-circle-o | Meets policy and not reused? | Here is what happens at this step.
fa-times | Rejected | Oops — it goes back to be fixed.
fa-check | Hash, save, audit change | Here is what happens at this step.
```

## Password Policy

When a password is set or changed, it must satisfy the policy. The defaults require:

- At least **8 characters**.
- At least one **lowercase** letter.
- At least one **uppercase** letter.
- At least one **number**.
- At least one **special character**.

Each requirement can be turned on or off, and the minimum length adjusted.

## No Reuse of Recent Passwords

A new password cannot match the **current** password, nor any of the most recent
passwords kept in history (the last 5 by default). The platform keeps a rolling,
hashed history for this check; the old password's plaintext is never stored.

## Password Reset Flow

Password reset is a dedicated, verified flow:

## Step 1: Request a reset code

The user enters their mobile number. The platform generates a reset OTP, sends it to the
registered mobile and email, and returns a one-time **hash** that ties the reset attempt
together.

## Step 2: Verify the code

The user enters the OTP. It is validated against the hash before they may proceed.

## Step 3: Set the new password

The new password is checked against the **policy** and the **no-reuse** history. On
success it is hashed and saved, the password history is updated, the change timestamp is
recorded, and a confirmation message is sent to the user. The reset hash is single-use —
re-submitting the same OTP/hash returns *"OTP is already used."*

:::caution Every change is audited
Each password change writes a record (who changed it, for whom, when, from which IP) so
resets are fully traceable. If a user receives a reset confirmation they did not request,
they are advised to reset again immediately.
:::
