---
sidebar_position: 7
---

# Subscription Status & Read-Only Mode

A MetahOS deployment can be linked to the **M16 Super Admin Portal**, where your subscription is managed. Once linked, MetahOS shows payment reminders to the people responsible for paying, and — only if the subscription stays overdue and your contract allows it — can switch to **read-only mode** until payment is received. The Super Admin Portal can also turn modules on and off for your deployment.

Nothing on this page applies until your deployment has been linked by M16.

## At a glance

```steps
fa-calendar | Payment coming due | Selected roles see a reminder bar and a daily reminder.
fa-credit-card | Pay now | Opens your subscription statement to pay.
fa-exclamation-triangle | Still unpaid after the grace period | MetahOS may switch to read-only.
fa-lock | Read-only | Records can be viewed but not changed.
fa-refresh | Payment received | Full access returns within about a minute.
```

## Payment reminders

Reminders are shown only to the **roles chosen for your organisation** in the Super Admin Portal. Other staff see nothing.

- A **bar across the top of the screen** gives the amount and due date, and — if read-only mode can follow — when it will start.
  - **Pay now** opens your subscription statement in a new tab.
  - **Hide for today** hides the bar until tomorrow, for you on that browser.
- Once a day, a **Subscription payment due** window shows the same information, with **Pay now** and **Remind me later**.

Reminders are not shown on Queue TV screens, kiosks, self check-in screens, to patients, or on printouts.

## Read-only mode

If the subscription remains overdue past the grace period agreed with M16, the deployment can switch to read-only mode. A red bar with a lock icon appears at the top of the screen and cannot be hidden. Staff who see payment reminders get **Pay now** and **I've paid — refresh** buttons; everyone else is asked to contact their administrator.

### What still works

You can **view** everything — records, lists, reports and searches. These also keep working, so patients are not affected:

- signing in and out, and changing or resetting a password;
- switching authority;
- the patient portal, online payments and patient bookings;
- integrations and webhooks;
- grievances, chat and public forms;
- Queue TV;
- printing prescriptions and sending PDFs to patients;
- lab barcode and scanner logs.

### What is blocked

Any change made by staff — saving a form, creating a bill, editing a record — is refused, and a **Changes not saved** window explains why. Nothing is lost from what was already saved.

### Getting back to full access

Pay from **Pay now**. Full access returns automatically: after a payment, MetahOS checks every few seconds for the next few minutes, and payments made elsewhere (for example from a payment link on another device) are picked up within about a minute. To check straight away, click **I've paid — refresh**. If the payment hasn't reached the portal yet, you're told to try again shortly.

:::info Safeguards
Read-only mode is never switched on without warning:

- It must be enabled for your deployment both in the Super Admin Portal and on your server.
- Payment reminders must have been showing for at least **72 hours** first.
- If your deployment has not been able to reach the Super Admin Portal for **14 days**, it stays at reminders only and never locks.
- M16 can pause enforcement at any time.
:::

## Modules managed by the Super Admin Portal

When module management is switched on for your deployment, the list of enabled modules — Worklist, IP, Lab, RAD, Pharmacy, Care, Camps, ABHA, Referral, Bill, IRMS, HR, Facility, Workflow, PRM, Marketing, Quality, Analytics and Dashboards — is set from the Super Admin Portal. Changes reach open browsers at their next status check, without a page reload.

## For administrators: linking a deployment

The link to the Super Admin Portal is set up on the server by the MetahOS team; until it is set up, nothing on this page is active. Read-only enforcement is switched on separately — without it, MetahOS stops at reminders. MetahOS keeps a signed copy of the subscription status and checks it locally, so it never waits on the Super Admin Portal, and keeps working on the last known status if the portal is unreachable.

Once linked, the older **Payment Required!** pop-up is no longer shown.
