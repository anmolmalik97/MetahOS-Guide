---
sidebar_position: 4
---

# Managing Multiple Screens

Larger sites often run more than one Queue TV display — for example separate screens for different blocks, floors or department clusters. MetahOS supports this through **per-authority configuration**, so each location's screens show that location's queue and advertisements.

## At a glance

```steps
fa-map-marker | Select assigning authority | We pick a helper for the job.
fa-bullhorn | Configure ads & playlist | A grown-up sets the rules first.
fa-desktop | Tune layout & font | Here is what happens at this step.
fa-check | Save to authority | Here is what happens at this step.
fa-tv | Open screen URL full-screen | Here is what happens at this step.
fa-refresh | Auto-updates live | Here is what happens at this step.
fa-sitemap | Other sites? | Here is what happens at this step.
```

## How screens are scoped

Queue TV settings are stored **per assigning authority** (site / facility). The Queue TV configuration is unique to each authority, which means:

- Each site can run its **own ad playlist, durations, layout and disclaimer**.
- When you save the configuration, MetahOS applies it to the assigning authority currently selected for your user.
- A Queue TV display loads the configuration and live queue for the authority it belongs to.

## Setting up a screen at a site

1. Make sure you are working under the correct **assigning authority** (the site whose screen you are configuring).
2. Configure that site's ads and playlist in the **Marketing** configurables — see [Configuring Ads & the Playlist](./configuring-ads.md).
3. Tune the layout and font in the **layout editor** (`/qtv-editor`) — see [Layouts, Vertical Screens & Fonts](./layouts-and-fonts.md).
4. On the TV (or its media player), open the Queue TV screen URL in full-screen:
   - `/tvscreen` for the current smart-TV-optimised screen, or
   - `/queueTvScreen` for the earlier screen.
5. Leave the screen running. It updates automatically as tokens are called and as you change the configuration.

## Running different content per location

Because configuration is per authority, you can:

- Show **different advertisements** on screens at different sites.
- Use **different layouts** — for example a vertical layout on a portrait screen at one site and a horizontal layout at another.
- Apply **different disclaimers** where local requirements differ.

To change a particular site's screens, switch to that site's assigning authority, update its Queue TV configuration, and the change flows to all of that site's running displays.

:::tip
Keep the screen URLs bookmarked on each TV's browser or media player. After a power cycle you only need to reopen the bookmark and go full-screen — the latest configuration is loaded automatically.
:::
