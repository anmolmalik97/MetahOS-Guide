---
sidebar_position: 1
---

# Public Forms

**Public Forms** are forms that can be opened and filled in without logging in to MetahOS. They are ideal for intake questionnaires, registration interest, feedback, or any data you want to collect from people who are not staff or registered portal users.

## At a glance

```steps
fa-pencil | Define fields | Here is what happens at this step.
fa-check-circle | Set type: Public Forms | Here is what happens at this step.
fa-share-alt | Publish public link | We connect the records to the health ID.
fa-eye | Open without login | Here is what happens at this step.
fa-upload | Signed upload token | We get a special key to share safely.
fa-paper-plane | Submit | We send it off to the next person.
fa-shield | Enabled & public? | Here is what happens at this step.
fa-file-text-o | Saved response | Here is what happens at this step.
fa-times | Rejected | Oops — it goes back to be fixed.
```

## What Makes a Form "Public"

A public form is simply a form whose type is set to **Public Forms**. Forms of this type are managed from the **Public Forms** screen (under Care Configuration / Forms & Assessments), the same way other forms are built — you define the fields, then publish.

Once published, a public form is reachable through a public link that does not require authentication, so anyone with the link can open and submit it.

## How Public Submission Works

The public-facing endpoints expose only what a public form needs:

- The form definition (its name and fields) is fetched by id.
- Submissions are posted back and stored as form responses, optionally tagged with an `entityId` and `uniqueId` for grouping; when those are not supplied, the current date is used.
- File/image uploads from a public form use short-lived, signed upload tokens so uploads are scoped to that specific form.

Only forms that are of type **Public Forms** and not disabled can be opened or submitted publicly — any other id is rejected.

:::note Environment
- `PUBLIC_FORM_UPLOAD_TOKEN_SECRET` — secret used to sign public upload tokens (falls back to `HASH_KEY`).
- `PUBLIC_FORM_UPLOAD_TOKEN_EXPIRES_IN` — upload token lifetime (default `30d`).
- `PUBLIC_FORM_REFRESH_TOKEN_SECRET` / `PUBLIC_FORM_REFRESH_TOKEN_EXPIRES_IN` — refresh token secret and lifetime (default `180d`).
:::

:::caution
Because public forms accept submissions without login, only expose forms you intend to be open, and keep sensitive fields out of them.
:::
