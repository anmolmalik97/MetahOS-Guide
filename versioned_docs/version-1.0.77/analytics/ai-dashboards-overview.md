---
sidebar_position: 50
---

# AI Dashboards Overview

MetahOS ships a dedicated **Dashboards** workspace that brings together two complementary analytics experiences:

- **AI Dashboards** — a curated set of role- and department-specific dashboards. Some are powered by live MongoDB data inside MetahOS; the rest are described as ready-to-build templates grouped by department.
- **Hierarchical & embedded dashboards** — analytical frames (including Metabase dashboards) that can be browsed, searched, reordered and pinned into the navigation.

This page explains how to reach the dashboards, the menu layout, and the permissions that control access. The individual live dashboards are documented on their own pages.

## At a glance

```steps
fa-line-chart | Dashboards module | We see everything on one screen.
fa-line-chart | Master Dashboard (/aidashboard) | We see everything on one screen.
fa-line-chart | Hierarchical (/dashboards/hierarchical) | We see everything on one screen.
fa-line-chart | Dashboard List (/dashboards/framesList) | We see everything on one screen.
fa-credit-card | Department cards | Here is what happens at this step.
fa-line-chart | Live dashboards (MongoDB data) | We see everything on one screen.
fa-line-chart | Template dashboards | We see everything on one screen.
fa-key | Permission keys gate access | Here is what happens at this step.
```

## Opening the Dashboards menu

Open the **Dashboards** module from the main navigation. The left sidebar of this module contains:

- **Master Dashboard** — opens the AI Dashboard landing page (`/aidashboard`), where every department is shown as a card.
- **Hierarchical** — the authority-aware hierarchical dashboard (`/dashboards/hierarchical`).
- **Dashboard List** — the searchable list of all embedded analytical frames (`/dashboards/framesList`).
- Any **pinned dashboards** — individual analytical frames that an administrator has chosen to surface directly in the sidebar.

## The AI Dashboard landing page

The AI Dashboard home shows one card per department. Each card displays the department name, an icon and the number of dashboards available, and links through to that department's landing page.

The departments include **Hospital Marketing**, **Doctors & Clinicians**, **Sales & BD**, **Administration**, **Finance**, **Nurses**, **Phlebotomists**, **Lab Technicians**, **Pharmacists**, **IPD**, **OPD**, **EMR**, **EMAR**, **InfoSec & CyberSec**, **Omnichannel Messaging**, **ERP** and more.

Clicking a department card opens that department's landing page, which lists the dashboards that belong to it. Selecting a dashboard opens it.

:::info Live vs. template dashboards
The **Hospital Marketing** and **Doctors & Clinicians** departments contain dashboards that are built into MetahOS and run on your live data (see the dedicated pages). The remaining departments use a generic template that describes each dashboard — its purpose, key KPIs, data sources, visualisations and intended users — so your team can see the full analytics roadmap in one place.
:::

## Currency switcher

All Hospital Marketing dashboards include a **currency switcher** in the header. You can toggle between:

- **INR (₹)** — the default, formatted in the Indian numbering system.
- **USD ($)** — every monetary figure on the dashboard is converted and re-formatted.

The selected currency applies to all revenue, ROI and value figures on the current dashboard for the duration of your session.
