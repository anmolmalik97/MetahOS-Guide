---
sidebar_position: 56
---

# Patient Edit History

Every change to a patient's demographic record is recorded, so it is always possible to see what a record looked like before an edit and who made it.

## At a glance

```steps
fa-pencil | Someone edits the record | A detail on the patient record is changed.
fa-camera | Before and after captured | Both values are recorded.
fa-user | Who and when | The editor's name and the time are stored.
fa-history | Edit history view | The whole trail is readable from the profile.
```

## Opening the edit history

Open the patient's profile and choose **Edit History**. Each entry shows:

- The **field** that changed.
- The **value before** and the **value after** the edit.
- **Who** made the change, by name.
- **When** it was made.

## What is tracked

Demographic and identity details are tracked, including:

- Names and UHID.
- Permanent and temporary addresses, which are grouped so a change of address reads as one event rather than five separate field changes.
- Caregiver name, relationship and mobile.
- Household size and income.
- KYC document type and number.
- Insurance company, policy number and date.

Internal bookkeeping values that are not part of the patient's record are excluded, so the history stays readable.

## Verifying an update with an OTP

Sites can require an **OTP** before a patient's details are updated, not just when the patient logs in. The OTP is sent to the patient's registered mobile number and must be entered before the edit is saved.

:::tip
Combine the OTP check with the edit history when you need to demonstrate that a change to a patient's identity details was authorised by the patient themselves.
:::

## Who recorded a clinical entry

Clinical record entries — including the CCDA view on an admission — show **who
recorded them**, with the person's name and their user type underneath. This
makes it clear at a glance whether an entry came from a doctor, a nurse or an
administrative user, without opening each record.

## Merging patients

When two records for the same person are merged, the merge detail view shows what was brought across and what was superseded, so the outcome of the merge is auditable in the same way as an ordinary edit.

See [Duplicate Patient Suggestions](./duplicate-patient-suggestions.md) for how duplicates are surfaced before they are created.
