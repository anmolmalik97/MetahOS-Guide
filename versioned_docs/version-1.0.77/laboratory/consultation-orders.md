---
sidebar_position: 11
---

# Consultation Lab Orders

When a doctor orders a lab test during a consultation — from the Doctor App or from the web — the order is attached to the **existing consultation bill** rather than opening a new one. The **Consultation Orders** tab under Lab is where the lab team finds and bills those orders.

## At a glance

```steps
fa-user-md | Doctor orders a test | During the consultation the doctor adds a lab test.
fa-list | Appears in Consultation Orders | The lab team sees it in its own tab.
fa-money | Billed onto the consultation bill | The charge is added to the bill that already exists.
fa-flask | Normal lab flow | From here the test behaves like any other lab order.
```

## The Consultation Orders tab

Open **Lab → Consultation Orders** to see the unbilled lab orders raised from consultations. The tab requires `access_lab_consultation_orders`.

The list adds an **Ordered By** column showing the prescribing doctor, so it is always clear who raised the request.

### Filtering the list

- **Cleared / not cleared** — switch between open orders and ones already closed off.
- **Doctor or department** — non-doctor users can narrow the list with the standard doctor selector.

:::info Doctors see their own orders
A signed-in doctor is restricted to the orders they prescribed. This is enforced on the server, not just hidden in the interface.
:::

## Billing a consultation order

1. Open the order from the Consultation Orders list.
2. A banner at the top of the modal shows where the order came from.
3. Select or adjust the lab tests to be billed.
4. Take payment.

The lab charge and its receipt are appended to the **consultation bill that already exists** — no second bill is created.

:::note The consultation fee is not charged twice
The first billing pass keeps the consultation fee exactly as it was and adds only the lab charge on top. Re-opening the billing modal after the order has been billed will not re-zero the baseline and charge again.
:::

The doctor who prescribed the test is recorded as the source doctor on the bill, so lab revenue is attributed correctly in doctor-earnings reports. Once the lab order is billed, the originating consultation is marked complete.

:::caution
The **Pay** button on the Consultation Orders table stays hidden until the lab side has been billed. This prevents anyone collecting the consultation-only amount and leaving the lab charge unpaid.
:::

## Creating an order from the lab screen

Doctors can also raise a consultation order directly, without going through the Doctor App. The action sits next to **Refresh** in the unbilled Consultation Orders table and requires `create_lab_consultation_order`.

1. Click **Create Consultation Order**.
2. Pick an existing patient or create a new one, and create the bill.
3. The OPD consultation line is booked at the doctor's configured rate.
4. Choose the lab tests in the picker that opens.

The lab lines are created unbilled at zero value; the lab operator sets the amount when they bill the order.

:::info Retries never double-book
Both the consultation and the lab booking are submitted with their own idempotency key, so a retried or double-clicked request cannot create a duplicate consultation or a duplicate set of lab orders.
:::

## Permissions

| Action | Permission |
| --- | --- |
| See the Consultation Orders tab | `access_lab_consultation_orders` |
| Create a consultation order | `create_lab_consultation_order` |
| Bill a consultation lab order | `bill_lab_order` |
| Clear or unclear an order | `clear_and_unclear_lab` |

Clearing a billed order reverses the lab package charges on the bill. Clearing an order that was never billed leaves the bill untouched.
