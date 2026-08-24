---
sidebar_position: 51
---

# Consolidated Reports & Bulk Send

After a camp's screenings are complete, MetahOS can generate a **consolidated report** per beneficiary and a single **camp-wise merged report**, then send those reports out to participants in bulk over WhatsApp/SMS. This page explains how the consolidated report flow works and how to send it at scale.

## At a glance

```steps
fa-user | Beneficiary results | The lab writes down what they found.
fa-file-text-o | Consolidated report | We make a neat report to share.
fa-cogs | Merge job | Here is what happens at this step.
fa-table | Camp-wise PDF | We set up a health camp for everyone.
fa-search | Send candidates | Here is what happens at this step.
fa-list | Send mode | Here is what happens at this step.
fa-clock-o | Staggered queue | We add a label so it is easy to find.
fa-whatsapp | Sent to beneficiary | Here is what happens at this step.
fa-check-circle | Report Sent | We make a neat report to share.
```

## Per-beneficiary consolidated reports

Each screened beneficiary has a consolidated report (a PDF) generated from their camp results. MetahOS tracks, per beneficiary and per camp:

- whether a report URL exists,
- the report's status (for example *Report Sent*),
- when it was generated, and
- when it was last sent.

## Camp-wise consolidated report

MetahOS can merge every beneficiary's consolidated report for a camp into a **single camp-wise PDF**. Trigger this from the camp, and the platform queues a background job that:

1. Collects each screened beneficiary's consolidated report for the camp.
2. Merges them into one PDF.
3. Saves the merged report URL against the camp, along with the count of reports included and the generation time.

Because this runs in the background for potentially large camps, MetahOS responds immediately with a message that the report will be ready shortly.

## Bulk send report

The **Bulk Send** flow sends consolidated reports to many beneficiaries at once. Before sending, you can preview the **report-send candidates** — the beneficiaries who match your chosen send mode — and search/paginate that list by name, UHID or mobile number.

### Send modes

You choose **which** beneficiaries to send to using a send mode:

- **Eligible** (default) — beneficiaries who either have never been sent the report, or were last sent it before the cutoff window.
- **Never sent** — only beneficiaries who have not yet received the report.
- **Sent before** — beneficiaries whose report was last sent on or before the cutoff (a configurable number of hours, default 12).
- **Sent within** — beneficiaries whose report was sent within the recent cutoff window.
- **All** — every beneficiary with a report, regardless of send history.

### How sending works

When you start a bulk send, MetahOS:

1. Builds the list of matching beneficiaries.
2. Queues each report send with a small staggered delay (to respect messaging rate limits).
3. Sends each beneficiary their consolidated report via the messaging templates (including a regional-language template), attaching the report PDF.
4. Marks each beneficiary's report status as *Report Sent* with a timestamp.
5. Records a completion entry in the camp's report-send log when the batch finishes.

The bulk send returns the number of reports queued so you can confirm the run started.

:::tip
Use **Never sent** for a first run, then **Eligible** for follow-up runs. This avoids re-messaging beneficiaries who already received their report while still catching anyone missed.
:::
