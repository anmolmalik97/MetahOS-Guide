---
sidebar_position: 3
---

# Linking and Care Contexts

This page covers **Milestone 2** of the ABDM integration — making the records you create at your facility discoverable to the patient through ABDM. In ABDM terms, each linkable document is a **care context**, and a facility links care contexts to a patient's ABHA using a per-patient **link token**.

MetahOS does this in two ways: automatically through background jobs, and on demand from the **HIP Linking** screen.

## Workflow at a glance

```steps
fa-cog | Generate link token for ABHA | We connect the records to the health ID.
fa-hospital-o | Link token | We connect the records to the health ID.
fa-hospital-o | Link care context | We connect the records to the health ID.
fa-bell | Notify new linked record | We connect the records to the health ID.
fa-shield | Consent to view | The patient says "yes, you may share my records."
fa-circle-o | Data request | Here is what happens at this step.
fa-truck | Encrypted record delivered | We hand the report to the right person.
```

## What can be linked (HI types)

MetahOS supports the full set of ABDM Health Information (HI) types. Each one maps to a record produced elsewhere in the platform:

| HI type | MetahOS record |
| --- | --- |
| Prescription | Completed consultations with prescription data |
| OP Consultation | Completed consultations |
| Diagnostic Report | Completed / reported lab items |
| Discharge Summary | Discharge Summary forms |
| Immunization Record | Vaccination journey entries |
| Wellness Record | Recorded vitals |
| Invoice | Billed, non-cancelled invoices |
| Health Document | Uploaded patient files |

## Link tokens

Before any record can be linked, ABDM issues a **link token** that ties your facility (HIP) to a specific patient ABHA. MetahOS manages the full token lifecycle:

- **Request / init** — MetahOS asks the middleware to generate a link token for a patient who has an ABHA. The token starts in a `REQUESTED` state.
- **Receive** — the middleware calls MetahOS back with the issued token, which is stored against the patient and marked `ACTIVE`. Tokens are kept for roughly six months.
- **Per-address tokens** — because a patient can hold several ABHA addresses, MetahOS stores both a current `linkToken` and a historical `linkTokens` list, and always uses the token bound to the patient's preferred ABHA address.
- **Refresh** — a nightly job re-requests tokens that are near expiry or have failed.
- **Error handling** — if the middleware reports a problem, the error message is captured on the token and surfaced through the link tracker, and the token is retried later rather than blocking other patients.

:::note
Per-patient linking only runs when **care-context linking** is enabled for the tenant (the `ENABLE_ABHA_CARE_CONTEXT_LINKING` feature flag, on top of ABDM being enabled). See *Configuration*.
:::

## The link tracker

Every patient with an ABHA gets an entry in the **link-token tracker**. The tracker records:

- the current token **status** (`PENDING`, `REQUESTED`, `ACTIVE` or `FAILED`),
- when the token expires and when it should next be refreshed,
- the assigning authority (facility) the token belongs to,
- the last error, if any.

The tracker is what lets the background jobs run safely at scale — it acts as a lightweight lock so concurrent triggers don't fire duplicate token requests, and it spaces out retries (a cooldown after a request, and a longer back-off after a failure).

A separate **link summary** is kept per patient/ABHA address recording how many records have been linked, broken down by HI type, plus the first and last link timestamps — useful for reporting and for the ABDM health-record linkage dashboard.

## Automatic linking (background jobs)

When ABDM is enabled, MetahOS schedules three recurring jobs:

1. **Auto-link patient HI data** — walks through patients who have an ABHA, ensures each has a fresh link token (requesting one if needed), gathers their recent **unlinked** records of every HI type, and links them as care contexts. It processes patients in small batches and keeps a cursor so it works steadily through the whole patient base.
2. **Auto-link records (retry)** — cleans up successfully linked entries, drops stale failures, removes duplicate-link errors, and retries care contexts that previously failed.
3. **Refresh link tokens** — re-requests tokens that are due for refresh based on the tracker.

These jobs are throttled and idempotent: a record already marked as linked (`isABHALinked`, or `isPrescriptionLinked` for prescriptions) is skipped, and repeated requests for the same care context within a short window are suppressed.

:::tip
You don't normally need to do anything for linking to happen. Once a patient has an ABHA and the facility has a link token, new records they generate are picked up by the auto-link job and pushed to ABDM on their next run.
:::

## User-initiated (manual) linking

For cases where staff want to link immediately rather than wait for the job, the **HIP Linking** screen lets an authorised user select a patient and trigger linking on demand. This is the same care-context linking path the jobs use, exposed interactively.

Manual linking is also where **link OTP** comes in: when ABDM requires the patient to confirm a link with a one-time password, MetahOS sends that OTP to the patient's registered mobile (and email where available) using the standard messaging templates, so the patient can read it back to complete the link.

## How link status flows back

When ABDM confirms that care contexts were linked, the middleware calls MetahOS to **update link status**. MetahOS then:

- marks the matching records as linked so they aren't re-sent,
- records the ABHA address/number on the patient (adding it to `abhaAddresses` if new),
- writes a **link history** entry for each linked care context (patient, ABHA address, HI type and the record reference), and
- recomputes the patient's link summary.

This is what guarantees each record is linked exactly once and gives you an auditable trail of what was shared and when.

## Sending records by reference number

When records are requested or linked, MetahOS resolves the patient using a **reference-number-first** strategy: it looks up the patient by the supplied reference number(s) (the facility UHID) before falling back to the ABHA address or internal ID. This means linking and record delivery work even when the request carries only a local reference, and a single request can resolve and serve records for more than one matched patient record.

MetahOS can serve records at any granularity — a single prescription, a single bill/invoice, a single vitals (wellness) record, or a whole batch grouped by HI type — depending on what the care-context request asks for.
