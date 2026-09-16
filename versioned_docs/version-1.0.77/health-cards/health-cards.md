---
sidebar_position: 1
---

# Health Cards

A **Health Card** is a printable, patient-facing summary card (with the patient's photo and key health details) generated from a backing form. This page explains how it is configured and printed.

## At a glance

```steps
fa-user | Print Health Card | Here is what happens at this step.
fa-file-text-o | Select health-card form | Here is what happens at this step.
fa-check | Form filled? | Here is what happens at this step.
fa-pencil | Complete Health Card Form | All done — great job!
fa-user | Merge patient record | This is the person we are helping.
fa-heartbeat | Derive BMI / vitals | Here is what happens at this step.
fa-picture-o | Embed photo | Here is what happens at this step.
fa-print | Printable card | Here is what happens at this step.
```

## Enabling the Health Card Button

The **Print Health Card** button appears on the patient profile and in the PRM "All Patients" list once it is switched on.

## How a Health Card Is Built (Form-Based)

The health card is driven by a **form**, not a fixed template. MetahOS looks for a feedback form marked with the health card feedback marker and uses the patient's saved responses to that form to populate the card.

When you click **Print Health Card**:

1. MetahOS selects the patient's health-card form.
2. If the form has not been filled (or required fields are missing), a **Complete Health Card Form** dialog opens so you can fill it in.
3. The card is then built by merging the form responses with the patient's record. Values such as height, weight, and BMI are derived automatically (BMI is computed from height and weight), and blood group/blood pressure values are recognised and placed correctly.
4. The patient's profile photo is embedded on the card.

## Font Size

The printed health card applies a consistent **font-size increase** across the card layout, so the printed details are larger and easier to read than the raw form values. This sizing is built into the health-card print layout.

:::tip
If a health card prints with empty fields, open the patient and complete the health-card form first — the card only shows values that exist in the form response or can be derived from the patient record.
:::
