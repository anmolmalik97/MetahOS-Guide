---
sidebar_position: 4
---

# Consent and Data Sharing

This page covers **Milestone 3** of the ABDM integration — exchanging health records under patient consent. In ABDM, records never move without a **consent artefact** that says who may see which record types, for what purpose, and over what date range. MetahOS provides screens to request consent and manage artefacts, and it returns the actual records when a valid consent and data request arrive.

## At a glance

```steps
fa-shield | Request consent (HI types, purpose, dates) | The patient says "yes, you may share my records."
fa-mobile | Forward for approval | Here is what happens at this step.
fa-shield | Grant consent artefact | The patient says "yes, you may share my records."
fa-circle-o | Data request scoped by artefact | Here is what happens at this step.
fa-file-text-o | Return matching records | Here is what happens at this step.
fa-share-alt | Show shared records | Here is what happens at this step.
```

## Requesting consent

The **Request Consent** screen lets an authorised user raise a consent request against a patient's ABHA. A request captures:

- the **patient** (selected by ABHA address / search),
- the **HI types** being requested (prescriptions, diagnostic reports, OP consultations, and so on),
- the **purpose** of the request (chosen from the standard ABDM consent purpose codes), and
- the **date range** the consent should cover.

Once submitted, the request is sent to the patient's ABDM app for approval.

## Managing consent artefacts

- **Consent Management** lists consent requests and their state.
- **View Consent Artefacts** (also called *View Shared Records*) shows the artefacts that have been granted and lets you view the records shared under them.

## How MetahOS responds to a data request

When a consent has been granted and ABDM (via the middleware) asks MetahOS for the underlying records, MetahOS resolves the patient and returns only the records that match the requested care contexts and HI types. For each HI type it assembles the appropriate documents:

- **Discharge Summary**, **OP Consultation**, **Prescription**, **Immunization Record**, **Wellness Record**, **Diagnostic Report**, **Invoice** and **Health Document** records are fetched, populated with the doctor and facility (assigning authority) details ABDM expects, and returned together.
- **Invoices** are expanded into their billed line items (including batch-level pricing) so the shared invoice is complete.
- **Diagnostic reports** include the report and signed-report URLs.

:::info
For a data request, MetahOS deliberately returns the requested records even if they were not previously marked as ABHA-linked — when a valid request arrives, the data must be provided. The consent artefact and the requested care-context references are what scope the response.
:::

## Records the patient can already see

Separately from a consent request, ABDM can ask MetahOS for the patient's **care contexts** — the list of available records (and their already-linked status) so the patient can browse them in their PHR app. MetahOS answers these calls using a reference-number-first patient lookup and returns the records grouped by HI type with friendly display labels (for example *"Prescription 14 June 2026, 10:30 AM"*). See *PHR and the Patient App*.

:::caution
MetahOS only shares data through these consent and care-context channels. There is no path that pushes a patient's clinical records outside ABDM without a corresponding request, and every linked care context is recorded in the link history for audit.
:::
