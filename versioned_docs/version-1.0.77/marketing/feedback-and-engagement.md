---
sidebar_position: 4
---

# Feedback & Engagement

This page covers patient feedback collection — including the updated feedback form template and the automatic feedback link sent on bills — and the lead and marketing engagement flows that keep patients connected after a visit.

## At a glance

```steps
fa-money | Payment acknowledged | Money is paid and counted. Cha-ching!
fa-paper-plane | Send feedback link | We connect the records to the health ID.
fa-file-text-o | Feedback form response | Here is what happens at this step.
fa-star | Patient submits | This is the person we are helping.
fa-user | Assign follow-up | We pick a helper for the job.
fa-check-circle | Resolve with note | Here is what happens at this step.
fa-bullhorn | Marketing camps | We set up a health camp for everyone.
fa-list | Leads worklist | Here is what happens at this step.
```

## Feedback forms

Feedback forms are managed from **Marketing → Feedback Forms**. A feedback form template defines the questions patients answer about their experience.

### Feedback form template change

The standard health feedback form template is **seeded and kept up to date automatically** during deployment. A predeployment migration upserts the health feedback form so every environment carries the current template, and a separate migration maintains the fitness report / medical surveillance feedback form used by the [PRM fitness report](../sales/prm-enhancements.md).

:::note
Because the template is upserted on deployment, manual edits to the seeded feedback form may be overwritten the next time the migration runs. Build custom feedback forms as separate forms rather than editing the seeded template.
:::

## Feedback webhook on bills

When a bill is paid, MetahOS can automatically send the patient a link to the feedback form. This happens as part of the billing flow, right after the payment acknowledgement message.

How it works:

- If a feedback form is configured, the system creates a feedback form response for the patient and sends them a link of the form `<app uri>/forms/Feedback/<responseId>`.
- The link is associated with the bill number so it is tied to that visit.
- A record is kept per patient (keyed on UHID) of when feedback links were sent and against which bill numbers, so the same patient is not spammed.

:::tip
Point the feedback form configuration at the feedback form you want patients to fill after a visit. Because the link is generated per bill and de-duplicated per patient, you get clean, attributable feedback without repeated messages.
:::

## Lead and marketing engagement flows

Patient engagement continues through the leads and marketing pipeline:

- **Marketing camps and activities** capture outreach campaigns and the activities run within them, managed from **Marketing → Marketing Camp** and **Marketing Activities**.
- **Camp follow-up leads** flow into the [Leads worklist](../sales/leads-management.md), where the team calls patients, records follow-ups and resolves or clears each lead.
- **Feedback follow-ups** — feedback responses can themselves be assigned as follow-ups to a team member, with a history of assignments, and later resolved with a resolving note and the resolving user recorded.

:::info
Feedback and leads share the same follow-up pattern: an assignment carries a due date, a note and the assigned team member, the latest assignment is surfaced in the worklist, and resolution captures who closed it and why. This keeps engagement consistent across the patient journey.
:::
