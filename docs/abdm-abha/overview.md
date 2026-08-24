---
sidebar_position: 1
---

# ABDM / ABHA Overview

MetahOS includes a built-in integration with India's **Ayushman Bharat Digital Mission (ABDM)**, the national digital health ecosystem. The integration lets your facility act as a registered **Health Information Provider (HIP)**, create and verify **ABHA (Ayushman Bharat Health Account)** identities for patients, link the records you generate to a patient's ABHA, and respond to consent-based data-sharing requests from the wider ABDM network.

This section explains, in plain terms, what the integration does, how it is organised inside MetahOS, and where each capability lives.

## At a glance

```steps
fa-user | Patient | This is the person we are helping.
fa-hospital-o | MetahOS as HIP | Here is what happens at this step.
fa-hospital-o | ABHA middleware | Here is what happens at this step.
fa-hospital-o | ABDM gateway | Here is what happens at this step.
fa-check-circle | M1 Create / verify ABHA | Here is what happens at this step.
fa-hospital-o | M2 Link records as care contexts | We connect the records to the health ID.
fa-shield | M3 Consent and data sharing | The patient says "yes, you may share my records."
fa-mobile | Patient PHR app | This is the person we are helping.
```

## What ABDM brings to your facility

- **A national health ID for every patient** — the ABHA number (a 14-digit identifier) and the ABHA address (a human-readable handle such as `name@abdm`).
- **Portable health records** — discharge summaries, prescriptions, lab reports, OP consultations, immunizations, invoices and other documents you create can be made discoverable to the patient through their ABDM Personal Health Record (PHR) app.
- **Consent-driven sharing** — records leave your facility only when the patient has granted a consent artefact, and only for the period and record types the consent covers.

## The ABDM milestones (M1, M2, M3)

ABDM certifies HIP/HIU software against a series of milestones. MetahOS implements the capabilities across these milestones, and it is useful to understand what each one covers:

- **Milestone 1 (M1) — ABHA registration and creation.** Onboarding a patient onto ABDM: creating a new ABHA (via Aadhaar or mobile), verifying an existing ABHA address/number, fetching the ABHA profile and the ABHA card. In MetahOS this is the *ABHA creation and verification* flow.
- **Milestone 2 (M2) — Linking and care contexts.** Registering the facility as a HIP service, generating per-patient **link tokens**, and pushing the patient's records into ABDM as **care contexts** so they become discoverable. All of the linking automation in MetahOS runs against the ABDM **M2** middleware endpoints (for example `/m2/hip-link/link-token/generate` and `/m2/hip-link/link/care-context`).
- **Milestone 3 (M3) — Consent and data sharing.** Acting as a Health Information User / Provider in consent flows: requesting consent, managing consent artefacts, and returning the actual health records when a valid consent and data-request arrive.

:::info
The milestone labels come from ABDM itself. Inside MetahOS you will simply see screens for *HIP Linking*, *Scan & Share*, *Consent Management*, *Request Consent* and *View Consent Artefacts* — the milestone each belongs to is noted on the relevant page in this section.
:::

## How the integration is wired

MetahOS does not talk to the ABDM gateway directly. Instead it talks to an **ABHA middleware** service, and MetahOS holds a signed service-to-service identity for your tenant:

- A built-in proxy exposes the middleware to the MetahOS web app under `/api/abha-mw`. Every request is authenticated, stamped with your tenant ID, and signed with your tenant's RSA key before being forwarded.
- A set of **webhook endpoints** (mounted under `/webhooks/abdm`) let the middleware call back into MetahOS — to deliver link tokens, ask for the patient's care contexts, confirm link status, request OTPs, and fetch the actual health records during a consent flow.
- Background **cron jobs** keep link tokens fresh and automatically link new records as they are created.

The feature is only active when ABDM is enabled for your tenant. See **Configuration** in this section for the exact keys.

## What's in this section

- **ABHA Creation and Verification** — onboarding patients onto ABDM, matching against existing patients, and the ABHA card / profile views.
- **Linking and Care Contexts** — how records are pushed to ABDM, link tokens, the auto-link background job, the link tracker, and per-record linking.
- **Consent and Data Sharing** — requesting consent, managing consent artefacts, and how MetahOS returns records when consent is granted.
- **PHR and the Patient App** — how a patient discovers and views the records you have linked.
- **Scan & Share** — the facility QR code (PNG) and the data-link PDF used at the front desk.
- **Kiosk and Default OTP** — self-service registration, default-OTP login, and kiosk receipts.
- **Configuration** — every environment variable, config key and permission used by the integration.
