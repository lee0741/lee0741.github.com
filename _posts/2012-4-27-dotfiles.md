---
layout: post
title: Dotfiles
---

因为之前一直在用 PC（主要是 Windows ），加上我几乎都是在同一台电脑上工作，所以很少会去接触配置文件。然而从开年换到 Mac 之后，才逐步感受到配置文件的重要性。加上最近看到 Github 上的 ["Github does dotfiles" ](http://dotfiles.github.com/) 项目，心想用 Github 做配置文件的备份也是个不错的选择，于是才开始对配置文件有了更多的研究。

在我以前印象中，说到配置文件，首先能想到的也就是 .vimrc 文件。经过在 "Github does dotfiles" 上学习后，可以说是大开眼界了。

首当其冲，也是对我最实用的应该当属 Mathias Bynens 的 [OS X defaults script](https://github.com/mathiasbynens/dotfiles/blob/master/.osx) 。得益于 OS X 的可配置性，加上对其的接触时间不长，我以前经常在网上淘宝似的搜寻各种配置命令。而这个 OS X defaults script 可以说是一劳永逸了。各种五花八门的配置命令，可以说是只有想不到的，没有找不到的。

再有就是 Github 推荐在首位的 Zach Holman 的[配置文件](https://github.com/holman/dotfiles)。但我觉得最让人眼前一亮的还不是该配置文件本身，而是他组织配置文件的方式和用 Rakefile 实施配置文件的思路。早有听闻 Rakefile 之于 Makefile 的各种优越，但目前我几乎没怎么接触过 Ruby ，所以也只能先 fork 后 todo 了。

最后，如果特别讲究视觉效果的话，强烈推荐 Steve Losh 的[配置文件](https://github.com/sjl/dotfiles)。从 [zsh](http://stevelosh.com/blog/2010/02/my-extravagant-zsh-prompt/) 到 Pentadactyl (An add-on for Firefox) ，我一直都觉得他的配置让人看着很舒服。

当然，所有这些不仅仅是开阔了对配置文件的学习，将 dotfiles 备份到 Github 上，也大大降低了更换电脑或重置系统后所带来的各种不便。所以，赶快去 Github 上新建你的 dotfiles 的 repo 吧。
