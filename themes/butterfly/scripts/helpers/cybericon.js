hexo.extend.helper.register('cybericon', function () {
  var icon = [
      '#icon-fukong',
      '#icon-fan',
      '#icon-partial-discharge',
      '#icon-menu-zizhanbaowei',
      '#icon-YunTai-unfold',
      '#icon-camera-GOTO_PRESET',
      '#icon-d3',
      '#icon-copy',
      '#icon-config'
   ]
  var index = Math.floor(Math.random()*icon.length);
  return icon[index]
});