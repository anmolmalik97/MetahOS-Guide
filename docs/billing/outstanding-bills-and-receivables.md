---
sidebar_position: 7
---

# Outstanding Bills & Receivables

The **Outstanding Bills** worklist tracks what payers still owe. It is where receivables are aged, chased and exported for reconciliation.

## At a glance

```steps
fa-money | Bill raised against a payer | The charge sits with the payer, not the patient.
fa-list | Appears as outstanding | It is listed until it is settled.
fa-filter | Filter by site and date | Narrow to the set you are reconciling.
fa-file-excel-o | Export | Take the list out for the payer or for finance.
fa-check | Settled | The bill drops off the outstanding list.
```

## The worklist

Each row identifies both the patient and the site the bill belongs to:

| Column | Shows |
| --- | --- |
| **UHID** | The patient's unique hospital ID, so a row can be tied back to the patient record. |
| **Assigning Authority** | The site the bill was raised at. |

Having the site on the row matters where one payer is billed from several facilities — the receivable can be attributed to the location that generated it rather than to the organisation as a whole.

## Filtering

Narrow the list by:

- **Assigning authority** — one site at a time.
- **Date range** — a from and to date.

## Exporting

Export the filtered list for sending to the payer or passing to finance. The export carries the same columns as the screen, including **UHID** and **Assigning Authority**, and the file is named after the site and period it covers so exports for different sites do not get confused with each other.

:::tip
Export per site and per month. A single combined export is harder for a payer to reconcile and harder for you to follow up when only part of it is disputed.
:::
