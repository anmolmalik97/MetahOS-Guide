---
sidebar_position: 3
---

# Sample & Barcode Tracking

Every lab test tracks its specimen through a full lifecycle: **collection → receipt → accession → results**. This page explains each stage and how barcodes and accession (sample) numbers work.

## At a glance

```steps
fa-flask | Collected | We take a tiny sample to test.
fa-truck | Received at the lab | The sample arrives safely at the lab.
fa-barcode | General accession | The lab gives it a sticker and a number.
fa-barcode | Department accession | The right department logs it too.
fa-file-text-o | Report pending | The lab gets ready to write the report.
fa-times | Rejected if not good | If the sample is not okay, it is sent back.
```

## The sample lifecycle

Each test (package) stores a `sample` record that captures who did what, and when, at each stage:

| Stage | Statuses |
| --- | --- |
| **Collection** | `COLLECTED`, `NOT_COLLECTED`, `PARTIALLY_COLLECTED` |
| **Receipt** | `RECEIVED`, `NOT_RECEIVED` |
| **General accession** | `ACCEPTED`, `REJECTED` |
| **Department accession** | `ACCEPTED`, `REJECTED` |

A test only becomes ready for result entry (`REPORT_PENDING`) when the sample has cleared the required stages.

## Step 1: Collect the sample

Mark the specimen collected from the work-list (or via the rider during a home pickup). The system records `collectedAt`, `collectedBy` and any collection notes. A rejected collection records `collectionRejectedAt`.

## Step 2: Receive the sample at the lab

When the specimen arrives at the lab it is **received**. MetahOS stamps `receivedAt`, `receivedBy`, the `receivedAtAuthority` (site), and optional receipt notes.

## Step 3: Accession (accept / reject) the sample

Accession is the formal acceptance of a specimen into the lab. There are two levels:

- **General accession** — `acceptanceStatus` of `ACCEPTED` or `REJECTED`, with `acceptedBy` / `acceptedAt` (or `rejectedAt`).
- **Department accession** — `departmentAccessionStatus`, with department-level acceptor and timestamps.

A rejection captures a structured **rejection reason** from a fixed list — Tampered, Hemolysed, Insufficient, Leaking, or Wrong container — plus an optional free-text comment.

:::caution
Once a sample collection step is finalised, it is locked against further edits. Attempting to re-edit a finalised collection is blocked.
:::

## Barcodes & accession (sample) numbers

MetahOS generates a barcode for each specimen so it can be tracked physically.

- The **base sample ID** is the bill number, optionally prefixed.
- Each test can carry a **barcode identifier** (`barcodeIdentifier`, configured on the test). When present, the per-test sample ID becomes `<baseSampleId>-<barcodeIdentifier>`, and a distinct barcode is generated for it. This lets multiple specimens from one bill be told apart.

### Print barcode logging

Whenever a barcode is (re)printed, MetahOS writes a `barcodePrintLogs` entry recording the user, date, the package it was printed for, and a reason (defaulting to *"First Print"* on the first print and a reprint reason thereafter).

:::tip
The print log is useful for audit — it shows exactly who reprinted a label and why.
:::

## Recording analyzer / machine data

MetahOS can ingest parameter values pushed directly from lab analyzers (machines), removing manual transcription.

- Each parameter on a test can be flagged to **use machine data** and mapped to a **machine code** (`machineCode`).
- When a machine pushes results, MetahOS matches them by `machineCode` to the right parameter on the right test and writes the value in.
- Every machine value is also logged separately (source, machine code, parameter name, value, raw payload, patient and package references) for traceability.

:::info
Machine values are only applied to tests that are **not yet completed** and to packages that still need a report — already-reported or cleared packages are skipped. A value that arrives from a machine clears any manual *abnormal* flag so the value is re-evaluated against the range.
:::
