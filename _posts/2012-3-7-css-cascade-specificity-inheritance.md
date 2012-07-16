---
layout: post
title: CSS - the cascade, specificity, and inheritance
---

最近接触到 [Normalize.css](http://necolas.github.com/normalize.css/) ，类似但是又有别于 Reset.css 。关键在于 Normalize.css 不同于 Reset.css 重置了浏览器对所有元素的默认样式，而是保留大部分有用的浏览器对元素的默认样式。具体比较可以参考[这里](http://nicolasgallagher.com/about-normalize-css/)。单独加载 Normalize.css 或 Reset.css 又会牵扯到 Cascade 、Specificity 和 Inheritance 这几个 CSS 中的核心概念。以下[译文](http://nicolasgallagher.com/css-cascade-specificity-inheritance/)就是对这几个概念的详细描述。

---
 
## 什么是 Cascade ？
当一个给定元素被多个样式指向时，Cascade 机制用来决定该采用哪种样式。也就是说 Cascade 会根据每个样式的 importance 、origin 、specificity 和 source order 来给每个样式一个相应的权重，权重最高的样式会应用到给定元素。具体到浏览器中：

1. 找到指向给定元素/属性的所有样式。根据样式的 importance 和 origin 对样式做一个排序，从高到底的顺序是：
	1. user !important 的声明
	2. author !important 的声明
	3. author normal 的声明
	4. user normal 的声明
	5. user agent 的声明
2. 如果声明拥有一样的 importance 和 source ，那么就根据选择器的 specificity 来进行排序。
3. 如果 specificity 也一样，那么就根据他们在 CSS 文件中出现的顺序排序，出现位置最排后的样式得以应用。

## 什么是 Specificity ？
Specificity 是 Cascade 中一种解决冲突的方案。它的计算主要是包括 4 个范畴。为了简明，CSS2 将这 4 个范畴用 a、b、c、d 来表示。每一个的默认值都为零。

- 如果一个样式的声明在 HTML 文件中，而不是在 CSS 文件中，那么 a 等于 1 。
- b 等于选择器中 ID 的个数。
- c 等于选择器中其他属性和伪类的个数。
- d 等于选择器中元素和伪元素的个数。

连接上诉 4 个数字就得到了 Specificity 。选择器越详细，该样式就越优先。例如，选择器 `#id .class[href] element:hover` 就包括：

- 1 个 ID （b 等于 1）
- 1 个类，1 个属性，1 个伪类（c 等于 3）
- 1 个元素 （d 等于 1）

因此它的 Specificity 就是（0,1,3,1）。注意当一个选择器拥有一个 ID （0,1,0,0）时比一个选择器拥有任意多的属性或元素（例如 0,0,10,20）的 Specificity 要高，所以在 CSS 中应该尽量避免适用 ID 。

## 什么是 Inheritance ？
Inheritance 有别于 Cascade ，它涉及到 DOM 树。具体就是任意元素会根据 Iheritance 机制来决定它从 DOM 树中的父元素继承哪些属性值。然而有些属性，例如 color ，会自动被子元素所继承。

## 关于 `!important`
`!important` 有别于 Specificity 。它对选择器的 Specificity 没有任何影响。`!important` 声明优先于普通声明，甚至优先于那些定义在 HTML 文件中的声明。

