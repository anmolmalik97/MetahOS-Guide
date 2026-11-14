---
sidebar_position: 1
---

# Messaging Providers (SMS, WhatsApp & Email)

MetahOS sends patient and staff messages over several channels and supports multiple third-party providers. This page explains the providers and how the platform chooses between them.

## At a glance

```steps
fa-comment | Build message from template | Here is what happens at this step.
fa-whatsapp | Configured WhatsApp provider (Twilio / MessageBird) | A WhatsApp message is sent.
fa-mobile | SMS Country / Twilio SMS | A text message is sent.
fa-envelope | Email if SendGrid is set up | An email is sent.
fa-whatsapp | WhatsApp delivered | We hand the report to the right person.
fa-mobile | SMS delivered | We hand the report to the right person.
fa-envelope | Email delivered | We hand the report to the right person.
```

## How a Message Is Sent

When MetahOS sends a notification it can deliver it as an **SMS**, a **WhatsApp** message, and/or an **email** for the same event. Each outbound message is built from a template (see [Reminders & Custom OPD Alerts](./reminders.md)) and then dispatched through the configured providers.

## WhatsApp Providers

The WhatsApp provider is chosen in a setting turned on by an administrator or the MetahOS team. Supported providers include:

- **Twilio**
- **Karix**
- **Gupshup**
- **MessageBird** (used as the default WhatsApp path when no other provider is matched)

### MessageBird

MessageBird sends WhatsApp template messages and is the default WhatsApp dispatch path. It uses the configured channel and namespace, and template messages are addressed by their template name.

:::note Setup
- The MessageBird account credentials are set up on the server by the MetahOS team. When they are not set up, MessageBird messages are skipped.
:::

### Twilio

Twilio can deliver both WhatsApp messages and plain SMS. Twilio is used for WhatsApp when Twilio is selected as the WhatsApp provider, and can also be used as an SMS channel (see below).

:::note Setup
- The Twilio account credentials and the sender phone number used for SMS are set up on the server by the MetahOS team.
:::

When the Twilio credentials are not configured, Twilio messages are skipped. Recipient numbers are normalised to the correct international format using the country code configured for your deployment.

## SMS Providers

For text-message (SMS) delivery, MetahOS supports:

- **SMS Country** — the bulk SMS gateway used for OTP and general SMS.
- **Twilio SMS** — an alternative SMS channel.
- **Gupshup / Karix** — SMS gateways also used for WhatsApp.

SMS Country and Twilio SMS are each enabled per message and only send when their credentials are present.

:::note Setup
The account credentials for each SMS provider are set up on the server by the MetahOS team:

- **SMS Country** — gateway account credentials and the SMS sender ID / header.
- **Gupshup** — account credentials.
- **Karix** — account credentials.
:::

## Email

Email is sent via SendGrid when configured.

:::note Setup
- The SendGrid account credentials are set up on the server by the MetahOS team. Email is skipped when they are not set up.
:::

## Turning Patient Messaging Off

Outbound messaging can be suppressed globally or only for patients, which is useful while testing or during data migrations.

:::caution
SMS, WhatsApp, and email each require their own credentials. If a provider's credentials are missing, that channel is silently skipped and the message is simply not sent over it.
:::
