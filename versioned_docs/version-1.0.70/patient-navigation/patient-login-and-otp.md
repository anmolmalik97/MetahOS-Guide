---
sidebar_position: 51
---

# Patient Login, OTP & Mobile-Number Limits

This page covers how patients sign in to the Patient Portal and the controls that govern OTP and how many patients may share a mobile number.

## At a glance

```steps
fa-mobile | Enter mobile number | Here is what happens at this step.
fa-mobile | Check default-OTP / whitelist | Here is what happens at this step.
fa-mobile | Accept known default OTP | Here is what happens at this step.
fa-mobile | Request OTP | Here is what happens at this step.
fa-mobile | Deliver OTP via SMS | We hand the report to the right person.
fa-mobile | Submit OTP | We send it off to the next person.
fa-check | Sign in to portal | Here is what happens at this step.
```

## Patient Login OTP

Patients log in to the Patient Portal with their mobile number and a one-time password (OTP). Two configuration options change how that OTP behaves.

### Default OTP for Patients

Some deployments — for example camps or kiosks with intermittent SMS delivery — can enable a **default OTP** so patients can sign in with a known code instead of waiting for an SMS.

When a patient registers or logs in using the default OTP, the system records this on the patient record via the `registeredThroughDefaultOTP` flag, so these patients can be identified later.

### Bypass / Whitelist for Specific Numbers

You can restrict which mobile numbers are allowed to use the default OTP. When a whitelist is set, **only** those numbers may bypass a live OTP (they still have to enter the default OTP). If no whitelist is set, every number can use the default OTP — but only when the default OTP setting is enabled.

:::caution
The default OTP is a convenience for controlled environments. Use the whitelist to limit its scope, and avoid enabling it broadly in production where a live OTP is the safer choice.
:::

## External Patient Login

Where patients are authenticated against an external identity (for example a hospital's existing patient ID), the portal can prefer that identifier during login.

## Maximum Patients per Mobile Number

A single mobile number is often shared across a family. To keep records clean, you can cap **how many patient records may be created against the same mobile number**. When the limit is reached, creating another patient with that number is blocked.

Certain numbers — for example a clinic front-desk number or a known shared contact — can be **exempted** from this limit through a whitelist.

:::tip
When a patient cannot be created because the limit has been hit, search for the existing patients on that number first — the family member you need may already be registered.
:::
