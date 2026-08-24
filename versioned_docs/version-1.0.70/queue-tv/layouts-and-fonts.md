---
sidebar_position: 3
---

# Layouts, Vertical Screens & Fonts

The **Queue TV layout editor** (`/qtv-editor`) lets you position and size the advertisements around the live queue board, and adjust the on-screen font size. It provides a live, drag-and-drop preview so you can set things up exactly how they will appear on the TV.

## At a glance

```steps
fa-desktop | Layout editor /qtv-editor | Here is what happens at this step.
fa-cog | Choose layout | Here is what happens at this step.
fa-picture-o | Horizontal only | Here is what happens at this step.
fa-mobile | Vertical only | Here is what happens at this step.
fa-tv | Combined | Here is what happens at this step.
fa-filter | Height, zoom, drag | Here is what happens at this step.
fa-filter | Width, zoom, drag | Here is what happens at this step.
fa-filter | Both regions tuned | Here is what happens at this step.
fa-eye | Live preview | Someone takes a careful look first.
fa-file-text-o | Doctor font (px) | Here is what happens at this step.
fa-check | Save per layout type | Here is what happens at this step.
```

## Choosing a layout

The editor offers three layout types:

- **Horizontal Only (`shrinkH`)** — a horizontal ad along the bottom, queue above.
- **Vertical Only (`shrinkV`)** — a vertical ad down one side, queue beside it.
- **Combined (`shrink`)** — a vertical ad on the side *and* a horizontal ad on the bottom at once. This option appears when the combined layout is enabled in the Queue TV configuration.

## Vertical Queue TV

For portrait-mounted displays or side-panel signage, use the **Vertical Only** layout. You can:

- Set the **Vertical Width** (15–70 vw) — how much of the screen width the vertical ad occupies.
- Adjust the **Vertical Zoom** (50–200%).
- **Drag** the vertical ad to reposition it, or resize the panel by dragging its edge.

## Horizontal layout

For the **Horizontal Only** layout you can:

- Set the **Horizontal Height** (10–60 vh) — how much of the screen height the bottom ad occupies.
- Adjust the **Horizontal Zoom** (50–200%).
- **Drag** the bottom ad to reposition it, or resize the panel by dragging its edge.

## Combined layout

The **Combined** layout exposes both the vertical and horizontal controls at once, plus separate offset controls for the side and bottom ads, so you can tune both regions independently.

## GIF and video media in the preview

The editor previews whichever media you have configured for the vertical and horizontal slots, automatically rendering **GIFs/images** as images and **videos** as autoplaying, looping, muted video — so the preview matches what plays on the TV.

## Font size

Queue TV includes a **Doctor font (px)** control in the editor (range 12–64 px) that sets the size of the doctor/queue text on the board. Adjusting it updates the live preview immediately and is remembered for that screen, so you can size the text to be readable from across the waiting area.

## Saving

Click **Save** to store the layout. Layout settings (panel sizes, zoom and offsets) are saved per layout type so each layout retains its own arrangement.

:::tip
Set the layout up on the same screen and resolution it will run on. The editor preview uses viewport units (vw/vh), so a layout tuned on a 1080p TV will look right on that TV.
:::
