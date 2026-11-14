---
sidebar_position: 4
---

# SLA & Escalation

Each step in a workflow can carry a **service-level agreement (SLA)** — the time within
which the role at that step is expected to act. The Workflow Engine tracks this per step
and supports a **second-level SLA** for escalation when the first deadline passes.

## At a glance

```steps
fa-sitemap | Record arrives at step | The patient comes in for their turn.
fa-file-text-o | Record arrival time and due time | We pick a helper for the job.
fa-circle-o | Acted before the due time? | Here is what happens at this step.
fa-check | Record completion time | All done — great job!
fa-clock-o | First-level SLA breached | Here is what happens at this step.
fa-clock-o | Second-level SLA passed? | Here is what happens at this step.
fa-clock-o | Awaiting action | Here is what happens at this step.
fa-clock-o | Flag second-level SLA | Here is what happens at this step.
fa-bell | Auto-escalate if configured | If it waits too long, a bigger boss is told.
```

## How SLA Timing Works

When a record advances to a step that has an SLA, the engine records:

- **Assigned at** — when the record arrived at the step.
- **Due at** — the deadline, calculated from the step's first-level SLA hours.
- **Completed at** — set when the role finally acts, so the time taken is captured.

These timings are stored per step on the instance, so a record that visits several steps
keeps a full SLA trail rather than a single global timer.

## First- and Second-Level SLA

A step definition can define two thresholds:

- **First-level SLA hours** — the **first-level** deadline. Missing it marks the step as breaching its
  primary SLA.
- **Second-level SLA hours** — the **second-level** deadline used for escalation after the
  first one lapses.

When a record is sitting on a step whose second-level SLA has been triggered, the
instance's current state is flagged with **second-level SLA** so escalation and reporting
can treat it differently from a record that has only just become due. Some definitions
also include an automatic escalation transition that moves a breached record onward
automatically.

:::tip
Because SLA is defined per step, you can hold different roles to different deadlines in
the same workflow — for instance a tight first-reviewer SLA and a longer final-approver
SLA.
:::
