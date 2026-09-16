---
sidebar_position: 6
---

# Proforma Invoices

A **proforma invoice** sits between a quotation and a real invoice: it is a formal, priced document the customer can raise a purchase order or an advance payment against, without committing anything to your books.

## At a glance

```steps
fa-file-text-o | Draft | The proforma is prepared but not sent.
fa-paper-plane | Sent | The customer receives it.
fa-clock-o | Pending approval | An approver has to sign it off.
fa-check | Accepted | The customer agrees to it.
fa-exchange | Converted | It becomes a sales order.
fa-times | Rejected or cancelled | It is closed without converting.
```

## The proforma lifecycle

| Status | Meaning |
| --- | --- |
| `DRAFT` | Being prepared. Editable. |
| `SENT` | Issued to the customer. |
| `PENDING_APPROVAL` | Waiting on an internal approver. |
| `ACCEPTED` | The customer has accepted it. |
| `CONVERTED` | It has been turned into a sales order. |
| `REJECTED` | The customer declined it. |
| `EXPIRED` | Its validity period has passed. |
| `SUPERSEDED` | A newer proforma has replaced it. |
| `CANCELED` | Withdrawn. |

## Advance payments

A proforma tracks how much of it has been paid in advance:

| Payment status | Meaning |
| --- | --- |
| `UNPAID` | No advance received. |
| `PARTIALLY_ADVANCED` | Part of the value has been paid up front. |
| `FULLY_ADVANCED` | The whole value has been paid up front. |

This lets you hold dispatch until an advance has landed, without having to raise a tax invoice first.

## Approval steps

A proforma can require approval before it goes out, through a configured set of approval levels. Each step records its level, its name and the role that has to act on it, so the document carries its own approval trail.

| Action | Permission |
| --- | --- |
| View proforma invoices | `access_sales_proforma_invoice` |
| Create | `create_sales_proforma_invoice` |
| Edit | `edit_sales_proforma_invoice` |
| Send to the customer | `send_sales_proforma_invoice` |
| Approve | `approve_sales_proforma_invoice` |
| Convert to an order | `convert_sales_proforma_invoice` |
| Cancel | `cancel_sales_proforma_invoice` |
| Extend validity | `extend_sales_proforma_validity` |

## Extending validity

A proforma has a validity period, after which it expires. Rather than re-issuing the document, a user with `extend_sales_proforma_validity` can **extend** it, which keeps the same reference and its history intact.

:::tip
Extending is better than re-issuing when the customer is simply slow to respond — the advance payments and approvals already recorded against the proforma stay attached to it.
:::

## Printing

A proforma can be downloaded as a PDF for sending to the customer, laid out with your letterhead, the line items, GST breakdown and totals.
