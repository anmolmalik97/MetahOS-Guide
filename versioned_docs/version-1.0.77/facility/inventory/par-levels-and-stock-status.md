---
sidebar_position: 54
---

# PAR Levels & Stock Status

Every inventory item can carry two thresholds — a **PAR level** and a **critical PAR level** — which together classify how much of it you are holding.

## At a glance

```steps
fa-cubes | Set the thresholds | Decide the PAR and critical levels for the item.
fa-balance-scale | Compare with stock | Current quantity is measured against them.
fa-flag | Item is classified | The item lands in one of four states.
fa-filter | Filter the list | Pull up just the items you need to act on.
fa-shopping-cart | Reorder | Raise a requisition for what is short.
```

## The four states

| State | When it applies |
| --- | --- |
| **Out of stock** | Nothing on hand. |
| **@ Critical Par Level** | Quantity is below the **critical** threshold — act now. |
| **@ Par Level** | Quantity is below the **PAR** threshold but above critical — reorder soon. |
| **In stocks** | Quantity is at or above the PAR threshold. |

## Filtering by state

The inventory list can be filtered to each of these states. The filters are evaluated against the item's own thresholds, so a filter returns exactly the items in that state and nothing else:

- **Out of stock** — no quantity on hand.
- **Critical** — at or below the critical threshold.
- **PAR** — below the PAR threshold but still above the critical one, so the genuinely critical items are not mixed in.
- **In stock** — at or above the PAR threshold.

:::tip
Run the **Critical** filter as a daily task and the **PAR** filter weekly. Critical tells you what to chase today; PAR tells you what to put on the next purchase requisition.
:::

:::note
An item with no thresholds set is only ever classed as out of stock or in stock — there is nothing to compare against for the intermediate states. Set both levels on the items that matter so they can be managed by exception.
:::

See [Purchase Requisition & Orders](../purchase-requisition-and-orders.md) for turning a shortfall into an order.
