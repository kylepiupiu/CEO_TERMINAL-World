# Install & Update — Android Test Builds

CEO TERMINAL public Android test builds are distributed through the **Releases** section of this repository.

## Current build

**V4-P0.1 — Pixel World Prototype**

Release page:

https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-p0.1-pixel

Direct APK:

https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-p0.1-pixel/CEO_TERMINAL_V4-P0.1-pixel.apk

SHA-256:

`5bb3ead0a77177b22cb38abe9b774d995ff7dd989344d22e7d4d75c4e86ece52`

Current package ID:

`com.kyle.ceoterminal.v4p0.pixel`

Current Android version code:

`4001`

## Installation

1. Download the APK from the release page.
2. Open the downloaded APK on an Android device.
3. Android may ask you to allow installation from the browser or file manager you used to download it.
4. Confirm the installation.

This is a prototype/test build and is not currently distributed through an app store.

## Updates during the prototype stage

### Recommended: Obtainium

Testers who want update notifications can use **Obtainium** and add this GitHub repository as the app source:

`https://github.com/kylepiupiu/CEO_TERMINAL-World`

Obtainium can watch GitHub Releases and notify the tester when a newer APK is published.

Android still controls the final installation step. Depending on the device and Android version, the user may need to confirm installation of the downloaded update.

### Important signing rule

Android can only install a new APK over an existing installation when both builds use the **same package ID and the same signing key**, and the new build has a higher version code.

The current prototype generation is test-signed. A permanent update channel will be enabled only after CEO TERMINAL freezes:

- a stable package ID
- a persistent signing key
- monotonically increasing Android version codes

Until that point, some prototype upgrades may require uninstalling the previous build first. When that is required, the release notes will state it clearly.

## Planned in-game update flow

A later test build is planned to check the public release channel on startup:

1. Check the current public version metadata.
2. Compare it with the installed version.
3. Show **New version available** when appropriate.
4. Open or download the new APK.
5. Hand installation to Android for user confirmation.

Normal third-party Android applications cannot silently replace themselves in the background. Fully managed automatic updates are better handled later through Google Play testing tracks or another trusted app-distribution service.

## Source policy

This public repository distributes playable builds and public documentation only. Production source code, internal simulation rules, balancing data, and private design specifications are maintained separately.
