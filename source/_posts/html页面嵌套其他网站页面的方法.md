---
title: html页面嵌套其他网站页面的方法
tags:
  - 使用规范
  - html
  - 嵌套网页
top_img: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107103255.png
cover: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107103255.png
categories: 网络技巧
abbrlink: 950d22eb
date: 2023-1-7 3:29:01
---
直接上代码：html页面嵌套其他网站页面的方法
```HTML
<div>
<!--第一种：使用object标签-->
    <object type="text/html" data="https://www.baidu.com" style="width:1000px; height:1000px">
        <p>backup content</p>
    </object>
    <!--第二种：使用iframe 标签-->
    <iframe src='http://wwww.baidu.com' style="width:1000px; height:1000px"></iframe>
</div>
    <!--第三种：先弹出一个页面，再在这个页面使用window.location.href重定向到网页-->
<script>
    window.location.href='http://wwww.baidu.com';
</script>

```
> 注意事项：如果自己的页面是https协议，被嵌套的页面是http协议，chrome浏览会提示不安全，直接拦截，不让加载。