# Install & Update — Android Alpha Builds

CEO TERMINAL public Android test builds are distributed through this repository's **Releases** section.

## Current recommended build

**CEO TERMINAL V4 — Alpha Core**

Release page:

https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-alpha-core

Direct APK:

https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-alpha-core/CEO_TERMINAL_V4-Alpha-Core.apk

Current Android identity:

- Version name: `4.0-alpha.1`
- Version code: `4100`
- Package ID: `com.kyle.ceoterminal.v4alpha`
- Architecture: arm64-v8a

The Alpha Core build is a **test-signed prerelease**.

## Installation

1. Download the APK from the release page.
2. Open the downloaded APK on an Android device.
3. Android may ask you to allow installation from the browser or file manager used to download it.
4. Confirm the installation.

This is an Alpha test build and is not currently distributed through an app store.

## Updates during Alpha

### Recommended: Obtainium

Testers who want release notifications can use **Obtainium** and add this GitHub repository as the app source:

`https://github.com/kylepiupiu/CEO_TERMINAL-World`

Obtainium can monitor GitHub Releases and notify the tester when a newer APK appears.

Android still controls the final installation step. Depending on the device and Android version, the user may need to confirm installation of the downloaded update.

### Important signing rule

Android can install a new APK over an existing installation only when:

- the package ID is compatible;
- both APKs use the same signing key;
- the new APK has a higher version code.

The current Alpha channel is still test-signed. A permanent in-place update channel is **not yet guaranteed**.

Until the production signing channel is frozen, a future Alpha build may require uninstalling the previous build first. When that happens, the release notes will state it explicitly.

## Planned permanent update channel

The project is moving toward:

- a persistent Android signing key;
- a stable long-term package identity;
- monotonically increasing version codes;
- machine-readable release metadata;
- in-game release checking;
- optional app-store testing tracks later.

The public machine-readable channel is available at:

`update-channel.json`

A future build can use this metadata to compare its installed version with the latest public release and show **New version available**.

Normal third-party Android applications cannot silently replace themselves in the background. Even with in-game update checking, Android generally requires user confirmation for a sideloaded APK update.

## Historical builds

Earlier prototype releases remain available in GitHub Releases for comparison and testing history, including V4-P0.1 and the V3.9 Android previews.

## Source policy

This public repository distributes playable builds and public documentation only. Production source code, internal simulation rules, balancing data, tests, and private design specifications are maintained separately.
