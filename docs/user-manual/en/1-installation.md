# Installation

## Requirements

- macOS 13 Ventura or later.
- Apple silicon (`arm64`) or Intel (`x86_64`) Mac.
- No account, network connection, Screen Recording, or Accessibility permission is required to use the app.

## Download

Download the DMG from the public GitHub Releases page. For 1.0.0, the file is:

`StatusPerch-1.0.0-Universal.dmg`

Verify SHA-256 in Terminal if desired:

```bash
shasum -a 256 ~/Downloads/StatusPerch-1.0.0-Universal.dmg
```

Expected checksum:

`b93c55b9448085652b14affcdbb6daa3fb643f82d4d5961f4609b1bede7cb19e`

## Install

1. Open the DMG.
2. Drag StatusPerch to Applications.
3. Eject the StatusPerch disk image.
4. Open Applications.

## First open for the current unsigned build

Version 1.0.0 is ad-hoc signed but not Apple-notarized. Do not disable Gatekeeper.

1. Control-click StatusPerch in Applications.
2. Choose **Open**.
3. Review the warning and choose **Open** again.

If macOS does not show the Open option, go to System Settings → Privacy & Security and use the specific Open Anyway entry for StatusPerch. Never run a command that globally disables macOS security checks.

## Upgrade

Quit StatusPerch, then replace the existing application in Applications with the newer one. The stable bundle identifier preserves preferences and status-item positions.

## Uninstall

1. Right-click the chevron and choose Quit StatusPerch.
2. Disable Launch at Login from the StatusPerch menu before quitting when possible.
3. Move `/Applications/StatusPerch.app` to Trash.
4. If a compatibility login item remains, remove `~/Library/LaunchAgents/com.yestar.menu-organizer.plist`.

Preferences and a small diagnostic log may remain for future reinstall compatibility.
