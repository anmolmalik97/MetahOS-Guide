---
sidebar_position: 1
---

# Queue TV Overview

**Queue TV (QTV)** turns any television or display in your waiting area into a live queue board and digital-signage screen. It shows the current and next tokens being called to each doctor or counter, while playing your advertisements and promotional content around the queue.

## At a glance

```steps
fa-bullhorn | Marketing configurables | A grown-up sets the rules first.
fa-cog | Per-authority config | A grown-up sets the rules first.
fa-film | Ads & playlist | Here is what happens at this step.
fa-desktop | Layout editor /qtv-editor | Here is what happens at this step.
fa-tv | /tvscreen smart-TV screen | Here is what happens at this step.
fa-tv | /queueTvScreen earlier screen | Here is what happens at this step.
fa-list | Live tokens | We get a special key to share safely.
fa-eye | Waiting-area display | Here is what happens at this step.
```

Queue TV in MetahOS supports:

- **Live token display** — current and upcoming tokens with patient/doctor names.
- **Advertisements around the queue** — full-screen, vertical (side), horizontal (bottom) or combined layouts.
- **An ad playlist** — multiple ads that rotate in order, with the queue screen shown between them.
- **Per-authority configuration** — each site/facility has its own Queue TV settings and ads.
- **GIF and video media** — images, GIFs and videos are all supported.

## Screens and where to find them

There are two Queue TV screen endpoints and one configuration editor:

- **`/tvscreen`** — the current Queue TV screen, optimised for smart TVs (Samsung Tizen, LG WebOS, Android TV).
- **`/queueTvScreen`** — the earlier Queue TV screen.
- **`/qtv-editor`** — the Queue TV layout editor, used to position and size the ads around the queue.

Open the relevant screen URL in full-screen on the TV's browser (or a connected media player) and leave it running. The screen updates automatically as tokens are called.

## How the layout works

The queue board occupies the main area of the screen. Advertisements are placed around it depending on the **screen type** chosen for each ad:

- **Full screen** — the ad takes the whole display.
- **Vertical (side)** — the ad runs down one side, with the queue beside it.
- **Horizontal (bottom)** — the ad runs along the bottom, with the queue above it.
- **V + H (both)** — a vertical ad on the side *and* a horizontal ad on the bottom at the same time.

## Per-authority configuration

Queue TV settings are stored **per assigning authority** (site / facility). When you save the configuration, MetahOS applies it to the authority currently selected for your user, so each location can run its own ads, durations and disclaimer.

## In this section

- [Configuring Ads & the Playlist](./configuring-ads.md)
- [Layouts, Vertical Screens & Fonts](./layouts-and-fonts.md)
- [Managing Multiple Screens](./managing-screens.md)
