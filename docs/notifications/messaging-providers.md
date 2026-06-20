---
sidebar_position: 1
---

# Messaging Providers (SMS, WhatsApp & Email)

MetahOS sends patient and staff messages over several channels and supports multiple third-party providers. This page explains the providers and how the platform chooses between them.

## At a glance

```steps
fa-comment | Build message from template | Here is what happens at this step.
fa-whatsapp | whatsappProvider (Twilio / MessageBird) | A WhatsApp message is sent.
fa-mobile | SMS Country / Twilio SMS | A text message is sent.
fa-envelope | Email if SENDGRID_API_KEY set | An email is sent.
fa-whatsapp | WhatsApp delivered | We hand the report to the right person.
fa-mobile | SMS delivered | We hand the report to the right person.
fa-envelope | Email delivered | We hand the report to the right person.
```

## How a Message Is Sent

When MetahOS sends a notification it can deliver it as an **SMS**, a **WhatsApp** message, and/or an **email** for the same event. Each outbound message is built from a template (see [Reminders & Custom OPD Alerts](./reminders.md)) and then dispatched through the configured providers.

## WhatsApp Providers

The WhatsApp provider is selected by the `whatsappProvider` configuration key. Supported providers include:

- **Twilio**
- **Karix**
- **Gupshup**
- **MessageBird** (used as the default WhatsApp path when no other provider is matched)

### MessageBird

MessageBird sends WhatsApp template messages and is the default WhatsApp dispatch path. It uses the configured channel and namespace, and template messages are addressed by their template name.

:::note Environment
- `MESSAGE_BIRD_KEY` — MessageBird API key. When it is not set, MessageBird messages are skipped.
:::

### Twilio

Twilio can deliver both WhatsApp messages and plain SMS. Twilio is used for WhatsApp when `whatsappProvider` is set to `twilio`, and can also be used as an SMS channel (see below).

:::note Environment
- `TWILIO_ACCOUNT_SID` — Twilio Account SID.
- `TWILIO_AUTH_TOKEN` — Twilio auth token.
- `TWILIO_PHONE_NUMBER` — Twilio sender phone number used for SMS.
:::

When the Twilio credentials are not configured, Twilio messages are skipped. Recipient numbers are normalised to the correct international format using the configured `countryCode`.

## SMS Providers

For text-message (SMS) delivery, MetahOS supports:

- **SMS Country** — the bulk SMS gateway used for OTP and general SMS.
- **Twilio SMS** — an alternative SMS channel.
- **Gupshup / Karix** — SMS gateways also used for WhatsApp.

SMS Country and Twilio SMS are each enabled per message and only send when their credentials are present.

:::note Environment
- `MSG_USER` — SMS Country gateway user.
- `MSG_AUTH` — SMS Country authentication token.
- `MSG_SENDER` — SMS sender ID / header.
- `GUPSHUP_USERID`, `GUPSHUP_PASSWORD` — Gupshup SMS credentials.
- `KARIX_ID`, `KARIX_TOKEN` — Karix SMS credentials.
:::

## Email

Email is sent via SendGrid when configured.

:::note Environment
- `SENDGRID_API_KEY` — SendGrid API key. Email is skipped when it is not set.
:::

## Turning Patient Messaging Off

Outbound messaging can be suppressed globally or only for patients, which is useful while testing or during data migrations.

:::caution
SMS, WhatsApp, and email each require their own credentials. If a provider's credentials are missing, that channel is silently skipped and the message is simply not sent over it.
:::
