---
sidebar_position: 2
---

# Reviewing & Taking Action

The workflow list is where reviewers see records that need attention and act on them.
This page covers the filters that narrow the list and the single action control used to
commit a decision.

## At a glance

```steps
fa-sitemap | Workflow list | Here is what happens at this step.
fa-filter | Filter: Action Required or My Past Actions | We pick only what we want to see.
fa-file-text-o | Open a record | Here is what happens at this step.
fa-comment | Choose action and add comment | Here is what happens at this step.
fa-circle-o | Legal transition for your role? | Here is what happens at this step.
fa-times | Action rejected | Oops — it goes back to be fixed.
fa-check | Signature required? | Here is what happens at this step.
fa-times | Action blocked | Here is what happens at this step.
fa-paper-plane | Submit and commit | We send it off to the next person.
```

## Filtering the List

### Action filter

The primary filter answers "what do you want to see?":

- **Action Required** (`my_turn`) — records currently sitting at a step owned by one of
  your roles. This is the default and is what you act on.
- **My Past Actions** (`my_actions`) — records you have already acted on, so you can
  follow up on their progress.

### User-wise filter

Reviewers with broad access can additionally filter by a **specific assignee** — pick a
user to see only the records assigned to them. The user picker excludes service and
non-reviewer accounts (for example test, lab-tech, nurse, driver and similar logins) and
is limited to users within the authorities you can access.

### Other filters

- **Assigning authority** — limit to one or more sites.
- **Date range** — filter by when the instance was created.
- **Sub-division** — where sub-division scoping is configured, the list is automatically
  limited to the sub-divisions you may see.

:::note
The user-wise filter is only meaningful alongside the **Action Required** view; when
you are looking at *your own* turn the assignee filter is not applicable.
:::

## Taking Action — the Single Submit Button

Rather than a separate button for every possible action, the reviewer screen funnels
**all actions into one submit control**. You:

1. Choose the action (approve, send back, return to sender, request changes, comment).
2. Provide a comment if the action requires one (send back, return to sender, request
   changes and comment all require a comment).
3. If the target step is a *send back*, choose which earlier step to return to.
4. Submit.

The platform validates that the chosen action is a legal transition from the current
step for your role before committing it. If two reviewers act on the same record at the
same time, the second submission is rejected with a "concurrent update" message and can
be retried safely.

:::caution Signature requirement
If the current step's role is configured in the definition's `signRequiredRoles`, you
must have a valid signature on file. The platform checks that your stored signature image
is reachable before allowing the action; if it is missing or invalid the action is
blocked.
:::

## Consolidated Reports for Reviewers

Where a workflow aggregates many records (such as a doctor's bills for a day), the
reviewer works from a **consolidated report** view that rolls the underlying items up
into a single reviewable record. See
[Doctor Consolidated Reports](./doctor-consolidated-reports.md).
