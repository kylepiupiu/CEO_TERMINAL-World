# Install & Update — Android Alpha Builds

CEO TERMINAL public Android test builds are distributed through this repository's **Releases** section.

## Current recommended build

**CEO TERMINAL V4 — Alpha 2.1**

Release page:

https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-alpha2.1

Direct APK:

https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-alpha2.1/CEO_TERMINAL_V4-Alpha2.1.apk

Current Android identity:

- Version name: `4.0-alpha.2.1`
- Version code: `4201`
- Package ID: `com.kyle.ceoterminal.v4alpha`
- Architecture: arm64-v8a and armeabi-v7a (one APK)
- Minimum: Android 7.0 / OpenGL ES 3.0
- Orientation: landscape, including reverse landscape
- In-game language: Chinese
- APK size: `78,864,320 bytes`
- SHA-256: `9793376ea6585cacb400c87353adc0c2f686a349045802a09599eb1a1e5e768d`

The Alpha 2.1 build is a **test-signed prerelease**.

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

Alpha 2.1 may use a different test certificate from earlier builds, so Android may reject an in-place update. Uninstalling deletes the previous app's local save. Do not remove an existing save-bearing installation just to bypass a signing conflict. There is no supported cross-signature save migration in this build.

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
