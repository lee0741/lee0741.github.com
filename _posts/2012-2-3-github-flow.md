---
layout: post
title: Github Flow
--- 

用了一段时间 Git 后，[git-flow](http://nvie.com/posts/a-successful-git-branching-model/) 应该算是接触到的最著名的一种 Git 工作流程了。它是如此著名，以至于它在众多 Git 使用者之间达到一种默契，演变成了一个标准。尽管如此，也不是说 git-flow 已经尽善尽美，适用于所有人。

就我个人而言，git-flow 未免显得不那么实用，毕竟它的设计初衷是依附于一套完整的产品发布流程，而我更多的时候是在  casual coding 。而且它的「正式性」也让其显得过于「复杂」，以至于它的设计者专门写了一个[脚本](https://github.com/nvie/gitflow)来辅助它的实施。

当然，newbie 从来不会把自己的一家之言当会事儿。直到前几天在网上看到一篇 Github 员工关于 git-flow 的[文章](http://scottchacon.com/2011/08/31/github-flow.html)，瞬间有种找到了组织的感觉。具体对 git-flow 的诟病可以在那篇文章中查阅。更让人感兴趣的是文章中提到的 Github Flow —— 一种在 Github 内部使用的 Git 工作流程。

## 那么什么是 Github Flow ？
* 任何在 master 分支中的东西都是可部署的。
* 如果要开发一种新功能，可以从 master 上新建一个分支，分支的命名尽量具有说明性，可以使人一目了然该分支的功能。
* 在本地提交新分支的 commit ，并时常将该分支的更新 push 到服务器上。
* 当需要反馈、帮助或者觉得新分支已经准备好 merge 的时候，可以开一个 pull request 。
* 在经历过团队内其他人审查和测试过之后，便可以将新分支 merge 到 master 分支。
* 新分支在 merge 和 push 到 master 分支之后，便可以（也应该）立即部署了。

以上只是一个简述，各步骤的详细说明在原文中也有说明。就我个人而言，没有和团队一起工作，抛开 pull request 那一步，这个 Git 工作流程应该也会很合适。套用原文中的一段话结尾：
> Git itself is fairly complex to understand, making the workflow that you use with it more complex than necessary is simply adding more mental overhead to everybody’s day. I would always advocate using the simplest possible system that will work for your team and doing so until it doesn’t work anymore and then adding complexity only as absolutely needed.
