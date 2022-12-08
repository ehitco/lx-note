# zsh/ohmyzsh

在 linux 中，拥有各种各样的 shell，比如 bash、zsh、sh 等。

如果将服务器作为个人开发服务器，则很适合将 `zsh` 作为个人的默认 shell。

## zsh

zsh 是一种更富有交互效果，功能更加强大，界面更加华丽的 shell 工具。

通过 `chsh`，即 `change shell`，可切换终端默认 shell。

```bash
# 安装 zsh
# 注意，不同的发行版，zsh 的安装命令不同
$ yum install zsh

# 默认的 shell 是 bash
$ echo $SHELL
/bin/bash

# 找到 zsh 的默认安装位置
$ which zsh
/usr/bin/zsh

# 更改默认的 shell
# -s: --shell，切换为指定的 shell
$ chsh -s /usr/bin/zsh

# 打印 shell 列表
$ chsh -l
/bin/sh
/bin/bash
/usr/bin/sh
/usr/bin/bash
/usr/bin/zsh
/bin/zsh
```

## ohmyzsh

> 如果你是 MacOS，则强烈推荐将 `zsh` 与 `ohmyzsh` 搭配使用。

[ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) 是一个管理 zsh 插件的轻量框架，使用其可配置大量有用的好看主题及插件。

```
# 远程下载 install.sh 安装程序并直接执行
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

![](https://umiinn9jie.feishu.cn/space/api/box/stream/download/asynccode/?code=YmI0MjdkYTY3MDdjZTRkMzcxYzA1MDA2N2M5N2U0MmVfWWlpRGc5ZFpjVEJweXBjNnozTnZDaTRtZTFBOGJxbmVfVG9rZW46Ym94Y25vOE9GQUFSZjh1R0VZWkQ4T1ZyQTRiXzE2NTg3NjgwMjY6MTY1ODc3MTYyNl9WNA)

## zshrc

正如 `bash` 的默认配置文件为 `~/.bashrc`，`zsh` 的默认配置文件为 `~/.zshrc`。

### plugin

在 zsh 中可拓展多个插件，可见 [插件列表](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins)。

> 插件列表中大部分插件是 alias 与自动补全。

编辑 `~/.zshrc` 文件中的 `plugins` 配置，可启用插件。

```
plugins=(git dotenv vi-mode)
```

如 [dotenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dotenv) 可使 `.env` 文件中环境变量可在终端直接访问。

如 [vi-mode](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/vi-mode) 可在命令行下输出命令时使用 `vim`。

### theme

在 ohmyzsh 中维护了多个主题，可见 [主题列表](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)。

编辑 `~/.zshrc` 文件中的 `ZSH_THEME` 配置，可更换主题。

```bash
ZSH_THEME="robbyrussell"
```