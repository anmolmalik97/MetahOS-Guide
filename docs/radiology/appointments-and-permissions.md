---
sidebar_position: 2
---

# Appointments & Permissions

This page covers booking radiology appointments in the Radiology module.

## At a glance

```steps
fa-calendar | Create appointment | We set up a visit for the scan.
fa-money | Attach the bill | We add the bill for the scan.
fa-refresh | Reschedule if needed | We can change the time if plans change.
fa-check-circle | Cleared | The visit is paid for and ready.
fa-times | Cancelled | We can cancel, with a refund if needed.
```

## Radiology appointments

A radiology appointment schedules a patient for one or more imaging studies at a site.

### Step 1: Create the appointment

When you create a radiology appointment you provide the patient, one or more **items** (the imaging studies), an **assigning authority** (site), a **start** time, and any **pre-payments**. The booking mode defaults to `CENTER` (radiology is performed on-site; there is no home collection).

On create, MetahOS:

1. Creates the radiology appointment record.
2. Automatically creates and attaches a **bill** for the selected studies (priced from the item catalog, with GST), tagged with `opdLeadType: RAD`. You can suppress bill creation by passing *no bill*.
3. Returns the appointment, the bill (with a payment summary), and the saved line items.

:::note
Each appointment line is stamped with the scheduled time and booking mode, and carries the item code where available, so the study can be matched back to the catalog and to any paid bill.
:::

### Step 2: Reschedule or edit

Editing an appointment lets you change the studies, the start time, the booking mode, the pre-payments, and record a **reschedule reason**.

### Step 3: Cancel

Cancelling sets the appointment status to `CANCELLED` and records a cancel reason. MetahOS then:

- Ensures a refundable bill exists for the appointment.
- If a payment was collected and no refund has been issued yet, queues a **refund** for the radiology appointment.
- Cancels the underlying bill with the same reason.

:::caution
A cancelled appointment cannot be billed/cleared further — attempting to do so returns *"Appointment is cancelled."*
:::

### Step 4: Bill / clear

The **bill** action confirms billing for the appointment and resolves the correct paid bill (matching the patient, items and scheduled time within a small window). Passing *clear appointment early* sets the appointment (and any siblings on the same bill) to `CLEARED`.

:::info
Appointment list results are scoped to the authorities a user can access. Users without all-authority access also see the online authority's appointments so patient/online bookings remain visible.
:::

## Managing the radiology catalog

Radiology studies live in the shared item catalog with `type: RAD`. They can be created, edited, listed (active or disabled), and toggled for visibility from the radiology test-management screens. Catalog listing is scoped by assigning authority, and every edit / visibility change is written to the audit log.
