---
sidebar_position: 1
---

# Vehicle & Fleet Management

The **Vehicle Management** module keeps a register of your fleet vehicles, their compliance documents, and service status, and raises alerts as documents or services come due.

## At a glance

```steps
fa-truck | Vehicle record | Here is what happens at this step.
fa-file-text-o | Compliance docs | Here is what happens at this step.
fa-cog | Service tracking | Here is what happens at this step.
fa-bell | Alert raised | Here is what happens at this step.
fa-whatsapp | WhatsApp to contact | A WhatsApp message is sent.
fa-pencil | Action? | Here is what happens at this step.
fa-upload | Update vehicle | Here is what happens at this step.
fa-check-circle | Auto-resolve alert | Here is what happens at this step.
fa-times | Dismissed | Here is what happens at this step.
fa-list | Update log | Here is what happens at this step.
```

## Vehicles

Each vehicle record stores:

- **Registration number** (unique per vehicle) and **vehicle type**.
- **Compliance documents** — insurance, PUCC (pollution certificate), road tax, and fitness certificate. Each holds its own identifier, expiry/validity date, and an uploaded document URL.
- **Service tracking** — current run (km), last service date, and the run reading at the last service, used to work out how far the vehicle is from its next service.
- **Contacts** — a primary contact (name and number) and the operators the vehicle is operated by.
- **Authority scope** — a vehicle can be tied to a specific assigning authority/site, or marked as available for all authorities.

Vehicles can be disabled rather than deleted when they leave the fleet.

## Vehicle Types

Vehicles are grouped under configurable **vehicle types**, which can themselves be enabled or disabled.

## Alerts & Resolution

The module raises **alerts** as a vehicle approaches a service interval or as a compliance document nears expiry. Alerts carry a priority and a "days before expiry" value, and a corresponding WhatsApp message is sent to the vehicle's primary contact (see [Surgery, Operational Snapshot & Vehicle Alerts](../notifications/surgery-and-operational-alerts.md)).

Open alerts can be **resolved** or **dismissed** from the alert log. When a vehicle is updated — for example a renewed document is uploaded — its related open alerts are resolved automatically.

## Update Logs

Every change to a vehicle is captured in **vehicle update logs**, with a diff viewer so you can see exactly what changed and when.

:::tip
Keep the run-km reading current so service alerts fire at the right time, and upload renewed documents promptly — doing so clears the related expiry alerts automatically.
:::
