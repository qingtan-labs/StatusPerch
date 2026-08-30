# Troubleshooting

## I see more than one StatusPerch in Spotlight

Spotlight indexes every `.app` copy, including copies inside build and release staging folders. Keep only `/Applications/StatusPerch.app`; archive installers as DMG files rather than leaving additional app bundles in indexed folders. Close and reopen Spotlight after removing duplicates.

## The chevron or divider is missing

- Quit other menu-bar organizers temporarily.
- Reduce always-visible menu-bar items.
- On a notched display, move StatusPerch controls away from the notch while holding Command.
- Relaunch StatusPerch.

## Clicking the chevron makes a control disappear

Hold Command and confirm the order is `divider → chevron` from left to right. Items to collect go left of the divider; the clock stays right of the chevron.

## Items do not fit when expanded

StatusPerch cannot create a second system menu-bar row. On small or notched displays, macOS may still omit items that exceed available width. Quit unused menu-bar apps or reduce always-visible items.

## Another organizer hides StatusPerch

Bartender, Ice, Hidden Bar, Dozer, and similar tools manage the same constrained area and can move or hide StatusPerch controls. Run only one organizer at a time.

## Launch at Login does not work

Move StatusPerch to Applications, then open its menu and toggle Launch at Login. Check System Settings → General → Login Items & Extensions. If the menu says Compatibility Mode, confirm `~/Library/LaunchAgents/com.yestar.menu-organizer.plist` points to `/Applications/StatusPerch.app/Contents/MacOS/MenuOrganizer`.

## Diagnostic log

The bounded local log is at `~/Library/Logs/MenuOrganizer/diagnostic.log`. Review it before sharing and remove any personal filesystem information from system error text.

