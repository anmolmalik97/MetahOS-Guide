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

## Middle Name (mName) & ABHA Address

The registration form now captures a **Middle Name** in addition to first and last name. Internally this is stored as the `mName` field on the patient record, and the patient's `fullName` is automatically composed from `fName`, `mName`, and `lName`.

When a patient is created or linked through ABHA, the form also captures and stores the patient's **ABHA Address** (`abhaAddress`). A patient can hold more than one ABHA Address — the system keeps the full list in `abhaAddresses` and treats `abhaAddress` as the preferred one. If the middle name is available from the ABHA profile, it is pre-filled automatically.

## Emergency Contact

You can now record an **Emergency Contact** for a patient — both a contact name (`emergencyContactName`) and a contact number (`emergencyContactNumber`). The emergency contact section appears as an optional block on the registration form. When it is left empty, no emergency contact is stored.

## Age & Date of Birth

The handling of age and date of birth has changed to avoid inaccurate records:

- The form can show a **Date of Birth** picker instead of (or in addition to) a plain Age field.
- Age is **no longer silently derived from a stored DOB** and re-saved; the entered age at the time of registration is preserved as `ageAtTheTimeOfRegistration`, while DOB is stored separately.
- **Age is validated only when it is mandatory.** If the age field is not required for your deployment, the validation is skipped so registration is not blocked.

## Profile Photo & Camera Capture

The Demographics screen includes a **profile photo** control. A photo can either be uploaded as a file or captured directly from the device camera. The captured/selected image is stored as the patient's `profileUrl` and is reused on printed health cards and other patient documents.

## Document Type Lists in Uploads

The document/file type options offered during patient registration can be customised, so deployments that capture extra categories of patient files (for example labour/welfare scheme documents) can present their own list rather than the built-in default.

## Field Revalidation Before Save

To improve data quality, selected registration fields can be **revalidated** before a patient is created. When configured, the system prompts the user to re-enter or confirm specific fields (a revalidation modal) so that critical values are double-checked at the point of registration.

:::tip
Field labels, mandatory status, custom fields, and revalidation are all driven by configuration, so the same registration screen can be tailored per site without code changes.
:::

## Restricting Patients to a User's Authorities

In multi-site deployments, staff users can be restricted so they only see patients that belong to **their assigned authorities**. When this is on, patient search, lists, and record access throughout the application are filtered to the logged-in user's assigning authorities.
