---
sidebar_position: 50
---

# Purchase Requisitions, Orders & Work Orders

The **Purchase** area (**Facility > Purchase**) manages three related document types created from the same form:

- **Purchase Requisition (PR)** — an internal request to procure items.
- **Purchase Order (PO)** — a formal order placed on a vendor.
- **Work Order (WO)** — an order for work/services against a vendor and expense group.

## Workflow at a glance

```steps
fa-shopping-cart | Requisition raised | Someone writes a wish-list of things to buy.
fa-check | Approver review | A boss takes a look and decides.
fa-shopping-cart | Purchase order placed | We place the order, like ordering food.
fa-truck | Vendor supplies goods | A shop sends us the things we ordered.
fa-cubes | Goods received note | We check the box and put things on the shelf.
fa-check-circle | Stock updated | We update how many things we have.
```

## Creating a Requisition / Order

## Step 1: Open the create form

From the Purchase list, start a new document and choose the order type (Purchase Requisition, Purchase Order, or Work Order). The **Work Order** option is only offered when work orders are enabled for your site.

## Step 2: Fill in the header

Enter the requester details, **Requested Date**, expected **Delivery Date**, **Requested To** approver and an optional reason. You can attach a supporting PDF/JPEG file (up to 3 MB).

## Step 3: Add items

Add one or more item rows. Each row captures the item (searchable by name, code or barcode), quantity, expected price and GST; the line and overall totals are calculated for you.

## Required Fields by Order Type

The mandatory fields differ depending on the document type:

| Field | Purchase Requisition | Purchase Order / Work Order |
| --- | --- | --- |
| Requested To (approver) | Required | Required |
| Store | Required | Required |
| Preferred Vendor | **Not required** | Required |
| Requested Date | Optional | Required |

:::tip
**Vendor is no longer mandatory on a Purchase Requisition.** A requisition is an internal request, so you can raise it without choosing a vendor; the vendor is selected later when the requisition is converted into a Purchase Order. Vendor selection remains mandatory for Purchase Orders and Work Orders.
:::

The **Requested To** field is the approver the document is routed to. It is required on every document type (Purchase Requisition, Purchase Order and Work Order), so each request always has a named approver.

## Purchase Order Shows the Related Requisition

When a Purchase Order is generated from a Purchase Requisition, the PO and the downstream payment screens surface the **related requisition** alongside the PO. This lets approvers and the accounts team trace a PO back to the originating PR (and its status, creator and approver) without leaving the screen.

## Filtering, Searching and Staying on the Page

The Purchase list provides filters that persist as you work:

- **Status** — filter to a single document status. Your selection is remembered per document type (PR / PO / WO).
- **Store** — filter by store, including an **All stores** option. Your selection is remembered.
- **Requested To** — filter by the approver the document was routed to. Your selection is remembered.
- **Search** — free-text search across requisition number, PO number and invoice number.

:::note
After you approve, reject, hold or edit a document, the list refreshes **in place** — you stay on the same filtered view and page rather than being thrown back to the top of an unfiltered list. The store, status and Requested To selections are saved to your browser so they survive a refresh.
:::

## Approver / Requester Access

## The Purchase Order Letter (PDF)

Approved Purchase Orders can be downloaded as a formatted PO letter. The letter uses your site's branding from configuration.
