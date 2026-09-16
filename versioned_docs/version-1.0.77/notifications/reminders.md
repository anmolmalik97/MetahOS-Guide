---
sidebar_position: 2
---

# Reminders & Custom OPD Alerts

MetahOS can automatically remind patients and doctors about upcoming consultations, and supports multiple reminders and configurable lead times.

## At a glance

```steps
fa-calendar | Daily scan of next-day bookings | Someone asks to begin, like booking a ride.
fa-bell | Upcoming consultation alert | Here is what happens at this step.
fa-check | sendOpdReminder? | A friendly nudge so no one forgets.
fa-check | sendTeleReminder? | A friendly nudge so no one forgets.
fa-user-md | OPD reminder | A friendly nudge so no one forgets.
fa-mobile | Tele reminder | A friendly nudge so no one forgets.
fa-comment | Patient & doctor notified | A message is sent to say what happened.
```

## Consultation Reminders

A scheduled job runs daily and sends an **upcoming consultation reminder** to every patient who has a consultation or appointment scheduled for the next day. The reminder includes the patient name, doctor name, the scheduled date/time, the call-centre number, and the assigning authority (site) name.

## OPD & Tele Reminders

OPD (in-person) and tele (video) consultations can each have their own reminder, sent ahead of the appointment time. The **lead time** — how many minutes before the appointment the reminder goes out — is configurable per channel.

## Multiple Reminders

Because the OPD and tele reminders are independent and each has its own lead time, a single consultation can trigger more than one reminder (for example a day-before reminder plus a shorter lead-time reminder closer to the appointment). Enable only the reminders relevant to your workflow to avoid over-messaging patients.

:::tip
Set `opdReminderBeforeMinutes` and `teleReminderBeforeMinutes` to match how far in advance your patients should be nudged. Keep `sendOpdReminder` / `sendTeleReminder` off for any channel you do not want to use.
:::

## Other Patient Messages

In addition to reminders, MetahOS sends transactional messages around registration and check-in.

:::caution
Reminder volume is governed by the booking data found for the next day and the lead-time windows. Verify your templates are approved with your messaging provider before enabling reminders in production.
:::
