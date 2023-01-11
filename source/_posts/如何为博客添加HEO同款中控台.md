---
title: 如何为博客添加HEO同款中控台
tags:
  - hexo
  - butterfly
  - HEO同款
  - 中控台
top_img: 'https://s1.ax1x.com/2023/01/10/pSm0yb6.png'
cover: 'https://s1.ax1x.com/2023/01/10/pSm0yb6.png'
categories: 魔改
abbrlink: 26eafda3
date: 2023-01-10 21:30:44
---
# 碎碎念
在开始前，请先确保你已看此```Hexo```魔改系列前置教程，或者你是老司机
{% link Hexo Butterfly博客魔改的一点点基础,GTC,/posts/583ff077/ %}

# 前言
今天我们复刻一下```heo```的中控台，在此感谢```noionion```提供的```heo```源码，样式和```js```是我从```heo```那里扒来的

# 引入```console.pug```
```js
#console
  .close-btn(onclick='heo.hideConsole()',href="javascript:void(0);")
    i.fas.fa-circle-xmark
  .console-card-group
    .console-card-group-left
      .console-card#card-newest-comments(onclick='heo.hideConsole()')
        .card-content
            .author-content-item-tips 互动
            span.author-content-item-title 最近评论
        .aside-list
          span= _p('aside.card_newest_comments.loading_text')
    .console-card-group-right
      .console-card.tags(onclick='heo.hideConsole()')
        - let tagLimit = theme.aside.card_tags.limit === 0 ? 0 : theme.aside.card_tags.limit || 40
        .card-content
            .author-content-item-tips 标签
            span.author-content-item-title 寻找感兴趣的领域
        .card-tag-cloud!= tagcloud({min_font: 1, max_font: 1, amount: tagLimit , color: true, start_color: '#D3D3D3', end_color: '#D3D3D3', unit: 'em'})
      .console-card.history(onclick='heo.hideConsole()') 
        if theme.aside.card_archives.enable
          - let type = theme.aside.card_archives.type || 'monthly'
          - let format = theme.aside.card_archives.format || 'MMMM YYYY'
          - let order = theme.aside.card_archives.order || -1
          - let limit = theme.aside.card_archives.limit === 0 ? 0 : theme.aside.card_archives.limit || 8
          != aside_archives({ type:type, format: format, order: order, limit: limit })  
  .button-group
    .console-btn-item 
      a.darkmode_switchbutton(onclick='rm.switchDarkMode()',title='显示模式切换',href="javascript:void(0);")
        i.fas.fa-moon(style='font-size: 1rem;')
    #consoleHideAside.console-btn-item(onclick='heo.hideAsideBtn()',title='边栏显示控制')
      a.asideSwitch
        i.fas.fa-arrows-alt-h
    #consoleKeyboard.console-btn-item(onclick='heo.keyboardToggle()',title='快捷键开关')
      a.keyboard-switch
        i.fas.fa-keyboard
    #assist-open.console-btn-item(onclick='heo.hideConsole()',title='无障碍工具栏')
      a.assist-btn
        i.fas.fa-wheelchair
    #consoleCommentBarrage.console-btn-item(onclick='heo.switchCommentBarrage()',title='热评开关')
      a.commentBarrage
        i.fa-solid.fa-message
    #consoleMusic.console-btn-item(onclick='heo.musicToggle()',title='音乐开关')
      a.music-switch
        i.fas.fa-music
  .console-mask(onclick='heo.hideConsole()',href="javascript:void(0);")
```

