<template>
  <div class="基石">
    <div class="bg">
      <div id="x1">
        <h2 class="大大大标题 animate__animated animate__backInDown">中国古代数学成就</h2>
      </div>
      <div id="x2">
        <img src="../img/math_achieve/鹿.png" alt="" id="鹿">
        <img src="../img/math_achieve/鹿金边.png" alt="" id="鹿金边">
      </div>
      <div id="x3">
        <span class="x3标题">数学六大领域</span>
        <div class="数学领域1">
          <router-link to="/MathAchieveArithmetic">
            <img src="../img/math_achieve/框内容1.png" class="数学领域1适配图片1" alt="">
            <img src="../img/math_achieve/框内容1.png" class="数学领域1适配图片2" alt="">
          </router-link>
        </div>-
<!--        <div class="数学领域2">-->
<!--          <img src="../img/1.jpg" class="数学领域2适配图片1" alt="">-->
<!--          <img src="../img/2.jpg" class="数学领域2适配图片2" alt="">-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>
<script setup>
import 'animate.css';
import '../css/数学成就总体.css';
import { animateElement } from '@/js/detect_anime1.js';
import { onMounted, onUnmounted } from 'vue';
import { initScrollAnimation, destroyScrollAnimation } from '../js/scroll-animation.js';
//这一行从 Vue.js 中导入了两个生命周期钩子函数 onMounted 和 onUnmounted。
//这一行定义了一个名为 scrollHandler 的变量,用于存储页面滚动事件的处理函数。初始值设置为 null。

let scrollHandler = null;

//这是一个 Vue.js 生命周期钩子函数,在组件挂载到页面上后执行一次。在这个函数中,我们执行了以下操作:
onMounted(() => {
  // 使用 document.querySelector 获取 .大大大标题 和 .x3标题 元素的引用。
  // const titleElement = document.querySelector('.大大大标题');
  const x3TitleElement = document.querySelector('.x3标题');

  scrollHandler = () => {
    // 定义了 scrollHandler 函数,用于在页面滚动时检测滚动位置,并为目标元素添加相应的动画效果。
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // 如果滚动位置小于 100 像素,则为 .大大大标题 元素添加 animate__animated 和 animate__backInDown 动画类。
    // 如果滚动位置大于 150% 视口高度减去 100 像素,则为 .x3标题 元素添加 animate__animated 和 animate__backInUp 动画类。
    // 最好是一个范围值。
    // if (scrollPosition < 100) {animateElement(titleElement, 'backInDown');}
    if (scrollPosition >= 140 * window.innerHeight / 100 - 100 && scrollPosition <= 170 * window.innerHeight / 100 - 100) {animateElement(x3TitleElement, 'backInUp');}

  };
  // 使用 window.addEventListener 为窗口对象添加了 scroll 事件监听器,并将 scrollHandler 函数作为事件处理程序。
  window.addEventListener('scroll', scrollHandler);
  initScrollAnimation();
});

// 这是另一个 Vue.js 生命周期钩子函数,在组件从页面上卸载时执行一次。
// 在这个函数中,我们使用 window.removeEventListener 移除了之前添加的 scroll 事件监听器,以防止内存泄漏。
onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
  destroyScrollAnimation();
});
</script>
<style scoped>
@font-face {
  font-family: '方正仿宋';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(../font/三级加粗-正文-三号-方正仿宋_GBK.TTF) format('truetype');
}
.基石{
  background: #f9f9f9;
  min-height: 300vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.bg{
  position: relative;
  height: 300vh;
  width: 1519px;
}
#x1{
  position:relative;
  display:flex;
  /*flex-direction: column;*/
  justify-content: center;
  align-items: center;
  background: url("../img/math_achieve/数学背景7.png") no-repeat;

  background-size: cover;
  width: 100%;
  height: 101vh;
}
/*x1及其下属单位：*/
.大大大标题{
  position: absolute;
  font-size: 5em;
  color: #000000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}
#x2{
  position:relative;
  display: flex;
  /*子图片放到地图中间*/
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background: url("../img/math_achieve/地板.jpeg") no-repeat center;
  background-size: cover;

  width: 100%;
  height: 101vh;
}
#鹿{
  /*已经在中间了。*/
}
#鹿金边{
  position: absolute;
  bottom: 0; /* 向下贴边 */
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 由于左边缘已经居中,这里把鹿金边向左移动自身宽度的一半,实现完全居中 */
}
#x3{
  position:relative;
  display: flex;

  background: url("../img/math_achieve/数学背景6.png") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 101vh;
}
/*x3及其下属单位：*/
.x3标题{
  position: absolute;
  top:5%;
  left:35%;
  font-size: 5em;
  font-weight: bold;
  font-family: "方正仿宋", cursive;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}
/* 隐藏水平和垂直滚动条 */
::-webkit-scrollbar {
  display: none;
}
/* 或单独隐藏垂直滚动条 */
/*
::-webkit-scrollbar:vertical {
  display: none;
}
*/
</style>