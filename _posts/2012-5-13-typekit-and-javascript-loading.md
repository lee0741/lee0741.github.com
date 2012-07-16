---
layout: post
title: Typekit and JavaScript Loading
---

通常面临字体选择时，我都偏好于衬线字体。但中文的衬线字体实在太「寒酸」了，虽然 Mac 系统内置了几款不错的中文衬线字体， 可毕竟写博客的初衷不是给自己一个人看的。所以经过权衡，还是决定在博客中使用非衬线字体。所谓「权衡」就是说非衬线字体也并非十分称心，最主要就是主流的英文非衬线体都不合我心意。但有了 Typekit ，上面有众多优秀的字体可供选择，于是才有了权衡后的决定。

可问题还是接踵而至。自从用了 Typekit ，博客的加载速度已经慢得令人发指了。究其原因还是 Typekit 的 JS 文件加载过慢。为了优化，还特地去拜读了 [High Performance JavaScript](http://book.douban.com/subject/4183808/) 一书。下面我就结合该书和 Typekit 官方博客上的那篇 [Loading Typekit fonts asynchronously](http://blog.typekit.com/2011/05/25/loading-typekit-fonts-asynchronously/) 来谈谈 JS 文件的加载。

---

## 标准加载模式
Typekit 的标准内嵌代码就是两个简单的 `<script>` 标签。其中第一个 `<script>` 标签通过 Typekit 的 CDN 用来加载 kit JavaScript 。而当浏览器遇到 `<script>` 标签时，浏览器会停止处理页面，先执行 JS 代码，然后再继续解析和渲染页面。所以这种模式能很好的阻止 FOUT (Flash of Unstyled Text) 。但当脚本加载过慢或无法加载时，这种模式的缺点就相当明显了：由于脚本加载时会阻塞页面渲染，所以当 `<script>` 标签放置在 `<head>` 内时，浏览器会无法解析 `<body>` 标签。这会导致页面的任何部分都得不到渲染，通常表现为显示空白页面。当然，我们可以把 `<script>` 标签放到 `<body>` 标签的底部以减少 JS 文件对整个页面下载的影响，当这样会不可避免的导致 FOUT 。就我各人而言，这比空白页面更不能容忍。

## 标准异步模式
这种模式也应用在 Google Analytics ，具体就是：通过 DOM 动态创建一个新的 `<script>` 标签。这种模式的一大好吃就是可以异步加载 JS 文件而不会阻塞页面其他进程。但缺点还是显而易见的：也会不可避免的导致 FOUT 。

## 字体事件异步模式
这是模式时基于上述标准异步模式的，只是在其基础上添加了 FOUT 的解决方案。在该模式中，当脚本初次执行时，通过 DOM 动态给 `<html>` 标签添加一个字体事件的类名（比如 `wf-loading`）；经过一段时间（可自行配置的）之后，如果脚本还没有加载完，类名 `wf-loading` 就会改为 `wf-inactive` ；当字体加载完成后，再将 `wf-inactive` 改为 `wf-active` ；然后通过修改 CSS 文件（visibility: hidden）来阻止 FOUT 。这种模式除了多写几行 JS 和 CSS 代码，目前好像还没有什么缺陷。

## 最后
JS 文件的加载方式不仅仅是上述这些：通过 XHR 脚本注入，通过 RequireJS 、LABjs 加载等等，这些在特定情况下也会是很好的选择。这里就不深究了。

P.S. Typekit 专门在 Github 上给出了上述模式对应的[实例代码](https://github.com/typekit/typekit-async-patterns)。