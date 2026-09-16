---
sidebar_position: 1
---

# Radiology Overview

The Radiology module manages imaging orders (X-Ray, CT, MRI, Ultrasound and similar) through a radiology-native workflow. Unlike the Laboratory module — which is built around physical specimens and parameter values — radiology is built around **imaging studies**: the patient goes to a modality, images are produced, and a radiologist writes findings and an impression.

:::info
Radiology follows the standard imaging workflow (IHE Scheduled Workflow): order → schedule → patient arrives → scan performed → images captured → radiologist reports → report finalised and distributed. There is no specimen, no barcode printing, and no LIS — those are Laboratory concepts and do not apply here.
:::

## Workflow at a glance

```steps
fa-shopping-cart | Order placed | We place the order, like ordering food.
fa-calendar | Scheduled | We pick a time on the calendar.
fa-user | Patient arrives | This is the person we are helping.
fa-heartbeat | Scan performed | A picture or scan is taken.
fa-picture-o | Images captured | The pictures are saved safely.
fa-user-md | Radiologist reports | We make a neat report to share.
fa-check | Finalised? | The report is locked and ready.
fa-paper-plane | Report distributed | We make a neat report to share.
```

## The radiology study workflow

Each imaging order can contain several **studies** (packages). Every study tracks its own exam status, report and (where integrated) DICOM images.

### Exam status

A study moves through an exam-status lifecycle:

`ORDERED → SCHEDULED → ARRIVED → IN_PROGRESS → COMPLETED`

with the terminal states `CANCELLED`, `NO_SHOW` and `DISCONTINUED`.

### Report status

The radiologist's report is tracked separately from the exam status, through:

`DRAFT → PRELIMINARY → FINAL → AMENDED`

This separation means an exam can be `COMPLETED` (images acquired) while its report is still `DRAFT`.

## What a radiology study records

Each study captures imaging-specific data, including:

- **Accession number**, order **priority** (`ROUTINE`, `URGENT`, `STAT`), clinical **indication** and **history**, and the **ordering physician**.
- **Body site** and **laterality** (`LEFT`, `RIGHT`, `BILATERAL`, `NA`) — important for patient safety and modality worklists.
- **Patient preparation** instructions and whether **contrast** is required.
- **Technologist tracking** — who performed the scan and when.
- A structured **report**: indication, comparison, technique (including contrast type/agent/volume and radiation dose), findings, impression, recommendations, the template used, and report status. Reports can be **signed** (with signer and timestamp) and **amended** (each amendment records text, who amended it, when, and the reason).
- **Critical-finding communication** — whether a finding is critical, who it was communicated to, when, by whom, the method, and whether read-back was confirmed (ACR-style compliance).
- **DICOM** metadata and files — study/series/SOP instance UIDs, modality, study description, body part, image count, and a viewer URL — for integration with an imaging/PACS server.

## Reporting actions

The radiology report screen supports the expected actions for an imaging workflow:

- **Upload report** — attach a report file (PDF/document) to a study; uploading sets the study to `COMPLETED`, logs an `UPLOAD` activity, and notifies the patient via message/email. A **bulk upload** applies one file to several studies at once.
- **Submit / Approve / Reject** — submit the radiologist's findings, approve (or edit) them, or reject with a reason. Each action is recorded in the study's activity log.
- **Send** — send the report to the patient.
- **Clear / Clear package** — close a study or the whole order; clearing all studies clears the linked radiology appointment(s).

See [Appointments & Permissions](./appointments-and-permissions.md) for booking and the permission model.
