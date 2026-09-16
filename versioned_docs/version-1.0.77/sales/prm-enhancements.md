---
sidebar_position: 5
---

# PRM Enhancements

The Patient Relationship Management (PRM) module is where teams manage patient outreach, calls and follow-ups. Recent sprints added counsellor numbers for outbound calling and a fitness report option in the All Patients view.

## At a glance

```steps
fa-circle-o | PRM module | Here is what happens at this step.
fa-users | Counsellor numbers | Here is what happens at this step.
fa-user | All Patients view | This is the person we are helping.
fa-circle-o | Outbound calls | Here is what happens at this step.
fa-file-text-o | Print Fitness Report | We make a neat report to share.
fa-comment | Medical surveillance feedback | Here is what happens at this step.
fa-file-text-o | Printable fitness report | We make a neat report to share.
```

## Counsellor numbers

PRM now exposes a set of **counsellor numbers** — the outbound caller IDs that counsellors use when reaching patients. These are served by the PRM API so the calling experience can present the correct numbers to the team.

## Fitness report in PRM

The **All Patients** view in PRM can show a **Print Fitness Report** action next to each patient, alongside the existing **Health Card** button. This lets the team generate a patient's medical surveillance / fitness report directly from the PRM worklist.

The fitness report is built from the patient's **medical surveillance feedback** form responses, mapping the captured fields into the printable report.

:::tip
Because the fitness report draws on the medical surveillance feedback form, make sure that form has been seeded and that patients have completed it — otherwise the report will have little data to render.
:::
