---
sidebar_position: 10
---

# Outsourced Tests

Some tests are sent to an external laboratory. Those tests are now handled **inside the ordinary Lab Reports modal** rather than in a separate screen, and their reports are folded into the patient's single combined report.

## At a glance

```steps
fa-flask | Collected | The sample is taken from the patient.
fa-paper-plane | Sent to the external lab | The sample is couriered out.
fa-upload | Report uploaded | The external lab's report file is attached.
fa-check | Received | The test is marked as received back.
fa-file-text-o | Merged into the patient report | The file is added to the combined report.
```

## One Report modal for everything

The separate **Outsourced Lab Reports** modal has been removed. The lab list now shows a single **Report** button, and opening it loads the whole bill — in-house and outsourced tests together.

Inside the modal:

- Outsourced tests carry an **Outsourced** badge.
- **Sent** and **Received** columns appear, but only on bills that actually contain an outsourced test, so ordinary bills are unchanged.
- Outsourced rows are never accessioned, and show no accession controls.

The Report button is visible to anyone holding either the lab report permission or `manage_outsourced_lab_packages`, so a coordinator who only handles outsourced work can still get in.

## The outsourced sequence

The steps must happen in order. Each one unlocks the next:

1. **Collect** the sample.
2. **Mark as sent** — available once the sample has been collected.
3. **Upload the report** received from the external laboratory — available once the test has been marked sent.
4. **Mark as received** — available once a report file has been uploaded.

## Reporting an outsourced test in-house

Sometimes the external laboratory does not deliver. An outsourced test can now be **reported in-house instead**, using the normal result entry and approval flow.

Because outsourced tests are never accessioned, only **collection** is required before results can be entered — requiring accession would make these tests permanently unreportable.

:::caution Confirm before you supersede
If an external report has already been uploaded, reporting the test in-house **supersedes** it in the patient's report. A confirmation dialog warns you first.

Nothing is deleted: the in-house report and the uploaded external file are stored separately, and the original file remains reachable under **View report**.
:::

## Outsourced files in the combined report

The patient's combined report is generated from the structured results your lab entered, so a file uploaded for an outsourced test cannot be typed into it. Instead, the uploaded file is **appended to the generated report**, producing one document that carries the in-house results and the external laboratory's report together.

- PDF files are appended as their own pages.
- Images (JPG, PNG, TIFF) are placed on a page of their own.
- A test that was reported **in-house** is rendered as a normal structured test, so its file is not also appended — that would print it twice.

This applies both to the report generated on approval and to the report printed or previewed from the worklist and the patient journey.

:::info If a file cannot be fetched
If an attachment cannot be retrieved, the report is still produced with everything else intact — one unreachable file never costs you the in-house results, and never drops the other attachments.
:::

### When the report is compiled

A bill that mixes in-house and outsourced tests compiles its combined report once every test is either approved in-house **or** outsourced with a file uploaded.

:::note
Compilation is triggered by approval. If the outsourced file is uploaded **after** all the in-house tests were approved, the combined report is rebuilt at the next approval on that bill.
:::

## How outsourced tests appear in the worklist

| Situation | Status |
| --- | --- |
| Ordered, nothing done yet | `BILLED` — deliberately kept out of Report Pending so the in-house worklist is not flooded with tests waiting on an external lab. |
| Results entered in-house, awaiting sign-off | `APPROVAL_PENDING` — it appears in the approval badge, the Approval Pending list and the move-to-next queue. |
| Reported in-house and approved | `COMPLETED`. |
| Sample rejected | `REJECTION`. |
