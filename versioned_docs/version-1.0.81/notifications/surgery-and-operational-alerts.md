---
sidebar_position: 3
---

# Surgery, Operational Snapshot & Vehicle Alerts

Beyond consultation reminders, MetahOS sends a set of operational WhatsApp messages covering surgeries, a daily admin summary, and vehicle compliance.

## At a glance

```steps
fa-calendar | Booking state change | Someone asks to begin, like booking a ride.
fa-file-text-o | Surgery templates | Here is what happens at this step.
fa-clock-o | Yesterday's activity | Here is what happens at this step.
fa-table | adminv2 summary | Here is what happens at this step.
fa-cog | Service / document due | Here is what happens at this step.
fa-flag | VMS alerts | Here is what happens at this step.
fa-whatsapp | WhatsApp provider | A WhatsApp message is sent.
fa-users | Patients & admins | This is the person we are helping.
```

## Surgery Messages to Patients

When a surgery (OT) booking changes state, the patient receives a WhatsApp message built from the matching template:

| Event |
| --- |
| Surgery booked |
| Surgery rescheduled |
| Surgery cancelled |
| Day-before reminder |
| After completion / recovery follow-up |

The day-before reminder includes the patient's name, the operation date and time, the surgery location, the operating doctors, and the hospital name. Once a patient has been reminded, the surgery item is flagged so the reminder is not sent again.

## Daily Operational Snapshot

A daily WhatsApp summary gives administrators an at-a-glance **operational snapshot for the previous day**. It consolidates:

- **Appointments** — booked, completed, cancelled, and rescheduled counts, and total consultations.
- **IP status** — admissions and discharges.
- **Finance** — total collections and payables due the next day.
- **Inventory** — items expiring within 30 days.

:::tip
The operational snapshot is a quick morning briefing for hospital administrators — it summarises yesterday's activity without anyone having to open a dashboard.
:::

## Vehicle Management (VMS) Alerts

The Vehicle Management module sends WhatsApp compliance alerts to a vehicle's primary contact. There are two alert types:

- **Service alerts** — sent as the vehicle approaches its next service, showing the kilometres remaining before service is due.
- **Document alerts** — sent as a vehicle document (insurance, PUCC, road tax, or fitness certificate) nears expiry, showing the document type, registration number, days remaining, and expiry date.

See [Vehicle & Fleet Management](../fleet-and-routes/vehicle-management.md) for how vehicles and their documents are set up.

:::caution
All of these messages are delivered through the configured WhatsApp provider and rely on the corresponding templates being approved with that provider. See [Messaging Providers](./messaging-providers.md).
:::
