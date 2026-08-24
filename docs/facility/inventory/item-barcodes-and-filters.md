---
sidebar_position: 50
---

# Item Barcodes & Inventory Filters

The Inventory Management screen (**Facility > Inventory**) lets you search, filter and print barcodes for every stock item across one or all stores. This page covers the barcode printing, the store / type / par-level / ABC-VED filters and the improved status messages introduced in recent releases.

## At a glance

```steps
fa-cubes | Facility > Inventory | Here is what happens at this step.
fa-cubes | Scope to store / all stores | Here is what happens at this step.
fa-mobile | Apply filters | We pick only what we want to see.
fa-cubes | Item type | Here is what happens at this step.
fa-circle-o | Par / critical level | Here is what happens at this step.
fa-clock-o | Drug schedule | We pick a time on the calendar.
fa-circle-o | ABC-VED matrix | Here is what happens at this step.
fa-barcode | Print item barcode (encodes item ID) | We add a barcode so nothing gets lost.
fa-download | Download Stocks / Items | We update how many things we have.
```

## Printing an Item Barcode

Each item row carries a **Print Item Barcode** action. The printed barcode encodes the item's internal ID, so it scans cleanly anywhere an item lookup is available (Purchase Requisition, Inward, Outward, billing search, etc.).

## Step 1: Open the item list

Go to **Facility > Inventory**. Use the store selector at the top right to scope the list to a single store, or choose the **All stores** option to view stock across every store you have access to.

## Step 2: Find the item and print

Locate the item, then click the printer icon in its row. MetahOS generates a barcode label PDF for that item and sends it to print.

:::tip
The item search box (and the search used in Purchase Requisition / Work Order item selectors) matches on **name**, **code** and **barcode**, so you can scan or type a barcode to jump straight to an item.
:::

## Filtering the Inventory List

The toolbar above the inventory table provides several independent filters. They can be combined, and the list refreshes as soon as a filter changes.

### Item type

A dropdown lets you restrict the list to a single inventory type — Medicine, Patient Consumable, Site Consumable, Reagent, Work Item, Supply Items, Stationary, Asset or Other Inventory Item. Choose **Show All** to clear the type filter.

### Par level

The par-level dropdown shows:

- **Showing All Items** — no par-level filter.
- **Items @ Par Level** — items whose available quantity has dropped to the alert par level.
- **Items @ Critical Par Level** — items whose available quantity has dropped to the critical par level.

### Drug schedule

For scheduled drugs, the schedule dropdown filters to **H1**, **H**, or **Show Both**.

### ABC-VED matrix

Click the **Filters** (funnel) button to open the **Apply Filters** dialog and choose one or more **ABC-VED** classifications. The system validates that you pick a sensible combination — at least one of the ABC classes (A, B, C) together with at least one of the VED classes (V, E, D). If the pair is invalid you will see the message **"Please Select Correct ABC-VED Pairs"** and the filter will not apply. A red **Reset Filters** button appears whenever an ABC-VED filter is active.

:::note
The inventory list de-duplicates results so each distinct item appears once even when it is stocked across several batches or stores. This avoids the repeated rows that earlier versions could show when viewing **All stores**.
:::

## Stock Expiry Alerts

The **Stocks Expiry** button shows a live badge with the number of items expiring in the next 30 days. The count refreshes automatically every couple of minutes while the tab is in focus. Click the button to open the expiry filter and review the affected batches.

## Exporting and Printing the List

- The green **Download Stocks** button exports the current stock detail as a CSV.
- The green **Download Items** button generates a printable item list that respects the active type, par-level, schedule, store and ABC-VED filters.
