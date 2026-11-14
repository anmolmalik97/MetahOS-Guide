---
sidebar_position: 2
---

# Preview-Only Forms & Printing for Patients

Some forms are meant to be **shown to a patient and printed**, but not edited or submitted by them. MetahOS supports this with a preview-only mode.

## At a glance

```steps
fa-user | Patient / unauthorized | This is the person we are helping.
fa-flag | Preview only? | Someone takes a careful look first.
fa-eye | View only | Here is what happens at this step.
fa-pencil | Staff data entry | Here is what happens at this step.
fa-pencil | Tries to submit? | We send it off to the next person.
fa-times | Rejected | Oops — it goes back to be fixed.
fa-print | Print form | Here is what happens at this step.
fa-file-text-o | Patient copy | This is the person we are helping.
```

## Preview-Only-for-Patient Forms

A form can be flagged as **preview only for patients**. When this flag is on:

- A patient (or any unauthenticated/"Unauthorized" filler) can **open and view** the form.
- Any attempt by such a user to **submit or edit** the response is rejected, and the form is reported as preview only.

This lets you share a form for a patient to read or have on paper while keeping the actual data entry with staff.

## Printing a Form for a Patient

Preview-only forms can be **printed** so the patient can take a copy with them. The print flow renders the form (and any captured values) for the patient's review without exposing edit controls.

:::tip
Use preview-only mode for documents like consent summaries or instructions that the patient should read and keep, but should not modify. Pair it with the print option so the patient leaves with a copy.
:::

## Related: Patient-Facing Health Documents

Health cards and fitness reports use a similar fill-then-print pattern, where staff complete a backing form and then print a patient-facing document. See [Health Cards & Fitness Reports](../health-cards/health-cards.md).
