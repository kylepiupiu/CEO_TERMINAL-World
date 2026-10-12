# 安装与更新 — Android Alpha 试玩版

[English](./INSTALL_AND_UPDATE.md) | **简体中文**

CEO TERMINAL 的公开 Android 测试版统一通过本仓库的 **Releases** 发布。

## 当前公开试玩版本

**CEO TERMINAL V4 — Alpha3 自然日与自然周 R1**

Release：https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-alpha3-dayweek-r1

APK 直链：https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/download/v4-alpha3-dayweek-r1/CEO_TERMINAL_V4-Alpha3-DayWeek-r1.apk

- 版本：`4.0-alpha.3`，Version Code：`4300`
- 包名：`com.kyle.ceoterminal.v4alpha`
- APK：87,181,789 字节
- SHA-256：`10982458a6920981416f8eaa220df7e79d0fb7cddb4c5e3a82eb4f55d603fd97`
- APK 签名证书 SHA-256：`88aede779af3d41872dd271c280482e509a3c42b0cdf02998a991f1f30843134`
- Android 离线 Alpha 试玩版，游戏内为中文，横屏运行。

**关键兼容性提醒：**Alpha3 使用的测试签名证书与 Alpha2.1 R1 **不同**，不能视为已验证的覆盖升级版本。Android 可能拒绝覆盖安装。**如果旧版仍有需要保留的存档，不要直接卸载旧版**；卸载可能永久删除本地存档。当前尚没有经过验证的跨签名存档迁移方案。建议另用测试设备安装，或先通过可靠方式备份并验证存档。

上一公开版本：[Alpha 2.1 R1](https://github.com/kylepiupiu/CEO_TERMINAL-World/releases/tag/v4-alpha2.1-r1)（4.0-alpha.2.1-r1 / 4202）。它仅与 Alpha 2.1 / 4201 验证过覆盖兼容，**不代表 Alpha3 可以覆盖升级**。

## 安装

1. 从 Release 页面下载 APK。
2. 在 Android 设备上打开下载的 APK。
3. 如果系统提示，请允许浏览器或文件管理器“安装未知应用”。
4. 确认安装。

当前仍属于 Alpha 测试，不通过应用商店分发。

## Alpha 阶段更新

### 推荐：Obtainium

希望自动获得更新提醒的玩家，可以在 Obtainium 中添加本仓库：

`https://github.com/kylepiupiu/CEO_TERMINAL-World`

Obtainium 可以监控 GitHub Releases，并在有新版 APK 时提醒。

最终安装步骤仍由 Android 控制，根据设备和系统版本不同，用户可能仍需要确认更新。

### 重要：签名规则

Android 只有在以下条件同时满足时，才能直接覆盖安装：

- 包名兼容；
- 新旧 APK 使用同一个签名证书；
- 新版 Version Code 更高。

Alpha 2.1 R1 / 4202 与 Alpha 2.1 / 4201 使用相同包名和已经验证一致的签名证书，因此可以直接覆盖安装并保留本地存档。**不要先卸载。**

签名证书 SHA-256：

`84e111d18f33fb1a0b52a20a4ce6088660c8b04dcbc0780327e113a1e1b3d697`

Alpha3 与 Alpha2.1 R1 的签名证书不同，Android 可能拒绝覆盖安装。上述 Alpha2.1 → R1 的兼容性只对那两个旧版本有效。

**卸载应用会删除本地存档。** 不要为了绕过签名冲突而随意卸载一个已经有存档的版本。目前没有跨签名迁移存档的正式方案。

## 未来更新通道

项目后续会逐步固定：

- 长期 Android 签名；
- 稳定包名；
- 单调递增的 Version Code；
- 机器可读的更新元数据；
- 游戏内检查更新；
- 后续可选的应用商店测试通道。

机器可读更新信息：

`update-channel.json`

普通第三方 Android 应用不能像系统应用那样在后台静默替换自己。即使以后加入游戏内更新检查，侧载 APK 通常仍需要 Android 用户确认安装。

## 历史版本

更早的 V4-P0.1、V3.9 等测试版本仍保留在 GitHub Releases 中，用于版本对比和项目演进记录。

## 源码策略

本公开仓库只发布试玩版和公开文档。正式生产源码、内部模拟规则、平衡数据、测试和私有设计文档都保留在私有开发仓库。
