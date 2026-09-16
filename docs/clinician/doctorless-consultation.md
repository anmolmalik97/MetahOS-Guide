---
sidebar_position: 6
---

# Consultations Without an Assigned Doctor

Not every consultation is tied to a named doctor at the point it is booked — a walk-in dressing, an injection, or a review taken by whoever is on duty. MetahOS can book and bill these **without selecting a doctor**.

## At a glance

```steps
fa-user | Patient arrives | Someone walks in needing a service.
fa-shopping-cart | Book the consultation | The consultation line is added with no doctor set.
fa-money | Bill it | The bill is raised as normal.
fa-user-md | Doctor attends | Whoever sees the patient is recorded at that point.
fa-file-text-o | Notes saved | The consultation is attributed to the attending doctor.
```

## Booking without a doctor

Where the site allows it, the doctor field on a consultation line can be left empty. The line is booked, priced and billed exactly as a normal consultation.

On the bill, a consultation line with no doctor is labelled so that it is obvious the doctor is yet to be assigned, and is not silently grouped with another doctor's lines.

:::note
Consultation lines are grouped by doctor on the bill. A line with no doctor is kept separate, so adding two doctorless consultations does not merge them into one.
:::

## Who the consultation is attributed to

When the consultation notes are saved, the consultation is attributed to:

1. The doctor assigned to it, if one was set; otherwise
2. The doctor who is saving the notes.

So a consultation booked without a doctor is attributed to whoever actually attended the patient, at the moment they write it up — no back-filling required.

:::tip
This keeps doctor-earnings and activity reports accurate for walk-in services, where the attending doctor genuinely is not known until the patient is seen.
:::

## Slots

Consultation slots can likewise be defined without being tied to a specific doctor, so a general clinic session can be published and filled by whichever doctor covers it.
