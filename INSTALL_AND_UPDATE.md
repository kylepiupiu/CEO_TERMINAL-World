# Install & Update — Android Alpha Builds\n\n**English** | [简体中文](./INSTALL_AND_UPDATE.zh-CN.md)

CEO TERMINAL public Android test builds are distributed through this repository's **Releases** section.

## Current public build

**CEO TERMINAL V4 — Alpha 3 Day & Week R1**

Release: https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-alpha3-dayweek-r1

APK: https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-alpha3-dayweek-r1/CEO_TERMINAL_V4-Alpha3-DayWeek-r1.apk

- Version: `4.0-alpha.3`, code `4300`
- Package: `com.kyle.ceoterminal.v4alpha`
- Size: 87,181,789 bytes
- SHA-256: `10982458a6920981416f8eaa220df7e79d0fb7cddb4c5e3a82eb4f55d603fd97`
- APK signing certificate SHA-256: `88aede779af3d41872dd271c280482e509a3c42b0cdf02998a991f1f30843134`
- Offline Chinese-language Android Alpha prerelease; landscape mode.

**Critical compatibility warning:** This Alpha 3 APK has a **different** debug signing certificate from Alpha 2.1 R1 and other older builds. It is not a verified over-the-top update; Android may reject installation over the installed version. **Do not uninstall an older game with saves you want to keep.** Uninstalling may permanently erase local saves. There is no tested cross-certificate save migration process. Test on another device or confirm an independently verified save backup before changing versions.

Previous release: [Alpha 2.1 R1](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-alpha2.1-r1) (4.0-alpha.2.1-r1 / 4202). That build was verified as an in-place upgrade specifically from Alpha 2.1 / 4201; **that result does not apply to Alpha 3**.

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

The current Alpha 3 build is test-signed with a **different key from Alpha 2.1 R1**. An in-place update cannot be assumed, and a permanent in-place update channel is **not yet guaranteed**.

Alpha 2.1 R1 / 4202 has the same package and verified signing certificate as Alpha 2.1 / 4201, with a higher version code. Install it over 4201 to preserve local saves; do not uninstall first. The save format and business data are unchanged.

Signing certificate SHA-256: `84e111d18f33fb1a0b52a20a4ce6088660c8b04dcbc0780327e113a1e1b3d697`.

Alpha 3 has a different certificate, so Android may reject installing it over Alpha 2.1 R1 and other older test builds. Uninstalling deletes local saves. Do not remove a save-bearing installation to bypass a signing conflict. There is no supported cross-signature save migration.

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
