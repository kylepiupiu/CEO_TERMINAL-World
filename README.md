# CEO TERMINAL — World

**A pixel-art business RPG about real-world B2B sales, judgment, relationships, and company survival.**

> **No facts, no progress.**

CEO TERMINAL is not a CRM and it is not a click-to-fill-a-progress-bar sales game.

The player enters a living business world, moves through offices and social spaces, talks to people, gathers incomplete information, judges what is credible, chooses what to do next, advances time, and lives with the consequences.

**Explore → Talk → Learn → Judge → Act → Advance Time → Face the Result**

A friendly contact may not have authority. A junior engineer may become important years later. A competitor may help in one deal and oppose you in another. A verbal promise is not organizational commitment. Revenue is not cash. A project is not real just because someone says they like it.

---

## Play the Current Android Build

### V4-P0.1 — Pixel World Prototype

**[Download from GitHub Releases](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-p0.1-pixel)**

Direct APK:

**[CEO_TERMINAL_V4-P0.1-pixel.apk](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-p0.1-pixel/CEO_TERMINAL_V4-P0.1-pixel.apk)**

SHA-256:

`5bb3ead0a77177b22cb38abe9b774d995ff7dd989344d22e7d4d75c4e86ece52`

Android 7.0+ · arm64-v8a · Offline test build

The current prototype expands the original sales simulation into a small explorable world while preserving the established pixel-art direction.

Five spaces are currently represented:

- City Overview
- Company Headquarters
- Client Technical Department
- Client Management / Functional Area
- Street-Corner Café

The prototype includes:

- Four-direction character movement
- Mobile touch controls
- Scene entrances and exits
- Position persistence between spaces
- Proximity-based interaction
- Dialogue and notebook overlays
- Local save / load
- Company project and approval workstations
- A preserved fact-based sales progression model

Exploration and casual conversation do **not** automatically create business progress. Meaningful progression still depends on verified facts and actual changes in the business situation.

For installation and update options, see **[INSTALL_AND_UPDATE.md](./INSTALL_AND_UPDATE.md)**.

---

## Prototype Update Channel

Public Android builds are mirrored here from the private development pipeline after a release build is completed.

For testers who want automatic release detection, **Obtainium** can monitor this repository's GitHub Releases. Android may still require user confirmation before installing an APK update.

Machine-readable prototype update metadata is available in **[update-channel.json](./update-channel.json)**.

A permanent in-place update channel will require a stable Android package ID, a persistent signing key, and monotonically increasing version codes. Until those are frozen, some prototype generations may require a reinstall.

---

## Design Principles

### No facts, no progress

Subjective optimism does not move a deal forward. Progress must come from evidence, action, organizational change, commitment, or financial reality.

### Actions are not outcomes

Sending a proposal, making a call, arranging a meeting, or asking for support is only an action. An action may create useful information, new risk, a relationship change, no result at all, or even a setback.

### The world can be complex. The controls should not be.

The player-facing loop stays intentionally simple:

**Move / Talk / Observe / Decide / Advance Time**

Complexity lives behind the world, not in a wall of dashboards.

### NPCs are people, not quest dispensers

People have roles, interests, limits, relationships, and changing circumstances. Formal title does not perfectly predict informational value, influence, or future importance.

### The world does not revolve around the player

Organizations change. People move. Budgets tighten. Competitors act. Opportunities disappear. Old relationships can become relevant again.

---

## Development Direction

V3 established the core business-sales simulation and the fact-based progression philosophy.

V4 is about making the surrounding world feel alive.

The public roadmap focuses on:

- richer pixel environments
- living NPC behavior
- organizational relationships
- multiple companies and locations
- cities and travel
- player and company growth
- market and policy changes
- competition and cooperation
- long-term career consequences
- rare characters and hidden events

See **[ROADMAP.md](./ROADMAP.md)** for the public roadmap and **[CHANGELOG.md](./CHANGELOG.md)** for public milestones.

---

## Repository Policy

This repository is the **public-facing home of CEO TERMINAL**.

It contains:

- project overview
- public roadmap
- release notes
- playable public builds
- update metadata
- issue tracking and development updates

The production source code, internal simulation rules, detailed system specifications, balancing data, and private design documents are maintained separately and are **not part of this public repository**.

Public visibility does not mean the project is open source. See **[LICENSE](./LICENSE)** for usage restrictions.

---

## Technology

Current prototypes are built with:

- Godot 4.x
- GDScript
- 2D pixel-art presentation
- Android-first mobile testing
- Offline local saves

The public repository intentionally does not expose the complete production architecture.

---

## Feedback

Bug reports and gameplay feedback are welcome through GitHub Issues.

At this stage, the project is not accepting unsolicited source-code contributions. See **[CONTRIBUTING.md](./CONTRIBUTING.md)**.

---

## Project Status

**Current public milestone:** V4-P0.1 Pixel World Prototype  
**Development status:** Active  
**Primary platform:** Android  
**Public documentation:** English  
**Production source:** Private

---

## About

CEO TERMINAL turns real-world business, sales, and industry experience into a playable simulation.

The goal is not to teach players how to fill a sales funnel.

The goal is to let them experience what it feels like to make decisions inside an imperfect business world where information is incomplete, people have their own interests, money is limited, and every meaningful result must be earned.
