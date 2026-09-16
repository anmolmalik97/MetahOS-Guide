---
sidebar_position: 54
---

# Dashboard Hierarchy & List Management

Alongside the AI Dashboards, the **Dashboards** module includes two tools for working with embedded analytical frames (such as Metabase dashboards): the **Hierarchical** dashboard and the **Dashboard List**. This page explains both, and the permissions that control them.

## At a glance

```steps
fa-table | Dashboards module | We see everything on one screen.
fa-sitemap | Hierarchical dashboard | We see everything on one screen.
fa-list | Dashboard List | We see everything on one screen.
fa-map-marker | DLC / ALC / LO / MMU tree | Here is what happens at this step.
fa-shield | Authority access? | Here is what happens at this step.
fa-eye | Full hierarchy | Here is what happens at this step.
fa-filter | Assigned MMUs only | We pick a helper for the job.
fa-search | Search & open frames | Here is what happens at this step.
fa-cog | Edit Layout mode | Here is what happens at this step.
fa-lock | Signed Metabase embed | Here is what happens at this step.
```

## Hierarchical dashboard

The **Hierarchical** view (`/dashboards/hierarchical`) presents your network as an expandable tree and lets you open the analytical frames that belong to each node. It is designed for organisations that run a hierarchy of units — for example Mobile Medical Units grouped under local offices and clusters.

### Node types

The tree is made up of four node types:

- **DLC** — District-level cluster.
- **ALC** — Area-level cluster.
- **LO** — Local office.
- **MMU** — Mobile Medical Unit (the leaf node, each mapped to an assigning authority).

Selecting a node shows the dashboards relevant to that node's scope. Selecting a single MMU also exposes its workflow instances, which can be filtered by date range, and any files associated with that authority.

### Authority-aware filtering

The hierarchy and its frames are filtered by the assigning authorities you can access:

- Users with **all-authority access** see the complete hierarchy.
- Other users see only the MMU nodes (and their parent branches) for the authorities assigned to them; branches with no accessible MMUs are hidden.

Each analytical frame is matched to a node by scope (DLC / ALC / LO) or by the authorities locked into the frame's parameters, and a frame is only shown if you also hold its permission key.

## Dashboard List

The **Dashboard List** (`/dashboards/framesList`) is a searchable, card-based catalogue of all the embedded analytical frames configured for your organisation. Use the search box to find a dashboard by name, then open it to view it inline.

What you see depends on your permissions:

- Standard users see only enabled frames that they have permission to view.
- Users who can manage frames see every frame, including disabled ones.

### Managing the list

If you have the management permission, the Dashboard List gains an **Edit Layout** mode with these capabilities:

- **Reorder** dashboards by dragging the cards, or use **Move to index** to jump a card to a specific position.
- **Enable / disable** individual dashboards.
- **Add Dashboard** — create a new frame, supplying its title, URL, icon and permission key, and marking whether it is a Metabase dashboard.
- Switch between **Grid** and **List** layouts while editing.
- **Save Changes** to persist the updated list, or **Cancel** to discard.

:::caution
Reordering and enabling/disabling dashboards changes the layout for everyone in your organisation. Use **Save Changes** only when you are happy with the new arrangement.
:::

## Pinned dashboards & Metabase

Frames can be pinned into the Dashboards sidebar for one-click access. When a pinned frame is a Metabase dashboard, MetahOS requests a signed embed URL for it on open, so the dashboard renders securely inside MetahOS.
