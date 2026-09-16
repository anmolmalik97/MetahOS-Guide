---
sidebar_position: 4
---

# API & Platform Hardening

Beyond login, the platform protects its APIs and front-end with token-based
authentication, a Content Security Policy, server-side input validation, and a cache that
keeps authenticated requests fast without weakening security.

## At a glance

```steps
fa-circle-o | Client request | Here is what happens at this step.
fa-check | Valid JWT? | Here is what happens at this step.
fa-times | Rejected as unauthorised | Oops — it goes back to be fixed.
fa-mobile | CSP header applied | Here is what happens at this step.
fa-check | Server-side field validation | Here is what happens at this step.
fa-user | Logged-in user cached? | Here is what happens at this step.
fa-circle-o | Serve from Redis cache | Here is what happens at this step.
fa-circle-o | Read from database | Here is what happens at this step.
fa-sitemap | Process request | Here is what happens at this step.
```

## JWT-Protected APIs

Application APIs are protected with **JSON Web Tokens (JWT)**. After login the user
receives a signed token that must accompany every protected request; requests without a
valid token are rejected as unauthorised. A separate **refresh token** lets the client
obtain a new access token without re-entering credentials, and the refresh path
re-checks that the session is still valid (not forced out or expired) before issuing one.

## Token Expiry

Access tokens are short-lived so a leaked token has a limited window of use. The
`session_id` cookie issued at login is set with **HTTP-only**, **secure** (in
production) and **same-site strict** flags and a **1-day** max-age, and patient login
tokens are issued with a **1-day** expiry. Sessions are independently tracked and expire
after a few days, so an old token cannot be refreshed indefinitely.

:::tip
Because tokens are short-lived and tied to a tracked session, forcing a user's other
devices to log out (see [Session & Device Management](./session-and-device-management.md))
takes effect on the next refresh.
:::

## Content Security Policy (CSP)

The platform sends a **Content Security Policy** header (via Helmet) that restricts where
scripts, styles, images, fonts, media and frames may load from — defaulting to the app's
own origin plus an explicit allow-list of trusted providers (Google reCAPTCHA, fonts,
CDNs, S3/Cloudinary, and Meta hOS domains). In production it also upgrades insecure
requests and can enforce HSTS and frame protection. The policy is tunable through
environment variables and can be run in report-only mode while testing.

## Server-Side Field Validation

Input is validated on the **server**, not just in the browser, to block script-injection
and malformed data:

- Login and other requests are parsed against strict schemas before any processing.
- Identifier and free-text fields are validated with character patterns and trimmed/
  sanitised on the server (for example usernames are restricted to a safe character set
  and length, and free-text fields are stripped of stray content).
- Because validation runs server-side, a crafted request that bypasses the UI is still
  rejected.

:::caution
Client-side validation is a convenience, not a guarantee. The authoritative checks run on
the server, so disabling JavaScript validation in a browser does not let a user submit an
unsafe value.
:::

## Caching Logged-In Users

To keep authenticated requests fast, the platform caches the resolved logged-in user
record (in Redis) for a short window:

- A **soft** TTL (5 minutes) after which the entry is refreshed in the background, and a
  **hard** TTL (10 minutes) after which it is evicted.
- Lookups have a tight timeout and a **circuit breaker** that bypasses the cache straight
  to the database if the cache is unhealthy, so a cache problem never blocks logins.
- The cache is invalidated when the underlying user changes, so permission and status
  changes are picked up quickly.
