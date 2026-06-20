---
sidebar_position: 1
---

# ESI Monthly Lab Annexure

The **ESI Monthly Lab Annexure** produces the consolidated lab-test annexure that ESI dispensaries submit for AMO verification and Medical Director certification. It is available as a report in Bill Management.

## At a glance

```steps
fa-filter | Set filters: period, authority, ESI contract | We pick only what we want to see.
fa-circle-o | Group by | Here is what happens at this step.
fa-money | One block per bill/patient | This is the person we are helping.
fa-flask | Item-wise summary by test | Here is what happens at this step.
fa-file-text-o | Generate annexure | Here is what happens at this step.
fa-print | Print: paginated + certification block | Here is what happens at this step.
fa-download | Download as Excel | Here is what happens at this step.
fa-check | AMO & Medical Director sign-off | Here is what happens at this step.
```

## Generating the Annexure

## Step 1: Set the filters

- **Group by** — choose **Bills** or **Items** (see below).
- **From Date** / **To Date** — the reporting period (the period label collapses to a single date when both are the same).
- **Assigning Authority** — the dispensary / location.
- **ESI Contract** — the ESI contract to report against.

## Step 2: Generate

Click **Generate**. If no date range, authority and contract are selected you are prompted to pick them; if no billed lab tests exist for the period you see a clear message naming the period, location and contract.

## Step 3: Print or download

- **Print** produces the paginated annexure with a per-page header (report title, contract, period and page number) and a **Certification** block on the final page with **AMO** and **Medical Director** signatory lines and the grand total in words/figures.
- **Download as Excel** is available in **Items** grouping (see below).

## Group by Bills

The **Bills** view lists one block per bill/date, showing serial number, date, patient UHID, patient name, gender, age, **ESI Card Number**, doctor's name, each **Test Name** with its **Rate**, and the bill's **Total Amount**. Multiple tests on the same bill are grouped under a single patient row.

## Group by Items (Item-wise)

The **Items** view groups the same tests **by test item** instead of by bill. Each row shows serial number, **CGHS Code**, **Description**, unit **Rate**, **Quantity** (how many times the test was billed in the period) and the **Amount**. This gives a clean item-wise summary of everything billed for the period.

:::tip
The **Download as Excel** button appears only in the **Items** grouping, letting you export the item-wise annexure to a spreadsheet for further reconciliation.
:::

## Certification & Totals

The annexure ends with a certification statement for the selected dispensary and period, the certified total amount (in figures, and in words when available), and the AMO / Medical Director signature lines, ready for sign-off and submission.
