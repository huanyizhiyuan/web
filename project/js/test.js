var screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
var screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

var resolutionElement = document.getElementById("resolution");
resolutionElement.textContent =
  "当前屏幕宽度：" + screenWidth + "px，当前屏幕高度：" + screenHeight + "px";
