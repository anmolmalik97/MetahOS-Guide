---
sidebar_position: 2
---

# Fitness Reports & Medical Surveillance

A **Fitness Report** (also referred to as a medical surveillance report) is a printable assessment of a patient's fitness, generated from a backing form. It works much like the [Health Card](./health-cards.md) but with its own form and layout.

## At a glance

```steps
fa-user-md | Print Fitness Report | We make a neat report to share.
fa-file-text-o | Form complete? | All done — great job!
fa-pencil | Complete form | All done — great job!
fa-user | Patient record | This is the person we are helping.
fa-heartbeat | Derived values | Here is what happens at this step.
fa-line-chart | Screening analytics | Here is what happens at this step.
fa-table | Report layout | We make a neat report to share.
fa-print | Printable report | We make a neat report to share.
```

## Enabling the Fitness Report Button

## Form-Based Generation

The fitness report is built from a feedback form marked as a fitness or medical-surveillance form. Selecting **Print Fitness Report** follows the same fill-then-print flow as the health card: if the backing form is incomplete, you are prompted to complete it before the report is produced.

## Screening Values Sync

When the fitness report form is opened for a patient, MetahOS **pre-fills it with the patient's existing screening and health values** rather than leaving fields blank. For each empty field it looks, in order, for:

1. A value directly on the patient record,
2. A matching value derived from the patient's data (matched by field name or label), and
3. A value from the patient's analytics/screening data as a fallback.

This keeps the fitness report consistent with values already captured during screening, so staff do not have to re-enter data that MetahOS already holds.

:::tip
Because screening values flow into the report automatically, run the patient's screening first — the fitness report will then come up largely pre-filled.
:::

## Printing

The completed fitness report is rendered as a printable document (with the standard report layout, including the doctor details and result tables) so it can be handed to the patient or filed.
