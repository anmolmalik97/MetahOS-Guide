---
sidebar_position: 2
---

# Configuring Ads & the Playlist

Queue TV advertisements are configured from the **Marketing** module's configurables. MetahOS lets you run a single pair of ads (side + bottom) or a full **ad playlist** that rotates several ads with the queue screen shown between each one. Ads are configured **per assigning authority**, so each site can run its own promotions.

## At a glance

```steps
fa-plus | Add Ad | Here is what happens at this step.
fa-upload | URL or upload? | Here is what happens at this step.
fa-refresh | Convert to H.264 | Here is what happens at this step.
fa-film | Auto H.264 + AAC | Here is what happens at this step.
fa-desktop | Screen type | Here is what happens at this step.
fa-clock-o | Duration | Here is what happens at this step.
fa-picture-o | Per-ad layout | Here is what happens at this step.
fa-list | Ads in order | We place the order, like ordering food.
fa-tv | Queue screen between ads | Here is what happens at this step.
```

## The ad playlist

The **Ad Playlist** is the recommended way to manage Queue TV content. Ads play in order, with the doctor-queue screen shown between each ad.

### Adding an ad

1. Open the Queue TV ad configuration in the Marketing configurables.
2. Click **Add Ad**.
3. Provide the ad media using either:
   - **URL** — paste a direct link to the media file, or
   - **Upload File** — upload a file directly. Uploaded files are automatically converted to a TV-compatible **H.264 + AAC** format.
4. Choose the **Screen Type** (see below).
5. Set a **Duration (seconds)** where required.

### Screen types

Each ad has a screen type that controls where it appears:

- **Full Screen** — the ad fills the display.
- **Vertical (Side)** — the ad runs down one side, queue beside it.
- **Horizontal (Bottom)** — the ad runs along the bottom, queue above it.
- **V + H (Both)** — a vertical ad *and* a horizontal ad at the same time. This type uses a second media file (**URL 2 / second upload**) for the horizontal ad, and a **duration is always required**.

### Durations

- For **videos**, the duration can usually be left blank — MetahOS uses the video's own length (shown as *Auto*).
- For **images and GIFs**, a duration is **required**, because still media has no inherent length.
- For **V + H** ads, a duration is **required**, because the two media files may end at different times.

### Queue screen duration

Set the **Queue Screen Duration (seconds)** to control how long the live queue board is shown between ads in the playlist.

## GIF and image support

Queue TV plays GIFs, JPG, PNG and WebP images as well as MP4, WebM, MOV, AVI, MKV and M4V video. Animated GIFs loop for their configured duration. When you use an image or GIF, remember to set a duration.

## Converting videos for TV compatibility

Smart-TV browsers are picky about video codecs. To avoid black screens or missing audio:

- When you **upload** a file, MetahOS converts it to H.264 + AAC automatically.
- When you paste a **URL** to a video, MetahOS offers a **Convert to H.264** button. This downloads the video, converts it to H.264 + AAC, and re-hosts it on the server.

:::tip
If you are unsure whether a video will play on your TV, use **Convert to H.264**. It makes the file TV-compatible and ensures audio plays.
:::

## Per-ad layout adjustment

Each ad row has a **Layout** button that opens a per-ad layout editor. Here you can preview the ad against a mock queue screen and fine-tune:

- **Zoom** (50–200%).
- **Offset X / Offset Y** to reposition the media.
- **Vertical Panel Width** (for vertical and V+H ads).
- **Horizontal Panel Height** (for horizontal and V+H ads).

These per-ad layout settings are saved against the ad so the positioning is remembered.

## Disclaimer text

You can configure a **disclaimer** that is shown on the Queue TV screen — useful for regulatory or privacy notices in the waiting area.
