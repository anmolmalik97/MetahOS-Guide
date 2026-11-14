---
sidebar_position: 4
---

# Earning Report

The **Earning Report** summarises revenue over a date range and can be grouped and broken down in several ways. It is available in Bill Management.

## At a glance

```steps
fa-filter | Set filters: date range, status, type | We pick only what we want to see.
fa-user-md | Group by item / dept / doctor / patient / period | This is the person we are helping.
fa-circle-o | Compute revenue | Here is what happens at this step.
fa-money | Payment-mode breakdown: cash, card, online, upi | Money is paid and counted. Cha-ching!
fa-flask | Service categories: pharmacy, lab, package... | Here is what happens at this step.
fa-user-md | Grouped by doctor? | Here is what happens at this step.
fa-user-md | Apply doctor revenue share % | Here is what happens at this step.
fa-download | Export CSV (ByHeader / ByGroup) | Here is what happens at this step.
```

## Filters

- **Date range** — from / to date-time.
- **Group by** — item, department, doctor, patient, tags, year, month or day.
- **Doctor type** — attribute revenue by the **prescribed**, **source** or **referral** doctor.
- **Doctor** — focus on a single doctor (a logged-in doctor sees their own figures automatically).
- **Assigning authority** — scope to one site.
- **Bill status** — All, Paid or Unpaid.
- **Bill type** — All, IP or OP.
- **Exclude pharmacy** — leave out pharmacy revenue.
- **Alignment** — view results **By Item** or **By Group**.

## Payment Mode Breakdown

Each bill in the report carries its **payment modes**, and the report's revenue columns include payment-type breakdowns such as **cash**, **card**, **online**, **upi** and **advance**, alongside service categories like pharmacy, lab, radiology, package, procedure and surgery. This lets you reconcile collections by how the money was received, not just by what was sold.

## Doctor Share

When the report is grouped by **doctor**, each doctor row can carry a **revenue share percentage**, so the report reflects the agreed doctor share against the revenue attributed to that doctor.

## Exporting

Use **Export CSV** to download the current report. The file name reflects whether you exported the header view (**ByHeader**) or the grouped view (**ByGroup**) and the date range.
