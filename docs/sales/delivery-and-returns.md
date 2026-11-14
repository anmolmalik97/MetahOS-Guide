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
| Pack the order | **Pack sales orders** |
| Dispatch the order | **Dispatch sales orders** |

## Delivery challans and delivery notes

Delivery is recorded with two documents:

- A **delivery challan** accompanies the goods when they leave. It is raised against the order and lists what is being dispatched.
- A **delivery note** records what was actually delivered, against a challan.

Both can be issued and cancelled, and both can be downloaded as a PDF to travel with the consignment.

| Action | Permission |
| --- | --- |
| View delivery | **View sales delivery** |
| View challans | **View delivery challans** |
| Create a challan | **Create delivery challans** |
| Cancel a challan | **Cancel delivery challans** |
| View delivery notes | **View delivery notes** |
| Create a delivery note | **Create delivery notes** |
| Cancel a delivery note | **Cancel delivery notes** |

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
| View returns | **View sales returns** |
| Create a return | **Create sales returns** |
| Accept a return | **Accept sales returns** |
| Cancel a return | **Cancel sales returns** |

## Credit notes

An accepted return is settled with a **credit note**, which credits the customer for the value of the goods returned.

| Action | Permission |
| --- | --- |
| View credit notes | **View credit notes** |
| Create a credit note | **Create credit notes** |
| Cancel a credit note | **Cancel credit notes** |

:::caution
Accepting a return and issuing a credit note are separate steps with separate permissions. Accepting the goods back does not automatically credit the customer — that stays a deliberate commercial decision.
:::

Returns and credit notes can both be downloaded as PDFs for the customer's records.
