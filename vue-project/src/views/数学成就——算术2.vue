<template>
  <div class="基石" ref="bgRef">
    <div class="bg">
      <div id="x1">
        <img src="../img/math_achieve/图数理之韵.png" alt="" class="图数理之韵 animate__animated animate__backInDown">
        <img src="../img/math_achieve/图算术.png" alt="" class="图算术 animate__animated animate__fadeInUp animate__delay-1s">
      </div>
      <div class="blank" style="height: 100vh;width:100vw" id="blank1" ref="blank1Ref">
        <img src="../img/math_achieve/数的发展与认识.png" alt="" class="blank_img1 animate__animated animate__zoomIn animate__delay-3s">
        <span class="span0 animate__animated animate__jackInTheBox animate__delay-1s">数的发展与认识</span>
        <br><br>
        <span class="span1 animate__animated animate__fadeInBottomLeft animate__delay-2s">数的认识，现代人可以轻轻松松说出亿兆，但对于古人来说，却是遥不可及的。</span>
        <span class="span2 animate__animated animate__fadeInBottomRight animate__delay-3s">百姓以日常生活所用为基准，从1到10到100直至30000。这其中蕴含着10进制的基础。</span>
        <span class="span3 animate__animated animate__fadeInBottomLeft animate__delay-3.5s">人们开始统一度量衡制度,这种标准化不仅方便了生活和商贸活动,也为后世数学发展奠定了基础。</span>
        <span class="span4 animate__animated animate__fadeInBottomRight animate__delay-4s">另一个重要的进步是对八卦的理解。古人发现八卦蕴含着二进制的本源,即阴阳两仪的排列组合隐喻了0和1的基本概念。为二进制的产生做了理论准备,并为古代数学注入了新的哲学内涵。</span>
        <span class="span5 animate__animated animate__fadeInBottomLeft animate__delay-s">古人用独特的方式,逐步打开了数的奥秘！</span>
      </div>
      <div class="横向container" ref="containerRef">
        <div class="横向page">
          <span class="横向1标题">八卦体系</span>
          <span class="横向八卦介绍">
            八卦，这一古老而神秘的符号，起源于伏羲时期。
            它由三个爻组成，每个爻可以是阳爻（用“一”表示）或阴爻（用“- -”表示）。
            通过这三个爻的不同组合，形成了八种不同的卦象，即乾、坤、震、巽、坎、离、艮、兑，分别代表天、地、雷、风、水、火、山、泽等自然元素和现象。
          </span>
          <!--          <img src="" alt="">-->
        </div>
        <div class="横向page">
          <span>

          </span>
        </div>
        <div class="横向page">
          <span>

          </span>
        </div>
      </div>
      <div id="x3"></div>
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
import '../css/数学成就总体.css';
import { animateElement } from '@/js/detect_anime1.js';
import {nextTick, onMounted, ref } from 'vue';

const blank1Ref = ref(null);
const containerRef = ref(null);
const bgRef = ref(null);

let containerTop = 0;
let containerBottom = 0;
let blank1Top = 0;
let blank1Bottom = 0;
let scrollTop = 0;
let isHorizontalScroll = false;
let scrollLeft = 0;
let maxScrollLeft = 0;

