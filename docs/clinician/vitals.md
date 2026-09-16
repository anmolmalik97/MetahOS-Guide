---
sidebar_position: 5
---

# Vitals

Vitals are recorded against a patient and shown as a table or a graph, with each reading compared to the reference range that applies to **that** patient.

## At a glance

```steps
fa-heartbeat | Record a vital | Enter the reading at the bedside or in consultation.
fa-user | Match the patient | The patient's age and gender are taken into account.
fa-tachometer | Compare to range | The value is checked against the right reference range.
fa-flag | Flag out-of-range | Anything outside the range is marked.
fa-line-chart | Trend over time | Readings are plotted so a trend is visible.
```

## Recording vitals

Vitals can be recorded from the consultation screen, from the IP detail screen, and from the vitals panel on the patient's record. Each reading is stored with the time it was taken and who took it.

## Age- and gender-aware reference ranges

A vital reading means different things for a newborn, a teenager and an adult. Each vital can therefore carry several reference ranges, each scoped by:

- **Minimum and maximum age** — either bound may be left open.
- **Gender** — male, female, or all.

When a reading is displayed, MetahOS picks the range whose age and gender scope matches the patient and compares the value against it. A reading outside that range is flagged.

The patient's age is taken from their recorded age where available, and derived from their date of birth otherwise.

:::note
If no range matches the patient — for example an age outside every configured band — the reading is shown without a comparison rather than being flagged incorrectly.
:::

## Table and graph views

Vitals can be read two ways:

- **Table view** — every reading in time order, with out-of-range values marked, for reading exact numbers.
- **Graph view** — the same readings plotted over time, for spotting a trend or a deterioration.

Both views show the reference range that applied, so a value can be judged in context rather than against a number the reader has to remember.

## Shared records

Vitals shared from another facility are shown in the same layout as locally recorded ones, so an externally sourced reading is read the same way as your own.
