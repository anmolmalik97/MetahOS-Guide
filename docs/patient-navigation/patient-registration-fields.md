---
sidebar_position: 50
---

# Patient Registration Fields & Demographics

The patient registration form (the **Create New Patient / Demographics** screen reached from Patient Navigation) has grown several new fields and validation behaviours. This page explains each one and the configuration that controls it.

## At a glance

```steps
fa-user | Open Create New Patient | This is the person we are helping.
fa-map-marker | Name & ABHA address | Here is what happens at this step.
fa-circle-o | Emergency contact | We reach out to say hello.
fa-calendar | Age / Date of Birth | Here is what happens at this step.
fa-upload | Profile photo (upload or camera) | Here is what happens at this step.
fa-file-text-o | Document & custom fields | Here is what happens at this step.
fa-check | Revalidate fields? | Here is what happens at this step.
fa-check | Confirm critical values | Here is what happens at this step.
fa-user | Create patient record | This is the person we are helping.
```

## Middle Name & ABHA Address

The registration form now captures a **Middle Name** in addition to first and last name. It is stored as the patient's middle name, and the patient's full name is automatically built from the first, middle and last name.

When a patient is created or linked through ABHA, the form also captures and stores the patient's **ABHA Address**. A patient can hold more than one ABHA Address — the system keeps the full list of the patient's ABHA Addresses and treats one of them as the preferred address. If the middle name is available from the ABHA profile, it is pre-filled automatically.

## Emergency Contact

You can now record an **Emergency Contact** for a patient — both a contact name and a contact number. The emergency contact section appears as an optional block on the registration form. When it is left empty, no emergency contact is stored.

**Next of kin** details and identity documents that carry an expiry date are covered in [Next of Kin & Identity Documents](./emergency-contact-and-identity-documents.md).

## Mobile Number Length

The **Mobile** number must have **between 10 and 20 digits**, not counting the country code. The same rule applies to the **Secondary Contact Number** when one is entered; it can still be left blank. The field stops accepting digits once the limit is reached, including when a number is pasted in, and saving shows *Mobile number must be between 10 and 20 digits* (or the secondary-number equivalent) if the number is too short.

## Labour Card Expiry

When the patient's labour document type is **Labour ID**, the form shows a required **Labour Card Expiry Date**.

A labour card stays usable for a **12-month buffer period** after its expiry date. For example, a card that expired on 15 March 2026 can be used until 14 March 2027.

- **At registration** — an invalid date shows *Please enter a valid Labour Card Expiry Date*, and a card past its buffer period shows *Labour Card registration buffer period has expired*. The patient is not saved in either case.
- **In Patient Navigation** — if the card is past its buffer period, a red alert reads *Labour Card registration buffer period has expired. Services cannot be provided.* and booking is disabled. Where the site requires it, a Labour ID patient with no expiry date on file gets *Labour Card Expiry Date is required before services can be provided.* until the date is added.
- **On the patient profile** — the **About** section shows **Labour Card Expiry Date** with the expiry and the date the buffer period ends.

To restore access, update the patient's labour card details with a current expiry date.

## Age & Date of Birth

The handling of age and date of birth has changed to avoid inaccurate records:

- The form can show a **Date of Birth** picker instead of (or in addition to) a plain Age field.
- Age is **no longer silently derived from a stored DOB** and re-saved; the entered age at the time of registration is preserved as the patient's age at registration, while DOB is stored separately.
- **Age is validated only when it is mandatory.** If the age field is not required for your deployment, the validation is skipped so registration is not blocked.

### Entering an age

The Age field (on the Demographics screen and in the quick patient entry when booking a consultation) is a free-text field with the placeholder **YY/MM**. The old fixed `99/99` input mask has been removed, so ages of 100 or more can be entered.

- Enter years, optionally followed by `/` and months — for example `35`, `35/06` or `105/02`.
- Years cannot exceed **120** (*Year cannot exceed 120*) and months cannot exceed **12** (*Month cannot exceed 12*).
- Anything else shows *Please enter age as YY/MM*.

### How age is displayed

An age that was typed in at registration now **grows with time** instead of staying frozen at the value entered. Wherever a patient's age is shown — top bars, the profile, ID cards, worklists, bills, printouts, camp lists and reports — it is worked out the same way:

1. **Date of birth first.** If a valid date of birth is recorded, age is calculated from it. A date of birth in the future is ignored, so a patient can never show a negative age.
2. **Otherwise, age at registration.** The age entered at registration is counted forward from the registration date. A patient registered as 35 two years ago now shows as 37.
3. **Otherwise, the stored age** from older records is shown as it was saved. This value does not advance.

Ages of a year or more read as years and months (for example *37 Y, 2 M*); younger patients show months, and patients under a month show days.

:::note
Lab reference ranges continue to use the patient's age as before; this change affects how age is displayed, not how lab results are interpreted.
:::

## Profile Photo & Camera Capture

The Demographics screen includes a **profile photo** control. A photo can either be uploaded as a file or captured directly from the device camera. The captured/selected image is stored as the patient's profile photo and is reused on printed health cards and other patient documents.

## Document Type Lists in Uploads

The document/file type options offered during patient registration can be customised, so deployments that capture extra categories of patient files (for example labour/welfare scheme documents) can present their own list rather than the built-in default.

## Field Revalidation Before Save

To improve data quality, selected registration fields can be **revalidated** before a patient is created. When configured, the system prompts the user to re-enter or confirm specific fields (a revalidation modal) so that critical values are double-checked at the point of registration.

:::tip
Field labels, mandatory status, custom fields, and revalidation are all driven by configuration, so the same registration screen can be tailored per site without code changes.
:::

## Restricting Patients to a User's Authorities

In multi-site deployments, staff users can be restricted so they only see patients that belong to **their assigned authorities**. When this is on, patient search, lists, and record access throughout the application are filtered to the logged-in user's assigning authorities.
