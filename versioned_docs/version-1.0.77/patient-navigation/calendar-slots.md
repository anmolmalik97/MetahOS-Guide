---
sidebar_position: 53
---

# Calendar Slots & Slot Time Division

When booking a consultation from Patient Navigation, the available appointment times come from a doctor's calendar **slots**. MetahOS can divide a doctor's working hours into time bands and split capacity between online and offline (in-person) bookings.

## At a glance

```steps
fa-user-md | Doctor working hours | Here is what happens at this step.
fa-clock-o | Split into slots (slot time) | We choose a free time slot.
fa-clock-o | Divide day into time ranges | Here is what happens at this step.
fa-circle-o | Range mode? | Here is what happens at this step.
fa-clock-o | Online slots | We choose a free time slot.
fa-clock-o | Offline slots | We choose a free time slot.
fa-mobile | Apply distribution % | Here is what happens at this step.
fa-flask | Show available slots in booking | Someone asks to begin, like booking a ride.
```

## Slot Time

Each doctor's schedule is broken into slots of a fixed length. When a slot length is not specified for a doctor, a default is used.

## Slot Time Division (Online vs Offline)

A doctor's day can be divided into **time ranges**, and each range can be designated for **online** or **offline** consultations. This is the slot time division: it lets a clinic, for example, reserve mornings for in-person visits and afternoons for tele consultations.

Slot time division is defined per day of the week, with one or more `{ start, end, mode }` ranges per day, where `mode` is either `online` or `offline`. The ranges are validated so they are well-formed and non-overlapping before they are saved.

## Slot Distribution Percentage

Within a divided schedule, capacity can be apportioned by a **percentage**, so a configurable share of slots is allocated to a given mode rather than all-or-nothing. MetahOS uses this percentage to decide how slots are picked across the available times.

## Conflicting Slots

By default, a patient cannot be booked into a slot that conflicts with an existing booking. This can be relaxed where double-booking is intentional.

:::tip
Use slot time division when a doctor sees both walk-in and tele patients in the same day — it keeps each consultation type within its intended time band while still drawing from one calendar.
:::
