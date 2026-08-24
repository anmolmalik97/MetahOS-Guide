---
sidebar_position: 5
---

# Vendor Payouts (Payments Worklist)

The **Payments Worklist** in Bill Management is where approved vendor invoices are paid. Invoices that have been inwarded, approved and (where applicable) had their voucher created appear here grouped by vendor and invoice, ready to be paid singly or in bulk.

## At a glance

```steps
fa-mobile | Approved invoice | A grown-up checks and says "yes, go ahead!"
fa-money | Generate purchase voucher | Here is what happens at this step.
fa-money | Payments Worklist | Money is paid and counted. Cha-ching!
fa-money | Pay how? | Here is what happens at this step.
fa-mobile | Send OTP | Here is what happens at this step.
fa-money | Initiate payment (file seq no.) | Money is paid and counted. Cha-ching!
fa-money | Sync payment status | Money is paid and counted. Cha-ching!
fa-circle-o | Mark Paid / Partial Paid | Here is what happens at this step.
fa-check | SUCCESSFUL / PARTIAL / PROCESSING | Here is what happens at this step.
```

## What Shows in the Worklist

The worklist aggregates approved purchase/work-order invoices and shows, per vendor and invoice: the invoice amount, GST, TDS, net payable amount, paid / unpaid status and the related requisition and purchase order. You can filter by store (including all stores), invoice number, invoice due date range, payment generation status and order type (purchase vs. work order), and search by requisition number, PO number or invoice number.

## Generating a Payment / Voucher

Approving an invoice can create a **purchase voucher** automatically and assign a purchase number, then mark the invoice as payment-generated. From there the invoice can be paid.

## Bulk Payment

Select multiple invoices and open the **Bulk Payment** dialog. You choose the vendor bank account to pay into, set the payment date, and the dialog totals the amount across the selected invoices before you submit.

## Bank Transfer Flow

For sites integrated with a bank, vendor payouts are pushed to the bank's payment middleware. The flow is:

1. **Send OTP** — an OTP is requested against the payment **reference number**. The system first checks that there are still vendors left to pay (it will tell you if all selected vendors are **already paid** or **currently in process**).
2. **Initiate Payment** — you supply the OTP and optional remarks; the payment file is submitted and a **file sequence number** is returned and recorded.
3. **Sync Payment Status** — the status of the submitted file is polled and each invoice's status is updated (e.g. **PROCESSING**, **SUCCESSFUL**, **PARTIAL PAID**).

See [Bank Integration & Partial Payments](../esi-cghs/bank-integration-and-partial-payments.md) for the ICICI / CIB integration and how partial payments are handled.

## Manual Payment Recording

Where a payment is settled outside the bank integration, you can mark an invoice **Paid** or **Partial Paid** directly. A partial payment records the part paid and leaves the remaining balance outstanding against the invoice and vendor; a full payment clears the net payable and records the UTR / cheque reference and who completed it.
