---
sidebar_position: 52
---

# Duplicate & Similar Patient Suggestions

When you register a new patient, MetahOS helps you avoid creating duplicate records by surfacing patients who look like a match — either by **similar demographics** or by the **same mobile number** — before you commit the new record.

## At a glance

```steps
fa-user | Enter new patient details | This is the person we are helping.
fa-search | Find matches | Here is what happens at this step.
fa-user | Similar patients | This is the person we are helping.
fa-mobile | Same mobile number | Here is what happens at this step.
fa-circle-o | Suggestion list (max 50) | Here is what happens at this step.
fa-mobile | Filter by name / UHID / mobile | We pick only what we want to see.
fa-circle-o | Already exists? | Here is what happens at this step.
fa-file-text-o | Open existing record | Here is what happens at this step.
fa-plus | Create New | Here is what happens at this step.
```

## What You See

If potential matches exist, a suggestion list appears showing:

- **Similar patients** — existing records that resemble the one you are entering.
- **Patients on the same mobile number** — useful where families share a number.

Each row shows enough detail (name, UHID, mobile) to recognise an existing patient and open it instead of creating a duplicate.

## Search Filter

The suggestion list has a built-in **search box**. As you type, the list filters in real time across name, UHID, and mobile number, so you can quickly narrow a long list of matches to the exact person.

:::tip
Use the search box to confirm whether the patient already exists before clicking **Create New**. Opening the existing record keeps the patient's history in one place.
:::

## Match Count & Capping

A summary line shows **"Showing X of Y matches"**, so you always know how many candidate records were found versus how many are currently displayed. The list shows up to 50 matches at a time; when there are more, the count makes it clear that the results have been capped — narrow your search to see the specific record.

The counts are split between **similar patients** and **same-mobile patients**, and the total number of similar patients already registered is also displayed for context.
