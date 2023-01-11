---
title: 洪哥侧栏toc效果实现
tags:
  - hexo
  - butterfly
cover: 'https://cdn-3ie.pages.dev/img/2022-10-04-19-55-48.gif'
top_img: 'https://cdn-3ie.pages.dev/img/2022-10-04-19-55-48.gif'
categories: 魔改
swiper_index: 100
abbrlink: 397e845a
date: 2023-01-03 08:42:00
---
# 效果
![](https://cdn-3ie.pages.dev/img/2022-10-04-19-55-48.gif)

# 实现
在自定义的css文件中添加：

```css

@media screen and (max-width: 768px) {
  #aside-content .card-widget:not(#card-toc) {
      display: none;
  }
}
@media screen and (min-width: 901px) {
  #aside-content #card-toc {
      right: 0px !important;
  }
}

@media screen and (max-width: 900px) {
  #aside-content #card-toc {
      position: fixed;
      right: -100%;
      bottom: 30px;
      z-index: 100;
      max-height: calc(100% - 60px);
      width: 300px;
      opacity: 0;
      transform-origin: right bottom;
  }
}

#aside-content #card-toc .toc-content {
  overflow-y: auto;
  max-height: calc(100vh - 120px);
}

@media screen and (max-width: 900px) {
  #aside-content #card-toc .toc-content {
      max-height: calc(100vh - 140px);
  }
}

#aside-content #card-toc .toc-content .toc-child {
  display: none;
}

@media screen and (max-width: 900px) {
  #aside-content #card-toc .toc-content .toc-child {
      display: block !important;
  }
}

#aside-content #card-toc .toc-content .toc-item.active .toc-child {
  display: block;
}

#aside-content #card-toc .toc-content li, #aside-content #card-toc .toc-content ol {
  list-style: none;
}

#aside-content #card-toc .toc-content > ol {
  padding: 0px !important;
}

#aside-content #card-toc .toc-content ol {
  margin: 0px;
  padding-left: 0.4rem;
}

#aside-content #card-toc .toc-content .toc-link {
  display: block;
  padding-left: 0.3rem;
  border-left: 3px solid transparent;
  color: var(--toc-link-color);
  transition: all 0.2s ease-in-out 0s;
}

#aside-content #card-toc .toc-content .toc-link.active {
  border-left-color: rgb(0, 97, 204);
  background: rgb(0, 121, 255);
  color: rgb(255, 255, 255);
}

#aside-content #card-toc .toc-content::before {
  position: absolute;
  top: 0.6rem;
  right: 1.2rem;
  color: rgb(169, 169, 169);
  content: attr(progress-percentage);
  font-style: italic;
  font-size: 1.2rem;
}

#aside-content #card-toc .toc-content .toc-link.active {
  line-height: 1.2;
  border-radius: 12px;
  border-left-color: var(--heo-hovertext);
  background-color: var(--heo-card-bg);
  color: var(--heo-lighttext);
  font-weight: 700;
  font-size: 20px;
}

[data-theme="dark"].toc .toc-item.active .toc-link .toc-text {
  color: var(--heo-white);
}

#aside-content #card-toc .toc-content .toc-item.active .toc-link {
  opacity: 1;
  border-radius: 8px;
}

#aside-content #card-toc .toc-content .toc-link {
  line-height: 1.2;
  padding: 8px;
  border-left: 0px solid transparent;
  border-radius: 12px;
  color: var(--heo-secondtext);
  cursor: default;
}

#aside-content #card-toc .toc-content .toc-link:not(.active) span {
  opacity: 0.6;
  cursor: pointer;
  filter: blur(1px);
  transition: all 0.3s ease 0s;
}

#aside-content #card-toc:hover .toc-content .toc-link:not(.active) span {
  filter: blur(0px);
  opacity: 1;
}

#aside-content #card-toc .toc-content .toc-link:not(.active) span:hover {
  color: var(--heo-lighttext);
}

#card-toc {
  padding: 0.5rem !important;
}

#aside-content #card-toc .toc-content::before {
  display: none;
}
```