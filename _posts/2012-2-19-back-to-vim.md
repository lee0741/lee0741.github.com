---
layout: post
title: Back to Vim
---

讨厌 IDE ，搜寻合适的 Text Editor ，这样的剧情一般都会很自然的发展到 Vim 。

但「上古神器」的头衔不是白来的，几次试用都浅尝截至之后，也只能感慨这古董真心难上手。各式各样冗长的 .vimrc 文件，五花八门的插件，无穷无尽的诡异命令，所有这些都让人望而兴叹。有句话说 "Don’t get too emotionally attached to the one you didn’t get." ，但似乎不试用于偏执狂，所以有了对 Vim 的第 n+1 次尝试。

这第 n+1 次尝试的开始是在读了 Steve Losh 的 [Coming Home to Vim](http://stevelosh.com/blog/2010/09/coming-home-to-vim/) 之后。Steve 在文章中先后讲到了自己的一些背景，为什么换到 TextMate ，为什么又换回到 Vim 以及他是如何实施的。但文中最让我觉得眼前一亮的还是 "A 'Language' of Text Editing" 这个概念，也就是说把 normal mode 下的命令想象成一种语言。是「语言」就会用「动词」、「名词」和「形容词」等等，这样一来任何一条命令也就可以分解成这些部分的任意组合，突然之间那些貌似无穷无尽的诡异命令开始变得有章可循。以及后来看到的 [Learn to speak vim](http://yanpritzker.com/2011/12/16/learn-to-speak-vim-verbs-nouns-and-modifiers/) 更是将这个概念「发扬光大」，并对其进行了更具体详细的说明。正是因为这些，才慢慢感觉到对 Vim 有了更进一步的认识。

当然仅仅这些是不够的，要想真正上手，配置文件 .vimrc 也占了相当一大部分比重。感谢 Github ，最近往上面发布 [dotfiles](http://dotfiles.github.com/) 俨然已成为一种流行趋势，在众多优秀的 dotfiles 中学习和比较，事半功倍是无疑的。

还有就是插件，这个可能相对更容易些，因为网上[推荐](http://stevelosh.com/blog/2010/09/coming-home-to-vim/#bundles-i-use)[插件](http://mirnazim.org/writings/vim-plugins-i-use/)的文章太多了，也就不细说了。关于插件的安装和更新，目前较适用的做法是用 [Pathogen](http://github.com/tpope/vim-pathogen) 管理插件的安装，用 [Git Submodules](http://progit.org/book/ch6-6.html) 管理插件的更新。

Vim 的学习曲线应该算是较为人知的。通过对上述知识的学习后，在那条竖线上的处境应该又会朝平坦迈进了一大步。

## 更多
- [The cleanest vimrc you’ll ever see](http://yanpritzker.com/2012/01/20/the-cleanest-vimrc-youve-ever-seen/)
- [YADR (Yet Another Dotfile Repo)](http://github.com/skwp/dotfiles)
- [What is your most productive shortcut with Vim?](http://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim)
- [Vim: What is the difference between the remap, noremap, nnoremap and vnoremap mapping commands?
](http://stackoverflow.com/questions/3776117/vim-what-is-the-difference-between-the-remap-noremap-nnoremap-and-vnoremap-ma)