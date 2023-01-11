---
title: Butterfly博客魔改的一点点基础
abbrlink: 583ff077
date: 2023-01-07 13:54:30
tags:
  - hexo
  - butterfly
categories: 魔改
top_img: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107135605.png
cover: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107135605.png
---
# 前言
为了偷懒，魔改文章慢慢取消了引入css和js的教程，在此归纳总结
> 注：```[blogRoot]```指博客根目录

# 引用JS
首先你需要在```[blogRoot]/themes/butterfly/source/js```里面添加一个```js```，名字随你的便。（需要注意的是不能放在```[blogRoot]/source/js```里面，否则可能出现```bug```）

然后把我说的```js```扔进去，当然你也可以直接放到以前的文件里面，免得改配置 （但是可能有异步同步执行导致的各种bug）

然后再修改主题配置文件，按照下面引入 （一定是```bottom```，否则可能出现```dom```不完全导致```js```报错） （如果直接用已有的就别加了）

如果使用```pjax```建议加上```data-pjax```,就象这样
![](https://cdn2.tianli0.top/gh/timigomen/cdn/img/截屏2023-01-07 13.58.03.png)

```yml
inject:
  head:
  - xxx
  bottom:
  - xxx
  - <script data-pjax type="text/javascript" src="/js/{把大括号里面的这个换成你的js名字}.js"></script>
  - ...
```

# 引用CSS
首先你需要在```[blogRoot]/themes/butterfly/source/css```里面添加一个```css```，名字随你的便。（需要注意的是不能放在```[blogRoot]/source/css```里面，否则可能出现```bug```）

然后把我说的```css```扔进去，当然你也可以直接放到以前的文件里面，免得改配置（可能分开更好管理，也可以像我全部扔进```custom.css```，洪哥全部```zhheoblog.css```）。

然后再修改主题配置文件，按照下面引入 （一定是```head```，否则可能出现短暂无```CSS```）（如果直接用已有的就别加了）：
```yml
inject:
  head:
  - xxx
  - <link rel="stylesheet" href="/css/{把大括号里面的这个换成你的css名字}.css">
  bottom:
  - xxx
```

# jq或者jquery是什么鬼？咋引入？
```jQuery```是一个方便选择元素的```JavaScript```库，```jq```是其缩写，为了偷懒我经常使用，引入它很简单，跟引入```js```一样（已经加过了就别再加了）：
```yml
inject:
  head:
  - xxx 
  bottom:
  - <script type="text/javascript" src="https://unpkg.zhimg.com/jquery@latest/dist/jquery.min.js"></script> #一定要放在所有引入的js前面！！！
  - xxx
```

# 啥是DIFF？
在魔改时经常会出现```diff```代码块，她的意思是什么呢？

举个栗子：

修改```[blogRoot]\themes\Butterfly\layout\includes\header\nav.pug```:
```diff
nav#nav
  span#blog_name
    ...
    
  #menus
-    if (theme.algolia_search.enable || theme.local_search.enable)
-      #search-button
-        a.site-page.social-icon.search
-          i.fas.fa-search.fa-fw
-          span=' '+_p('search.title')
  !=partial('includes/header/menu_item', {}, {cache: true})
  #nav-right
+    if (theme.algolia_search.enable || theme.local_search.enable)
+      #search-button
+        a.site-page.social-icon.search
+          i.fas.fa-search.fa-fw
-    #toggle-menu
-      a.site-page
-        i.fas.fa-bars.fa-fw
+      #toggle-menu
+        a.site-page
+          i.fas.fa-bars.fa-fw
```

> 这里的“-”号表示删除源文件的内容，"+"号表示在这里增加，“…”表示省略内容，在根据其修改完文件后，要去掉前面的加号和减号，不要加或者减少一个空格

所以如果原来的文件是：
```c
nav#nav
  span#blog_name
    a#site-name(href=url_for('/')) #[=config.title]
    
  #menus
    if (theme.algolia_search.enable || theme.local_search.enable)
      #search-button
        a.site-page.social-icon.search
          i.fas.fa-search.fa-fw
          span=' '+_p('search.title')
  !=partial('includes/header/menu_item', {}, {cache: true})
  #nav-right
    #toggle-menu
      a.site-page
        i.fas.fa-bars.fa-fw
```
那么修改后就是:
```c
nav#nav
  span#blog_name
    a#site-name(href=url_for('/')) #[=config.title]
    
  #menus
  !=partial('includes/header/menu_item', {}, {cache: true})
  #nav-right
    if (theme.algolia_search.enable || theme.local_search.enable)
      #search-button
        a.site-page.social-icon.search
          i.fas.fa-search.fa-fw
      #toggle-menu
        a.site-page
          i.fas.fa-bars.fa-fw
```

# 你学会了吗？
