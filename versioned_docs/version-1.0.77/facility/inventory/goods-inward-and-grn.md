---
sidebar_position: 51
---

# Goods Inward & Goods Received Notes

When stock physically arrives against a purchase, you record it through **Inward**. This creates the stock, captures invoice details and produces a **Goods Received Note (GRN)**.

## At a glance

```steps
fa-cubes | Stock arrives | We update how many things we have.
fa-file-text-o | Open inward form | Here is what happens at this step.
fa-barcode | Scan barcode or search item | We add a barcode so nothing gets lost.
fa-truck | Enter batch, qty, MRP, cost, GST, vendor | A shop sends us the things we ordered.
fa-money | Enter invoice date | We make a bill that shows what to pay.
fa-money | Due date = invoice date + credit period | We make a bill that shows what to pay.
fa-cubes | Save inward → create stock | We update how many things we have.
fa-file-text-o | Goods Received Note (view / print) | We check the box and put things on the shelf.
```

## Recording an Inward

Open the item in **Item Manager** (or use the multi-item inward flow) and complete the inward form. Typical fields include batch number, quantity, free quantity, MRP, selling MRP, cost / buying price, GST, scheme discount, vendor, requisition number and the invoice date.

## Invoice Date Rules

By default the **Invoice Date** cannot be earlier than one year ago. This guards against accidental back-dating of stock receipts.

The expected **Invoice Due Date** is derived from the invoice date plus the credit period you enter, so changing the invoice date recalculates the due date.

## Goods Received Notes (GRN)

After an inward is saved, the receipt is recorded as a **Goods Received Note**. You can view and print the **Goods Received Notes (GRN)** for a receipt from the inward flow.

:::note
This document used to be labelled "Goods Receipt Note". It is now consistently called **"Goods Received Note"** throughout MetahOS. The behaviour is unchanged — only the wording was corrected.
:::

## Barcodes on Inward

The inward and multi-inward screens support barcode entry, so received items can be scanned in rather than searched by name. The same barcode value printed from the Inventory list is recognised here.
