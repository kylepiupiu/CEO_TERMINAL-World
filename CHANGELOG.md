# Changelog

All notable public milestones of CEO TERMINAL are summarized here.

This changelog intentionally describes player-facing changes only. Internal simulation rules, balancing data, tests, source code, and hidden mechanics remain private.

## V4 Alpha 2.1 R1 — Current Public Milestone

Released on 2026-10-07 in response to playtest feedback.

- Refined alternating walking poses, motion cadence, acceleration and stable head presentation.
- Opened the visitor sofa area by shortening the side planter and removing the entrance planter.
- Replaced the central cafe/restaurant alley tree with a small downward sign beside the route.
- Improved collision near the home bed, sofa and bookcase.
- Added floating movement anywhere in the left half of the gameplay screen and enlarged the action buttons.
- Retained phone/tablet/square-screen layouts, safe-area mapping and existing building access rules.

Version: 4.0-alpha.2.1-r1 / 4202. Same package and verified signing certificate as Alpha 2.1 / 4201, allowing an in-place update that retains local saves. Do not uninstall first.

All 17 scenes, six viewport sizes, movement sequences and revised passages were checked in the running engine. Android touch feel and performance remain playtest items.

[Release and screenshots](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-alpha2.1-r1)

## V4 Alpha 2.1 — Complete World Update

Released on 2026-10-07. Completes the world and character visual update.

- Replaced artwork across all 17 scenes, including the city, cafe, restaurant and the full client-office hierarchy.
- Added a new four-direction walking player and eight staff/service appearances.
- Aligned furniture collision, foreground occlusion, spawns, exits and interaction positions with each room.
- Added the elevator floor menu while preserving visitor and appointment access conditions.
- Updated warm carpeted offices, sofa greenery, the extended meeting table and six-seat restaurant round table.
- Adapted the camera and HUD to standard/long-screen phones, tablets and square screens, including both landscape directions and safe-area touch mapping.
- Packaged 32-bit and 64-bit ARM support together.
- Preserved business systems, fact-based progression and local-save data; migrated obsolete room coordinates.

Version: 4.0-alpha.2.1 / 4201. Package: com.kyle.ceoterminal.v4alpha. Test-signed Alpha.

All scenes and six viewport sizes were checked in the running engine. Android device/GPU performance and touch feel remain playtest items. Older test certificates may prevent an in-place update; uninstalling deletes local saves.

[Release and screenshots](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-alpha2.1)

## V4 Alpha Core — Frozen Core Baseline

V4 Alpha Core completes the first integrated V4 company-operation baseline on top of the preserved fact-based B2B sales engine.

Highlights:

- connected the five-space pixel world to the long-running company simulation
- preserved four-direction mobile movement and proximity interaction
- added persistent people, roles, workload and authority foundations
- added NPC role, communication-style, personality and relationship differences
- connected project ownership, delivery, acceptance, receivables and collection to company operation
- expanded finance, evidence, risk, competitor, people and personal-state views
- added operating issues, history, review and long-term consequence foundations
- strengthened formal-contract and company-approval gates
- improved production-map navigation, dashboard refresh and mobile viewport behavior
- preserved the core rule: **no facts, no progress**

Current Android identity:

- Version: `4.0-alpha.1`
- Version code: `4100`
- Package: `com.kyle.ceoterminal.v4alpha`

Status:

- Alpha Core implementation complete
- frozen as the current V4 development baseline
- automated regression / acceptance baseline completed
- external player Alpha, tuning and content depth are the next phase

## V4-P0.1 — Pixel World Prototype

The first V4 world prototype proved that the existing business simulation could live inside an explorable pixel world.

Highlights:

- restored and preserved the established pixel-art visual direction
- expanded the game into five explorable spaces
- added city-to-interior navigation
- improved four-direction mobile movement
- added proximity interaction
- added dialogue and notebook overlays
- added local position persistence between spaces
- connected company project and approval workstations to the existing business simulation
- preserved the fact-based progression rule: exploration alone does not create sales progress

Public prototype spaces:

- City Overview
- Company Headquarters
- Client Technical Department
- Client Management / Functional Area
- Street-Corner Café

## V3.9.4 — Pixel Polish RC

Highlights:

- established a complete Android playable business-sales loop
- added four-direction player facing
- improved walking animation
- made NPCs visible in the pixel scenes
- added lightweight NPC idle animation
- improved mobile controls and interaction feedback
- added proximity prompts and named dialogue display
- retained offline local saves

This version became the preserved sales-simulation baseline for V4 world work.

## V3.9.3 — Pixel Preview

Highlights:

- preserved the original three-scene pixel presentation
- provided an early Android playable preview
- validated the transition from the earlier web simulation into a mobile game format

## Earlier Development

Earlier versions focused on building and validating the business-simulation foundation before the project became a mobile world-based game.

Detailed historical implementation documents are kept in the private development repository.
