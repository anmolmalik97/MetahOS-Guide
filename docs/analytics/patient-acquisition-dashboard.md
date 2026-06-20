---
sidebar_position: 52
---

# Patient Acquisition Dashboard

The **Patient Acquisition & Channel Attribution** dashboard shows where your new patients and leads come from, and how they progress through to completed consultations. It runs on **live MongoDB data** inside MetahOS, so the figures always reflect your current records.

Open it from the Hospital Marketing landing page, or directly at `/aidashboard/hospital-marketing/patient-acquisition`.

## At a glance

```steps
fa-share-alt | Lead sources | Here is what happens at this step.
fa-user | Leads captured | Here is what happens at this step.
fa-list | Lead status funnel | Here is what happens at this step.
fa-calendar | Scheduled | We pick a time on the calendar.
fa-check-circle | Completed | All done — great job!
fa-pie-chart | Channel attribution | Here is what happens at this step.
fa-line-chart | Registrations trend | Here is what happens at this step.
fa-thumbs-up | Conversion rate | Here is what happens at this step.
```

## Summary cards

The top of the dashboard shows headline counts for the selected period:

- **New patients** — patient records created in the period.
- **Leads** — leads captured in the period.
- **Scheduled** — consultations with a *scheduled* status.
- **Completed** — consultations with a *completed* status.
- **Conversion rate** — completed consultations as a percentage of leads.

## Lead source breakdown

A breakdown of leads by their source channel. MetahOS uses the lead's call-origin first, then its recorded source, falling back to **Direct** when neither is present. The top sources are listed in descending order of volume.

## Lead status funnel

Leads grouped by their current status (for example New, Engaged, Converted), so you can see how the pipeline is distributed.

## Top departments by lead interest

The departments attracting the most lead interest, based on the department recorded against each lead's referral data.

## Registrations trend

A monthly trend of new patient registrations across the period (up to the last 12 months), so you can spot seasonality and growth.

## Channel attribution

Completed and booked consultations grouped by the channel that brought the patient in:

- **Call Centre** — booked through the call-centre workflow.
- **Patient App/Web** — self-booked through the patient app or web portal.
- **Walk-in / QMS** — registered through the queue-management system.
- **Medical Camp** — originated from a camp.
- **External** — from an external source.
- **Direct / Other** — everything else, labelled by source where available.

You can group channel attribution by **Today**, **This Week**, **This Month** (default) or **This Year**.

:::tip
Use the channel-attribution view alongside the [Campaign Performance & ROI report](./hospital-marketing-dashboards.md) to understand which acquisition channels are actually converting into completed, billed visits.
:::
