---
sidebar_position: 9
---

# Sales Reports & Audit History

The Sales module keeps a record of what changed on every document and reports on the pipeline as a whole.

## At a glance

```steps
fa-pencil | Someone changes a document | A quotation, order or invoice is edited.
fa-camera | Before and after recorded | The old and new values are stored.
fa-history | Audit history | The trail is readable on the document.
fa-bar-chart | Reports | The pipeline is summarised across documents.
```

## Audit history

Every sales document carries an **Audit History**. Each entry records:

- The **action** — a creation, an edit, or a status change.
- **What changed** — the fields, with the value before and the value after.
- **Who** made the change.
- **When** it happened.

Status changes are recorded explicitly, so a document's path — `DRAFT` to `SENT` to `APPROVED` — is readable as a sequence rather than inferred from its current state.

:::tip
When a customer disputes a price or a delivery date, the audit history on the document usually settles it faster than searching email.
:::

## Reports

The **Reports** tab summarises the sales pipeline, drawing on the same documents the worklists use, so the numbers reconcile with what the team sees day to day.

Access requires `access_sales_reports`.

Cancelled documents are excluded from the totals, so a cancelled order does not inflate the pipeline.

## Customer sales history

Each customer has a **sales history** view covering their documents and transactions in one place — what they have been quoted, what they ordered, what was invoiced and what they have paid, together with their credit position.

:::tip
Open the customer's sales history before approving a discount or a credit override. It shows in one screen whether this is a reliable payer or one already running at their limit.
:::
