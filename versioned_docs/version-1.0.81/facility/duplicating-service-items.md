---
sidebar_position: 52
---

# Duplicating Service Items

Service items can be duplicated into another site or authority rather than being rebuilt by hand. When you duplicate, you choose how the **contract pricing** should be handled.

## At a glance

```steps
fa-files-o | Choose items to duplicate | Pick the services you want to copy.
fa-building | Pick the target | Choose where they should be created.
fa-question-circle | Choose a contract option | Decide how prices should carry over.
fa-check | Items created | The copies are created and are ready to bill.
```

## Contract handling

The General Duplicate flow offers two options:

### Copy each item's contract (default)

Each item's existing contracts are copied across, matched by name. This is the original behaviour and is right when you are replicating a site's pricing as-is.

### Select contract manually

The source contracts are replaced with a contract you choose:

- Each duplicated item is given its **base price** under the chosen contract, matched by name for each target authority.
- A target that does not have that contract gets no contract row.
- If you leave the contract unselected, the items are duplicated with no contract at all.

:::note Items without a contract are still billable
Billing falls back to the item's own price when there is no contract row, so an item duplicated without a contract can still be charged. Add the contract later when the pricing is agreed.
:::

Base price, GST and cost values are always copied, whichever option you choose.

:::tip
Use **Select contract manually** when you are opening a new site that will sell the same services on different commercial terms — it avoids copying in a pricing structure you then have to unpick.
:::