# 引入css
```css
/* 中控台 */
#console {
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  justify-content: center;
  opacity: 0;
  transition: 0.3s ease-out;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

#console.show {
  opacity: 1;
  pointer-events: all;
}

#console .console-card-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
  max-width: 2000px;
  transform: translateY(20px);
  transition: 0.3s;
  opacity: 0;
}

#console.show .console-card-group {
  transform: translateY(0px);
  opacity: 1;
  transition-delay: 0.1s;
}


#console .console-card-group-left {
  margin-right: 0.5rem;
  width: 40%;
  height: 100%;
}

#console .console-card-group-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 60%;
  overflow: hidden;
}

@media screen and (max-width: 1300px) {
  #console .console-card-group {
    justify-content: center;
  }

  #console .console-card-group-left {
    display: none;
  }

  #console .console-card-group-right {
    width: 100%;
    margin: 0;
  }

  #consoleMusic {
    display: none;
  }

  #consoleCommentBarrage {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  #console .console-card-group {
    display: none;
  }

  #consoleHideAside {
    display: none;
  }
}

@media screen and (max-height: 800px) {
  #console .console-card-group{
    display: none;
  }

  #consoleMusic {
    display: none;
  }

  #consoleCommentBarrage {
    display: none;
  }
}

#console .console-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: var(--style-border);
  box-shadow: var(--heo-shadow-border);
  padding: 40px;
}

#console .console-card.tags {
  height: calc(100% - 172px);
}


#console .console-mask {
  background: var(--heo-maskbgdeep);
  backdrop-filter: saturate(100%) blur(0px);
  -webkit-backdrop-filter: blur(0px);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: 0.3s;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
}

#console.show .console-mask {
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

#card-newest-comments .aside-list-item .thumbnail img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 20px;
}

#card-newest-comments .aside-list-item {
  background: var(--heo-secondbg);
  border-radius: 12px;
  border: var(--style-border);
  padding: 12px 16px;
  width: 49%;
  display: flex;
  flex-direction: column;
  height: 150px;
}

#card-newest-comments .aside-list-item:not(:last-child) {
  margin-bottom: 0.5rem;
}

#card-newest-comments .aside-list-item .name {
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
}

#console .author-content-item-tips {
  opacity: .8;
  font-size: .6rem;
  margin-bottom: .5rem;
}

#console .author-content-item-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
}

#console .aside-list-item .thumbnail {
  display: flex;
  align-items: center;
  width: fit-content;
}

#console .aside-list-item .content {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 0.5rem;
}

#console .aside-list-item .content .comment {
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  line-height: 24px;
  width: fit-content;
}

#console .aside-list-item .content time {
  font-size: 12px;
  color: var(--heo-secondtext);
  margin-top: auto;
}

#console .aside-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
}

#console .button-group {
  display: flex;
  margin: 1rem auto 0 auto;
  justify-content: center;
  width: fit-content;
}

#console .button-group .console-btn-item {
  width: 60px;
  height: 60px;
  transition: 0.3s;
  cursor: pointer;
}

#console .button-group .console-btn-item:not(:last-child) {
  margin-right: 0.5rem;
}

#console .button-group .console-btn-item:hover a {
  background: var(--heo-main);
}

#console .button-group .console-btn-item a {
  width: 100%;
  height: 100%;
  background: var(--card-bg);
  border: var(--style-border);
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--font-color);
}

#console .button-group .console-btn-item.on a {
  background: var(--heo-orange);
  color: var(--heo-white);
  transition: 0.3s;
}

#console .button-group .console-btn-item a:hover {
  background: var(--heo-main)!important;
}

#console .button-group .console-btn-item:hover a {
  color: var(--heo-white);
}

.console-card.tags .card-tag-cloud {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
}

.console-card.tags .card-tag-cloud a {
  color: var(--font-color)!important;
  margin: 6px 4px;
  padding: 2px 8px;
  border-radius: 8px;
  background: var(--heo-secondbg);
  border: var(--style-border);
  font-size: 14px!important;
  font-weight: bold;
}

.console-card.tags .card-tag-cloud a:hover {
  background: var(--heo-main);
  color: var(--heo-white)!important;
}

.console-card.tags .card-tag-cloud a sup {
  opacity: 0.6;
}

#console .close-btn {
  width: 35px;
  height: 35px;
  position: fixed;
  right: 100px;
  top: 50px;
  font-size: 35px;
  color: var(--font-color);
  cursor: pointer;
  transition: 0.3s;
  display: flex;
}

#console .close-btn:hover {
  color: var(--heo-hovertext);
}

#console .console-card.history {
  margin-top: 8px;
  padding: 0;
  background: none;
  box-shadow: none;
  border: none;
  overflow: hidden;
}

#console .console-card.history .item-headline {
  display: none;
}

#console .console-card.history .card-archive-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

#console .console-card.history .card-archive-list li.card-archive-list-item {
  flex: 0 0 24%;
}

#console .console-card.history .card-archive-list .card-archive-list-link {
  border-radius: 8px;
  margin: 4px 0;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border: var(--style-border);
  background: var(--card-bg);
  padding: 8px 16px;
}

#console .console-card.history .card-archive-list .card-archive-list-link:hover {
  background: var(--heo-main);
  color: var(--heo-white);
}

#console #card-newest-comments {
  height: 100%;
}

#console .button-group i {
  font-size: 1rem;
}
```

