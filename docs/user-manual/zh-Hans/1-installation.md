# 安装指南

## 系统要求

- macOS 13 Ventura 或更高版本。
- Apple 芯片（`arm64`）或 Intel（`x86_64`）Mac。
- 使用过程不需要账号、网络、屏幕录制或辅助功能权限。

## 下载

从公共 GitHub Releases 页面下载：

`StatusPerch-1.0.0-Universal.dmg`

可在终端验证 SHA-256：

```bash
shasum -a 256 ~/Downloads/StatusPerch-1.0.0-Universal.dmg
```

正确结果：

`b93c55b9448085652b14affcdbb6daa3fb643f82d4d5961f4609b1bede7cb19e`

## 安装

1. 打开 DMG。
2. 将 StatusPerch 拖入“应用程序”。
3. 推出 StatusPerch 磁盘映像。
4. 打开“应用程序”。

## 当前未公证版本的首次打开方式

1. 在“应用程序”中按住 Control 点击 StatusPerch。
2. 选择“打开”。
3. 阅读提示后再次选择“打开”。

如果没有“打开”选项，可前往“系统设置 → 隐私与安全性”，仅对 StatusPerch 使用“仍要打开”。不要关闭 Gatekeeper，也不要执行全局绕过系统安全检查的命令。

## 升级

先退出 StatusPerch，再用新版本替换“应用程序”中的旧版本。稳定的 bundle identifier 会保留设置和菜单栏位置。

## 卸载

1. 右键箭头，选择“退出 StatusPerch”。
2. 如条件允许，退出前先关闭“登录时自动启动”。
3. 将 `/Applications/StatusPerch.app` 移到废纸篓。
4. 如果兼容登录项仍存在，可删除 `~/Library/LaunchAgents/com.yestar.menu-organizer.plist`。
