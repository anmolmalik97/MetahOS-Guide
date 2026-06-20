---
sidebar_position: 7
---

# Sending Reports

Once a report is generated, MetahOS can deliver it to the patient, the referring doctor, and (for corporate contracts) a corporate contact. It also supports pulling reports in from an **External LIS** (Laboratory Information System). This page covers each delivery path.

## At a glance

```steps
fa-mobile | Order fully approved | We place the order, like ordering food.
fa-file-text-o | Report PDF generated | We make a neat report to share.
fa-envelope | Email patient (manual or auto-send) | An email is sent.
fa-user-md | Send to referring doctor | Here is what happens at this step.
fa-envelope | Email corporate contact if corporate | An email is sent.
fa-user | Surface in patient portal | This is the person we are helping.
fa-circle-o | External LIS | Here is what happens at this step.
```

## Sending a report to the patient

Use **Send Report** to email the report to the patient. MetahOS collects every available report URL for the order:

- the combined report (`reportUrl`),
- the external report (`externalReportUrl`, if the order came from an external LIS),
- and the individual per-test report URLs (skipping tests handled entirely by the external LIS).

The patient's email is required; if no report URL exists for the order the send is rejected.

:::note
The patient must have an email on record. If not, the send returns *"Patient email is required."*
:::

## Auto-sending reports to patients

MetahOS can send the report to the patient **automatically** once an order is fully approved.

## Sending to the referring doctor and corporate contacts

On approval, MetahOS automatically:

- Sends the report to the **referring doctor / referral source**.
- For bills tied to a **corporate contract** (`contractType: corporate`) with a contact email, emails the report to that corporate contact, including the employee ID where present.

## External LIS integration

For tests fulfilled by a third-party lab, MetahOS integrates with an **External LIS**.

- An order can be flagged `isUsingExternalLIS`, with an `externalLISName`, a `remoteBookingID`, and an `externalReportUrl`.
- Individual tests map to the external system through an **external mapping ID** (`externalMappingID`, set on the test).
- A booking is tracked through an **External Lab Report Tracker** that records the booking status (e.g. `BOOKING FAILED`), remote booking ID, and success flag.

### Manual booking

If an automatic external booking fails (or was never attempted), an order can be **booked manually** when `canBookManually` is set. MetahOS exposes:

- a **tracker** check that reports whether the order exists in the external system, whether it is booked, and whether manual booking is still allowed; and
- a **manual booking** action that triggers the external booking and updates the order with the returned `remoteBookingID`.

:::caution
Manual booking only applies to orders flagged `isUsingExternalLIS` that still have active external packages. If the order is already booked (an active tracker exists that did not fail), the manual booking is rejected with *"Lab item is already booked."*
:::

:::tip
Reports for completed lab orders are also surfaced to the patient through the patient portal's reports list, so patients can self-serve their results in addition to the email delivery above.
:::
