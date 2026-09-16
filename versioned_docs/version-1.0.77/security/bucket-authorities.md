---
sidebar_position: 5
---

# Bucket Authorities

A **bucket authority** is a named bundle of sites. Instead of hand-picking every site a user should reach, you assign them one bucket and they get the whole set.

## At a glance

```steps
fa-building | Group your sites | Bundle the sites that belong together.
fa-tag | Name the bucket | Give the bundle a name people recognise.
fa-user | Assign it to a user | One choice instead of ticking many boxes.
fa-key | Access resolved | The user reaches every site in the bucket.
```

## Creating and managing buckets

Buckets are managed under **Facility Management → Bucket Authorities**, and require the `manage_bucket_authorities` permission.

A bucket has a name and the list of sites it contains. Creating one does not change anyone's access until it is assigned to a user.

### One site, one bucket

A site can belong to only **one active bucket** at a time. This keeps the answer to "which bucket covers this site?" unambiguous.

- When you add sites to a bucket, any already claimed by another active bucket are reported back to you rather than silently moved.
- The site picker hides sites that another active bucket already claims.
- Re-enabling a disabled bucket is checked the same way, in case its sites were claimed while it was off.

## Assigning a bucket to a user

On the user form, choose a bucket instead of picking sites individually. When a bucket is selected:

- The manual site selector is hidden — the two are mutually exclusive.
- The user's **default authority** must be one of the sites in the bucket. If the current default is not in the bucket, it is cleared and you are asked to pick a new one.

A user's own **My Authorities** view shows the bucket name, so they can see where their access comes from.

:::info How access is worked out
A user's effective sites are resolved when they sign in and whenever their access is checked. A user with a bucket has no manually stored site list — the bucket is the source of truth, so changing the bucket's contents immediately changes what its users can reach.
:::

:::note
`canAccessAllAuthority` still overrides everything. A user with all-authority access reaches every site regardless of any bucket.
:::

:::caution
Access fails **closed**. If a user's bucket resolves to no sites at all, they see nothing rather than everything.
:::
