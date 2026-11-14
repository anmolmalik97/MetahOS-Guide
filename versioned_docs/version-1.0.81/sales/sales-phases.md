---
sidebar_position: 2
---

# Sales Phases & Workflow

This page walks through the Sales workflow from customer to approved order. Invoicing and payment collection are covered separately in [Invoices & Payments](./invoices-and-payments.md).

## At a glance

```steps
fa-user | Customer | This is the person we are helping.
fa-clock-o | Quotation (DRAFT) | We make a price list to share.
fa-circle-o | SENT | Here is what happens at this step.
fa-clock-o | Order (PENDING) | We place the order, like ordering food.
fa-circle-o | RECEIVED | Here is what happens at this step.
fa-check | CONFIRMED | Here is what happens at this step.
fa-mobile | APPROVED | A grown-up checks and says "yes, go ahead!"
```

## Step 1: Set up a customer

Before you can quote or order, the customer must exist in the Sales customer master.

A customer record requires:

- **Name** (2–120 characters)
- **Mobile** — a 10-digit number
- **Email** — a valid email address
- **GSTIN** — a valid GST identification number
- **Billing address** and **Shipping address** (5–500 characters each)

Customers are also mapped to one or more **assigning authorities** (sites). Either tick **For all authorities** to make the customer available everywhere, or select the specific sites the customer belongs to.

:::caution
Mobile, email and GSTIN must be unique. If you try to save a customer that matches an existing one on any of these, the system blocks the save and tells you which field clashed. Customers can be **disabled** rather than deleted, which keeps their history intact while preventing new transactions.
:::

## Step 2: Create a quotation

A quotation captures a priced proposal for a customer.

1. Choose the **customer** and the **assigning authority** they will be billed under.
2. Pick the **store** the items will be fulfilled from.
3. Choose the **order type** — `purchase` or `workorder`.
4. Add **line items**. For each item set the quantity, rate, GST percent and any line discount. If you leave the rate or GST blank, the system fills them from the item master.
5. Optionally apply an **overall discount** (percent or amount) across the whole quotation.

New quotations start in **DRAFT**. The system calculates the full GST-aware totals as you build the quotation.

:::note Document numbering
Quotations are numbered automatically in the form `QT-<year>-<sequence>`. Orders use `SO-<year>-<sequence>`.
:::

## Step 3: Send and approve the quotation

A quotation moves through these statuses:

| Status | Meaning |
| --- | --- |
| `DRAFT` | Being prepared; fully editable. |
| `SENT` | Shared with the customer for approval. |
| `APPROVED` | Accepted — a sales order is created and stock is reserved. |
| `CANCELED` | No longer valid. |

- **Send** moves a `DRAFT` quotation to `SENT`.
- **Approve** moves a `SENT` quotation to `APPROVED`. Approval creates a linked **sales order**, then **reserves the stock** for every line item against the chosen store.
- **Cancel** is allowed only while the quotation is `DRAFT` or `SENT`. An `APPROVED` quotation cannot be cancelled.

:::caution Stock availability
Approval checks **effective availability** (physical stock minus existing reservations) for every line. If any item does not have enough effective stock at the store, approval is rejected and the shortfall for each item is reported.
:::

## Step 4: Work the sales order

Orders can also be created directly (without a quotation). Either way, the order moves through this lifecycle:

| Status | Meaning |
| --- | --- |
| `PENDING` | Created; stock reserved; still editable. |
| `RECEIVED` | Marked as received. |
| `CONFIRMED` | Confirmed after being received. |
| `APPROVED` | Final approval — reserved stock is consumed from inventory. |
| `CANCELED` | Cancelled; reservations released back to stock. |

The actions follow a strict order:

1. **Receive** — only a `PENDING` order can be marked received.
2. **Confirm** — only a `RECEIVED` order can be confirmed.
3. **Approve** — only a `CONFIRMED` order can be approved. On approval the system re-checks availability and then **consumes** the reserved stock, turning the reservation into an actual inventory deduction.

Editing is only possible while the order is `PENDING`. Editing re-validates availability and re-creates the stock reservations for the new line items.

:::tip Cancelling an order
Cancelling a `PENDING`, `RECEIVED` or `CONFIRMED` order **releases its reservations** so the stock becomes available again. An `APPROVED` order cannot be cancelled because its stock has already been consumed.
:::

## How stock reservation works

When a quotation is approved or an order is created, MetahOS writes a **stock reservation** for each line item. A reservation tracks the quantity reserved, released and consumed, and carries a status:

- `ACTIVE` — currently holding stock for the order.
- `RELEASED` — returned to available stock (e.g. order cancelled or edited).
- `CONSUMED` — deducted from inventory on order approval.

This reservation system is what prevents the same units of stock from being promised to two different orders at once.
