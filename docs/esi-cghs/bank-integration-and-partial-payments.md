---
sidebar_position: 3
---

# Bank Integration & Partial Payments

MetahOS can pay vendor invoices directly through a bank's corporate internet banking (CIB) middleware — for example **ICICI** — instead of recording payments by hand. This page explains the integrated payout flow and how **partial payments** are reconciled.

## At a glance

```steps
fa-mobile | Send OTP for reference no. | Here is what happens at this step.
fa-mobile | OTP delivered | We hand the report to the right person.
fa-mobile | Initiate payment file (OTP) | Money is paid and counted. Cha-ching!
fa-circle-o | File sequence number | Here is what happens at this step.
fa-clock-o | Poll status (scheduled) | We pick a time on the calendar.
fa-check | SUCCESS / PARTIAL / IN-PROCESS / FAILED | Here is what happens at this step.
fa-map-marker | Map status, reconcile partial balance | Here is what happens at this step.
```

## How a Payout Is Built

When you initiate a bulk payout, MetahOS gathers every vendor transaction under the payment **reference number** that is not already **SUCCESSFUL** or **PROCESSING** and that has vendor bank details. For each it builds a payment instruction containing the creditor account number, creditor name, amount and IFSC code.

## The Payout Sequence

1. **Send OTP** — an OTP is requested for the reference number. Before sending, the system checks the selected vendors: if they are **all already paid** or **all currently in process**, it tells you and does not send an OTP.
2. **Initiate Payment** — you supply the OTP (and optional remarks). The payment file is posted to the bank middleware, which returns a **file sequence number**. MetahOS records this against each transaction's **bank logs** and sets the status to **PROCESSING**. If no file sequence number comes back, the payout is reported as failed.
3. **Status Sync** — MetahOS polls the bank for the file's status and updates each transaction. This also runs as a scheduled job that picks up any transactions still in **PROCESSING**.

## Status Mapping

The bank's per-transaction result is mapped to a MetahOS payment status:

| Bank result | MetahOS status |
| --- | --- |
| SUCCESS (full amount) | SUCCESSFUL |
| SUCCESS (less than the amount due) | PARTIAL PAID |
| IN-PROCESS | PROCESSING |
| FAILED | FAILED |

## Partial Payments

A payment is treated as **partial** when the amount the bank actually settled is at least ₹1 short of the amount due on the invoice. In that case:

- The transaction is marked **PARTIAL PAID**.
- The invoice's **net payable amount** is reduced to the remaining (pending) balance rather than zeroed out, so the outstanding amount stays visible and can be paid later.
- The part-payment details (amount, date, bank details) are recorded on the transaction's **partial payment** history.

When the bank reports the full amount as paid, the invoice's net payable is cleared to zero and the transaction is marked **SUCCESSFUL**.

:::note
Every status response from the bank is stored, and the bank logs on each transaction keep the file sequence number, requested amount, host reference and timestamps, giving a complete audit trail for each payout.
:::

:::caution
Partial payments leave a residual balance on the invoice. Review the **PARTIAL PAID** invoices in the Payments Worklist regularly so the remaining amounts are followed up and settled.
:::
