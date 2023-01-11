---
title: 如何在 HTML 中调整图像大小？
tags:
  - html
  - img
  - css
  - 小知识
top_img: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107104615.png
cover: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107104615.png
categories: 网络技巧
abbrlink: 40a489cd
date: 2023-1-3 20:34:36
---
了解在 HTML 中调整图像大小的不同技术、何时应避免在浏览器端调整大小，以及在 Web 上操作和提供图像的正确方法。

如果您的图像不适合布局，您可以在 HTML 中调整其大小。在 HTML 中调整图像大小的最简单方法之一是使用标签上的height和width属性img。这些值指定图像元素的高度和宽度。这些值以 px 为单位设置，即 CSS 像素。

例如，原始图像为 640×960。

![](https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107104734.png)

我们可以渲染它的高度为 500 像素，宽度为 400 像素

```html
<img src="https://ik.imagekit.io/ikmedia/women-dress-2.jpg" width="400" height="500" />
```

如果图像元素所需的高度和宽度与图像的实际尺寸不匹配，则浏览器会缩小（或放大）图像。浏览器用于缩放的确切算法可能会有所不同，具体取决于底层硬件和操作系统。

客户端图像大小调整有几个缺点，主要是图像质量差和图像渲染速度较慢。为了克服这个问题，您应该从服务器提供已经调整大小的图像。您可以使用 Thumbor 或免费图像 CDN（如 ImageKit.io）使用 URL 参数动态调整图像大小。

# 在 CSS 中调整图像大小

您还可以在 CSS 中指定高度和宽度。
```CSS
img {

  width: 400px,

  height: 300px

}

```
## 调整图像大小时保留纵横比

当您同时指定height和 时width，图像可能会丢失其纵横比。您可以通过仅指定width并设置height为auto使用 CSS 属性来保留纵横比。
```CSS
img {

  width: 400px,

  height: auto

}
```
这将渲染一个 400 像素宽的图像。相应地调整高度以保留原始图像的纵横比。您也可以指定height属性并设置width为auto，但大多数布局通常受宽度限制而不是高度限制。

## 根据可用宽度进行调整的响应式图像
您可以指定百分比而不是绝对数字的宽度以使其具有响应性。通过设置width为100%，如果需要匹配父元素的宽度，图像将放大。这可能会导致图像模糊，因为图像可以放大到大于其原始尺寸。
```CSS
img {

  width: 100%;

  height: auto;

}
```
或者，您可以使用该max-width属性。通过设置
```CSS
max-width:100%;
```
如果必须，图像会缩小，但永远不会放大到大于其原始尺寸。
```CSS
img {

  max-width: 100%;

  height: auto;

}
```
### 如何调整大小和裁剪图像以适合元素区域？

到目前为止，我们已经讨论了如何通过指定调整图像大小```height```或```width```或两者。

当您同时指定height和 时width，图像将被强制适应所要求的尺寸。它可以改变原始的纵横比。有时，即使图像的某些部分被裁剪，您也希望在图像覆盖整个区域时保留纵横比。为此，您可以使用：

- 背景图片
- ```object-fit css ```属性

## 调整背景图像的大小

```background-image```是一个非常强大的 CSS 属性，它允许您在元素上插入图像而不是img. 您可以使用以下 ```CSS ```属性控制图像的大小调整和裁剪 

- background-size - 图像的大小
- background-position - 背景图像的起始位置

## background-size
默认情况下，背景图像以其原始全尺寸呈现。您可以通过使用background-sizeCSS 属性设置高度和宽度来覆盖它。您可以根据需要向上或向下缩放图像。
```CSS
<style>

.backround {

  background-image: url("/image.jpg");

  background-size: 150px;

  width: 300px;

  height: 300px;

  border: solid 2px red;

}

</style>

<div class="backround">

</div>
```
的可能值```background-size```：

