---
sidebar_position: 8
---

# Price Lists, Discounts & Credit Control

Three controls govern what a customer is charged and how much they are allowed to owe: **price lists**, **discount approval** and **credit limits**.

## At a glance

```steps
fa-list-alt | Price list applied | The customer's agreed rates are used.
fa-percent | Discount requested | A seller asks for more than the standard price allows.
fa-check | Discount approved | An approver signs the discount off.
fa-credit-card | Credit checked | The customer's outstanding balance is tested.
fa-ban | Blocked or overridden | The sale stops, or an authorised user lets it through.
```

## Price lists

A **price list** is a named set of rates that applies to a customer. Each list carries:

- A **name** and a **code**.
- A **currency** (defaults to INR).
- The **items** it prices.
- An **effective** period.
- An **active** flag.

When a document is raised for a customer on a price list, the item rates are taken from that list instead of the item's base price.

| Action | Permission |
| --- | --- |
| View price lists | `access_sales_price_list` |
| Create and edit price lists | `manage_sales_price_list` |

:::tip
Deactivate a superseded price list rather than editing it. The documents already raised under it keep referring to the rates they were priced at, and the history stays readable.
:::

## Discount approval

Discounts beyond what a seller may give on their own authority go to an approver. This applies to quotations, proforma invoices, orders and invoices alike.

A document showing a discount carries a status pill:

- **Discount Approval Pending** — the discount is not yet authorised.
- **Discount Approved** — it has been signed off.

An **Approve Discount** action appears on the document for users holding `approve_sales_discount`. It only appears while the discount is actually pending, so it never shows on a document that needs nothing.

## Credit limits

Each customer can carry a **credit limit**. Their credit usage — the limit, what has been invoiced, what has been paid and what is outstanding — is shown on the customer record.

When a transaction would take the customer past their limit, it is blocked and the reason is shown.

A user holding `override_sales_credit_limit` can let the transaction through anyway. The override is a deliberate, permissioned action rather than a warning that can be clicked past.

:::caution
The credit check is based on outstanding invoiced value. Cancelled documents are excluded from the calculation, so cancelling an invoice releases the credit it was consuming.
:::
