---
sidebar_position: 50
---

# Attendance Punches & Geofencing

The HR module records employee attendance as a series of **punches** (a check-in or a
check-out). Punches can be recorded by the employee from the mobile app or the web, or
entered by an HR administrator on behalf of an employee. This page explains how punches
work, how geofencing validates the punch location, and how to configure the rules.

## At a glance

```steps
fa-clock-o | Employee opens punch screen | Someone marks "I am here!" for attendance.
fa-file-text-o | Platform asks next action | Here is what happens at this step.
fa-map-marker | Capture selfie and GPS | Here is what happens at this step.
fa-map-marker | Geofencing enabled? | We check they are at the right place on the map.
fa-clock-o | Record punch | Someone marks "I am here!" for attendance.
fa-circle-o | Within nearest radius? | Here is what happens at this step.
fa-circle-o | Enforced for this action? | Here is what happens at this step.
fa-times | Punch blocked, show distance | Someone marks "I am here!" for attendance.
fa-file-text-o | Roll up into daily summary | Here is what happens at this step.
```

## How Punches Work

Each punch stores the action (`checkin` or `checkout`), a timestamp, the employee, the
assigning authority (site) the punch belongs to, and — when the device provides it — a
selfie image and a GPS location. Punches are written to a dedicated attendance store
and roll up into the employee's daily attendance summary at the end of the day.

Employees punch from a screen that first asks the platform what the *next* expected
action is (check-in if they are currently out, check-out if they are currently in), so
they never have to guess whether they are punching in or out.

## Geofencing

Geofencing restricts where a valid punch can be recorded. When enabled, the platform
measures the employee's GPS coordinates against a set of **reference locations** and
rejects punches taken too far away.

### Combined reference locations

The reference set a punch is measured against is the **combination** of:

1. **The employee's own site location** — if the site (assigning authority) carries
   latitude/longitude coordinates, the site is used as a reference point with its own
   radius setting (default 200 metres).
2. **Every allowed location** configured on the HR Config under
   the allowed locations list, each with its own radius setting (default 200 metres).

The platform takes the *nearest* reference point. A punch is **inside** the fence if the
employee is within that location's radius, and **outside** otherwise.

:::info
If geofencing is enabled but there is no site coordinate and no configured allowed
location, there is nothing to measure against — the punch is accepted and its geofence
status is left unevaluated rather than wrongly rejected.
:::

### Enforcement

Being outside the fence only *blocks* a punch when enforcement is turned on for that
action:

- enforce-on-check-in (default enabled) — block check-ins taken outside the fence.
- enforce-on-check-out (default disabled) — block check-outs taken outside the fence.

When a punch is blocked, the employee is told how far away they are from the nearest
allowed location. The recorded geofence status of each accepted punch (`inside`,
`outside`, or `not_checked`) is visible in the Attendance Details view.

### Leave override

If an employee has an approved leave whose leave type permits punching, an accepted
punch on that day is flagged as an *on-leave override*: geofence enforcement is bypassed
for the punch and the end-of-day job treats the day as worked rather than as leave.

## Setting Allowed Locations with "Use Current Location"

On the HR Config screen, each allowed-location row has **Latitude**, **Longitude** and
**Radius (m)** fields. To make entering coordinates easy, every row provides:

- **Use Current Location** — captures the device's current GPS position and fills the
  latitude and longitude for that row. While capturing, the button shows
  *Fetching location...*
- **Choose on Map** — opens an inline map so you can drop the point visually.

This lets an administrator standing at the site simply press **Use Current Location** to
register the punch location accurately instead of typing coordinates by hand.

## Minimum Working Hours

The platform converts the day's punches into a Present / Half-Day / Absent status using
the minimum-working-hours thresholds (expressed in **minutes**):

- The minimum hours for a full day — minutes required for a full day
  (default 480, i.e. 8 hours).
- The minimum hours for a half day — minutes required for a half day
  (default 240, i.e. 4 hours).

On the HR Config screen these appear as **Min Working Hours for Full Day (minutes)** and
**Min Working Hours for Half Day (minutes)**.

:::tip
Because the thresholds are stored in minutes, enter 480 for an 8-hour day rather than
8. Related rules on the same record include the maximum overtime minutes per day,
auto-checkout after minutes, late mark threshold, and weekly off days.
:::