```auto``` - 以全尺寸渲染图像
```length```- 设置背景图像的宽度和高度。第一个值设置宽度，第二个值设置高度。如果只给出一个值，则第二个值设置为```auto```。例如，```100px``` ```100px```或```50px```。
```percentage```- 以父元素的百分比设置背景图像的宽度和高度。第一个值设置宽度，第二个值设置高度。如果仅给出一个值，则第二个值设置为auto。例如，100% 100%或50%。
它还具有 2 个特殊值contain和cover：

## background-size:contains
```contains``` - 它保留图像的原始纵横比，但图像被调整大小以使其完全可见。无论包含框的大小如何，高度或宽度中最长的将适合给定的尺寸。
```CSS
<style>

.backround {

  background-image: url("/image.jpg");

  background-size: contains;

  width: 300px;

  height: 300px;

  border: solid 2px red;

}

</style>

<div class="backround">

</div>
```
## background-size:cover
cover - 它保留原始纵横比但调整图像大小以覆盖整个容器，即使它必须放大图像或裁剪它。
```CSS
<style>

.backround {

  background-image: url("/image.jpg");

  background-size: cover;

  width: 300px;

  height: 300px;

  border: solid 2px red;

}

</style>

<div class="backround">

</div>
```
# 适合对象的 CSS 属性

您可以使用元素object-fit上的CSS 属性img来指定应如何调整图像大小和裁剪以适合容器。在引入这个 CSS 属性之前，我们不得不求助于使用背景图像。

除了inherit, initial, 和 之外unset，对象拟合还有 5 个可能的值：

- contain：它保留图像的原始纵横比，但调整了图像大小以使其完全可见。无论包含框的大小如何，高度或宽度中最长的将适合给定的尺寸。
- cover：它保留原始纵横比但调整图像大小以覆盖整个容器，即使它必须放大图像或裁剪图像。
- fill： 这是默认值。图像将填充其给定区域，即使这意味着失去其纵横比。
- none: 图像根本没有调整大小，原始图像大小填充给定区域。
- scale-down:包含或无中较小的一个。
如果  ```object-position```正在渲染图像的裁剪部分，您可以使用来控制图像的起始位置。

让我们通过例子来理解这些。

下图的原始宽度为 1280 像素，高度为 854 像素。在这里，它使用 拉伸到最大可用宽度max-width: 100%。
```HTML
<img src="https://ik.imagekit.io/ikmedia/backlit.jpg"

     style="max-width: 100%;" />
```
## 适合对象：包含
```HTML
<img src="https://ik.imagekit.io/ikmedia/backlit.jpg"

             style="object-fit:contain;

            width:200px;

            height:300px;

            border: solid 1px #CCC"/>
```
图像的原始纵横比相同，但图像已调整大小以使其完全可见。我们1px在图像周围添加了边框来展示这一点。

## 适合对象：封面
```HTML
<img src="https://ik.imagekit.io/ikmedia/backlit.jpg"

             style="object-fit:cover;

            width:200px;

            height:300px;

            border: solid 1px #CCC"/>
```
原始纵横比被保留，但为了覆盖整个区域，图像从左侧和右侧被剪裁。

# 对象匹配：填充
```HTML
<img src="https://ik.imagekit.io/ikmedia/backlit.jpg"

             style="object-fit:fill;

            width:200px;

            height:300px;

            border: solid 1px #CCC"/>
```
图像被强制放入一个 200 像素宽、高度为 300 像素的容器中，原始纵横比不会保留。

## 对象适合：无
```HTML
<img src="https://ik.imagekit.io/ikmedia/backlit.jpg"

             style="object-fit:none;

            width:200px;

            height:300px;

            border: solid 1px #CCC"/>
```
## 适合对象：缩小
```HTML
<img src="https://ik.imagekit.io/ikmedia/backlit.jpg"

             style="object-fit:scale-down;

            width:200px;

            height:300px;

            border: solid 1px #CCC"/>
```
## object-fit:cover 和 object-position :right
```HTML
<img src="https://ik.imagekit.io/ikmedia/backlit.jpg"

             style="object-fit:cover;

                   object-position: right;

            width:200px;

            height:300px;

            border: solid 1px #CCC"/>
```
## 客户端图像大小调整的缺点

