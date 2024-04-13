<template>
<!--  <div class="scroll-info" :style="{ top: scrollTop + 'px', left: scrollLeft + 'px' }">-->
<!--    当前水平滚动距离: {{ horizontalScrollDistance }}-->
<!--    <br>-->
<!--    当前垂直滚动距离: {{ verticalScrollDistance }}-->
<!--  </div>-->
  <div class="基石">
    <div class="bg">
      <header class="home_menu">
        <img src="../img/tbtbtb.png" class="logo" alt="logo">
        <nav>
          <ul class="nav_links">
            <li class="nav_li">
              <a href="http://localhost:5173/#/MathAchieve">硕果累累</a>
            </li>
            <li class="nav_li">
              <a href="http://localhost:63342/wywywywy/project/index.html">返回首页</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="x1">
          <img src="../img/math_achieve/勾.png" alt="" class="animate__animated animate__fadeInDownBig animate__delay-1s">
          <img src="../img/math_achieve/股.png" alt="" class="animate__animated animate__fadeInBottomRight animate__delay-2s">
          <img src="../img/math_achieve/筹.png" alt="" class="animate__animated animate__bounceIn animate__delay-1s">
          <img src="../img/math_achieve/算.png" alt="" class="animate__animated animate__bounceInLeft animate__delay-2s">
          <img src="../img/math_achieve/大.png" alt="" class="animate__animated animate__rotateInUpLeft animate__delay-2s">
          <img src="../img/math_achieve/衍.png" alt="" class="animate__animated animate__zoomInUp animate__delay-1s">
          <img src="../img/math_achieve/求.png" alt="" class="animate__animated animate__slideInLeft animate__delay-2s">
          <img src="../img/math_achieve/一.png" alt="" class="animate__animated animate__fadeInBottomLeft animate__delay-1s">
          <img src="../img/math_achieve/圆.png" alt="" class="animate__animated animate__rotateInDownRight animate__delay-1s">
          <img src="../img/math_achieve/周.png" alt="" class="animate__animated animate__jackInTheBox animate__delay-2s">
          <img src="../img/math_achieve/率.png" alt="" class="animate__animated animate__fadeInBottomLeft animate__delay-1s">
          <img src="../img/math_achieve/定.png" alt="" class="animate__animated animate__rollIn animate__delay-1s">
          <img src="../img/math_achieve/理.png" alt="" class="animate__animated animate__rotateInUpLeft animate__delay-2s">
          <img src="../img/math_achieve/中国古代数学成就.png" alt="" class="中国古代数学成就 animate__animated animate__zoomInDown animate__delay-3s">
      </div>
      <div id="x2">
        <img src="../img/math_achieve/鹿.png" alt="" id="鹿">
        <img src="../img/math_achieve/长长鹿金边.png" alt="" id="鹿金边">
        <span class="总结1">
          中华文明闪耀着五千年的历史辉煌，孕育了无数杰出的数学家和丰富的数学著作。
          蕴含在其中的数学成就，更是多姿多彩、璀璨夺目的文化瑰宝。
          它们不但融入我们的日常生活，更深深植根于我们的文化，乃至每一次呼吸和每一步行走之中。
          这些成就为经济社会的稳步前进和商业活动的蓬勃发展、土木与水利行业的繁荣打下坚实的根基。
        </span>
        <span class="总结2">
          这些成就可以细分为六大核心板块：<b class="突出">算术、代数、几何、天文数学、数学分析以及组合数学</b>。
          每一个板块都是先人辛勤劳作、心血凝聚的结晶。
          数学成就蕴含着历代数学家们坚韧不拔的精神、不懈探求数学真理的意志，承载着对未来生活的无限憧憬和美好愿景。
        </span>
      </div>
      <div id="总体跳转">
        <span class="跳转标题">数学六大领域</span>
        <div class="数学领域1">
          <router-link to="/MathAchieveArithmetic">
            <img src="../img/math_achieve/算术成就.png" class="数学领域1适配图片1" alt="">
            <img src="../img/math_achieve/算术成就文字.png" class="数学领域1适配图片2" alt="">
          </router-link>
        </div>-
        <div class="数学领域2">
          <router-link to="/MathAchieveArithmetic">
          <img src="../img/math_achieve/代数成就.png" class="数学领域2适配图片1" alt="">
          <img src="../img/math_achieve/代数成就.png" class="数学领域2适配图片2" alt="">
          </router-link>
        </div>
        <div class="数学领域3">
          <router-link to="/MathAchieveArithmetic">
            <img src="../img/math_achieve/几何成就.png" class="数学领域3适配图片1" alt="">
            <img src="../img/math_achieve/几何成就.png" class="数学领域3适配图片2" alt="">
          </router-link>
        </div>
        <div class="数学领域4">
          <router-link to="/MathAchieveArithmetic">
            <img src="../img/math_achieve/天文成就.png" class="数学领域4适配图片1" alt="">
            <img src="../img/math_achieve/天文成就.png" class="数学领域4适配图片2" alt="">
          </router-link>
        </div>
        <div class="数学领域5">
          <router-link to="/MathAchieveArithmetic">
            <img src="../img/math_achieve/组合数学成就.png" class="数学领域5适配图片1" alt="">
            <img src="../img/math_achieve/组合数学成就.png" class="数学领域5适配图片2" alt="">
          </router-link>
        </div>
        <div class="数学领域6">
          <router-link to="/MathAchieveArithmetic">
            <img src="../img/math_achieve/数值分析成就.png" class="数学领域6适配图片1" alt="">
            <img src="../img/math_achieve/数值分析成就.png" class="数学领域6适配图片2" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import 'animate.css';
