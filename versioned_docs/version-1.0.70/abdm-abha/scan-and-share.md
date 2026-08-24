---
sidebar_position: 6
---

# Scan & Share

**Scan & Share** is the front-desk QR workflow that lets a walk-in patient share their ABHA profile with your facility instantly, without typing anything. The patient opens any ABDM PHR app, scans the facility QR code, and their demographic details flow into MetahOS to start (or speed up) registration and queueing.

## At a glance

```steps
fa-qrcode | Patient scans QR (HIP ID, name, URL) | A picture or scan is taken.
fa-share-alt | Share ABHA profile | Here is what happens at this step.
fa-truck | Deliver demographic details | We hand the report to the right person.
fa-clock-o | Start or speed up registration and queueing | This is where we begin.
```

## The facility QR code (PNG)

The Scan & Share screen renders a **QR code** for the facility's HIP service. The QR encodes the facility identifiers ABDM needs — the base URL, the HIP ID, the HIP name and a counter ID — so that a scan from the patient's app reaches the right service.

The same screen can produce a **printable QR (PNG / PDF)**:

- The QR is generated on screen as a scannable code.
- It can be exported as a document (a styled PDF carrying the QR image, the facility name and the link) so the code can be printed and displayed at a counter, kiosk or reception desk.

:::tip
Print the Scan & Share QR once and place it where patients queue. A single displayed code serves every patient — there is nothing to generate per visit.
:::

## The data-link PDF

When MetahOS prints or shares a prescription, it embeds a **QR / data link** on the document. Scanning it from an ABDM PHR app lets the patient pull that record into their own health record, tying the printed prescription back to the HIP linking flow. This means even paper output participates in ABDM linking.

## Deep linking

A related **Deep Linking** workflow is available for flows that hand off from MetahOS to the patient's app (or back) via a link rather than a scanned code. It is reached from the ABHA portal alongside HIP Linking and Scan & Share.

:::note
The Scan & Share screen and Deep Linking are both access-controlled. See the *Configuration* page for details on enabling these features.
:::