您应该记住客户端调整大小的某些缺点。

### 1. 图像渲染慢

由于在浏览器中调整大小之前无论如何都会加载全尺寸图像，因此完成下载和最终渲染需要更多时间。这意味着，如果您有一张 1.5 兆字节的 1024 × 682 大照片并以 400 像素的宽度显示，则访问者会在浏览器将其缩小到 400 像素之前下载整个 1.5 兆字节的图像。

您可以在网络面板上看到此下载时间.

另一方面，如果您使用某些程序或图像 CDN在服务器上调整图像大小，则浏览器不必加载大量数据并浪费时间解码和渲染它。

使用 ImageKit.io，您可以使用URL 参数轻松调整图像大小。例如 -

### 原图
https://ik.imagekit.io/ikmedia/women-dress-2.jpg

### 保留纵横比的 400 像素宽图像
https://ik.imagekit.io/ikmedia/women-dress-2.jpg？tr=w-400

### 2. 画质差

浏览器使用的精确缩放算法可能会有所不同，其性能取决于底层硬件和操作系统。当相对较大的图像调整大小以适应较小的容器时，最终图像可能会明显模糊。

在速度和质量之间存在权衡。最终选择取决于浏览器。Firefox 3.0 及更高版本使用双线性重采样算法，该算法针对高质量而不是速度进行了调整。但这可能会有所不同。

您可以使用image-renderingCSS 属性，该属性定义浏览器在从原始尺寸放大或缩小时应如何呈现图像。
```CSS
/* Keyword values */

image-rendering: auto;

image-rendering: crisp-edges;

image-rendering: pixelated;

/* Global values */

image-rendering: inherit;

image-rendering: initial;

image-rendering: unset;
```
### 3. 带宽浪费

由于无论如何都要加载全尺寸图像，因此会浪费本可以节省的带宽。数据传输并不便宜。除了增加您的带宽费用之外，它还会花费您的用户真钱。

如果您使用的是图像 CDN，您可以通过提供下一代格式（例如 WebP 或 AVIF）的图像来进一步减少带宽消耗。

用户友好的仪表板还将显示您到目前为止节省了多少带宽

查看 ImageKit 仪表板中的实际节省

### 4. 增加对客户端设备的内存和处理要求

调整大图像以适应更小的容器是昂贵的，并且在内存和处理能力都有限的低端设备上可能会很痛苦。这会减慢整个网页的速度并降低用户体验。

## 概括

在实现网页时，图像需要完美地适应布局。为了能够实现响应式设计，您需要记住以下几点：

- 如果可以，请完全避免客户端（浏览器）调整大小。这意味着从服务器提供正确大小的图像。它导致更少的带宽使用、更快的图像加载和更高的图像质量。如果你想自己实现它，有很多开源图像处理库。或者更好的是，您可以使用免费的图像 CDN，它只需几行代码即可提供所有这些功能以及更多功能。
- 永远不要放大光栅图像，即 JPEG、PNG、WebP 或 AVIF 图像，永远不要放大，因为它会导致输出模糊。
如果设计中的多个维度需要，您应该对图标和图形使用 SVG 格式。
- 虽然调整大小，如果你想保留原始图像的长宽比-只有指定的一个width和height，并设置对方auto。
- 如果您希望图像在保留纵横比的同时适合整个容器，即使某些部分被裁剪或图像被放大 - 
- 使用- object-fitCSS 属性或使用CSS 属性设置背景图像background-image。
使用object-position时使用控制图像的起始位置object-fit。在背景图像中，使用background-position.
