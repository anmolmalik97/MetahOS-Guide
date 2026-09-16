---
sidebar_position: 6
---

# Doctor User IDs

Doctors can sign in with a **system-generated user ID** as well as with their mobile number. The ID is generated automatically and is unique across the platform.

## At a glance

```steps
fa-user-md | Create the doctor | Add the doctor record as usual.
fa-magic | ID generated | The system builds a unique ID automatically.
fa-eye | Shown to the admin | The new ID is displayed after saving.
fa-sign-in | Doctor signs in | The doctor uses that ID to log in.
```

## What the ID looks like

The ID is built from three parts, in uppercase:

```
{3 letters of the bucket}{3 letters of the site}{number}
```

For example `INDBOG5`, and then `INDBOG55` as the count grows. The number is not zero-padded — it simply grows as more doctors are added.

- The **bucket** part comes from the doctor's own bucket if one is set, otherwise from the bucket containing the doctor's site. Where neither exists it falls back to `XXX`.
- The **site** part comes from the doctor's site name, falling back to `XXX`.

See [Bucket Authorities](./bucket-authorities.md) for how sites are grouped into buckets.

## When an ID is generated

- **On create** — every new doctor is given an ID.
- **On edit** — an ID is generated only if the doctor does not already have one. An existing ID is never overwritten by an edit.

After saving, the ID is shown to the administrator in a popup, and it also appears as a column in the doctor list so it can be looked up later.

:::tip
Log in is not case-sensitive against the stored ID — a doctor typing their ID in lower case is matched to the stored uppercase value.
:::

## Generating IDs in bulk

For an existing estate of doctors, use **HR → Resources → Generate User IDs**. The action requires `manage_doctor_userids`.

The modal shows how many doctors would be affected and what the next number will be, and recalculates as you change the option below.

| Mode | What it does |
| --- | --- |
| **Fill in missing IDs** (default) | Gives an ID to any doctor without one, and corrects IDs whose prefix has gone stale — for example a doctor whose site has since joined a bucket, so `XXXBOG160` becomes `INDBOG160`. The **number is preserved**, so the doctor's ID stays recognisable and no counter value is consumed. |
| **Regenerate all** | Rebuilds every doctor's ID and restarts the counter from 1. Each ID still derives its own prefix from that doctor's site. |

:::caution Regenerate all changes existing logins
Regenerating all IDs replaces the ID every doctor currently signs in with. Tell your doctors before you run it, and only use it when you intend a clean renumbering.
:::
