# Privacy Statement

Effective date: 2026-09-19

StatusPerch is designed to operate locally on your Mac.

## Data handling

- No account or sign-in is required.
- No analytics, advertising SDK, or tracking code is included.
- StatusPerch does not upload menu-bar contents, screen data, usage data, or personal information.
- Core functionality does not require Screen Recording or Accessibility permission.
- Preferences such as language, auto-hide delay, update-check settings, any skipped release version, and onboarding state are stored locally using macOS preferences.
- Menu-bar organization makes no network request. When weekly automatic checks are enabled, or when the user checks manually, StatusPerch requests public release metadata from GitHub over HTTPS. The request does not contain menu-bar contents, screen data, hardware identifiers, user files, or usage analytics.
- Automatic checks run at most once every seven days and can be disabled under **Software Update**. Network failures during automatic checks remain silent. Choosing **Not Now** stores that version locally so it is not suggested automatically again.
- After the user confirms a download, StatusPerch downloads the release to Downloads, verifies GitHub's SHA-256 asset digest when available, and opens the installation window. It never installs silently or modifies Applications itself.
- A small local diagnostic log may be written to `~/Library/Logs/MenuOrganizer/diagnostic.log` to help troubleshoot behavior. It is not transmitted automatically.
- Enabling Launch at Login may create a local compatibility file at `~/Library/LaunchAgents/com.yestar.menu-organizer.plist` in the current 1.0.1 build.

StatusPerch does not control the privacy practices of other menu-bar applications.

## Security reports

Do not include personal information in a public issue. Follow [SECURITY.md](SECURITY.md) for security-sensitive reports.

---

## 简体中文

生效日期：2026-09-19

StatusPerch 完全在你的 Mac 本地运行：

- 不需要账号或登录。
- 不包含统计、广告 SDK 或跟踪代码。
- 不上传菜单栏内容、屏幕数据、使用数据或个人信息。
- 核心功能不需要“屏幕录制”或“辅助功能”权限。
- 语言、自动收起时间、更新检查设置、被跳过的版本和引导状态等信息保存在 macOS 本地偏好设置中。
- 菜单栏收纳不会联网。开启每周自动检查或由用户手动检查时，StatusPerch 才会通过 HTTPS 向 GitHub 获取公开的版本信息；请求不包含菜单栏内容、屏幕数据、硬件标识、用户文件或使用统计。
- 自动检查最多每 7 天一次，可在“软件更新”中关闭。断网时自动检查保持静默；选择“暂不升级”后，仅在本地记录该版本，不再自动提示。
- 用户确认下载后，StatusPerch 会把更新保存到“下载”文件夹，在 GitHub 提供摘要时校验 SHA-256，然后打开安装窗口；不会静默安装或自行修改“应用程序”目录。
- 为排查问题，应用可能在 `~/Library/Logs/MenuOrganizer/diagnostic.log` 写入少量本地诊断日志；不会自动发送。
- 当前 1.0.1 版本启用“登录时自动启动”后，可能创建本地兼容文件 `~/Library/LaunchAgents/com.yestar.menu-organizer.plist`。

StatusPerch 不控制其他菜单栏应用自身的隐私行为。
