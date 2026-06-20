---
sidebar_position: 3
---

# Applying Discounts

When editing a bill you can apply a discount either as a fixed money amount or as a percentage of the bill.

## At a glance

```steps
fa-money | Edit bill | Here is what happens at this step.
fa-money | Discount type | We take a little off the price.
fa-circle-o | Subtract fixed rupee value | Here is what happens at this step.
fa-money | Convert % of bill total | Here is what happens at this step.
fa-money | Store discount amount | We take a little off the price.
fa-money | Printed bill shows amount discounted | We take a little off the price.
fa-money | IP bill | Here is what happens at this step.
```

## Amount vs. Percentage

The bill discount field has a **discount type** toggle with two options:

- **Amount** — enter a fixed rupee value to subtract from the bill.
- **Percentage** — enter a percentage; MetahOS converts it into the equivalent amount against the bill total.

The default discount type is **Amount**. Switch to **Percentage** when you want the discount to scale with the bill total instead of being a flat figure.

:::note
The discount type can be changed on a normal bill. For IP (in-patient) bills the discount type toggle is not editable from the in-patient bill view, so the discount is treated as a fixed amount there.
:::

:::tip
Whichever mode you choose, the bill stores and displays the resulting discount amount, so the printed bill always shows the actual money discounted.
:::