import "../css/base.css";
import '../css/header.css'
import '../css/数学成就总体.css';
import { animateElement } from '@/js/detect_anime1.js';
import {onMounted, onUnmounted, ref} from 'vue';
import { initScrollAnimation, destroyScrollAnimation } from '../js/scroll-animation.js';

const horizontalScrollDistance = ref(0);
const verticalScrollDistance = ref(0);
const scrollTop = ref(20); // 初始垂直位置
const scrollLeft = ref(20); // 初始水平位置

window.addEventListener('scroll', () => {
  horizontalScrollDistance.value = window.scrollX;
  verticalScrollDistance.value = window.scrollY;
});

let scrollHandler = null;
let animateFlag = true;
let animateFlag2 = true;
onMounted(() => {
  const x2summarize1 = document.querySelector('.总结1');
  const x2summarize2 = document.querySelector('.总结2');
  const x3TitleElement = document.querySelector('.跳转标题');


  scrollHandler = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition >= 70 * window.innerHeight / 100 - 100 && scrollPosition <= 100 * window.innerHeight / 100 - 100 &&animateFlag) {
      x2summarize1.style.display = 'block'; // 显示 .总结1
      x2summarize2.style.display = 'block'; // 显示 .总结2
      animateElement(x2summarize1, 'fadeInBottomLeft');
      animateElement(x2summarize2, 'fadeInBottomRight');

      x2summarize1.addEventListener('animationend', () => {
        // do something
        animateFlag = false;
      });
    }
    if (scrollPosition >= 140 * window.innerHeight / 100 - 100 && scrollPosition <= 170 * window.innerHeight / 100 - 100 && animateFlag2) {
      x3TitleElement.style.display = 'block';
      animateElement(x3TitleElement, 'backInUp');
      x3TitleElement.addEventListener('animationend', () => {
        // do something
        animateFlag2 = false;
      });
    }

  };
  window.addEventListener('scroll', scrollHandler);
  initScrollAnimation();
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
  destroyScrollAnimation();
});
</script>
<style scoped>

/*
.scroll-info {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
}
 */
@font-face {
  font-family: '方正楷体';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(../font/主标题备注-二级-三号-方正楷体_GBK.TTF) format('truetype');
}
.基石{
  /*background: #f9f9f9;*/
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
  background: url("../img/math_achieve/数学背景3.png") no-repeat;

  background-size: cover;
  width: 100%;
  height: 101vh;
}
/*x1及其下属单位：*/
#x2{
  position:relative;
  display: flex;
  /*子图片放到地图中间*/
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background: url("../img/math_achieve/鹿背景.png") no-repeat center;
  background-size: cover;

  width: 100%;
  height: 101vh;
}
.总结1{
  display: none;
  position: absolute;
  top:10%;
  left:10%;
  width:200px;
  height:450px;
  writing-mode: vertical-rl; /* 设置文字垂直从右向左排列 */
  font-family: "方正仿宋", cursive;
  font-size: 25px;
  letter-spacing: 2px;
}
.总结2{
  display: none;
  position: absolute;
  top:10%;
  left:75%;
  width:200px;
  height:450px;
  writing-mode: vertical-rl; /* 设置文字垂直从右向左排列 */
  font-family: "方正仿宋", cursive;
  font-size: 25px;
  letter-spacing: 2px;
}
#鹿{
  /*已经在中间了。*/
  position: absolute;
  top:80%;
  z-index: 0;
}
#鹿金边{
  position: absolute;
  bottom: 0; /* 向下贴边 */
  left: -60%; /* 水平居中 */
  transform: translateX(-50%); /* 由于左边缘已经居中,这里把鹿金边向左移动自身宽度的一半,实现完全居中 */
}
#总体跳转{
  position:relative;
  display: flex;
  background: url("../img/math_achieve/数学背景6.png") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 101vh;
}
/*总体跳转及其下属单位：*/
.跳转标题{
  display:none;
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
#x1 img{
  position: absolute;
  top: 0;
  left: 0;
}
</style>