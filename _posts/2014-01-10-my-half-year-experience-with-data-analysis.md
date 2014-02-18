---
layout: post
title: 「数据分析」这半年
---

回想起来，学习数据分析已经大半年了。这摸爬滚打的一路下来，要说有多大收获，好像这会儿也说不太清楚。不过，这段历程，勉强称为「经验之谈」，也算是一个入门者的告白。

从第一次听到「大数据」时就觉得这个概念特别有意思。当时形成的印象就是：只要有足够多的数据，就能做各种有趣的事情。之后再到受网上一系列[文章](http://www.wired.com/science/discoveries/magazine/16-07/pb_theory)的影响，开始逐渐对数据肃然起敬，可以说是从「数据库中的表单」到「Almighty Data」的转变。这也就算是启蒙了。

不知道是不是因为 2013 是国际统计年，突然发现很多统计学家出来讲大数据。由于之前没怎么学过统计（好像也没好好学），我对统计的印象还停留在「平均值」、「方差」这个层面。在了解了诸如 [Nate Silver](http://en.wikipedia.org/wiki/Nate_Silver) 这类人的光辉事迹后，才开始将统计与大数据联系起来。加上之前看到很多统计学家总爱提到 [R](http://www.r-project.org/)，所以决定开始并行学习 R 和统计。

R 入门看的是[《R in a Nutshell》](http://book.douban.com/subject/10438325/)，但发现不太适用，太多统计的概念都不清楚，所以换成了着重讲 R 语法的[《The Art of R Programming》](http://book.douban.com/subject/6727873/)；至于统计入门，可选的书太多了，而且都是动辄大几百页的，最后选择了比较基础的、不那么「臃肿」的[《OpenIntro Statistics》](http://book.douban.com/subject/24882479/)。之后还看了[《Introductory Statistics with R》](http://book.douban.com/subject/3282777/)，反正就这样有一出没一出的学着。之所以是「有一出没一出」，是因为期间我还尝试阅读了一下很多人推荐的[《The Elements of  Statistical Learning》](http://book.douban.com/subject/3294335/)，结果，结果就感觉看不到任何希望了。这种状态一直持续到某一天，豆瓣给我推荐了一篇名叫[《漫谈数据挖掘从入门到进阶》](http://www.douban.com/group/topic/35168224/)的文章，漫不经心地打开链接后才感觉如获珍宝。抱着再试一试的态度，开始看那篇文章中推荐的一本入门书[《Programming Collective Intelligence》](http://book.douban.com/subject/2209702/)。如果说「大数据」这个概念给我启了蒙，那这本书算是真正让我开始了数据分析的学习。就像那篇文章中的推荐语所说的那样：「很适合希望了解数据挖掘技术的程序员，这本书讲述了数据挖掘里面的很多实用的算法，而且最重要的是其讲述的方式不是像 Han 那种大牛掉书袋的讲法，而是从实际的例子入手，辅以 Python 的代码，让你很快的就能理解到这种算法能够应用在哪个实际问题上，并且还能自己上手写写代码」。啃完这本书后，兴趣总算是又回来了。

这段时间，在《经济学人》上看到过一篇关于 [Kaggle](https://www.kaggle.com/) 的报道后，跃跃欲试，算是看完书后的实践吧。当时 Kaggle 上面有一个 101 性质的项目 [Titanic](https://www.kaggle.com/c/titanic-gettingStarted)，于是开始着手。但，无从下手。因为我是一个爱套公式的人，而《Programming Collective Intelligence》这本书并没有给出一个数据分析的流程。好在当时 Kaggle 论坛上和网上有很多 Titanic 项目的完整解决方案，然后开始逐个研究这些方案，遇到不懂的概念临时学，就这样踉踉跄跄的完成了在 Kaggle 上的第一次「提交」。接着是第二次，第三次，但效果一直没有显著提高，排名总是在 1000 左右（总共 4000 多份提交）。原因很简单，每次提交我只是用相同的数据喂不同的算法，至于各个算法的具体实现、优缺都还不太清楚。

弄清形势后又滚去看书了。根据豆瓣上的记载，这期间我依次看了[《Mining the Social Web》](http://book.douban.com/subject/5391582/)、[《Think Stats》](http://book.douban.com/subject/6725483/)和[《Data Analysis with Open Source Tools》](http://book.douban.com/subject/4884975/)三本书。不知道是书不出彩还是没有及时复习，反正对这三本书是没什么印象了。不过接下来看的三本书就不一样了：[《Introduction to Data Mining》](http://book.douban.com/subject/2146863/)算是一本真正意义上的系统的入门书；[《Machine Learning for Hackers》](http://book.douban.com/subject/7906768/)让我第一次接触到了 R 在机器学习中的实践（机器学习、数据分析/挖掘、模式识别、人工智能，其实这些 jargon 困扰了我很久，最后还是觉得入门期这些概念没必要分太细，毕竟大多数算法在它们之中都是通用的）；[《An Introduction to Statistical Learning》](http://book.douban.com/subject/21706191/)这本书声称是《The Elements of  Statistical Learning》的简版，特意为「基础不好」的人提供的，碍于前车之鉴，开始也只是抱着尝试的态度去阅读，没想到非常不错，深入讲解了各个算法并且还都配有 R 的实践。

再提 Coursera。这期间配合着看书，顺利的完成了 [Computing for Data Analysis](https://www.coursera.org/course/compdata)、[Data Analysis](https://www.coursera.org/course/dataanalysis) 和 [Machine Learning](https://www.coursera.org/course/ml) 这三门课程。不知道是因为这三门课我才看完了那些书，还是因为那些书我顺利完成了这三门课，总之，在这个 MOOCs 的时代，学习还是挺方便的。

### 总结
其实这段学习历程中我也有过一段比较彷徨的时期：学习 PCA 原理的时候发现线性代数有必要重拾；学习 [ggplot2](http://ggplot2.org/) 的时候想深入了解下 [The Grammar of Graphics](http://book.douban.com/subject/10123863/)；学习 MapReduce 的时候觉得 Hadoop 值得深入研究；等等等等。简单来说，就是觉得要学的东西太多了，有些无从下手。幸运的是这期间读了一本名叫 [《Analyzing the Analyzers》](http://book.douban.com/subject/24807541/) 的书。现在回想起来，觉得真的很有必要。在这个把「Data Scientist」当「Rock Star」捧的时代，不弄清基本概念和需求，天真的把自己当作万金油，是真的很容易陷入到知识黑洞中。

所以说要有什么「经验之谈」的话，那就是在跳进这个大坑之前赶紧抽空把自己定位好吧。
