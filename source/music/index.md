---
title: 🎵音乐🎵
date: 2023-01-02 15:13:35
comments: false
aside: false
top_img: false
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


