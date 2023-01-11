---
title: hexo添加音乐页面
swiper_index: 15
tags:
  - hexo 
  - butterfly
top_img: >-
  https://bj.bcebos.com/baidu-rmb-video-cover-1/79ff813b1f459cf3830c1ca484d1dfe8.png
cover: >-
  https://bj.bcebos.com/baidu-rmb-video-cover-1/79ff813b1f459cf3830c1ca484d1dfe8.png
categories: 魔改
abbrlink: 1ec6edfc
date: 2023-01-02 19:04:19
---
# 前言
没有音乐页面怎么行，花里胡哨的都安排上，本来想摆烂直接上aplayer，但考虑到网站速度以及aplayer的稳定性（和卜算子日常歇菜），还是弄个音乐播放器放自己本地的音乐好，又快又稳定。
在网上找了个能用的h5播放器源码(找不到原作者)，适配下pjax和hexo，再改改样式就完成啦：[查看音乐页面](/music/)

# 实现
新建music单页，cv以下内容覆盖原内容：
>在轻笑Chuckle的基础上修改，不用下载图片资源

```html
---
title: 🎵音乐🎵
date: 2023-01-02 15:13:35
comments: false
aside: false
---
<script type="text/javascript">alert("本页面音频由cloudflRE加速");</script>
{% raw %}
<!-- 播放器 -->
<div class="music-player">
	<!-- audio标签 -->
	<audio class="music-player__audio" ></audio>
	<!-- 播放器主体 -->
	<div class="music-player__main">
		<!-- 模糊背景 -->
		<div class="music-player__blur"></div>
		<!-- 唱片 -->
		<div class="music-player__disc">
			<!-- 唱片图片 -->
			<div class="music-player__image">
				<img width="100%" src="" alt="">
			</div>
			<!-- 指针 -->
			<div class="music-player__pointer"><img width="100%" src="https://bj.bcebos.com/baidu-rmb-video-cover-1/3777562b2cc6d71a8a3bbc3394c1d42b.png" alt=""></div>
		</div>
		<!-- 控件主体 -->
		<div class="music-player__controls">
			<!-- 歌曲信息 -->
			<div class="music__info">
				<h3 class="music__info--title">...</h3>
			</div>
			<!-- 控件... -->
			<div class="player-control">
				<div class="player-control__content">
					<div class="player-control__btns">
						<div class="player-control__btn player-control__btn--prev"><i class="iconfont icon-prev"></i></div>
						<div class="player-control__btn player-control__btn--play"><i class="iconfont icon-play"></i></div>
						<div class="player-control__btn player-control__btn--next"><i class="iconfont icon-next"></i></div>
						<div class="player-control__btn player-control__btn--mode"><i class="iconfont icon-random"></i></div>
					</div>
					<div class="player-control__volume">
						<div class="control__volume--icon player-control__btn"><i class="iconfont icon-volume"></i></div>
						<div class="control__volume--progress progress"></div>
					</div>
				</div>
				<div class="player-control__content">
					<div class="player__song--progress progress"></div>
					<div class="player__song--timeProgess nowTime">00:00</div>
					<div class="player__song--timeProgess totalTime">00:00</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 歌曲列表 -->
	<div class="music-player__list">
		<ul class="music__list_content">
		</ul>
	</div>
</div>
<script src="/js/utill.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js"></script>
<script src="/js/player.js?10"></script>
<div style="text-align:center;margin:-100px 0; font:normal 14px/24px 'MicroSoft YaHei';color:#ffffff"></div>

{% endraw %}
```

