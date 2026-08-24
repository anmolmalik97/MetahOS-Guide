---
sidebar_position: 8
---

# Configuration

This page lists the real environment variables, application config keys and permissions that drive the ABDM/ABHA integration and the kiosk / default-OTP features. Most of these are set by your administrator or platform team during onboarding.

## At a glance

```steps
fa-hospital-o | IS_ABHA_ENABLED? | Here is what happens at this step.
fa-circle-o | Integration inert, proxy and jobs disabled | Here is what happens at this step.
fa-key | RSA keys and middleware URL signed proxy | Here is what happens at this step.
fa-circle-o | Background jobs run | Here is what happens at this step.
fa-tv | ABHA portal screens gated by permissions | Here is what happens at this step.
fa-hospital-o | ENABLE_ABHA_CARE_CONTEXT_LINKING? | We connect the records to the health ID.
fa-hospital-o | Care-context linking and auto-link | We connect the records to the health ID.
fa-file-text-o | No record linking | We connect the records to the health ID.
```

## Background jobs

When ABDM is enabled, MetahOS schedules these recurring jobs automatically:

| Job | Schedule | Purpose |
| --- | --- | --- |
| Auto-link records (retry) | Daily ~01:00 | Clean up linked entries and retry failed care contexts |
| Refresh link tokens | Daily ~01:30 | Re-request tokens due for refresh |
| Auto-link patient HI data | Every 10 minutes, 02:00–07:59 | Link new unlinked records for ABHA patients |

## Onboarding a tenant

A dedicated onboarding script (`onboard-abha-teleopd-tenant.js`) registers a TeleOpd/MetahOS tenant into the central ABHA database and creates the API user and bridge service used by the middleware. It can:

- create or update the tenant's public key, base URL and default bridge services,
- create the API user used for middleware authentication, and
- run in **bridge-only** mode to update just the bridge service.

By default the script refuses to overwrite an existing tenant; an explicit update flag is required to modify one. This is an administrator/platform task run once per tenant — end users do not interact with it.

:::info
The middleware is reached from the web app through the authenticated proxy at `/api/abha-mw`, which signs each request with the tenant key and stamps the tenant ID. The middleware calls back into MetahOS via webhook endpoints under `/webhooks/abdm` to deliver link tokens, request care contexts, confirm link status, send link OTPs and fetch health records.
:::
