---
title: 博客自定义右键
tags:
  - HTML
  - JS
  - 教程
  - 小知识
categories: 魔改
cover: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107104117.png
top_img: https://cdn2.tianli0.top/gh/timigomen/cdn/img/20230107104117.png
abbrlink: e27ce9ee
date: 2023-1-1 14:04:02
---
相信大家在访问我的网站就发现我的右键已经更换，那么今天就介绍一下我的方法！
> 本魔改教程不适合btf主题！

# 1.首先在```head.ejs```内添加：
```HTML
<!--自定义右键-->
</script>
<style type="text/css">
    a {text-decoration: none;}
    div.usercm{background-repeat:no-repeat;background-position:center center;background-            size:cover;background-color:#fff;font-size:13px!important;width:130px;-moz-box-shadow:1px 1px 3px rgba
(0,0,0,.3);box-shadow:0px 0px 15px #333;position:absolute;display:none;z-index:10000;opacity:0.9;     border-radius: 8px;}
    div.usercm ul{list-style-type:none;list-style-position:outside;margin:0px;padding:0px;display:block}
    div.usercm ul li{margin:0px;padding:0px;line-height:35px;}
    div.usercm ul li a{color:#666;padding:0 15px;display:block}
    div.usercm ul li a:hover{color:#fff;background:rgba(121,85,72,0.88)}
    div.usercm ul li a i{margin-right:10px}
    a.disabled{color:#c8c8c8!important;cursor:not-allowed}
    a.disabled:hover{background-color:rgba(255,11,11,0)!important}
    div.usercm{background:#fff !important;}
    </style>
<div class="usercm" style="left: 199px; top: 5px; display: none;">
    <ul>
        <li><a href="/"><span>🏠首页</span></a></li>
        <li><a href="javascript:history.go(1);"><span>⬅️前进</span></a></li>
        <li><a href="javascript:history.go(-1);"><span>➡️后退</span></a></li>
        <li><a href="javascript:void(0);" onclick="getSelect();"><span>📖复制</span></a></li>
        <li><a href="javascript:void(0);" onclick="baiduSearch();"><span>🔍搜索</span></a></li>
        <li style="border-bottom:1px solid gray"><a href="javascript:window.location.reload();"><span>🔃重载网页</span></a></li>
    </ul>
</div>
```
# 2.然后在```footer.ejs```内添加
```HTML
<!--自定义右键-->
<script type="text/javascript">
    (function(a) {
        a.extend({
            mouseMoveShow: function(b) {
                var d = 0,
                    c = 0,
                    h = 0,
                    k = 0,
                    e = 0,
                    f = 0;
                a(window).mousemove(function(g) {
                    d = a(window).width();
                    c = a(window).height();
                    h = g.clientX;
                    k = g.clientY;
                    e = g.pageX;
                    f = g.pageY;
                    h + a(b).width() >= d && (e = e - a(b).width() - 5);
                    k + a(b).height() >= c && (f = f - a(b).height() - 5);
                    a("html").on({
                        contextmenu: function(c) {
                            3 == c.which && a(b).css({
                                left: e,
                                top: f
                            }).show()
                        },
                        click: function() {
                            a(b).hide()
                        }
                    })
                })
            },
            disabledContextMenu: function() {
                window.oncontextmenu = function() {
                    return !1
                }
            }
        })
    })(jQuery);
 
    function getSelect() {
        "" == (window.getSelection ? window.getSelection() : document.selection.createRange().text) ? layer.msg("啊噢...你没还没选择文字呢！") : document.execCommand("Copy")
    }
    function baiduSearch() {
        var a = window.getSelection ? window.getSelection() : document.selection.createRange().text;
        "" == a ? layer.msg("啊噢...你没还没选择文字呢！") : window.open("https://www.baidu.com/s?wd=" +     a)
    }
    $(function() {
        for (var a = navigator.userAgent, b = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), d = !0, c = 0; c < b.length; c++) if (0 < a.indexOf(b[c])) {
            d = !1;
            break
        }
        d && ($.mouseMoveShow(".usercm"), $.disabledContextMenu())
    });
    </script>
```

