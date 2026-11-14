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

Each test (package) keeps a sample record that captures who did what, and when, at each stage:

| Stage | Statuses |
| --- | --- |
| **Collection** | `COLLECTED`, `NOT_COLLECTED`, `PARTIALLY_COLLECTED`, `REJECTED` |
| **Receipt** | `RECEIVED`, `NOT_RECEIVED` |
| **General accession** | `ACCEPTED`, `REJECTED` |
| **Department accession** | `ACCEPTED`, `REJECTED` |

A test only becomes ready for result entry (`REPORT_PENDING`) when the sample has cleared the required stages. A collected sample that is still waiting for a required accession shows as `ACCESSION_PENDING`.

## Step 1: Collect the sample

Mark the specimen collected from the work-list (or via the rider during a home pickup). The system records when it was collected, by whom, and any collection notes.

A sample can also be **rejected at collection**. Choose **Rejected** as the collection status and pick a **Reason for Rejection** — Labeling Errors, Incorrect Tube or Container, Insufficient Sample Volume (QNS), Sample Damage (Clotting or Hemolysis), or Contamination or Leakage. The reason is mandatory. A rejected collection records when it was rejected and moves the test to `REJECTION`. See [Rejected samples](./pending-worklists-and-status.md#rejected-samples).

## Step 2: Receive the sample at the lab

When the specimen arrives at the lab it is **received**. MetahOS records when it was received, by whom, the site that received it, and optional receipt notes.

## Step 3: Accession (accept / reject) the sample

Accession is the formal acceptance of a specimen into the lab. There are two levels:

- **General accession** — the sample is marked `ACCEPTED` or `REJECTED`, and MetahOS records who accepted it and when (or when it was rejected).
- **Department accession** — the department's own accept / reject decision, with the department-level acceptor and timestamps.

Sites can collapse these into a single **Accession** step, and can accession by scanning the label rather than finding the order in a list — see [Accession & the Lab Scanner](./accession-and-lab-scanner.md).

An accession rejection captures a structured **rejection reason** from a fixed list — Tampered, Hemolysed, Insufficient, Leaking, or Wrong container — plus an optional free-text comment. (Rejection at collection has its own reason list, above.)

:::caution
Once a sample collection step is finalised, it is locked against further edits. Attempting to re-edit a finalised collection is blocked.
:::

## Barcodes & accession (sample) numbers

MetahOS generates a barcode for each specimen so it can be tracked physically.

- The **base sample ID** is the bill number, optionally prefixed.
- Each test can carry a **barcode identifier** (configured on the test). When present, the per-test sample ID becomes the bill's sample ID followed by the test's barcode identifier (for example, 2606602-CBC), and a distinct barcode is generated for it. This lets multiple specimens from one bill be told apart.

### Printing barcodes straight after registration

When lab tests are booked as part of patient registration, the labels can be printed immediately, without opening the lab worklist. The print produces:

- One **bill-level** barcode, carrying the site's barcode prefix.
- One barcode per distinct **sample type / department** on the order.

The label shows the patient's UHID, name, gender and age alongside the barcode, with the barcode centred on the sticker. If the lab order cannot be read back for any reason, the print falls back to the bill-level barcode alone, so registration is never left without a label.

:::caution Printing a single label
When you print the label for **one selected test**, the identifier, department and specimen all come from that test. Take the label from the printer before starting another print so labels from different tests are not mixed up on the bench.
:::

### Print barcode logging

Whenever a barcode is (re)printed, MetahOS writes a print log entry recording the user, date, the package it was printed for, and a reason (defaulting to *"First Print"* on the first print and a reprint reason thereafter).

:::tip
The print log is useful for audit — it shows exactly who reprinted a label and why.
:::

### Single-step reprint confirmation

Reprinting a barcode normally walks through several confirmation steps. Sites can replace this with **one** consolidated confirmation instead, which gathers everything on a single screen:

- The warning about reprinting a label, and the risks of doing so.
- The **reason** for the reprint.
- A notice that the reprint will be recorded in the audit trail.
- An acknowledgement you must tick before the reprint proceeds.

The reason is mandatory either way, and clearing the selection clears the acknowledgement with it, so a reprint can never be approved against a reason you have since removed.

## Recording analyzer / machine data

MetahOS can ingest parameter values pushed directly from lab analyzers (machines), removing manual transcription.

- Each parameter on a test can be flagged to **use machine data** and mapped to a **machine code**.
- When a machine pushes results, MetahOS matches them by machine code to the right parameter on the right test and writes the value in.
- Every machine value is also logged separately (source, machine code, parameter name, value, raw payload, patient and package references) for traceability.

:::info
Machine values are only applied to tests that are **not yet completed** and to packages that still need a report — already-reported or cleared packages are skipped. A value that arrives from a machine clears any manual *abnormal* flag so the value is re-evaluated against the range.
:::
