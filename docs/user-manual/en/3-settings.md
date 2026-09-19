# Settings Reference

Open settings by right-clicking the chevron or clicking the divider.

## Hide / Show

The first menu command changes with current state. It performs the same action as clicking the chevron.

## Arrange Menu Bar Items

Expands collected items and shows the placement guide. Hold Command while dragging status items.

## Collection Range

On macOS 27, choose the amount of space used while items are hidden:

- **Compact** uses the shortest span for a small group of icons.
- **Standard** balances collection capacity with a smaller empty span.
- **Extended (Recommended)** uses the additional bounded spacer items prepared for wide displays and crowded menu bars.

The native macOS `«` overflow control can still appear while items are hidden.

## Auto-Hide After Expanding

- Off: items stay expanded until you click the chevron.
- 5 / 10 / 30 Seconds: collapse after the selected delay.

The timer waits while you are using a menu, reading a StatusPerch dialog, or keeping the pointer in the menu bar.

## Launch at Login

Enables or disables automatic startup. Standard macOS login-item registration is preferred. An ad-hoc build may display Compatibility Mode, which uses a user-only LaunchAgent. Approval Required means macOS needs a decision in System Settings.

## Language

- Follow System.
- English.
- 简体中文.

The menu, tooltips, alerts, and VoiceOver labels update immediately.

## Software Update

- **Check Automatically (Weekly)** is enabled by default and limits background checks to once every seven days. Turn it off to keep StatusPerch completely offline.
- **Check for Updates…** checks immediately, including for a version you previously dismissed.

When a newer stable release is available, **Download Update** saves it directly to Downloads and opens the installation window. StatusPerch does not silently replace the installed app. Choosing **Not Now** prevents another automatic prompt for that same version; the next version can still be suggested. If the Mac is offline, automatic checks remain silent and menu-bar organization continues normally.

## Report an Issue

Choose **Report an Issue…** to open StatusPerch's public GitHub issue forms in your default browser. Select a bug report or feature request and review everything before submitting. StatusPerch does not attach logs, device details, or screenshots automatically.

## Appearance

There is no separate theme setting. StatusPerch uses macOS-native menus and template controls, automatically adapting to Light and Dark appearance.
