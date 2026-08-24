---
sidebar_position: 51
---

# Attendance Details View

The **Attendance Details** page in the HR module lets an administrator review the
attendance of every employee and doctor who has recorded at least one punch, and to
regularise (manually correct) attendance where needed.

The page appears in the HR sidebar as **Attendance Details** and is accessible to users with the appropriate HR role.

## At a glance

```steps
fa-lock | Select assigning authority | We pick a helper for the job.
fa-user | Pick person from list | Here is what happens at this step.
fa-circle-o | Load day-by-day breakdown | Here is what happens at this step.
fa-circle-o | Day needs correcting? | Here is what happens at this step.
fa-map-marker | Review status, selfie, geofence | Someone takes a careful look first.
fa-plus | Add manual check-in / check-out | Here is what happens at this step.
fa-check | Date valid and not future? | Here is what happens at this step.
fa-times | Rejected before saving | Oops — it goes back to be fixed.
fa-check | Save and reload breakdown | Here is what happens at this step.
```

## Reviewing Attendance

The screen is split into two parts:

1. **People list** — every user and doctor with at least one punch under the selected
   assigning authority. Use the **Assigning Authority** filter at the top to switch
   sites, or select *all* to see everyone you have access to. Each row shows the
   person's **full name together with their username** so two people with similar names
   can be told apart at a glance. (Doctor rows show the doctor's name only, since the
   doctor record does not carry separate name parts.)
2. **Per-day breakdown** — click a person to load their day-by-day history. Each day
   shows its status (Present / Absent / partial check-in), the punch timestamps, the
   captured selfie image for each punch, the punch location, and the geofence status
   (`inside` / `outside`) recorded at punch time.

## Regularising Attendance

When an employee forgot to punch, or punched from outside the fence, an administrator
can manually add a check-in or check-out for a past day:

## Step 1: Select the person and day

Pick the employee from the list, then locate the day that needs correcting in their
breakdown.

## Step 2: Mark the punch

Use the manual check-in or check-out action for that day. The platform validates the
date before saving — it must be a real date in `DD/MM/YYYY` form and **cannot be in the
future**. Attempting a future date is rejected before anything is sent to the server.

After saving, the person's breakdown reloads so you can confirm the correction.

:::caution
Manual regularisation is an administrative override. It is recorded against your
account, and only authorised HR administrators can perform it.
:::
