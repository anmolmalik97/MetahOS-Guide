---
sidebar_position: 51
---

# Package Management & Pricing

A **package** bundles several services or items into one billable product (for example a health-check package or a surgery package). Package Management is available under **Facility**.

## At a glance

```steps
fa-cubes | Add line items | Here is what happens at this step.
fa-circle-o | Total (excl. GST) | Here is what happens at this step.
fa-circle-o | GST Total | Here is what happens at this step.
fa-circle-o | Net Total = Total + GST | Here is what happens at this step.
fa-money | Override price set? | Here is what happens at this step.
fa-cubes | Package Total = Net Total | Here is what happens at this step.
fa-cubes | Package Total = fixed price + GST | Here is what happens at this step.
fa-money | Billed; components shown on bill | Here is what happens at this step.
```

## Building a Package

Add the constituent line items to the package. As you add items, MetahOS continuously calculates:

- **Total** — the sum of the line items' prices, excluding GST.
- **GST Total** — the GST across the line items.
- **Net Total** — total plus GST.
- **Package Total** — the final, billable package price (the whole package price you set, plus package-level GST). When you set a single overall package price, that price is used in place of the summed line-item net total.

This means you can either let the package price roll up from its items, or override it with a fixed whole-package price; the **Package Total** always reflects the price the patient is actually billed.

:::tip
The package screen also shows the **original** totals (the pre-discount sum of the items) next to the package price, so you can see how much the bundle discounts against buying each item individually.
:::

## Packages on the Bill

When a package is billed, the bill and the printed bill now itemise the **package's component items** underneath the package line, so patients and auditors can see exactly what the package contained. See [Bill Content & Printing](../billing/bill-content-and-printing.md) for details.
