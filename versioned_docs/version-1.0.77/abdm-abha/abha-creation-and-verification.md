---
sidebar_position: 2
---

# ABHA Creation and Verification

This page covers **Milestone 1** of the ABDM integration — bringing a patient onto ABDM. From the patient registration / ABHA flow you can create a brand-new ABHA for a patient, verify an ABHA the patient already holds, fetch their ABHA profile, and view or download the ABHA card.

## At a glance

```steps
fa-hospital-o | Start ABHA flow | This is where we begin.
fa-hospital-o | New or existing ABHA? | Here is what happens at this step.
fa-mobile | Create ABHA via Aadhaar or mobile OTP | Here is what happens at this step.
fa-map-marker | Verify address and fetch profile | Here is what happens at this step.
fa-user | Matching patient found? | This is the person we are helping.
fa-file-text-o | Attach to existing record | Here is what happens at this step.
fa-user | Create new patient | This is the person we are helping.
fa-credit-card | Store IDs and view ABHA card | Here is what happens at this step.
```

## The ABHA flow

When registering or updating a patient, MetahOS presents an **ABHA flow** with two starting choices:

- **Register with New ABHA** — create a new ABHA for a patient who does not yet have one. Use this to add new members and create an ABHA card for them.
- **Verify / Fetch existing ABHA** — for a patient who already has an ABHA address or number, verify it and pull their ABHA profile into MetahOS.

The flow handles ABHA creation (typically via Aadhaar or mobile OTP), ABHA address verification, OTP entry, and updating the patient's mobile number where needed.

## Matching against existing patients

Before creating a duplicate record, MetahOS checks whether the person already exists in your patient database. This is the **"create existing patient by ABHA"** behaviour, driven by the similar-patient search tuned for ABHA flows.

When an ABHA number or ABHA address is supplied, MetahOS first attempts an **exact match** against existing records:

- It searches for a patient whose `abhaNumber` matches, or whose preferred `abhaAddress` or historical `abhaAddresses` list contains the address.
- If an exact ABHA match is found, that single patient is returned and you can attach the ABHA to the existing record instead of creating a new one.

If there is no ABHA match, MetahOS falls back to a **demographic similarity** search:

- First name, gender and date of birth are required signals (ABHA flows always provide these).
- Last name and mobile are treated as soft signals — mobile numbers change over time, so a Soundex (phonetic) name comparison is used within a date-of-birth window (±2 years) to surface likely matches.
- Only patients who do **not** already have an ABHA are considered as candidates, so you never accidentally re-attach to an already-linked record.

:::tip
Because mobile numbers and spellings drift over time, always review the suggested matches before deciding to create a new patient. Picking the right existing record keeps a single, continuous health history under one ABHA.
:::

## Viewing the ABHA card and profile

Once a patient is linked, MetahOS can:

- **View ABHA Card** — render the patient's ABHA card on screen.
- **Download ABHA Card** — save the card for printing or sharing.
- **View ABHA Profile** — show the patient's ABDM profile details.

These actions are available from the patient's ABHA card buttons. The same card controls also support the patient-facing PHR view (see *PHR and the Patient App*).

## What gets stored on the patient

After creation or verification, the patient record carries the ABDM identifiers used by the rest of the integration:

- `abhaNumber` — the 14-digit ABHA number.
- `abhaAddress` — the patient's **preferred** ABHA address.
- `abhaAddresses` — the full list of ABHA addresses the patient has used (a patient may hold more than one).
