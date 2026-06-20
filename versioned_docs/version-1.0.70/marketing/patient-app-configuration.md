---
sidebar_position: 2
---

# Patient App Configuration

The **Patient App Configs** section of the Marketing → Configurables screen controls the branding, contact information, legal text, home screen carousel and supporting imagery shown in the patient mobile app. Changes are saved into the global configuration and take effect across the patient app.

## At a glance

```steps
fa-tags | Branding & contact | We reach out to say hello.
fa-file-text-o | Legal text | Here is what happens at this step.
fa-picture-o | Imagery & icons | The pictures are saved safely.
fa-film | Home carousel | Here is what happens at this step.
fa-id-card-o | App identity | Here is what happens at this step.
fa-shield | Terms & consent | The patient says "yes, you may share my records."
fa-eye | Section visuals | Here is what happens at this step.
fa-bullhorn | Rotating banners | Here is what happens at this step.
fa-comment | FAQs & slides | Here is what happens at this step.
```

## Patient app home carousel

The **Carousel Items** editor controls the rotating banners on the patient app home screen. Each carousel item has two parts:

- **Image Link** — the banner image URL. This is required and must be a valid `http(s)` URL.
- **onClick (JS snippet)** — what happens when a patient taps the banner, for example opening a link.

Use **Add more** to add additional banners and the delete control to remove one. The set of items is saved in the carousel configuration.

:::caution
The **onClick** field accepts a small action snippet that runs when the banner is tapped (for example `window.open(...)`). Only enter actions you trust and have verified, and keep them simple — this controls real navigation behaviour in the patient app.
:::

## Frequently asked questions

The Configurables screen also manages the patient app **FAQs**, onboarding **slides**, and **disclaimers**, so the help content and first-run experience can be maintained from the same place.
