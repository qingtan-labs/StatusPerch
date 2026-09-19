# 故障排查

## 升级 macOS 27 后无法收纳

请安装 StatusPerch 1.0.1 或更高版本。macOS 27 更改了菜单栏布局，不再接受 1.0.0 使用的单个超宽边界。

更新后按住 Command，从左到右重新排列一次：“待收纳图标 → 小竖线 → StatusPerch 箭头 → 时钟/常用图标”。收起后，待收纳图标会进入 macOS 27 的系统 `«` 溢出区域。`«` 是 macOS 控件，并不是 StatusPerch 的图标。

如果连接宽度大很多的显示器后收纳不完整，请重启 StatusPerch，让它按照新的显示器布局创建合适数量的安全间隔项。

## Spotlight 搜到多个 StatusPerch

Spotlight 会索引所有 `.app` 副本，包括构建目录和 DMG 暂存目录。电脑上只保留 `/Applications/StatusPerch.app`，归档时保留 DMG 而不要把额外 `.app` 放在索引目录中。删除副本后关闭并重新打开 Spotlight。

## 看不到箭头或小竖线

- 临时退出其他菜单栏收纳软件。
- 减少一直显示的菜单栏应用。
- 刘海屏上按住 Command，把 StatusPerch 控件移动到远离刘海的位置。
- 重新启动 StatusPerch。

## 点击箭头后控件消失

按住 Command，确认从左到右顺序为“小竖线 → 箭头”。需要收纳的图标在小竖线左侧，时钟在箭头右侧。

## 展开后图标仍放不下

StatusPerch 无法把系统菜单栏变成两行。在小屏幕或刘海屏上，超出原生空间的图标仍可能被 macOS 隐藏。请退出不用的菜单栏应用或减少常驻图标。

## 其他收纳软件隐藏了 StatusPerch

Bartender、Ice、Hidden Bar、Dozer 等工具会管理同一片有限空间，可能移动或隐藏 StatusPerch。建议同一时间只运行一个收纳工具。

## 登录启动无效

确认应用位于“应用程序”，再重新切换“登录时自动启动”。检查“系统设置 → 通用 → 登录项与扩展”。兼容模式下可确认 `~/Library/LaunchAgents/com.yestar.menu-organizer.plist` 指向 `/Applications/StatusPerch.app/Contents/MacOS/MenuOrganizer`。

## 诊断日志

本地日志位于 `~/Library/Logs/MenuOrganizer/diagnostic.log`。分享前请检查并删除系统错误文本中可能出现的个人路径。
