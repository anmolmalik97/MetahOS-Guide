---
sidebar_position: 53
---

# Managing Users & Resources

The **Manage Users** and **Manage Resources** pages under HR are where employees and
doctors are created, edited and organised. This page covers the recent additions to the
user form and the bulk-upload views.

## At a glance

```steps
fa-users | Manage Users / Resources | Here is what happens at this step.
fa-plus | Create individually or bulk? | Here is what happens at this step.
fa-user | Open tabbed user form | Here is what happens at this step.
fa-check | Set Reg. No. and Designation | Here is what happens at this step.
fa-file-text-o | Assign authority and reporting line | We pick a helper for the job.
fa-download | Download existing list | Here is what happens at this step.
fa-tv | Edit spreadsheet | Here is what happens at this step.
fa-upload | Upload to add or update | Here is what happens at this step.
fa-user | User or resource saved | Here is what happens at this step.
```

## The User Form

Creating or editing a user opens a tabbed form. Two fields worth calling out:

- **Reg. No.** (field `registrationNumber`) — the professional registration number for
  the user. This is captured on the form and **printed on bill invoices** beside the
  name of the person who raised the bill, shown as *Reg. No.: &lt;number&gt;*.
- **Designation** (field `designation`) — the employee's job title, captured on the
  **Organization** tab under Employment Details.

:::tip Registration number on invoices
The registration number flows from the user who created a bill item onto the printed
invoice automatically. Make sure clinical staff who raise bills have their **Reg. No.**
filled in so it appears on patient-facing documents.
:::

### Username vs. full name

Across the HR module, name columns show **both** the login **username** and the person's
**full name** (first + middle + last). The Manage Users table, the Attendance Details
list and other people pickers display both so administrators are never confused by two
employees with the same display name.

## Designation & Authority

Each user can be assigned a **designation** (their title) and one or more **assigning
authorities** (the sites they belong to). Riders and online-only users are mapped to the
configured online authority automatically. Reporting lines are independent of
department: any user or doctor can report to any other user or doctor.

## Bulk Upload (Excel/CSV Views)

Several HR areas accept spreadsheet uploads instead of entering rows one at a time:

- **Manage Resources** lets you download the current doctor list (CSV) and upload a file
  to add or update resources in bulk.
- **Rota** provides an **Upload Rota Sheet** action so an entire roster can be imported
  from a spreadsheet rather than built shift-by-shift.

:::tip
When using a bulk upload, download the existing list first and edit that file — it
already has the correct column headings, which keeps the import clean.
:::
