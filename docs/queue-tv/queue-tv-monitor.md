---
sidebar_position: 6
---

# Queue TV Monitor

The **Queue TV Monitor** is a management view, under Marketing, that shows the state of every Queue TV screen you run — so a screen that has gone dark is noticed from the office rather than reported by a patient.

## At a glance

```steps
fa-tv | Screens check in | Each TV reports that it is alive.
fa-heartbeat | Monitor collects them | The check-ins are gathered centrally.
fa-circle | Online or offline | Each screen shows its current state.
fa-eye | What it is showing | The content currently on that screen.
fa-wrench | Act on a problem | Restart or investigate the screen that is down.
```

## Screen status

The monitor lists every screen with a summary line showing how many are **online** and how many are **offline**, followed by a row per screen:

| Column | Shows |
| --- | --- |
| **Status** | A green dot for **Online**, grey for **Offline**. |
| **Content** | What that screen is currently displaying. |

A screen is treated as online while it keeps checking in. One that stops — because the media player has frozen, lost its network or been unplugged — falls to **Offline**.

## Doctor availability

Alongside the screens, the monitor summarises doctor availability for the site: how many doctors are currently **In** and how many are **Out**.

## Configuration summary

The monitor also shows the settings the screens are running with, so what is on the TV can be checked against what was intended:

- The **display mode** in use.
- The **queue duration** and other timing values.
- The **screen type**.

Use the refresh action to pull the current state at any time.

:::tip
Check the monitor at the start of each day. An offline screen found at 9am is a five-minute fix; one found at noon is half a day of blank display in a waiting area.
:::
