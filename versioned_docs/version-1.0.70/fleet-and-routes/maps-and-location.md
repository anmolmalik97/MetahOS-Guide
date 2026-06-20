---
sidebar_position: 2
---

# Maps, Location & Route Maps

MetahOS uses open mapping technology for picking locations, displaying where actions happened, and managing field route maps.

## At a glance

```steps
fa-location-arrow | Leaflet + OSM picker | Here is what happens at this step.
fa-map-marker | Lat / long | Here is what happens at this step.
fa-globe | Nominatim | Here is what happens at this step.
fa-globe | LocationIQ | Here is what happens at this step.
fa-globe | OpenCage | Here is what happens at this step.
fa-list | Readable address | Here is what happens at this step.
fa-map-marker | Site geofence | We check they are at the right place on the map.
fa-check-circle | On-site punch check | Someone marks "I am here!" for attendance.
fa-sitemap | Route maps | Here is what happens at this step.
```

## Leaflet & OpenStreetMap

Maps in MetahOS are rendered with **Leaflet** using **OpenStreetMap** tiles. This replaces the earlier Google Maps integration, so map features work without a Google Maps API key.

For example, the **location picker** used when adding a camp shows an interactive OpenStreetMap-backed map where you click to drop a marker and select the precise coordinates.

:::info
Map tiles are served from OpenStreetMap (`tile.openstreetmap.org`) with the standard OpenStreetMap attribution. No Google Maps key is required.
:::

## Reverse Geocoding & Location Display

When MetahOS captures a latitude/longitude — for example when a staff member punches attendance from the mobile app — it converts those coordinates into a human-readable location (locality, taluk, district, state, and pincode). This is done on the backend through a **reverse-geocoding** service with automatic fallback across providers:

1. **Nominatim** (OpenStreetMap)
2. **LocationIQ**
3. **OpenCage**

If the first provider does not return an address, the next is tried, so a readable location is shown wherever possible.

## Site Coordinates & Geofencing

Sites can now store their own **coordinates** (`latitude` / `longitude`) along with an allowed **punch radius**. These coordinates act as a reference point — for example, HR attendance punches are checked against the site's location and radius to confirm a punch was made on-site.

## Advanced Route Maps

The **Route Maps** feature (under Workflow) lets teams upload and manage route-map files scoped to sub-divisions, so field staff have the routes they need on hand.
