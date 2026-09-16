---
sidebar_position: 5
---

# PHR and the Patient App

A patient's **Personal Health Record (PHR)** is the view of their own linked records that they reach through an ABDM PHR app (or through MetahOS's own patient-facing screens). This page explains how MetahOS answers a PHR request and what the patient sees.

## At a glance

```steps
fa-hospital-o | PHR request arrives | The patient comes in for their turn.
fa-map-marker | Match ABHA address | Here is what happens at this step.
fa-hospital-o | Match ABHA number | Here is what happens at this step.
fa-circle-o | Match UHID or reference number | Here is what happens at this step.
fa-mobile | Match mobile number | Here is what happens at this step.
fa-circle-o | First match wins | Here is what happens at this step.
fa-hospital-o | Gather records by HI type as care contexts | Here is what happens at this step.
fa-flask | Patient views available and linked records | We connect the records to the health ID.
```

## Finding the right patient

When a PHR app asks for a patient's records, the request may arrive with any of several identifiers. MetahOS searches for the patient in a fixed priority order and stops at the first match:

1. **ABHA address** (current or any historical address),
2. **ABHA number**,
3. **UHID / reference number** (or internal record ID), then
4. **mobile number**.

For UHID and mobile lookups MetahOS deliberately matches records that are **not yet** tied to an ABHA, so a patient onboarding through their app can be connected to the right existing record. The response also returns a small summary of the matched patient(s) and which identifier produced the match.

## What the patient sees

For the matched patient, MetahOS gathers their records across every HI type and returns them grouped as **care contexts** with human-readable labels:

- Discharge Summaries
- OP Consultations
- Prescriptions
- Immunization Records (labelled with the vaccine name where known)
- Wellness Records
- Diagnostic Reports
- Invoices (labelled with the bill number)
- Health Documents

Each care context carries a reference number and a friendly display string built from the record's date — for example *"Consultation 14 June 2026 10:30 AM"* or *"Invoice 1042 14 June 2026"*. The PHR request can ask for either the patient's **unlinked** records or their **already-linked** records, so the app can show both "available to link" and "already in your record" views.

## The PHR view inside MetahOS

The same ABHA card controls used by staff support a **PHR mode**. When opened in PHR mode, the ABHA card and profile are presented for the patient, alongside the patient's linked records, so front-desk staff can show a patient what is on file under their ABHA.

:::tip
Because the PHR lookup falls back to UHID and mobile, a patient who created their ABHA elsewhere can still see the records your facility holds — as long as those records sit on a patient profile that shares their mobile number or reference number. Keeping patient contact details accurate makes this matching reliable.
:::
