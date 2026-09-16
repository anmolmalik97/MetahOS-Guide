---
sidebar_position: 53
---

# Expiry Date Tracking

Batch expiry dates are carried from goods receipt through to the printed GRN and the spreadsheet exports, so stock that is close to expiry can be found without opening each batch.

## At a glance

```steps
fa-truck | Goods arrive | A delivery is received at the store.
fa-calendar | Expiry captured per batch | Each batch records when it expires.
fa-print | Shown on the GRN | The printed receipt carries the expiry.
fa-table | In the exports | Expiry appears in CSV and invoice exports.
fa-search | Find expiring stock | Expiring batches can be picked out of a report.
```

## Expiry on the GRN

The Goods Receipt Note shows an **Exp Date** column against each line, both on screen and on the printed GRN, formatted as `MM/YY`.

Because the expiry is on the receipt itself, the person checking the delivery against the physical cartons can confirm the dates at the point of receipt, rather than discovering a short-dated batch later.

## Expiry in exports

The expiry date is included in:

- **CSV exports** of stock and inventory.
- **Single invoice exports**, so an invoice reconciled against a delivery shows what was actually received.

## Backdating an inward

A goods inward can be dated **up to five days back** from today. This covers the common case of stock physically received on a Friday and entered on the following Monday, without allowing arbitrary backdating.

The same five-day window applies to admissions dated in the past.

:::caution
Five days is the limit. A delivery older than that has to be reconciled another way — the window is deliberately short so stock movements stay close to when they actually happened.
:::