在```blog\source\music```下新建```songs```和```images```文件夹，```songs```内直接放入歌曲。再在```images```文件夹内新建```songs```文件夹，里面放歌曲封面。
~在```blog\source\img```内放入这两张图片```cd.png```，```cd_tou.png```。~已经改为图片链接，但不保证一直有效
![cd](https://blog.chuckle.top/img/cd.png)
![cd_tou](https://blog.chuckle.top/img/cd_tou.png)
 
在```\blog\themes\butterfly\source\js```新建```player.js```。
```js
//创建一个音乐播放器的类 单例模式
class Player {
    constructor() { //类的构造函数
        //如果没有实例化，就去构造一个实例
        return this.getInstance(...arguments);
    }

    //构建实例
    getInstance() {
        let instance = new PlayerCreator(...arguments);
        //让实例可以使用到Player的原型的属性方法
        // instance.__proto__=Player.prototype;
        // instance.constructor=Player;
        //把构建好的实例挂在Player类上
        Player.instance = instance;
        return instance;
    }
}

//歌曲信息
class Musics {
    //歌曲
    constructor() {
        this.songs = [{
                id: 1,
                title: 'golden hour - JVKE',
                singer: 'golden hour - JVKE',
                songUrl: '#',
                imageUrl: '#'
            },
            {
                id: 2,
                title: '面壁者 - G.E.M.邓紫棋',
                singer: '面壁者 - G.E.M.邓紫棋',
                songUrl: '#',
                imageUrl: '#'
            },
			{
                id: 3,
                title: 'Bones - Imagine Dragons',
                singer: 'Bones - Imagine Dragons',
                songUrl: '#',
                imageUrl: '#'
            },
            {
                id: 4,
                title: 'Cash Me Outside Rap - ROY PURDY',
                singer: 'Cash Me Outside Rap - ROY PURDY',
                songUrl: '#',
                imageUrl: '#'
            },
			{
                id: 5,
                title: 'In The Shadow Of The Sun - Professor Green',
                singer: 'In The Shadow Of The Sun - Professor Green',
                songUrl: '#',
                imageUrl: '#'
            },
            {
                id: 6,
                title: 'NUMB - XXXTENTACION',
                singer: 'NUMB - XXXTENTACION',
                songUrl: '#',
                imageUrl: 'https://bj.bcebos.com/baidu-rmb-video-cover-1/917bac8662fd8995f985f9160e1a48ad.jpeg'
            },
            {
                id: 7,
                title: 'Slow Down - Madnap、Pauline Herr',
                singer: 'Slow Down - Madnap、Pauline Herr',
                songUrl: '#',
                imageUrl: 'https://bj.bcebos.com/baidu-rmb-video-cover-1/c343acd552ec89fa3a96a4f5d1d063be.jpeg'
            },
        ]
    }
    //根据索引获取歌曲的方法
    getSongByNum(index) {
        return this.songs[index];
    }
}

//真正的构建播放器的类
class PlayerCreator {
    constructor() {
        this.audio = document.querySelector('.music-player__audio') // Audio dom元素, 因为很多api都是需要原生audio调用的，所以不用jq获取
        // this.audio.muted = true; // 控制静音
        this.audio.volume = 0.2;

        //工具
        this.util = new Util();
        this.musics = new Musics(); //歌曲信息
        this.song_index = 0; // 当前播放的歌曲索引
        this.loop_mode = 1; // 1 2
        // 下方歌曲列表容器
        this.song_list = $('.music__list_content');

        this.render_doms = { //切换歌曲时需要渲染的dom组
            title: $('.music__info--title'),
            singer: $('.music__info--singer'),
            image: $('.music-player__image img'),
            blur: $('.music-player__blur')
        }
        this.ban_dom = { //禁音时需要渲染的dom组
            control__btn: $('.control__volume--icon')
        }

        // 时间显示容器
        this.render_time = {
            now: $('.nowTime'),
            total: $('.totalTime')
        }

        // 唱片
        this.disc = {
            image: $('.music-player__image'),
            pointer: $('.music-player__pointer')
        };
        //播放器初始化
        this.init();
    }
    //初始化函数
    init() {
        this.renderSongList();
        this.renderSongStyle();
        this.bindEventListener();
    }
    //生成播放列表
    renderSongList() {
        let _str = '';
        this.musics.songs.forEach((song, i) => {
            _str += `<li class="music__list__item">${song.title}</li>`
        });
        this.song_list.html(_str);
    }

    //根据歌曲去渲染视图
    renderSongStyle() {
        let {
            title,
            singer,
            songUrl,
            imageUrl
        } = this.musics.getSongByNum(this.song_index);
        this.audio.src = songUrl;
        this.render_doms.title.html(title);
        this.render_doms.singer.html(singer);
        this.render_doms.image.prop('src', imageUrl);
        this.render_doms.blur.css('background-image', 'url("' + imageUrl + '")');

        //切换列表中的item的类名 play
        this.song_list.find('.music__list__item').eq(this.song_index).addClass('play').siblings().removeClass('play');
    }
    //绑定各种事件
    bindEventListener() {
        //播放按钮
        this.$play = new Btns('.player-control__btn--play', {
            click: this.handlePlayAndPause.bind(this)
        });
        //上一首
        this.$prev = new Btns('.player-control__btn--prev', {
            click: this.changeSong.bind(this, 'prev')
        });
        //下一首
        this.$next = new Btns('.player-control__btn--next', {
            click: this.changeSong.bind(this, 'next')
        });
        //循环模式
        this.$mode = new Btns('.player-control__btn--mode', {
            click: this.changePlayMode.bind(this)
        });
        //禁音
        this.$ban = new Btns('.control__volume--icon', {
            click: this.banNotes.bind(this)
        })
        //列表点击
        this.song_list.on('click', 'li', (e) => {
            let index = $(e.target).index();
            this.changeSong(index);
        })

        //音量控制 audio标签音量 vlouem 属性控制0-1

        new Progress('.control__volume--progress', {
            min: 0,
            max: 1,
            value: this.audio.volume,
            handler: (value) => { //更改进度时
                this.audio.volume = value;
            }
        })
        //歌曲进度 this.audio.duration
        //可以播放的时候触发（歌曲的基本信息都已经获取到了）
        this.audio.oncanplay = () => {
            //避免重复实例化
            if (this.progress) {
                this.progress.max = this.audio.duration; //切换歌曲后更新时长
                this.render_time.total.html(this.util.formatTime(this.audio.duration));
                return false;
            };
            this.progress = new Progress('.player__song--progress', {
                min: 0,
                max: this.audio.duration,
                value: 0,
                handler: (value) => {
                    this.audio.currentTime = value;
                }
            })
            //调整总时长
            this.render_time.total.html(this.util.formatTime(this.audio.duration));
        }

        //会在播放的时候持续触发
        this.audio.ontimeupdate = () => {
            this.progress.setValue(this.audio.currentTime);
            //调整当前时长
            this.render_time.now.html(this.util.formatTime(this.audio.currentTime));
        }

        //当歌曲播放完成的时候
        this.audio.onended = () => {
            this.changeSong('next');
            //播放完，换歌后，重新播放
            this.audio.play();
        }

    }

    //播放暂停控制
    handlePlayAndPause() {
        let _o_i = this.$play.$el.find('i');
        //this.audio.pauseed值为true 说明目前是不播放
        if (this.audio.paused) { //现在是暂停的 要播放
            this.audio.play();
            _o_i.removeClass('icon-play').addClass('icon-pause');
            this.disc.image.addClass('play');
            this.disc.pointer.addClass('play')
        } else {
            this.audio.pause();
            _o_i.addClass('icon-play').removeClass('icon-pause');
            this.disc.image.removeClass('play');
            this.disc.pointer.removeClass('play');
        }
    }

    //更改循环模式
    changePlayMode() {
        this.loop_mode++;
        if (this.loop_mode > 2) this.loop_mode = 0;
        this.renderPlayMode();
    }
    //更改按钮样式
    renderPlayMode() {
        let _classess = ['loop', 'random', 'single'];
        let _o_i = this.$mode.$el.find('i');
        //prop 改一些标签的自有属性 attr改一些标签的自定义属性
        _o_i.prop('class', 'iconfont icon-' + _classess[this.loop_mode])
    }
    //更改歌曲索引
    changeSongIndex(type) {
        if (typeof type === 'number') {
            this.song_index = type;
        } else {
            if (this.loop_mode === 0) {
                //列表循环
                this.song_index += type === 'next' ? 1 : -1;
                if (this.song_index > this.musics.songs.length - 1) this.song_index = 0;
                if (this.song_index < 0) this.song_index = this.musics.songs.length - 1;
            } else if (this.loop_mode === 1) {
                //随机播放
                let _length = this.musics.songs.length;
                let _random = Math.floor(Math.random() * _length);
                for (let i = 0; i < 10000; i++) { //随机的数为本身则继续随机
                    if (this.song_index == _random) {
                        _random = Math.floor(Math.random() * _length);
                    } else {
                        this.song_index = _random;
                        break;
                    }
                }
            } else if (this.loop_mode === 2) {
                this.song_index = this.song_index;
            }
        }
    }
    //歌曲时长
    songTime() {
        let totalMinute = parseInt(this.audio.duration / 60) < 10 ? "0" + parseInt(this.audio.duration / 60) : parseInt(this.audio.duration / 60);
        let totalSecond = parseInt(this.audio.duration % 60) < 10 ? "0" + parseInt(this.audio.duration % 60) : parseInt(this.audio.duration % 60);
        $('.totalTime').text(totalMinute + ':' + totalSecond);
    }
    //切换歌曲
    changeSong(type) {
        //更改索引
        this.changeSongIndex(type);
        //记录切歌前的状态
        let _is_pause = this.audio.paused;
        //切歌后更改视图显示
        this.renderSongStyle();
        //如果切歌前是在播放，就继续播放
        if (!_is_pause) this.audio.play();
    }
    //禁音
    banNotes() {
        let _o_i = this.$ban.$el.find("i");
        if (this.audio.muted == true) { //如果禁音则开启
            this.audio.muted = false;
            _o_i.removeClass('icon-muted').addClass('icon-volume');
        } else {
            this.audio.muted = true;
            _o_i.removeClass('icon-volume').addClass('icon-muted');
        }
    }
}

//进度条
class Progress {
    constructor(selector, options) {
        $.extend(this, options);
        ///给this挂载传入的参数
        this.$el = $(selector);
        this.width = this.$el.width();
        this.init();
    }

    //进度条初始化
    init() {
        this.renderBackAndPointer();
        this.bindEvents();
        this.drag();
        this.value;
        this.changeDOMStyle(this.width * this.value);
    }
    //为进度条渲染back和pointer
    renderBackAndPointer() {
        this.$back = $('<div class="back">');
        this.$pointer = $('<div class="pointer">');

        this.$el.append(this.$back);
        this.$el.append(this.$pointer);
    }

    setValue(value) { //主动调用，传入value值，设置进度条样式
        let _distance = this.width * value / (this.max - this.min);
        this.changeDOMStyle(_distance);
    }

    drag() {
        let ele = this.$pointer;
        let father = this.$el;
        let flag = false; //鼠标是否点击
        ele.mousedown((e) => {
            flag = true;
            let mousePos = {
                x: e.offsetX
            }
            $(document).mousemove((e) => {
                if (flag === true) {
                    let _left = e.clientX - father.offset().left - mousePos.x;
                    let _distance = Math.max(0, Math.min(_left, father.outerWidth(false) - ele.outerWidth(false)))
                    let _ratio = _distance / father.outerWidth(false);
                    let _value = _ratio * (this.max - this.min); //当前的音量值
                    this.changeDOMStyle(_distance);
                    this.handler(_value); //更改进度之后，执行回调
                }
            })
        })
        $(document).mouseup(() => {
            flag = false;
        })

    }

    bindEvents() { //鼠标点击时更改
        this.$el.click((e) => {
            let _x = e.offsetX; //鼠标距离元素左边的距离
            let _ratio = _x / this.width;
            let _value = _ratio * (this.max - this.min); //当前的音量值
            this.changeDOMStyle(_x);
            this.handler(_value); //更改进度之后，执行回调
        })
    }
    //更改pointer和back
    changeDOMStyle(distance) {
        this.$back.width(distance + 7 == 7 ? 0 : distance + 7);//进度为0时将进度条背景改为0否则加上进度按钮的长度
        this.$pointer.css('left', distance + 'px');
    }
}


//按钮类 
class Btns {
    constructor(selector, handlers) {
        this.$el = $(selector); //元素
        this.bindEvents(handlers);
    }
    bindEvents(handlers) { //绑定事件
        for (const event in handlers) {
            //使用值的时候保证键值对在对象中是存在的
            if (handlers.hasOwnProperty(event)) {
                this.$el.on(event, handlers[event]);
            }
        }
    }
}
new Player();
document.addEventListener('pjax:complete', (e) => {
    new Player();
})
```

在```\blog\themes\butterfly\source\js```新建```utill.js```。
```js
class Util {
    constructor() {
        if (Util.instance) return Util.instance;
        return this.getInstance(...arguments);
    }

    getInstance() {
        var instance = {
            /*
             *   formatTime 格式化时间（s）为 hour:minutes:seconds
             *   @params  time  required number (s)
             *   
             *   return hour:minutes:seconds string
             */

            formatTime(time) {
                //没有传time的时候
                if (time === undefined) {
                    this.handlerError(123, {
                        method: 'formate',
                        param: 'time'
                    });
                    return false;
                }
                let _time = Math.floor(time);
                let _minutes = Math.floor(_time / 60);
                let _hours = Math.floor(_minutes / 60);
                let _seconds = _time - (_minutes * 60);

                return (_hours ? this.fillZero(_hours) + ':' : '') + this.fillZero(_minutes - (_hours * 60)) + ':' + this.fillZero(_seconds);
            },
            /*
             *   fillZero 为小于10的数字补0
             *   @params  num  required number
             *   return '01'.. string
             */
            fillZero(num) {
                //当没有传time的时候
                if (num === undefined) {
                    this.handlerError(123, {
                        method: 'fillZero',
                        param: 'num'
                    });
                    return false;
                }
                //这个函数只是让我们在渲染/显示的时候有一个不同的效果，不要操作原数据
                return num > 9 ? num : '0' + num;
            },
            errors: {
                123: ({
                    method,
                    param
                }) => {
                    return method + 'function need a param ' + param;
                }
            },
            handlerError(code, options) { //处理报错
                console.error('[until error] message' + this.errors[code](options));
            }
        }
        Util.instance = instance;
        return instance;
    }
}

//为了这个工具以后在模块化环境中依然可以使用，需要判断一下，如果是在模块化环境，就将其暴露出去
//commonJs
if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = Util;
}

//AMD
if (typeof define === 'function' && define.amd) {
    define('util', [], function () {
        return Util;
    });
}
```

引入css（一些高度和细节按需自行调整）：
```css
/* 播放器大小 */
.music-player {
  width: 570px;
  height: 500px;
}
.music-player h3{
  margin: 0px 0 1px!important;
}
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1537976418058'); /* IE9*/
  src: url('iconfont.eot?t=1537976418058#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('iconfont.ttf?t=1537976418058') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1537976418058#iconfont') format('svg'); /* iOS 4.1- */
}

.icon-prev:before { content: "\f0069"; }

.icon-next:before { content: "\f006a"; }

.icon-play:before { content: "\e66a"; }

.icon-pause:before { content: "\e76a"; }

.icon-random:before { content: "\e622"; }

.icon-muted:before { content: "\e61e"; }

.icon-volume:before { content: "\e87a"; }

.icon-loop:before { content: "\e66c"; }

.icon-single:before { content: "\e66d"; }


/* 播放器位置 */
.music-player {
  position: relative;
  margin: 0px auto;
}

/* 歌曲列表 */

.music-player__list {
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

.music__list__item {
  padding-left: 25px;
  color: #ccc;
  position: relative;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
}

.music__list__item:last-of-type {
  margin: 0;
}

.music__list__item.play {
  color: #fff;
}

.music__list__item.play:before {
  font-family: 'iconfont';
  content: "\e87a";
  position: absolute;
  left: 0px;
  top: 4px;
}
/* 播放器主体 */
.music-player__main {
  height: 180px;
  padding: 25px;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

/* 播放器主体模糊背景 */
.music-player__blur {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}
/* 播放器唱片效果 */
.music-player__disc {
  float: left;
  width: 130px;
  height: 130px;
  background: url(/img/cd.png) no-repeat center;
  background-size: 100%;
  position: relative;
}

/* 唱片指针 */
.music-player__pointer {
  width: 25px;
  position: absolute;
  right: -10px;
  top: 0;
  -webkit-transform-origin: right top;
  -ms-transform-origin: right top;
  transform-origin: right top;
  -webkit-transform: rotate(-15deg);
  -ms-transform: rotate(-15deg);
  transform: rotate(-15deg);
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

/* 唱片指针播放状态 加play类名 */
.music-player__pointer.play {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
}

/* 唱片歌曲图片 */
.music-player__image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
/* 播放器控件 */
.music-player__controls {
  width: 330px;
  height: 130px;
  float: right;
}

/* 歌曲信息 */
.music__info {
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
}

.music__info .music__info--title {
  color: #fff;
}

.music__info .music__info--title {
  font-size: 16px;
}
/* 控件 */

.player-control {
  width: 100%;
}

.player-control__content {
  overflow: hidden;
}

/* 播放暂停按钮 */
.player-control__btns {
  float: left;
  overflow: hidden;
}

.player-control__btn {
  float: left;
  margin: 0 5px;
  font-weight: bolder;
  color: #fff;
  cursor: pointer;
}

.player-control__volume {
  float: right;
  overflow: hidden;
}

.control__volume--progress {
  float: left;
  width: 100px;
  position: relative;
  top: 8px;
}

.player__song--timeProgess{
  font-size: 12px;
  color: #fff;
  padding: 0px 3px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.player-control__content .nowTime{
  float: left;
}
.player-control__content .totalTime{
  float: right;
}

.music-player .progress {
  background: rgba(0, 0, 0, 0.3);
  height: 5px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) inset;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) inset;
  overflow: hidden;
  margin: 0.5rem 0!important;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
}

.music-player .progress .back {
  width: 0px;
  height: 100%;
  border-radius: 2px;
  background: rgb(12, 182, 212);
}

.music-player .progress .pointer {
  width: 7px;
  height: 7px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  -webkit-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  position: absolute;
  top: -1px;
  left: 0;
}

.music-player .progress:hover .pointer {
  opacity: 1;
}


/* 播放 画片 动画 */

@-webkit-keyframes disc {
  from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
  }

  to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}

@keyframes disc {
  from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
  }
  to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}
.music-player__image.play {
  -webkit-animation: disc 5s linear 0s infinite;
  animation: disc 5s linear 0s infinite;
}
/*  播放进度  */
.player__song--progress {
  width: 100%;
  margin-top: 15px;
}
.music-player h1, .music-player h2, .music-player h3,.music-player h4, .music-player h5, .music-player h6, .music-player p {
  margin: 0; padding: 0;
}
.music-player li { list-style: none; }
```

修改```player.js```里```this.songs```的歌曲信息，把音乐换成自己的，接着三连即可。

>本地浏览可能音乐的进度条无法拖动或者一拖动音乐就回到最开头，问题不大，推送上去就正常了。

# 音频方案
音频存储在本地推送上去会很吃力，所以可以上传到github，用cloudflare加速一下，挺快的！
