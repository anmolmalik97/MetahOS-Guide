---
sidebar_position: 52
---

# Stock Outward & Transfer Reports

Stock leaves a store through **Outward** — either to fulfil an indent/transfer request from another store, for internal consumption, or as a **Correction** to fix an earlier entry. The **Outward Report** lists all outward movements and lets you filter and review them.

## At a glance

```steps
fa-cubes | Receiving store raises Indent | Here is what happens at this step.
fa-clock-o | Request PENDING? | We wait our turn in line.
fa-truck | Sending store Outwards (select batches) | Here is what happens at this step.
fa-cubes | Receiving store acknowledges inward | Here is what happens at this step.
fa-check | Transfer complete | All done — great job!
fa-truck | Outward Report | We make a neat report to share.
fa-filter | Filter by store | We pick only what we want to see.
fa-truck | Filter by outward type | We pick only what we want to see.
fa-circle-o | Correction entries (auditable) | Here is what happens at this step.
```

## The Outward Report

Open the **Outward Report** from the Item Manager. The report shows every outward movement and offers two filters in the toolbar:

### Store filter

A **Filter For Stores** selector (with assigning-authority support) scopes the report to a single store, or to **all stores** at once.

### Outward type filter

A **Filter For Outward Type** dropdown lets you narrow the report by the reason the stock went out, including a dedicated **Correction** option so you can isolate correction entries from normal transfers and consumption.

## Correction Outwards

When stock has been outwarded in error or with the wrong quantity, you can raise a **Correction** outward. Correction entries are tagged with the **Correction** outward reason so they remain visible and auditable in the Outward Report, and can be filtered out of (or focused on within) the report using the outward-type filter described above.

:::caution
A correction adjusts stock balances. Always confirm the batch and quantity before submitting, and record the reason, because the entry is permanent and shows in the audit trail.
:::

## Indent, Transfer & Acknowledgement Flow

Transfers between stores follow a request-and-acknowledge cycle:

1. The receiving store raises an **Indent** request with the requested quantity per item.
2. The sending store reviews the request and **Outwards** the stock (selecting batches), which can only be actioned while the request is **PENDING**.
3. The receiving store **acknowledges** the inward to complete the transfer.

The transfer screens display the **Requested Qty** for each line so the issuing store can compare it against available stock before dispatching.
