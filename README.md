# CEO TERMINAL — World

**A pixel-art business RPG about real-world B2B sales, judgment, relationships, company survival, and long-term consequences.**

> **No facts, no progress.**

CEO TERMINAL is not a CRM and it is not a click-to-fill-a-progress-bar sales game.

The player enters a living business world, moves through offices and social spaces, talks to people, gathers incomplete information, allocates time / people / cash, makes decisions, advances time, and lives with the consequences.

**Explore → Talk → Learn → Judge → Allocate → Act → Advance Time → Face the Result**

A friendly contact may not have authority. A junior employee may become important years later. A large contract may create a cash or delivery crisis. A competitor may cooperate in one situation and oppose you in another. Revenue is not cash, and a verbal promise is not organizational commitment.

---

## Play the Current Android Build

### V4 — Alpha 2.1

**[Download CEO_TERMINAL_V4-Alpha2.1.apk](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-alpha2.1/CEO_TERMINAL_V4-Alpha2.1.apk)** · [Release notes and checksums](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-alpha2.1)

- Version: 4.0-alpha.2.1 / 4201
- Package: com.kyle.ceoterminal.v4alpha
- Android 7.0+ with OpenGL ES 3.0; 64-bit and 32-bit ARM in one APK
- Offline, test-signed Alpha; current in-game text is Chinese
- APK: 78,864,320 bytes
- SHA-256: 9793376ea6585cacb400c87353adc0c2f686a349045802a09599eb1a1e5e768d

Alpha 2.1 completes the visual update across all 17 environments and the characters. It builds on the frozen Alpha Core business systems.

Player-facing changes:

- Warm, detailed pixel-art rooms with practical furniture, carpet, documents and greenery.
- A new four-direction player with walking animation and eight staff/service appearances.
- Scene-specific collision, foreground occlusion, entrances and interaction points.
- Elevator floor selection and existing visitor, appointment and procurement access rules.
- Equal-proportion camera framing on standard and long-screen phones, tablets and square screens.
- Both landscape orientations, safe-area-aware controls and corrected touch-coordinate mapping.
- Preserved people, company operation, projects, finance, relationships and local saves.

The 17 spaces are the city, home, company, client lobby, elevator hall, canteen, technical office, meeting room, section office, planning office, division/expert office, tender office, bid room, secretary office, executive suite, cafe and restaurant.

Exploration and casual conversation do **not** automatically create business progress. Progress still depends on verified facts and real changes in the business situation.

### Actual running-game screenshots

![City](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-alpha2.1/city.png)

![Company](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-alpha2.1/company.png)

![Cafe](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-alpha2.1/cafe.png)

![Restaurant](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-alpha2.1/restaurant.png)

Automated engine checks cover all 17 scenes, six viewport sizes and simulated left/right cutouts. Real-device installation, GPU compatibility, touch feel and sustained performance still need playtesting.

This build is test-signed and may not install over earlier Alpha builds. Uninstalling deletes local saves. See **[INSTALL_AND_UPDATE.md](./INSTALL_AND_UPDATE.md)** before replacing an existing installation.

---

## What Alpha Core Means

Alpha Core means the first V4 core-system loop is complete and frozen as a development baseline.

It does **not** mean V4 is finished.

The next stage focuses on:

- real-player Alpha feedback
- mobile feel and usability
- event-density tuning
- 1–3 year balance tuning
- deeper NPC schedules and social windows
- more world and business content
- persistent Android signing and a cleaner update channel

---

## Design Principles

### No facts, no progress

Subjective optimism does not move a deal forward. Progress must come from evidence, action, organizational change, commitment, delivery, or financial reality.

### Actions are not outcomes

Sending a proposal, making a call, arranging a meeting, or asking for support is only an action. An action may create useful information, new risk, a relationship change, no result at all, or even a setback.

### The world can be complex. The controls should not be.

The player-facing loop stays intentionally simple:

**Move / Talk / Observe / Decide / Allocate / Advance Time**

Complexity belongs in people, organizations, information, money, time, and consequences — not in a wall of buttons.

### NPCs are people, not quest dispensers

People have roles, interests, personalities, limits, relationships, memories, and changing circumstances. Formal title does not perfectly predict informational value, influence, or future importance.

### The world does not revolve around the player

Organizations change. People move. Budgets tighten. Employees develop. Competitors act. Opportunities disappear. Old relationships can become relevant again.

---

## Public Development Direction

V3 established the fact-based B2B sales simulation.

V4 expands that foundation into a living company and business world.

The public roadmap now moves beyond the Alpha Core baseline toward:

- richer NPC schedules and social behavior
- deeper organizations and internal politics
- more companies and locations
- player and company growth
- dynamic markets and policy changes
- competition and cooperation
- long-term career consequences
- rare characters and hidden events

See **[ROADMAP.md](./ROADMAP.md)** for the public roadmap and **[CHANGELOG.md](./CHANGELOG.md)** for milestones.

---

## Update Channel

Public Android builds are published here from the private development pipeline after a validated build is completed.

Testers can use **Obtainium** to monitor this repository's Releases for new APKs. Android may still require user confirmation before installing an update.

Machine-readable update metadata is available in **[update-channel.json](./update-channel.json)**.

Alpha builds are currently test-signed. In-place upgrade compatibility is not guaranteed until the permanent signing channel is frozen.

---

## Repository Policy

This repository is the **public-facing home of CEO TERMINAL**.

It contains:

- project overview
- public roadmap and changelog
- playable Android builds
- release notes
- install / update guidance
- public feedback entry points

The production source code, internal simulation rules, detailed system specifications, balancing data, private NPC logic, tests, and hidden mechanics are maintained separately and are **not part of this public repository**.

Public visibility does not mean the project is open source. See **[LICENSE](./LICENSE)** for usage restrictions.

---

## Technology

Current builds use:

- Godot 4.x
- GDScript
- 2D pixel-art presentation
- Android-first mobile testing
- offline local saves

The public repository intentionally does not expose the production architecture.

---

## Feedback

Bug reports and gameplay feedback are welcome through GitHub Issues.

At this stage, the project is not accepting unsolicited source-code contributions. See **[CONTRIBUTING.md](./CONTRIBUTING.md)**.

---

## Project Status

**Current public milestone:** V4 Alpha 2.1  
**Development status:** Active / External Alpha testing  
**Primary platform:** Android  
**Public documentation:** English  
**Production source:** Private

---

## About

CEO TERMINAL turns real-world business, sales, and industry experience into a playable simulation.

The goal is not to teach players how to fill a sales funnel.

The goal is to let them experience what it feels like to make decisions inside an imperfect business world where information is incomplete, people have their own interests, money is limited, and every meaningful result must be earned.
