---
layout: post
title: A Baseline for Front-End Developers
---

作家圈里有冯唐老师提出的「金线」，前端领域里同样适用。以下就是截取之 [A Baseline for Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/?utm_source=javascriptweekly&utm_medium=email) 的译文。

---

## JavaScript
这个估计都不用说，但仅仅只是了解某个 JS 库是远远不够的。当然，这并不说要弄懂某个 JavaScript 库中所有功能的具体实现。什么时候需该用到什么 JS 库，不用时能应对纯 JS 代码，这些要求还是必须的。

满足上诉要求，意味这你可能要读过不止一遍的 [JavaScript: The Good Parts](http://book.douban.com/subject/2994925/) 。并且明白：1）数据结构，比如对象、数组等等； 2）函数，包括如何以及为什么用 `call` 和 `apply` 调用它们； 3）原型继承； 4）管理同步性。

但如果 JS 功底较弱，可以通过阅读下列链接学习：

- [Eloquent Javascript](http://eloquentjavascript.net/)
- [A Test-Driven JS Assessment](https://github.com/rmurphey/js-assessment)
- [10 things I learned from the jQuery Source](http://paulirish.com/2010/10-things-i-learned-from-the-jquery-source/)

## Git （和一个 Github 帐号）
如果没有 Github 帐号，那你就没法参与到资源丰富的开源社区中。克隆一个代码仓库，并试着按照自己的意愿进行修改；学习如何在多人协作的项目中灵活应用分支，这些都可以让你受益匪浅。

想加强下自己关于 Git 的技能？

- [help.github.com](http://help.github.com/)
- [Github git cheat sheet](http://help.github.com/git-cheat-sheets/)
- [More cheat sheet](http://cheat.errtheblog.com/s/git)
- [More git links](http://pinboard.in/u:rmurphey/t:git/)

## 模块化，依赖管理和产品开发
依赖管理早已不是单单往页面添加 `<script>` 标签或 `<style>` 标签了。即使你还没有在工作中应用 [RequireJS](http://requirejs.org/) ，你也应该在个人项目或 [Backbone Boilplate](https://github.com/tbranyen/backbone-boilerplate) 中尝试使用它，这种学习绝对是收益无穷的。通过 RequireJS 的优化工具，你可以连接并压缩你开发的 JS 和 CSS 文件供生产使用。

即使你对 [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) 持怀疑的态度，你也不该无动于衷。最起码你也应该适当注意下 [UglifyJS](https://github.com/mishoo/UglifyJS) 和 [Closure Compiler](https://developers.google.com/closure/compiler/) ，这些工具能够智能压缩你的代码。

如果你还没用 Sass 或 Stylus 这样的 CSS 预处理器，RequireJS 也能帮你保持 CSS 文件的模块化。在一个主文件中用 `@import` 语句来加载依赖项以供开发，然后通过 RequireJS 优化主文件以供生产使用。

## 浏览器内置开发工具
在过去十年里，基于浏览器的开发工具已经得到了迅猛的改善。如果能够善用它们，无疑会增强你的开发体验。

或许你已经对某一浏览器的内置开发工具十分上手（近期我个人比较偏好于 Chrome 的 Developer Tools），但千万别因此而忽视其他浏览器的内置开发工具，因为它们时常会根据开发者的反馈而添加一些非常有用的功能。比如说 Opera 的 Dragonfly 就有一些很出众的功能，比如： CSS 分析器，可配置的快捷键，遥控 debugging 以及可自行定义和保存调色板。

如果你对浏览器的内置开发工具还不是太了解， [Fixing these jQuery](http://fixingthesejquery.com/#slide1) 是个不错的资源。它对 debugging 进行了一个大体的介绍，包括 debugging 的具体实施步骤。

## The Command Line
说到命令行，仅是能接受它已经远远不够了。如果不能进行熟练的操作，你就很有可能已经落伍了。所谓熟练并不是说所有事情都必须在终端里进行。但最起码你在进行项目开发时，终端窗口是开着的。有些命令是你应当牢记于心的：

- `ssh` 用来远程登录其他电脑或服务器
- `scp` 用来拷贝文件到其他电脑或服务器
- `ack` 或者 `grep` 用来搜寻项目中包含某一字符串的文件
- `find` 用来定位名字包含给定字符串的文件
- `git` 用来做一些最基本的操作，包括：添加、提交、状态查询和远程抓取数据
- `brew` 利用 Homebrew 来安装包
- `npm` 用来安装 Node 包
- `gem` 用来安装 Ruby 包

对于那些常用的命令，你还可以通过编辑 .bashrc 或 .profile 或 .zshrc 等文件来创建 alias ，进而提高输入效率。当然，你也可以将 alias 添加到 ~/.gitconfig 文件中。

## 客户端模板
就在不久之前，服务器用一小段 HTML 代码来回复 XHRs 还非常普遍。但就在最近 12-18 月，前端社区似乎看到了希望，开始只向服务器索取纯数据。把数据放进准备插入到 DOM 的 HTML 中会非常混难，而且很难维护。于是客户端模板就应运而生。具体介绍可以参照[这里](http://www.slideshare.net/garann/using-templates-to-achieve-awesomer-architecture)。

## CSS Preprocessors
Paul Irish 曾说过，假以时日在前端领域里，我们开发时所写的代码和最终产品中的代码会有很大的差别。而通过 CSS 预处理器来写代码就是一个很好的例子，但仍有很多人觉得纯 CSS 才是唯一的出路。不过这些人最近也开始[蠢蠢欲动](http://www.stuffandnonsense.co.uk/blog/about/less)了。

## 测试
把代码写得模块化、低耦合的一大好处就是能够用 [Grunt](https://github.com/cowboy/grunt) 这样的工具轻松进行测试。Grunt 不仅集成了 QUnit ，而且还提供了大量的测试框架，我个人偏好 [Jasmine](https://github.com/pivotal/jasmine/wiki) 和 [Mocha](http://visionmedia.github.com/mocha/) ，当然你可以根据自己的偏好进行选择。

## 自动化
Grunt 能够设置一个拥有内部单元测试支持的项目就是一个很好的自动化例子。前端开发中，实际上我们要做很多重复的事项。但一个朋友曾经告诉我：「一个好的开发者一定很懒——如果你发现自己同样的事情做了三遍，那么是时候该考虑自动化了。」

在实现自动化的工具里，不仅有 `make` ，还有 `rake` 和 `grunt` 等等。如果自动化任务牵涉到文件系统，那么学习一门（除 JS）新语言会很用帮助，毕竟当你只是操作文件时 Node 异步的特性反而会成为一种负担。另外，还有很多目的单一的自动化工具，包括：用于部署的，生产的和保证代码质量的等等。

## 代码质量
你是否遇到过代码中少一个分号或多一个逗号这种情况？而正是因为这些缺陷又浪费了你多少时间？所以很有必要在 [JSHint](http://www.jshint.com/) 这样的工具中运行测试你的代码。它不仅可配置，而且还能很好的集成到编辑器或开发流程中。

## 指南手册
很可悲，目前在前端领域里还没有一本所谓的「指南手册」，不过 [MDN](https://developer.mozilla.org/en-US/) 已经很接近了。好的前端开发者应该知道在搜索引擎中加 mdn 的前缀。

## 结语
仅仅是阅读上诉的事物是不会让你变成专家的，而唯一有效的方法就是[放手去做](http://rmurphey.com/blog/2011/05/20/getting-better-at-javascript/)。祝你好运。