onMounted(() => {
  nextTick(() => {
    const container = containerRef.value;
    const bger = bgRef.value;
    const blank1er = blank1Ref.value;

    if(bger && blank1er){
      console.log("两者启动了！！");

      blank1Top = blank1er.offsetTop;
      blank1Bottom = blank1Top + blank1er.offsetHeight;

      console.log('$');
      console.log('scrollTop=' + scrollTop);
      console.log('blank1Top=' + blank1Top);
      console.log('blank1Bottom=' + blank1Bottom);
      console.log('$\n');

      blank1er.addEventListener('wheel', (event) => {
        scrollTop = bger.scrollTop;
        if(scrollTop >= blank1Top + 300){
          console.log("传送启动!!!");
          smoothScrollToContainer();
        }
      })
    }
    if (container && bger && blank1er) {
      console.log("三者启动了！！");

      containerTop = container.offsetTop;
      containerBottom = containerTop + container.offsetHeight;
      // scrollLeft = container.scrollLeft;
      // maxScrollLeft = container.scrollWidth - container.clientWidth;
      isHorizontalScroll = false;

      container.addEventListener('wheel', (event) => {
        event.preventDefault();

        scrollLeft = container.scrollLeft;
        maxScrollLeft = container.scrollWidth - container.clientWidth;

        console.log('scrollLeft='+scrollLeft);
        console.log('maxScrollLeft='+maxScrollLeft);
        console.log('event.deltaY='+event.deltaY);
        if (scrollLeft === 0 && event.deltaY < 0) {
          isHorizontalScroll = false;
        }
        else if (scrollLeft >= 0 && scrollLeft < maxScrollLeft - 1) {
          //详细写清楚每一部分动画应该写什么交互。
          isHorizontalScroll = true;
          if(scrollLeft <= maxScrollLeft - 1) {}
        }
        else isHorizontalScroll = !(scrollLeft >= maxScrollLeft - 1 && event.deltaY > 0);

        if (isHorizontalScroll) {
          container.scrollLeft += event.deltaY;
        }
        else {
          bger.scrollTop += event.deltaY;
        }
      });
    }
    const smoothScrollToContainer = () => {
      console.log("开始传送。");
      bger.scrollTo({ top: containerTop, behavior: 'smooth' });
    };
  });
});

</script>
<style scoped>
@font-face {
  font-family: '方正楷体';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(../font/主标题备注-二级-三号-方正楷体_GBK.TTF) format('truetype');
}
*{
  box-sizing:border-box;
  padding:0;
  margin:0;
}
.基石{
  background: #f9f9f9;
  height:100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.bg{
  flex-shrink: 0;
  position: relative;
  height: 300vh;
  width: 1519px;
}
#x1{
  position:relative;
  background: url("../img/math_img/背景图片4.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: 101vh;
}
.横向container{
  display:flex;
  overflow-x:scroll;
}
.横向container::-webkit-scrollbar {
  display: none;
}
.横向page{
  width:100vw;
  height:101vh;
  flex-shrink: 0;
}

.横向page:nth-child(1){
  background: url('../img/math_achieve/水平滚动背景1.png')
}
.横向page:nth-child(2){
  background: url('../img/math_achieve/水平滚动背景2.png')
}
.横向page:nth-child(3){
  background: url('../img/math_achieve/水平滚动背景3.png')
}

/* 隐藏水平和垂直滚动条 */
::-webkit-scrollbar {
  display: none;
}
#x3{
  position:relative;
  background: hsl(60deg, 50%, 50%);
  width: 100%;
  height: 101vh;
}
.图数理之韵{
  position: absolute;
  left: 20%;
  top: 13%;
  transform: translate(-50%, -50%);
}
.图算术{
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#blank1{
  position:relative;
  background:url("../img/math_achieve/竖直滚动背景1.png") no-repeat;
  background-size:cover;
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
.blank span{
  position: relative;
  font-family: '方正楷体', cursive;
  font-size: 2em;
  font-weight: bold;
  left:5%;
  top:3%;
  display: inline-block; /* 将 span 变成盒子 */
  line-height: 1.5; /* 增加行间距 */
  text-indent: 2em; /* 首段空两个字 */
}
/*更高优先级*/
.span0.span0{
  left:30px;
  font-size:5em;
  width:800px;
  height:70px;
}
.span1{
  width:800px;
  max-height:100px;
}
.span2{
  width:800px;
  max-height:100px;
}
.span3{
  width:800px;
  max-height:100px;
}
.span4{
  width:800px;
  max-height:100px;
}
.span5{
  width:800px;
  max-height:100px;
}
.blank_img1{
  position: absolute;
  left:850px;
  top:30%;
}
.横向1标题{
  position:relative;
  left:300px;
  top:300px;
  width:200px;
  height:200px;
  border:1px solid black;
}
.横向八卦介绍{
  position:absolute;

}
</style>