# 引入js
```js
let heo_cookiesTime = null;
let heo_musicPlaying = false;
let heo_keyboard = false;
let heo_intype = false;
// 私有函数
var heo = {
  // 检测显示模式
  darkModeStatus: function () {
    let theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (theme == 'light') {
      $(".menu-darkmode-text").text("深色模式");
    }else {
      $(".menu-darkmode-text").text("浅色模式");
    }
  },

  //bb添加时间
  changeTimeInEssay: function() {
    const relativeDate = function (selector) {
      selector.forEach(item => {
        const $this = item
        const timeVal = $this.getAttribute('datetime')
        $this.innerText = btf.diffDate(timeVal, true)
        $this.style.display = 'inline'
      })
    }

    if (document.querySelector('#bber')) {
      relativeDate(document.querySelectorAll('#bber time'))
    }
  },

  // 首页bb
  initIndexEssay: function() {
    if (document.querySelector('#bber-talk')) {
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true,
        autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true
      },
      });
    }
  },


  // 只在首页显示
  onlyHome: function() {
    var urlinfo = window.location.pathname;
    urlinfo = decodeURIComponent(urlinfo);
    if (urlinfo == '/'){
      $('.only-home').attr('style','display: flex');
    }else{
      $('.only-home').attr('style','display: none');
    }
  },

  //是否在首页
  is_Post: function() {
    var url=window.location.href;  //获取url
  if(url.indexOf("/p/") >= 0 ) { //判断url地址中是否包含code字符串
      return true;
    }else {
      return false;
     }
  },


  //监测是否在页面开头
  addNavBackgroundInit: function() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
      if(document.body){
        bodyScrollTop = document.body.scrollTop;
      }
      if(document.documentElement){
        documentScrollTop = document.documentElement.scrollTop;
      }
      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
      // console.log("滚动高度"+ scrollTop)
    
      if (scrollTop != 0) {
        document.getElementById("page-header").classList.add("nav-fixed");
        document.getElementById("page-header").classList.add("nav-visible");
        $('#cookies-window').hide()
        console.log("已添加class")
      }
  },

  // 标签页面
  //分类条
  tagPageActive: function() {
    var urlinfo = window.location.pathname;
    urlinfo = decodeURIComponent(urlinfo)
    // console.log(urlinfo);
    // 验证是否是分类链接
    var pattern = /\/tags\/.*?\//;
    var patbool = pattern.test(urlinfo);
    // console.log(patbool);
    // 获取当前的分类
    if (patbool) {
      var valuegroup = urlinfo.split("/");
      // console.log(valuegroup[2]);
      // 获取当前分类
      var nowCategorie = valuegroup[2];
      if (document.querySelector('#tag-page-tags')){
        $('a').removeClass('select')
        document.getElementById(nowCategorie).classList.add("select");
      }
    }
  },

  //分类条
  categoriesBarActive: function() {
    if (document.querySelector('#category-bar')){
      $(".category-bar-item").removeClass("select")
    }
    var urlinfo = window.location.pathname;
    urlinfo = decodeURIComponent(urlinfo);
    // console.log(urlinfo);
    //判断是否是首页
    if (urlinfo == '/'){
      if (document.querySelector('#category-bar')){
        document.getElementById('category-bar-home').classList.add("select");
      }
    }else {
      // 验证是否是分类链接
      var pattern = /\/categories\/.*?\//;
      var patbool = pattern.test(urlinfo);
      // console.log(patbool);
      // 获取当前的分类
      if (patbool) {
        var valuegroup = urlinfo.split("/");
        // console.log(valuegroup[2]);
        // 获取当前分类
        var nowCategorie = valuegroup[2];
        if (document.querySelector('#category-bar')){
          document.getElementById(nowCategorie).classList.add("select");
        }
      }
    }
  },

  // 页脚友链
  addFriendLinksInFooter: function() {
    var fetchUrl = "https://moments.zhheo.com/randomfriend?num=3"
    fetch(fetchUrl)
    .then(res => res.json())
    .then(json =>{
      var randomFriendLinks = getArrayItems(json,3);
  
      var htmlText = '';
      for (let i = 0; i < randomFriendLinks.length; ++i) {
        var item = randomFriendLinks[i]
        htmlText += `<a class='footer-item' href='${item.link}'  target="_blank" rel="noopener nofollow">${item.name}</a>`;
      }
      htmlText += `<a class='footer-item' href='/link/'>更多</a>`
      document.getElementById("friend-links-in-footer").innerHTML = htmlText;
    })
  },

  //禁止图片右键单击
  stopImgRightDrag: function() {
    var img=$("img");
    img.on("dragstart",function(){return false;});
  },

  //置顶文章横向滚动
  topPostScroll: function() {
    if (document.getElementById("recent-post-top")){
      let xscroll = document.getElementById("recent-post-top");
      xscroll.addEventListener("mousewheel", function (e) {
      //计算鼠标滚轮滚动的距离
      let v = -e.wheelDelta / 2;
      xscroll.scrollLeft += v;
      //阻止浏览器默认方法
      if(document.body.clientWidth < 1300){
        e.preventDefault();
      }
      }, false);
    }
  },

  topCategoriesBarScroll: function() {
    if (document.getElementById("category-bar-items")){
        let xscroll = document.getElementById("category-bar-items");
        xscroll.addEventListener("mousewheel", function (e) {
        //计算鼠标滚轮滚动的距离
        let v = -e.wheelDelta / 2;
        xscroll.scrollLeft += v;
        //阻止浏览器默认方法
        e.preventDefault();
      }, false);
    }
  },

  //作者卡片问好
  sayhi: function() {
    if (document.querySelector('#author-info__sayhi')){
      document.getElementById("author-info__sayhi").innerHTML = getTimeState() + "！我是";
    }
  },

  // 添加标签
  addTag: function() {
    //添加new标签
    if (document.querySelector('.heo-tag-new')){
      $(".heo-tag-new").append(`<sup class="heo-tag heo-tag-new-view">N</sup>`)
    }
    //添加hot标签
    if (document.querySelector('.heo-tag-hot')){
      $(".heo-tag-hot").append(`<sup class="heo-tag heo-tag-hot-view">H</sup>`)
    }
  },

  // 二维码
  qrcodeCreate: function() {
    if (document.getElementById('qrcode')){
      document.getElementById("qrcode").innerHTML = "";
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: window.location.href,
        width: 250,
        height: 250,
        colorDark : "#000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
    }
  },

  // 刷新即刻短文瀑布流
  reflashEssayWaterFall: function() {
    if (document.querySelector('#waterfall')) {
      setTimeout(function(){
          waterfall('#waterfall');
          document.getElementById("waterfall").classList.add('show'); 
      },500);
    }
  },

  // 即刻短文添加灯箱
  addMediumInEssay: function() {
    if (document.querySelector('#waterfall')) {
      mediumZoom(document.querySelectorAll('[data-zoomable]'))
    }
  },

  // 下载图片
  downloadImage: function(imgsrc, name) { //下载图片地址和图片名
    rm.hideRightMenu();
    if (rm.downloadimging == false) {
      rm.downloadimging = true;
      btf.snackbarShow('正在下载中，请稍后',false,10000)
      setTimeout(function(){
        let image = new Image();
        // 解决跨域 Canvas 污染问题
        image.setAttribute("crossOrigin", "anonymous");
        image.onload = function() {
          let canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          let context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, image.width, image.height);
          let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
          let a = document.createElement("a"); // 生成一个a元素
          let event = new MouseEvent("click"); // 创建一个单击事件
          a.download = name || "photo"; // 设置图片名称
          a.href = url; // 将生成的URL设置为a.href属性
          a.dispatchEvent(event); // 触发a的单击事件
        };
        image.src = imgsrc;
        btf.snackbarShow('图片已添加盲水印，请遵守版权协议');
        rm.downloadimging = false;
      }, "10000");
    }else{
      btf.snackbarShow('有正在进行中的下载，请稍后再试');
    }
  },

  //控制评论弹幕
  switchCommentBarrage: function() {
    let commentBarrage = document.querySelector('.comment-barrage');
    if(commentBarrage){
        if($(".comment-barrage").is(":visible")) {
          $(".comment-barrage").hide();
          $(".menu-commentBarrage-text").text("显示热评");
          document.querySelector("#consoleCommentBarrage").classList.remove("on");
          localStorage.setItem('commentBarrageSwitch', 'false');
        }else if ($(".comment-barrage").is(":hidden")) {
          $(".comment-barrage").show();
          $(".menu-commentBarrage-text").text("关闭热评");
          document.querySelector("#consoleCommentBarrage").classList.add("on");
          localStorage.removeItem('commentBarrageSwitch');
        }
    }
    rm.hideRightMenu();
  },

  //隐藏cookie窗口
  hidecookie: function() {
    heo_cookiesTime = setTimeout(()=>{
      document.getElementById("cookies-window").classList.add('cw-hide');
      setTimeout(()=>{
        $('#cookies-window').hide()
      },1000)
    },3000)
  },

  //隐藏今日推荐
  hideTodayCard: function() {
    if (document.getElementById("todayCard")) {
      document.getElementById("todayCard").classList.add('hide');
    }
  },

  //更改主题色
  changeThemeColor: function(color) {
    if (document.querySelector('meta[name="theme-color"]') !== null) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', color)
    }
  },

  //自适应主题色
  initThemeColor: function() {
    if (heo.is_Post()) {
      const currentTop = window.scrollY || document.documentElement.scrollTop
      if (currentTop > 56) {
        let themeColor = getComputedStyle(document.documentElement).getPropertyValue('--heo-background');
        heo.changeThemeColor(themeColor);
      }else {
        if (currentTop === 0) {
          let themeColor = getComputedStyle(document.documentElement).getPropertyValue('--heo-main');
          heo.changeThemeColor(themeColor);
        }
      }
    }else {
      let themeColor = getComputedStyle(document.documentElement).getPropertyValue('--heo-background');
      heo.changeThemeColor(themeColor);
    }
  },

  //跳转到指定位置
  jumpTo: function(dom) {
    $(document).ready(function () {
      $("html,body").animate({
        scrollTop: $(dom).eq(i).offset().top
      }, 500 /*scroll实现定位滚动*/ ); /*让整个页面可以滚动*/
    });
  },

  //显示加载动画
  showLoading: function() {
    document.querySelector("#loading-box").classList.remove("loaded");
    let cardColor = getComputedStyle(document.documentElement).getPropertyValue('--heo-card-bg');
    heo.changeThemeColor(cardColor);
  },

  //隐藏加载动画
  hideLoading: function() {
    document.querySelector("#loading-box").classList.add("loaded");
  },

  //切换音乐播放状态
  musicToggle: function() {
    let msgPlay = '<i class="fa-solid fa-play"></i><span>播放音乐</span>' // 此處可以更改為你想要顯示的文字
    let msgPause = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>' // 同上，但兩處均不建議更改
    if (heo_musicPlaying) {
      document.querySelector("#nav-music").classList.remove("playing");
      document.getElementById("menu-music-toggle").innerHTML = msgPlay;
      document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";
      document.querySelector("#consoleMusic").classList.remove("on");
      heo_musicPlaying = false;
    }else {
      document.querySelector("#nav-music").classList.add("playing");
      document.getElementById("menu-music-toggle").innerHTML = msgPause;
      document.querySelector("#consoleMusic").classList.add("on");
      heo_musicPlaying = true;
    }
    document.querySelector('meting-js').aplayer.toggle();
    rm.hideRightMenu();
  },

  //音乐上一曲
  musicSkipBack: function() {
    document.querySelector('meting-js').aplayer.skipBack();
    rm.hideRightMenu();
  },

  //音乐下一曲
  musicSkipForward: function() {
    document.querySelector('meting-js').aplayer.skipForward();
    rm.hideRightMenu();
  },

  //获取音乐中的名称
  musicGetName: function() {
    var x = $('.aplayer-title')
		// var x = document.getElementsByClassName('txt');
		// for (var i = x.length - 1; i >= 0; i--) {
		// console.log(x[i].innerText)
		// }
		var arr = []
		for (var i = x.length - 1; i >= 0; i--) {
			arr[i] = x[i].innerText
			// console.log(x[i].innerText)
		}
		return arr[0]
  },

  //显示中控台
  showConsole: function() {
    document.querySelector("#console").classList.add("show");
    heo.initConsoleState();
  },

  //隐藏中控台
  hideConsole: function() {
    document.querySelector("#console").classList.remove("show");
  },

  //快捷键功能开关
  keyboardToggle: function() {
    if (heo_keyboard) {
      heo_keyboard = false;
      document.querySelector("#consoleKeyboard").classList.remove("on");
      localStorage.setItem('keyboardToggle', 'false');
    }else {
      heo_keyboard = true;
      document.querySelector("#consoleKeyboard").classList.add("on");
      localStorage.setItem('keyboardToggle', 'true');
    }
  },

  //滚动到指定id
  scrollTo:function(id){
    var domTop = document.querySelector(id).offsetTop;
    window.scrollTo(0,domTop - 80);
  },

  //隐藏侧边栏
  hideAsideBtn: () => { // Hide aside
    const $htmlDom = document.documentElement.classList
    $htmlDom.contains('hide-aside')
      ? saveToLocal.set('aside-status', 'show', 2)
      : saveToLocal.set('aside-status', 'hide', 2)
    $htmlDom.toggle('hide-aside')
    $htmlDom.contains('hide-aside')
      ? document.querySelector("#consoleHideAside").classList.add("on")
      : document.querySelector("#consoleHideAside").classList.remove("on")
  },

  //初始化console图标
  initConsoleState: function() {
    //初始化隐藏边栏
    const $htmlDom = document.documentElement.classList
    $htmlDom.contains('hide-aside')
      ? document.querySelector("#consoleHideAside").classList.add("on")
      : document.querySelector("#consoleHideAside").classList.remove("on")
  },

  //删除多余的class
  removeBodyPaceClass: function() {
    $('body').removeClass()
    $('body').addClass('pace-done')
  }
}

  // 右键菜单添加点击事件
  $('#menu-backward').on('click',function(){window.history.back();rm.hideRightMenu();});
  $('#menu-forward').on('click',function(){window.history.forward();rm.hideRightMenu();});
  $('#menu-refresh').on('click',function(){window.location.reload();});
  $('#menu-top').on('click',function(){btf.scrollToDest(0, 500);rm.hideRightMenu();});
  $('.menu-link').on('click',rm.hideRightMenu);

  $("#menu-darkmode").prop("onclick",null).off("click");
  $('#menu-darkmode').on('click',rm.switchDarkMode);

  $('#menu-home').on('click',function(){window.location.href = window.location.origin;});
  $('#menu-randomPost').on('click',function(){toRandomPost()});

  $("#menu-commentBarrage").prop("onclick",null).off("click");
  $('#menu-commentBarrage').on('click',heo.switchCommentBarrage);

  $('#rightmenu-mask').on('click',rm.hideRightMenu);
  $('#rightmenu-mask').contextmenu(function(){
    rm.hideRightMenu();
    return false;
  });
  $('#menu-translate').on('click',function(){
      rm.hideRightMenu();
      translateInitialization();
  });
  $('#menu-copy').on('click', rm.copyPageUrl);
  $('#menu-pastetext').on('click',rm.pasteText);
  $('#menu-copytext').on('click',function(){rm.rightmenuCopyText(selectTextNow);btf.snackbarShow('复制成功，复制和转载请标注本文地址');});
  $('#menu-commenttext').on('click',function(){rm.rightMenuCommentText(selectTextNow);});
  $('#menu-newwindow').on('click',function(){window.open(domhref);rm.hideRightMenu();});
  $('#menu-copylink').on('click',rm.copyLink);
  $('#menu-downloadimg').on('click',function(){heo.downloadImage(domImgSrc,'zhheo');});
  $('#menu-copyimg').on('click',function(){rm.writeClipImg(domImgSrc);});
  $('#menu-searchBaidu').on('click',rm.searchBaidu);
  //音乐
  $('#menu-music-toggle').on('click',heo.musicToggle);
  $('#menu-music-back').on('click',heo.musicSkipBack);
  $('#menu-music-forward').on('click',heo.musicSkipForward);
  $('#menu-music-copyMusicName').on('click',function(){rm.rightmenuCopyText(heo.musicGetName());btf.snackbarShow('复制歌曲名称成功',false,3000);});
```
> 此为```heo.js```，我懒得筛选了，你们直接引入就行

# 将```pug```注册
```diff
if page.type !== '404'
      #body-wrap(class=pageType)
        include ./header/index.pug
+       include ./console.pug
        if is_home()
          include hometop.pug
```
