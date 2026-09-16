---
sidebar_position: 7
---

# Kiosk and Default OTP

MetahOS supports unattended **self-service kiosks** where patients can check themselves in, and a **default-OTP** login mode that makes onboarding and demonstrations friction-free. This page covers both, plus how patients registered or logged in this way are tracked.

## At a glance

```steps
fa-desktop | Kiosk logs in with Kiosk ID and PIN | Here is what happens at this step.
fa-user | Patient verifies identity | This is the person we are helping.
fa-circle-o | Allow-list set? | Here is what happens at this step.
fa-mobile | Default OTP accepted for all | Here is what happens at this step.
fa-mobile | Mobile on list? | Here is what happens at this step.
fa-mobile | Real SMS OTP required | A text message is sent.
fa-mobile | Join queue and flag default-OTP usage | Here is what happens at this step.
fa-print | Print check-in receipt | Here is what happens at this step.
```

## Self-queuing kiosk

A **self-queuing kiosk** is a physical device (typically near reception) that a patient uses to join a doctor's queue. Each kiosk is configured once by an administrator with:

- a **Kiosk ID** and a **PIN** (used to authenticate the kiosk itself),
- the **doctors** it serves (so it only offers the right queues),
- its physical **location** — site, building, floor and room.

Kiosks log in with their PIN and Kiosk ID. At check-in, MetahOS validates the Kiosk ID and only shows consultations for the doctors assigned to that kiosk, so a patient at a given kiosk sees only the relevant queues. A kiosk can be disabled without deleting it.

When the MetahOS web app is opened with a `kiosk=1` (or `kiosk=true`) parameter in the URL, it switches into **kiosk mode** for that session, adjusting the interface for unattended use.

## Default OTP login

Patient-facing flows normally verify a patient with a one-time password sent to their mobile. For onboarding, kiosks and controlled environments, MetahOS supports a **default OTP** — a fixed code that is accepted in place of a live SMS OTP.

How it behaves is driven by two configuration settings:

- A default OTP value that patients may use in place of a live SMS code.
- An optional allow-list of approved mobile numbers.

The logic is:

- If the allow-list is **empty or not set**, the default OTP is accepted for **all** patients.
- If the allow-list **contains numbers**, the default OTP is accepted **only** for mobiles on that list; everyone else must use a real OTP.

When a patient verifies using the default OTP, MetahOS records this on the verification attempt and on the patient record so it is never mistaken for a live verification.

:::caution
The default OTP bypasses real identity verification. Use the allow-list of approved numbers to restrict it to known test or staff numbers in any production environment, and avoid leaving an empty allow-list (which enables it for everyone).
:::

## Tracking default-OTP usage

MetahOS keeps two flags on the patient record so you can always tell how a patient came in:

- A flag set when the patient's most recent **login** used the default OTP.
- A flag set when the patient was **registered** during a session that used the default OTP.

Pending OTP records similarly carry a default-OTP marker once verified, so the audit trail is complete from registration through every subsequent login.

## Kiosk receipts

After a patient checks in at a kiosk, MetahOS produces a **receipt** confirming the check-in and queue position, which the patient can take with them. This closes the self-service loop: scan or enter details, join the queue, and walk away with a printed confirmation.
