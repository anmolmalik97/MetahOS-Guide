---
sidebar_position: 3
---

# Invoices & Payments

Invoicing and payment collection were added to the Sales module in Phase 2. They close the order-to-cash loop: an approved order is invoiced, payments are recorded against the invoice, and overdue invoices are flagged automatically.

## At a glance

```steps
fa-money | Invoice raised | We make a bill that shows what to pay.
fa-clock-o | Waiting for payment | The bill waits in line to be paid.
fa-bell | Overdue | If it is late, it gets flagged for a nudge.
fa-check | Paid in full | Money is paid and counted. Cha-ching!
fa-times | Cancelled | If nothing was paid, we can put it away.
```

## Step 1: Raise an invoice

An invoice can only be raised against an **approved** sales order.

1. Select the approved **order** and confirm the **customer** matches the order.
2. Set the **invoice date** (defaults to today) and the **due date** (defaults to the invoice date).
3. Optionally adjust the **overall discount**; otherwise the order's discount is carried over.

The invoice copies the order's line items and recalculates the GST-aware totals. Each order can have **only one invoice** — if an invoice already exists for the order, the system returns the existing one rather than creating a duplicate.

:::note Document numbering
Invoices are numbered per year in the form `INV-<year>-<sequence>`.
:::

## Invoice statuses

An invoice's status is derived automatically from what has been paid and the due date:

| Status | Meaning |
| --- | --- |
| `PENDING` | Not yet fully paid and not past due. |
| `PAID` | Fully paid (paid amount covers the grand total). |
| `OVERDUE` | Unpaid and past the due date. |
| `CANCELED` | Cancelled before any payment was taken. |

:::caution Editing and cancelling invoices
An invoice can only be **edited** or **cancelled** while its paid amount is still zero. Once any payment (including an applied advance) has been recorded, the invoice is locked. A cancelled invoice cannot be edited or accept payments.
:::

## Step 2: Record a payment

Payments are recorded against an invoice and reduce its outstanding balance.

For each payment you record:

- The **amount** (must be greater than zero and cannot exceed the invoice's outstanding amount).
- The **payment date**.
- The **payment method** — one of `NEFT`, `UPI`, `CHEQUE`, `CASH`, `RTGS`, `IMPS`, `CARD` or `OTHER`.
- An optional **transaction reference** and **notes**.

When a payment is recorded:

- The invoice's paid amount increases.
- If the total paid now covers the grand total, the invoice becomes `PAID`; otherwise the payment is marked `PARTIAL` and the invoice stays `PENDING` (or `OVERDUE`).

:::note Document numbering
Payments are numbered per year in the form `PAY-<year>-<sequence>`.
:::

## Customer advances

Sometimes a customer pays before an invoice exists. MetahOS handles this through **advances**.

- A payment recorded **without** a linked invoice is treated as an **advance credit** for that customer.
- The customer's **advance balance** is the total of advance credits minus advances already applied to invoices.
- When raising an invoice you can apply part of the customer's advance balance immediately. The applied amount cannot exceed either the advance balance or the invoice total.

The advance application is recorded using the special `ADVANCE` payment method and is flagged as an advance application so it is tracked separately from fresh money.

:::tip Checking the balance
The customer's advance balance can be looked up at any time, broken down into total advance credits, advances already applied, and the remaining balance available to use.
:::

## Voiding (cancelling) a payment

A payment can be voided. When you void a payment:

- If it was applied to an invoice, the invoice's paid amount is reduced and its status is recalculated.
- If it was an unapplied **advance**, the system checks that the advance has not already been spent on invoices. If it has, the void is blocked because the money is no longer available to reverse.

## Overdue automation

A scheduled job, **Overdue invoice refresh**, runs periodically and moves any `PENDING` invoice whose due date has passed into the `OVERDUE` status. This keeps your receivables view accurate without manual intervention.

:::info
The job reports how many invoices it matched and how many it updated each time it runs, so the change is fully auditable in the server logs.
:::
