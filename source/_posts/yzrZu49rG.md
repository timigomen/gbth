---
title: html + css 实现无需 js 的打字效果
tags:
  - HTML
  - CSS
  - 教程
  - 小知识
top_img: https://cdn2.tianli0.top/gh/timigomen/cdn/img/d1a20cf431adcbef691a44dae9af2edda3cc9f3b.gif
cover: https://cdn2.tianli0.top/gh/timigomen/cdn/img/d1a20cf431adcbef691a44dae9af2edda3cc9f3b.gif
categories: 网络技巧
abbrlink: 94e48da5
date: 2023-01-01 21:56:49
---
以前要达到类似在电脑上打字的效果，需要 js+html。今天我将介绍一种新方法。本文主要介绍纯 html+css 实现打字效果，有一定的参考价值，大家可以学习一下。提供所有代码，可以直接使用。

![](https://cdn2.tianli0.top/gh/timigomen/cdn/img/d1a20cf431adcbef691a44dae9af2edda3cc9f3b.gif)

# 一、原理分析
可以将动画看做三个不同的层次：

1.最底层的文字
2.中间挡住文字的背景
3.最上层的光标

文字是静止的，而中间的背景和最上层的光标是动态的。

初始时，背景挡住所有的文字，光标在最左边。

动画进行时，背景和光标以相同的步伐从左往右移动。

动画结束时，背景不再遮挡文字，光标则在最右边闪烁。

这种实现唯一的好处是不需要 js，但缺点是只能用于一行文本，多行文本理论上可以实现，但是比较麻烦。

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typing effect without js</title>
  <style>
    :root {
      /* number of characters */
      --steps: 345;
      /* animation time */
      --duration: 2.5s;
      --fontSize: 50px;
      --cursorSize: 20px;
    }
    .text {
      color: #333;;
      position: relative;
      display: inline-block;
      font-family: 'Courier New', Courier, monospace;
      font-size: var(--fontSize);
      line-height: 1;
    }
    .text::after {
      content: '';
      width: var(--cursorSize);
      height: var(--fontSize);
      background-color: black;
      z-index: 2;
      position: absolute;
      animation: blink 1s var(--duration) step-end infinite,
      moveCursor var(--duration) steps(var(--steps)) forwards;
    }
    .text::before {
      content: '';
      width: 100%;
      height: var(--fontSize);
      z-index: 1;
      position: absolute;
      background: linear-gradient(#fff, #fff) no-repeat top right;
      animation: showText var(--duration) steps(var(--steps)) forwards;
    }
    /* Cursor blink animation */
    @keyframes blink {
      0% {
        background-color: black;
      }
      50% {
        background-color: transparent;
      }
      100% {
        background-color: black;
      }
    }
    /* Cursor movement animation */
    @keyframes moveCursor {
      0% {
        left: 0%;
      }
      100% {
        left: 100%;
      }
    }
    /* background moving animation */
    @keyframes showText {
      0% {
        background-size: 100% 100%;
      }
      100% {
        background-size: 0% 100%;
      }
    }
  </style>
</head>
<body>
<div class="text">hello,world!</div>
</body>
</html>
```
