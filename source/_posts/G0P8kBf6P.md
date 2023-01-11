---
title: '解决：Uncaught TypeError: $ is not a function'
tags:
  - JS
  - HTML
  - 教程
  - 小知识
categories: 网络技巧
top_img: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107102754.png
cover: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107102754.png
abbrlink: bdb67a1d
date: 2023-1-7 1:59:19
---
![](https://cdn2.tianli0.top/gh/timigomen/cdn/img/20220801135927.png)
本来好好的，突然就出现的错误，不过这并不是什么难解决的错误；

我的问题是：在js文件里我定义了一个```var $;```变量，只要把这个去掉就没问题了。

# 出现这种错误的解决方法：
1，先看看你的jq文件是否已经先导入了
![](https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107102927.png)
一般来说，你的js文件需要位于最后

2.就是在js文件里找一下有没有``` var $```; 😂🤣

看完一些博客，大概明白，博客会先运行自己的脚本，然后释放$，这样就不会与其他库冲突。

所以一旦你定义了```$```;他就会默认使用你对```$```的定义，而不会管```JQ```的定义；

下面是一些防止冲突的方法
```JS
jQuery(function ($) {
```
直接使用```JQuery```就不会又冲突问题，再在```JQuery```使用```$```，利用闭包函数的作用域规避冲突