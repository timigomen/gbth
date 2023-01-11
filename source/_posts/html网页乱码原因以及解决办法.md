---
title: html网页乱码原因以及解决办法
tags:
  - 解决办法
  - html
  - 乱码
top_img: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107103133.png
cover: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107103133.png
categories: 网络技巧
abbrlink: 761c73df
date: 2023-1-7 2:24:05
---
# 一、乱码造成原因

1、如果网页源代码是gbk编写的，而内容中的文字是utf-8的，那么，此时打开浏览器就会出现HTML乱码。反之也会出现乱码。

2、HTML网页编码是gbk，但是程序从程序库中调出呈现的是utf-8编码的内容也会造成编码乱码。

3、浏览器不能自动检测网页编码，造成网页乱码。

# 二、解决乱码方法

第一种：HTML网页源代码编码与中文字输入编码不同。

解决办法：使用专业的编辑软件进行HTML网页的编写。例如DW.尽量不要直接使用记事本进行编写。

第二种：网页设置编码是gbk，但是数据库存储数据编码格式是UTF-8，此时，程序查询数据库数据显示数据进行转码即可。

例如：
```mysql
mysql_query("SET NAMES 'UTF-8'") //将查询数据转码为UTF-8
```
然后在做网页时不要忘记下面的内容：
```HTML
<meta http-equiv="Content-Type" content="text/html"; charset="utf-8" />
```
> 放在head后面

# 第三种：浏览器造成乱码

这种原因一般情况下都是网页没有设置meta charset 编码造成的。导致浏览器不能识别你的网页默认编码类型。

解决方法：

1、如果浏览器浏览时候出现网页乱码，在浏览器找到转换编码的菜单。

2、如果自己开发网页，必须网页加入meta charset编码标签。
```HTML
<meta http-equiv="Content-Type" content="text/html";charset="UTF-8" />
```
如果转换的时候，不是记事本编辑添加meta charset编码标签就完成，这样同样会造成乱码，那是因为直接记事本添加或者修改编码格式后，而对应的HTML超文本文档内容并没有随添加或修改编码格式而改变，这个时候需要真正意义上的转码，所以最好借助专业的开发软件进行代码的编写。

