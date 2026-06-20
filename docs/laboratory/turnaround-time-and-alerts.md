---
sidebar_position: 6
---

# Turnaround Time & Alerts

This page covers per-test turnaround time (TAT) and the alerts MetahOS sends to pathologists.

## At a glance

```steps
fa-flask | TAT set per test | Here is what happens at this step.
fa-clock-o | Prioritise pending work | We wait our turn in line.
fa-mobile | Result submitted or approved | A grown-up checks and says "yes, go ahead!"
fa-bell | Alert type? | Here is what happens at this step.
fa-bell | Critical-result alert | The lab writes down what they found.
fa-bell | Pending reminder | We wait our turn in line.
fa-map-marker | Filter by permission and site access | We pick only what we want to see.
fa-user-md | Notify pathologists via messaging | A message is sent to say what happened.
```

## Turnaround time (TAT)

Each lab test can carry a **turnaround time** value, stored as `tat` on the test (a non-negative number, configured under **Manage Test**). TAT expresses the expected time to deliver a result for that test and is used to flag and prioritise pending work.

To set TAT:

1. Open the test under **Manage Test**.
2. Enter the **TAT** value.
3. Save.

:::note
TAT is validated on save — only a numeric, non-negative value is stored. Leaving it blank stores no TAT for the test.
:::

## Pathologist alerts

MetahOS can alert pathologists about lab results that need attention. Two kinds of alerts are sent:

- **Critical-result alerts** — raised when an approved/submitted result contains a **critical** parameter. A result is treated as critical when it is out of range and its interpretation category is one of `IC2`, `IC3`, `IC5`, `IC6`, `IC7` (or interpretation `CRITICAL`), or the parameter is explicitly flagged as a critical parameter. See [Parameters & Interpretation](./parameters-and-interpretation.md).
- **Pending alerts** — periodic reminders about reports still awaiting action.

### Who receives alerts

Alerts go to pathologists with the appropriate role. Recipients are further filtered so they only receive alerts for **authorities (sites) they can access** — a pathologist tied to specific sites will not be alerted about another site's results unless they have all-authority access.

:::info
Alerts are delivered via the messaging channel using dedicated templates for critical findings and pending reminders. Phone numbers are de-duplicated so a pathologist is not messaged twice for the same alert.
:::

:::tip
Assign the pathologist alert role to your senior pathologists and make sure their user record is tied to the correct sites, so critical findings reach the right person quickly.
:::
