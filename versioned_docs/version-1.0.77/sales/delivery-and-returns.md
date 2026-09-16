---
sidebar_position: 7
---

# Delivery & Returns

Once an order is approved, **Delivery** tracks the goods going out and **Returns** handles anything that comes back.

## At a glance

```steps
fa-shopping-cart | Order approved | The customer's order is confirmed.
fa-archive | Packed | The goods are picked and packed.
fa-truck | Dispatched | A challan is raised and the goods leave.
fa-check | Delivered | A delivery note records what arrived.
fa-undo | Return | Anything sent back is booked in.
fa-money | Credit note | The customer is credited for it.
```

## Packing and dispatch

An approved order moves through packing and dispatch, each gated by its own permission:

| Step | Permission |
| --- | --- |
| Pack the order | `pack_sales_order` |
| Dispatch the order | `dispatch_sales_order` |

## Delivery challans and delivery notes

Delivery is recorded with two documents:

- A **delivery challan** accompanies the goods when they leave. It is raised against the order and lists what is being dispatched.
- A **delivery note** records what was actually delivered, against a challan.

Both can be issued and cancelled, and both can be downloaded as a PDF to travel with the consignment.

| Action | Permission |
| --- | --- |
| View delivery | `access_sales_delivery` |
| View challans | `access_sales_delivery_challan` |
| Create a challan | `create_sales_delivery_challan` |
| Cancel a challan | `cancel_sales_delivery_challan` |
| View delivery notes | `access_sales_delivery_note` |
| Create a delivery note | `create_sales_delivery_note` |
| Cancel a delivery note | `cancel_sales_delivery_note` |

:::note Partial dispatch is supported
Quantities are tracked per line, so an order can be dispatched in more than one consignment. Each challan records what went in that consignment, and the order shows what is still outstanding.
:::

## Returns

A return is booked against what was delivered, and moves through its own short lifecycle:

| Status | Meaning |
| --- | --- |
| `DRAFT` | Being recorded. |
| `ACCEPTED` | The return has been accepted back into stock. |
| `CANCELED` | The return was withdrawn. |

| Action | Permission |
| --- | --- |
| View returns | `access_sales_returns` / `access_sales_return` |
| Create a return | `create_sales_return` |
| Accept a return | `accept_sales_return` |
| Cancel a return | `cancel_sales_return` |

## Credit notes

An accepted return is settled with a **credit note**, which credits the customer for the value of the goods returned.

| Action | Permission |
| --- | --- |
| View credit notes | `access_sales_credit_note` |
| Create a credit note | `create_sales_credit_note` |
| Cancel a credit note | `cancel_sales_credit_note` |

:::caution
Accepting a return and issuing a credit note are separate steps with separate permissions. Accepting the goods back does not automatically credit the customer — that stays a deliberate commercial decision.
:::

Returns and credit notes can both be downloaded as PDFs for the customer's records.
