---
title: '浏览器下出现net::ERR_BLOCKED_BY_CLIENT的解决办法'
tags:
  - 解决办法
categories: 网络技巧
top_img: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107101638.png
cover: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107101638.png
abbrlink: 7522bb64
date: 2023-1-7 13:27:04
---
# 碎碎念
当我们在做开发时，调试页面图片会出现部分图片无法正常显示，并且确认图片的地址正确；

按```F12``` ```Debug```查看报错原因，提示```net::ERR_BLOCKED_BY_CLIENT```错误，但当我们点击图片地址发现，图片地址并无错误；

遇到这类情况，一般都是浏览器安装的某个第三方扩展程序已阻止对此网页的访问，例如下图：

![](https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107101638.png)

# 解决办法：

当我们查看浏览器第三方插件的时候，就会看到插件中存在“广告过滤插件”，其实，报错的原因就是第三方广告过滤插件在捣鬼，

当你关闭掉广告过滤插件后，你再次刷新页面，原先报错的问题不在报错了；

广告过滤插件比如：
![](https://cdn2.tianli0.top/gh/timigomen/cdn/img/20220809132802.png)