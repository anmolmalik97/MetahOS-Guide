---
sidebar_position: 1
---

# Bill Content & Printing

This page describes what now appears on a bill and its printout, and the configuration that controls it.

## At a glance

```steps
fa-money | Bill | Here is what happens at this step.
fa-times | Patient block: Reg. No. | This is the person we are helping.
fa-cubes | Contains package? | Here is what happens at this step.
fa-cubes | List component items | Here is what happens at this step.
fa-money | showItemCodesInBill? | Here is what happens at this step.
fa-cubes | Add Item Code column | Here is what happens at this step.
fa-money | Payment method | Money is paid and counted. Cha-ching!
fa-circle-o | Cash Memo | Here is what happens at this step.
fa-credit-card | Credit Memo | Here is what happens at this step.
```

## Package Component Items

When a bill contains a **package**, the bill detail and the printed bill list the **items that make up the package** beneath the package line. Patients can see precisely which services were included, and auditors can reconcile the package against its components.

## Registration Number

The patient's **registration number** is shown across the print bill. It is printed as **"Reg. No.: &lt;number&gt;"** in the patient information block so every printed copy of the bill carries the registration number consistently.

## Item Code

The bill can optionally display each item's **item code** as a dedicated column.

## Payment & Memo Type

The printed bill reflects the payment method used:

- A **self / cash** bill prints as a **Cash Memo**.
- A **credit / contract** bill prints as a **Credit Memo**.

Card and cheque payments are summarised on the bill with their reference details (last four digits, transaction ID, bank, swipe machine for cards; cheque number, amount, bank, IFSC and date for cheques).
