---
sidebar_position: 1
---

# Sales & CRM Overview

The Sales module brings B2B-style quoting, ordering, invoicing and payment collection into MetahOS. It is built around a small set of connected records — **Customers, Quotations, Orders, Invoices and Payments** — that move through a controlled workflow with stock reservation, GST-aware totals and a full audit trail of who did what and when.

The module was introduced in two phases. Phase 1 established the core records and workflow; Phase 2 added invoicing, payments, customer advances and overdue automation.

## At a glance

```steps
fa-user | Customer | This is the person we are helping.
fa-clock-o | Quotation | We make a price list to share.
fa-shopping-cart | Order | We place the order, like ordering food.
fa-money | Invoice | We make a bill that shows what to pay.
fa-money | Payment | Money is paid and counted. Cha-ching!
fa-circle-o | Advance | Here is what happens at this step.
fa-cubes | Stock | We update how many things we have.
```

## What the Sales module manages

- **Customers** — the organisations or individuals you sell to, with billing and shipping details, GSTIN and the assigning authorities they are mapped to.
- **Quotations** — priced proposals that can be sent for approval.
- **Orders** — confirmed sales orders that reserve stock and move through a receive / confirm / approve lifecycle.
- **Invoices** — billing documents raised against approved orders.
- **Payments** — money collected against invoices, including customer advances.

:::info How it fits together
Each record links to the next. A quotation can be approved into an order, an approved order can be invoiced, and payments are recorded against invoices. Every document keeps a **snapshot** of the customer it was raised for, so historical documents stay accurate even if the customer master is later edited.
:::

## Phase 1 — Foundations

Phase 1 set up the Sales module and its core workflow:

- Customer master with validation (10-digit mobile, valid email, valid **GSTIN**, billing and shipping addresses).
- Quotation lifecycle with `DRAFT`, `SENT`, `APPROVED` and `CANCELED` statuses.
- Sales order lifecycle with `PENDING`, `RECEIVED`, `CONFIRMED`, `APPROVED` and `CANCELED` statuses.
- **Stock reservation** — approving a quotation or creating an order reserves the required item quantities against the chosen store so they cannot be double-sold.
- GST-aware totals with line-level discounts and an optional overall discount.

## Phase 2 — Invoices, Payments & automation

Phase 2 completed the order-to-cash cycle:

- **Invoices** raised against approved orders, with invoice date, due date and automatic status (`PENDING`, `PAID`, `OVERDUE`, `CANCELED`).
- **Payments** recorded against invoices across multiple methods, with partial payment support.
- **Customer advances** — money taken before an invoice exists, which can later be applied to invoices.
- **Overdue automation** — a scheduled job flips unpaid invoices past their due date to `OVERDUE`.

## Money, discounts and GST

Totals are calculated consistently across quotations, orders and invoices:

- Each line has a quantity, rate, optional line discount and a GST percentage.
- An **overall discount** can be applied as `NONE`, `PERCENT` or `AMOUNT`, and is allocated proportionally across lines before tax.
- The system reports a `subTotal`, `discountTotal`, `taxableTotal`, `gstTotal` and `grandTotal` so the breakdown is always transparent.

## Audit trail

Every Sales record stores **createdBy** and **updatedBy** (name, user ID and user type). Orders additionally record **approvedBy / approvedAt**, **receivedBy / receivedAt** and **confirmedBy / confirmedAt**, and cancelled invoices and payments capture **canceledBy / canceledAt**. This gives you a complete history of each document.

## Where to go next

- [Sales Phases & Workflow](./sales-phases.md) — the full lifecycle of quotations and orders.
- [Invoices & Payments](./invoices-and-payments.md) — billing, collection and advances.
- [Leads Management](./leads-management.md) — follow-up and lead resolution.
- [PRM Enhancements](./prm-enhancements.md) — counsellor numbers and fitness reports.
