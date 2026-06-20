---
sidebar_position: 2
---

# Home Collection & Riders

MetahOS lets patients book a lab test for **at-home sample collection** and lets your lab assign a **rider** to pick the sample up and deliver it to the lab. This page covers both the booking flow and the rider workflow.

## Workflow at a glance

```steps
fa-user | Patient books home collection | Someone asks to begin, like booking a ride.
fa-clock-o | Request created - pending | We wait our turn in line.
fa-truck | Rider assigned? | We pick a helper for the job.
fa-users | Coordinator assigns rider | We pick a helper for the job.
fa-bell | Rider and patient notified | A helper rides out to fetch the sample.
fa-map-marker | Sample collected at home | We pick up the sample, like collecting a parcel.
fa-barcode | Received and accessioned | The lab gives it a sticker and a number.
fa-flask | Testing and reporting | We make a neat report to share.
fa-file-text-o | Report delivered | We make a neat report to share.
```

## Step 1: Book a test for home collection

When creating a lab appointment, choose **Home** as the booking mode (or tick *Book for home*). The system normalises this to a `bookingMode` of `HOME` and sets `bookForHome` on the order.

For a home booking you can also capture:

- **Collection address** — label, contact name and phone, street, locality, city, state, ZIP, taluk, landmark and (optionally) latitude / longitude. The address may be selected from a saved patient address or entered inline.
- **Auto-assign rider** — when enabled, the order is flagged so a rider can be assigned automatically.

On booking, MetahOS automatically creates the bill, attaches it to the appointment, and (for LAB items booked for home) creates the corresponding lab order so the test appears in the lab work-list.

:::tip
Center bookings (the default) skip the address and rider fields. Only home bookings carry collection-address and rider data.
:::

## Step 2: Assign a rider

Riders are users with the **Rider** type. To list available riders, the rider module must be enabled; the list returns each rider's name and contact details.

To assign a rider to a home order:

1. Open the home-collection order.
2. Choose a rider from the list and assign.

When you assign a rider, MetahOS records:

- `assignedRider`, `riderAssignedAt`, and `riderAssignedBy`
- an entry in `riderAssignmentHistory` (rider, timestamp, who assigned, and reason)
- if not already set, `homeCollectionInitiatedAt` / `homeCollectionInitiatedBy`

:::caution
A rider can only be assigned to a **home** booking. Attempting to assign a rider to a center booking returns *"Rider assignment is only for home bookings."* The selected rider must also hold rider access, or assignment is rejected with *"Selected rider does not have rider access."*
:::

To **unassign**, assign with an empty rider — this clears `assignedRider` and logs an `UNASSIGN` entry in the history.

## Step 3: Initiate home collection

Once a rider is assigned (when the rider module is enabled), the order can have home collection initiated. This stamps `homeCollectionInitiatedAt` / `homeCollectionInitiatedBy`.

:::note
If the rider module is enabled, you must assign a rider **before** initiating home collection, otherwise the action is rejected with *"Assign rider before initiating home collection."*
:::

## Step 4: Rider collects the sample and (optionally) payment

When the rider reaches the patient, they:

1. **Collect the sample** — recorded against the test's sample sub-record (see [Sample & Barcode Tracking](./sample-and-barcode-tracking.md)).
2. **Collect payment** (optional) — a rider can record a cash payment toward the bill. MetahOS computes the amount due from the bill and collects either the requested amount or the full balance (whichever is lower). A rider can only collect payment for an order **assigned to them**.

Delivery authority is also enforced: a rider may only deliver to an authority they are permitted to serve (driven by `labDeliveryAssigningAuthArray`, falling back to `assigningAuthArray`, unless the rider has `canAccessAllAuthority`).

:::info
Once the sample for a home order is collected, MetahOS automatically clears the linked lab appointment(s) for that bill/patient so the appointment list stays accurate.
:::
