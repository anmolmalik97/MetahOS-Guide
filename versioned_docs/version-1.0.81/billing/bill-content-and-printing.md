---
sidebar_position: 1
---

# Bill Content & Printing

This page describes what appears on a bill and its printout. Most of the optional content is switched on or off per authority in **Worklist → Print Settings** — see [Print Settings](./print-settings.md).

## At a glance

```steps
fa-money | Bill | The bill is raised against an authority.
fa-cog | Print Settings for that authority | The authority's saved bill settings decide the layout.
fa-cubes | Package components | Any package lists the items it contains.
fa-barcode | Show Item Codes In Bill? | Adds a Code column when switched on.
fa-file-text-o | Show Memo Type In Bill? | Prints Cash Memo or Credit Memo when switched on.
fa-ban | Cancelled or refunded? | Status, who and when are printed on the bill.
fa-print | Printed bill | The final PDF.
```

## Package Component Items

When a bill contains a **package**, the bill detail and the printed bill list the **items that make up the package** beneath the package line. Patients can see precisely which services were included, and auditors can reconcile the package against its components.

## Registration Number

The patient's **registration number** is shown across the print bill. It is printed as **"Reg. No.: &lt;number&gt;"** in the patient information block so every printed copy of the bill carries the registration number consistently.

## Item Code

Each item's **item code** can be printed as a dedicated **Code** column. Switch on **Show Item Codes In Bill** in Print Settings.

## Payment & Memo Type

When **Show Memo Type In Bill** is switched on in Print Settings, the printed bill reflects the payment method used:

- A **self / cash** bill prints as a **Cash Memo**.
- A **credit / contract** bill prints as a **Credit Memo**.

When **Show Payment Strings In Bill** is switched on, card and cheque payments are summarised on the bill with their reference details (last four digits, transaction ID, bank, swipe machine for cards; cheque number, amount, bank, IFSC and date for cheques).

## Cancelled and Refunded Bills

A cancelled or refunded bill says so on the printout. These rows are printed only when they apply:

| Row | Shows |
| --- | --- |
| **BILL STATUS** | *Cancelled*, *Refunded*, or *Cancelled / Refunded*. |
| **CANCELLED BY** / **CANCELLED ON** | Who cancelled the bill, and when. |
| **REFUNDED BY** / **REFUNDED ON** / **REFUND AMOUNT** | Who made the **most recent** refund, when, and its amount. |

A cancelled bill still prints its line items, so the printout shows what was cancelled. Pharmacy bills always print in the pharmacy bill format. See [Cancelling & Refunding Bills](./cancellations-and-refunds.md).

## Which Settings a Bill Prints With

A bill prints with the Print Settings of the **authority the bill belongs to**, not the authority you are signed in to. Pharmacy bills use the **Pharmacy Bill** settings.

:::caution Blank header fields now print blank
The header and footer text come only from the saved Print Settings. If an authority's **Header Title**, **Subtitle**, **Contact** or **Footer Content** is left empty, that part of the bill prints empty — it no longer falls back to the hospital's name. The upgrade copies your existing settings to every authority, so bills look the same after upgrading; check any authority you add later.
:::

Bills print correctly even when optional fields are blank, and the NABL line no longer prints a placeholder where the certificate number is missing.
