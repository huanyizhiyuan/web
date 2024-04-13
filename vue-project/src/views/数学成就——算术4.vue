<template>
  <div class="scroll-info">
    当前水平滚动距离: {{ horizontalScrollDistance }}
    <br>
    当前垂直滚动距离: {{ verticalScrollDistance }}
  </div>
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
  <div class="基石" ref="bgRef">
    <div id="x1">
      <img src="../img/math_achieve/图数理之韵.png" alt="" class="图数理之韵 animate__animated animate__backInDown">
      <img src="../img/math_achieve/图算术.png" alt="" class="图算术 animate__animated animate__fadeInUp animate__delay-0.6s">
    </div>
    <div class="blank" id="blank1" ref="blank1Ref">
      <img src="../img/math_achieve/数的发展与认识.png" alt="" class="blank_img1 animate__animated animate__zoomIn animate__delay-4s">
      <span class="span0 animate__animated animate__jackInTheBox animate__delay-1.5s">数的发展与认识</span>
      <br><br>
      <span class="span1 animate__animated animate__fadeInBottomLeft animate__delay-2s">数的认识，现代人可以轻轻松松说出亿兆，但对于古人来说，却是遥不可及的。</span>
      <span class="span2 animate__animated animate__fadeInBottomRight animate__delay-3s">百姓以日常生活所用为基准，从1到10到100直至30000。这其中蕴含着10进制的基础。</span>
      <span class="span3 animate__animated animate__fadeInBottomLeft animate__delay-3.5s">人们开始统一度量衡制度,这种标准化不仅方便了生活和商贸活动,也为后世数学发展奠定了基础。</span>
      <span class="span4 animate__animated animate__fadeInBottomRight animate__delay-4s">另一个重要的进步是对八卦的理解。古人发现八卦蕴含着二进制的本源,即阴阳两仪的排列组合隐喻了0和1的基本概念。为二进制的产生做了理论准备,并为古代数学注入了新的哲学内涵。</span>
      <span class="span5 animate__animated animate__fadeInBottomLeft animate__delay-5s">古人用独特的方式,逐步打开了数的奥秘！</span>
    </div>
    <div class="横向container" ref="containerRef">
      <div class="横向page">
        <span class="横向1标题">八卦体系</span>
        <span class="横向八卦介绍">
          八卦，这一古老而神秘的符号，起源于伏羲时期。
          它由三个爻组成，每个爻可以是阳爻（用“——”表示）或阴爻（用“--”表示）。
          通过这三个爻的不同组合，形成了八种不同的卦象，即乾、坤、震、巽、坎、离、艮、兑，分别代表天、地、雷、风、水、火、山、泽等自然元素和现象。
          <br>
          而这，孕育着二进制思想的启蒙。
          数学模型的建立。
          算术运算的启示。
        </span>
        <span class="补充八卦图">
          八卦，两仪可以看作'0'与'1'的混合组合，即现代的二进制。
          到了四象，即'01+10+00+11'的组合，总共4个。
          同理八卦是8个。
          同时八卦图也影响到了后世的河图洛书。
        </span>
        <img src="../img/math_achieve/八卦图.png" alt="" class="八卦图">
        <img src="../img/math_achieve/三角尺.png" alt="" class="三角尺">
      </div>
      <div class="横向page">
        <span class="横向2标题">正负加减</span>
        <span class="横向正负加减介绍">
          在《九章算术》中，正负数的加减法被明确地阐述。
          其中，“正正得正，负负得正，正负得负，负正得负”的运算法则，是正负数加减法的基础。
          这一法则表明了两个正数相加仍为正数，两个负数相加也为正数（相当于两个负数的绝对值相加），
          正数与负数相加得到负数，负数与正数相加也得到负数。
        </span>
        <img src="../img/math_achieve/算盘.png" alt="" class="算盘图">
        <img src="../img/math_achieve/加.png" alt="" class="加">
        <img src="../img/math_achieve/减.png" alt="" class="减">
        <img src="../img/math_achieve/乘.png" alt="" class="乘">
        <img src="../img/math_achieve/除.png" alt="" class="除">
      </div>
      <div class="横向page">
        <span class="横向3标题">竖式计算法</span>
        <span class="横向竖式计算介绍">
          竖式计算法是一种基本的数学计算方法，在宋朝时期得到了广泛的应用和发展。
          这种计算方法的特点是将数字按照一定的顺序排列，通常是从右到左或从左到右，然后逐位进行计算。
          每一步的计算结果都清晰地显示在竖直的列中，便于观察和核对。
          在宋朝，竖式计算法主要应用于加减乘除四则运算，成为当时数学教育和实际应用中的重要工具。
        </span>
        <img src="../img/math_achieve/竖式计算.png" alt="" class="竖式计算图">
      </div>
    </div>
    <div id="x3">
      <div id="expanding-cards">
        <!--        <input type="radio" name="select" id="active1" checked />-->
        <input type="radio" name="select" id="active1" />
        <label for="active1">
          <p class="x3标题1">高次幂求解</p>
          <img src="../img/math_achieve/增乘开方法.png" alt="" class="增乘开方法">
          <span class="x3文字1">贾宪在高次幂求解中创造性的研究出“增乘开方法”，不仅简化了高次幂的求解过程，还提高了计算的准确。</span>
          <span class="x3文字12">比欧洲数学家霍纳的类似方法早了七百多年，比卡尔丹的《大衍术》中解法，维叶特的三角恒等式解法更精确方便，在四次方程领域取得领先地位。</span>
        </label>

        <input type="radio" name="select" id="active2" />
        <label for="active2">
          <span class="x3文字2"></span>
          <span class="x3文字22"></span>
        </label>

        <input type="radio" name="select" id="active3" />
        <label for="active3">
          <span class="x3文字3"></span>
        </label>

        <input type="radio" name="select" id="active4" />
        <label for="active4">
          <p class="x3标题4">九九乘法表</p>
          <img src="../img/math_achieve/九九乘法表.png" alt="" class="九九乘法表">
          <span class="x3文字4">
            它是数学基础知识的重要组成部分，朗朗上口且易于记忆和应用，承载了深厚的文化内涵。
            反映了中国古代人民的智慧和数学才能，是中国传统文化的瑰宝。
            直至今日，其仍是教育中不可欠缺的一部分。
          </span>
          <span class="x3文字42">
            它的影响不仅仅局限于中国，而是通过丝绸之路等渠道传播到了世界各地，对全球的数学教育产生了积极的影响。
            这种跨文化的传播和影响也是九九乘法表在世界数学史上领先地位的重要体现。
          </span>
        </label>

        <input type="radio" name="select" id="active5" />
        <label for="active5">
          <span class="x3文字5"></span>
        </label>

        <section class="x3标题">中西方数学对比</section>
        <section class="x3总结内容1">
          中国古代数学在算术领域领先世界，展现了深厚的底蕴与精湛的技艺。
          从黄帝时期的<b>数字发明</b>，到商朝的<b>十进位计算法</b>，再到《周髀算经》中的<b>负数与分数计算</b>，都彰显了中国古代算术的先进。
          特别是祖冲之，他将圆周率精确推算至小数点后<b>第七位</b>，创下了世界纪录。
        </section>
        <section class="x3总结内容2">
          此外，<b>九九乘法表</b>，以简洁实用的特点广泛传播，对全球数学教育产生了深远影响。
          它们不仅是<b>中国古代文明的瑰宝</b>，更在世界数学史上留下了浓墨重彩的一笔，证明了中国古代数学在算术领域的全球领先地位。
          不仅体现在具体的数学成果，更在于对数学发展的深远推动和影响。
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import '../css/base.css';
import '../css/header.css';
import 'animate.css';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {nextTick, onMounted, ref, watchEffect} from 'vue';
import {animateElement} from '@/js/detect_anime1.js';
import {handleScrollxxx} from '@/js/scrollHandler.js'; // 导入 handleScroll 函数
// import { initScrollAnimation, destroyScrollAnimation } from '@/js/scroll-animation.js';

//先进行注册。
gsap.registerPlugin(ScrollTrigger)

const horizontalScrollDistance = ref(0);
const verticalScrollDistance = ref(0);
const bgRef = ref(null)
const containerRef = ref(null)
const blank1Ref = ref(null)

// 在setup函数中定义一些响应式变量来保存动画的状态:
const horizontalTitleAnimated = ref(false)
const horizontalDescAnimated = ref(false)
const horizontalImgAnimated = ref(false)
const horizontalDescAnimated4 = ref(false)
const horizontalTitleAnimated2 = ref(false)
const horizontalDescAnimated2 = ref(false)
const horizontalImgAnimated2 = ref(false)
const horizontalTitleAnimated3 = ref(false)
const horizontalDescAnimated3 = ref(false)
const horizontalImgAnimated3 = ref(false)
let flag_symbol = ref(false)

onMounted(() => {
  nextTick(() => {

    gsap.set('.横向1标题', { opacity: 0 })
    gsap.set('.横向八卦介绍', { opacity: 0 })
    gsap.set('.八卦图', { opacity: 0 })
    gsap.set('.补充八卦图', { opacity: 0 })
    gsap.set('.横向2标题', { opacity: 0 }) // 新增
    gsap.set('.横向正负加减介绍', { opacity: 0 }) // 新增
    gsap.set('.算盘图', { opacity: 0 }) // 新增
    gsap.set('.横向3标题', { opacity: 0 }) // 新增
    gsap.set('.横向竖式计算介绍', { opacity: 0 }) // 新增
    gsap.set('.竖式计算图', { opacity: 0 }) // 新增
    gsap.set('.加', { opacity: 0 }) // 新增
    gsap.set('.减', { opacity: 0 }) // 新增
    gsap.set('.乘', { opacity: 0 }) // 新增
    gsap.set('.除', { opacity: 0 }) // 新增
    // gsap.set('.三角尺', {opacity: 0})

    const bgElement = bgRef.value
    const container = containerRef.value

    handleScrollxxx(blank1Ref, containerRef, bgRef); // 调用 handleScroll 函数

    bgElement.addEventListener('scroll', () => {
      verticalScrollDistance.value = bgElement.scrollTop;
    })
    container.addEventListener('scroll', () => {
      horizontalScrollDistance.value = container.scrollLeft;
    })

    const animationTimeline = gsap.timeline({ paused: true });

    watchEffect(() => {
      const distance = horizontalScrollDistance.value;
      const distancey = verticalScrollDistance.value;

      // console.log("水平滑动：" + distance)

      // 第一页动画
      if (distance >= 5 && !horizontalTitleAnimated.value) {
        gsap.fromTo('.横向1标题', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 2, ease: 'power2.out' })
        horizontalTitleAnimated.value = true
      }

      if (distance >= 40 && !horizontalDescAnimated.value) {
        gsap.fromTo('.横向八卦介绍', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' })
        horizontalDescAnimated.value = true
      }

      if (distance >= 200 && !horizontalImgAnimated.value) {
        gsap.fromTo('.八卦图', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' })
        horizontalImgAnimated.value = true
      }

      if (distance >= 600 && !horizontalDescAnimated4.value) {
        gsap.fromTo('.补充八卦图', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' })
        horizontalDescAnimated4.value = true
      }

      // 第二页动画
      if (distance >= 1190 && !horizontalTitleAnimated2.value) { // 根据实际滚动距离调整
        gsap.fromTo('.横向2标题', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 2, ease: 'power2.out' })
        horizontalTitleAnimated2.value = true
      }

      if (distance >= 1190 && !horizontalDescAnimated2.value) { // 根据实际滚动距离调整
        gsap.fromTo('.横向正负加减介绍', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' })
        horizontalDescAnimated2.value = true
      }

      if (distance >= 1550 && !horizontalImgAnimated2.value) { // 根据实际滚动距离调整
        gsap.fromTo('.算盘图', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' })
        horizontalImgAnimated2.value = true
      }

      // 第三页动画
      if (distance >= 2200 && !horizontalTitleAnimated3.value) { // 根据实际滚动距离调整
        gsap.fromTo('.横向3标题', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 2, ease: 'power2.out' })
        horizontalTitleAnimated3.value = true
      }

      if (distance >= 2200 && !horizontalDescAnimated3.value) { // 根据实际滚动距离调整
        gsap.fromTo('.横向竖式计算介绍', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' })
        horizontalDescAnimated3.value = true
      }
      if (distance >= 2600 && !horizontalImgAnimated3.value) { // 根据实际滚动距离调整
        gsap.fromTo('.竖式计算图', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' })
        horizontalImgAnimated3.value = true
      }
      // 加减乘除动画
      if (distance >= 1500 && !flag_symbol.value) {
        flag_symbol.value = true;
        animationTimeline
            .fromTo('.加', { opacity: 0, rotation: 0, x: -50 }, { opacity: 1, rotation: 360, x: 0, duration: 2, ease: 'power2.out' })
            .fromTo('.乘', { opacity: 0, rotation: 0, x: -50 }, { opacity: 1, rotation: -360, x: 0, duration: 2, ease: 'power2.out' }, '<')
            .fromTo('.减', { opacity: 0, rotation: 0, x: 50 }, { opacity: 1, rotation: 360, x: 0, duration: 2, ease: 'power2.out' }, '<')
            .fromTo('.除', { opacity: 0, rotation: 0, x: 50 }, { opacity: 1, rotation: -360, x: 0, duration: 2, ease: 'power2.out' }, '<')
            .to('.加', { rotation: '+=360', repeat: -1, duration: 2, ease: 'power2.inOut' }, '>-1')
            .to('.乘', { rotation: '-=360', repeat: -1, duration: 2, ease: 'power2.inOut' }, '<')
            .to('.减', { rotation: '+=360', repeat: -1, duration: 2, ease: 'power2.inOut' }, '<')
            .to('.除', { rotation: '-=360', repeat: -1, duration: 2, ease: 'power2.inOut' }, '<');

        animationTimeline.play();
      }

      // // 三角尺动画
      // if (distancey >= 1800) {
      //   const triangleRuler = document.querySelector('.三角尺');
      //
      //   gsap.set(triangleRuler, { xPercent: -50 }); // 初始位置居中
      //
      //   const triangleRulerAnimation = gsap.to(triangleRuler, {
      //     xPercent: 50, // 移动到右侧 50%
      //     rotate: 360, // 旋转 360 度
      //     scale: 1.2, // 缩放至 1.2 倍大小
      //     ease: 'none', // 动画不使用缓动函数,保持匀速
      //     scrollTrigger: {
      //       trigger: '.三角尺', // 触发元素
      //       start: 'top bottom', // 触发条件:元素底部与视口顶部对齐时开始动画
      //       end: '+=3000', // 结束条件:滚动 3000 像素后结束动画
      //       scrub: true, // 平滑滚动,动画随着滚动进度更新
      //       pin: true, // 固定元素在视口中
      //     },
      //   });
      //
      //   // 控制动画的方向和速度
      //   triangleRulerAnimation.timeScale(2); // 加速动画 2 倍
      //   triangleRulerAnimation.reversed(true); // 反向播放动画
      // }
    })
  });
});

</script>
<style scoped>
.scroll-info {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
}

@font-face {
  font-family: '方正楷体';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(../font/主标题备注-二级-三号-方正楷体_GBK.TTF) format('truetype');
}
/*
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
 */

.基石 {
  /*background: #f9f9f9;*/
  position: relative;
  height: 100vh;
  min-width: 100vw;
  overflow: auto;
  display: block;
  flex-direction: column;
}

#x1 {
  position: relative;
  background: url("../img/math_img/背景图片4.png") no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

.横向container {
  /*
  display:flex;
  overflow-x:scroll;
  */
  display: flex;
  overflow-x: scroll;
}

.横向container::-webkit-scrollbar {
  display: none;
}

.横向page {
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
}

.横向page:nth-child(1) {
  background: url('../img/math_achieve/水平滚动背景1.png');
}

.横向page:nth-child(2) {
  background: url('../img/math_achieve/水平滚动背景2.png');
}

.横向page:nth-child(3) {
  background: url('../img/math_achieve/水平滚动背景3.png');
}

/* 隐藏水平和垂直滚动条 */
::-webkit-scrollbar {
  display: none;
}

#x3 {
  /*
  position: relative;
  width: 100%;
  height: 100vh;
   */
  position: relative;
  background: url("../img/math_achieve/竖直滚动背景2.png");
  display: flex;
  height: 100vh;
  /*
  align-items: center;
  这个属性设置在 Flexbox 父容器上。
  它定义了子元素在交叉轴上的对齐方式。交叉轴默认是垂直方向。
  center 值表示子元素将在交叉轴上垂直居中对齐。
  */
  align-items: center;
  /*
  justify-content: center;
  这个属性也设置在 Flexbox 父容器上。
  它定义了子元素在主轴上的对齐方式。主轴默认是水平方向。
  center 值表示子元素将在主轴上水平居中对齐。
   */
  justify-content: flex-start;
}

.图数理之韵 {
  position: absolute;
  left: 20%;
  top: 13%;
  transform: translate(-50%, -50%);
}

.图算术 {
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#blank1 {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: url("../img/math_achieve/竖直滚动背景1.png") no-repeat;
  background-size: cover;
}

#总体跳转 {
  position: relative;
  display: flex;

  background: url("../img/math_achieve/数学背景6.png") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

/*总体跳转及其下属单位：*/
.跳转标题 {
  display: none;
  position: absolute;
  top: 5%;
  left: 35%;
  font-size: 5em;
  font-weight: bold;
  font-family: "方正仿宋", cursive;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}

.blank span {
  position: relative;
  font-family: '方正楷体', cursive;
  font-size: 2em;
  font-weight: bold;
  left: 5%;
  top: 3%;
  display: inline-block; /* 将 span 变成盒子 */
  line-height: 1.5; /* 增加行间距 */
  text-indent: 2em; /* 首段空两个字 */
}

/*更高优先级*/
.span0.span0 {
  left: 30px;
  font-size: 5em;
  width: 800px;
  height: 70px;
}

.span1 {
  width: 800px;
  max-height: 100px;
}

.span2 {
  width: 800px;
  max-height: 100px;
}

.span3 {
  width: 800px;
  max-height: 100px;
}

.span4 {
  width: 800px;
  max-height: 100px;
}

.span5 {
  width: 800px;
  max-height: 100px;
}

.blank_img1 {
  position: absolute;
  left: 850px;
  top: 30%;
}

.横向1标题 {
  /*display: none;*/
  position: relative;
  left: 150px;
  top: 150px;
  max-width: 250px;
  min-height: 40px;
  /*display: block;*/
  font-family: '方正楷体', cursive;
  font-size: 3em;
  font-weight: bold;
}

.横向八卦介绍 {
  /*display: none;*/
  position: relative;
  left: 150px;
  top: 170px;
  max-width: 700px;
  min-height: 360px;
  display: block;
  font-family: '方正楷体', cursive;
  font-size: 2em;
  /*font-weight: bold;*/
}

.八卦图 {
  display: block;
  position: relative;
  left: 880px;
  top: -480px;
}

.补充八卦图{
  position: relative;
  left: 1380px;
  top: -180px;
  width:350px;
  height:300px;
  display: block;
  font-family: '方正楷体', cursive;
  font-size: 2em;
}

.三角尺 {
  display: block;
  position: relative;
  left: 50px;
  top: -430px;
}

.横向2标题 {
  position: relative;
  left: 350px;
  top: 150px;
  max-width: 250px;
  min-height: 40px;
  display: block;
  font-family: '方正楷体', cursive;
  font-size: 3em;
  font-weight: bold;
}

.横向正负加减介绍 {
  position: relative;
  left: 350px;
  top: 170px;
  max-width: 700px;
  min-height: 360px;
  display: block;
  font-family: '方正楷体', cursive;
  font-size: 2em;
  /*font-weight: bold;*/
}

.算盘图 {
  position: relative;
  left: 1080px;
  top: -180px;
}

.横向3标题 {
  position: relative;
  left: 150px;
  top: 150px;
  max-width: 250px;
  min-height: 40px;
  display: block;
  font-family: '方正楷体', cursive;
  font-size: 3em;
  font-weight: bold;
}

.横向竖式计算介绍 {
  position: relative;
  left: 150px;
  top: 170px;
  max-width: 700px;
  min-height: 360px;
  display: block;
  font-family: '方正楷体', cursive;
  font-size: 2em;
  /*font-weight: bold;*/
}
.竖式计算图{
  position: relative;
  left: 880px;
  top: -280px;
}
.加 {
  position: relative;
  left: 0;
  top: -100px;
}

.减 {
  position: relative;
  left: 0;
  top: -580px;
}

.乘 {
  position: relative;
  left: 0;
  top: -150px;
}

.除 {
  position: relative;
  left: 0;
  top: -520px;
}
#expanding-cards {
  display: flex;
  width: 70vw;
}

label {
  position: relative;
  height: 85vh;
  flex: 0.5;
  left:40px;
  margin: 10px;
  border-radius: 60px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.7s ease-in;
}

input[type="radio"] {
  display: none;
}

input:checked+label {
  flex: 4;
}

label:nth-of-type(1) {
  background-image: url("../img/math_img/背景图片3.png");
}

label:nth-of-type(2) {
  background-image: url("../img/math_img/背景图片4.png");
}

label:nth-of-type(3) {
  background-image: url("../img/math_img/背景图片3.png");
}

label:nth-of-type(4) {
  /*color: orange;*/
  background-image: url("../img/math_img/背景图片4.png");
}

label:nth-of-type(5) {
  background-image: url("../img/math_img/背景图片3.png");
}
#expanding-cards span{
  position: absolute;
  font-family: '方正楷体', cursive;
  font-size: 1.8em;
  /*border: 1px solid black;*/
  border: 1px solid black;
  border-radius: 10%;
  /*display: block;*/

  z-index:999;
}

#expanding-cards p{
  position: absolute;
  font-family: '方正楷体', cursive;
  font-size: 3em;
  /*display: block;*/
  z-index:999;
  left:30%;
  top:2%;
  display:none;
}
.增乘开方法{
  position: absolute;
  border:1px solid red;
  top:165px;
  left:20%;
  display:none;
}
.九九乘法表{
  position: absolute;
  border:1px solid red;
  top:260px;
  left:20%;
  display:none;
}
.x3文字1{
  /*background: rgba(78, 41, 6, 0.18);*/
  top:70px;
  left:40px;
  height:150px;
  width:500px;
  color:black;
  display:none;
}
.x3文字12{
  top:480px;
  left:40px;
  height:150px;
  width:500px;
  color:black;
  display:none;
}
.x3文字2{
  top:200px;
  left:20px;
  height:200px;
  width:200px;
  color:black;
  display:none;
}
.x3文字3{
  top:200px;
  left:20px;
  height:200px;
  width:200px;
  color:black;
  display:none;
}
.x3文字4{
  top:70px;
  left:40px;
  height:150px;
  width:500px;
  color:black;
  display:none;
}
.x3文字42{
  top:480px;
  left:40px;
  height:150px;
  width:500px;
  color:black;
  display:none;
}
.x3文字5{
  top:200px;
  left:20px;
  height:500px;
  width:300px;
  color:black;
  display:none;
}
.x3标题{
  position: absolute;
  font-family: '方正楷体', cursive;
  font-size: 3em;
  display: block;
  z-index:999;
  left:75%;
  top:8%;
}
.x3总结内容1{
  position: absolute;
  font-family: '方正楷体', cursive;
  font-size: 1.6em;
  /*
  border: 1px solid black;
  border-radius: 10%;
  */
  z-index:999;
  top:120px;
  left:1030px;
  height:370px;
  width:360px;
  color:black;
  text-indent: 2em; /* 段首空两格 */
  line-height: 1.3; /* 字体间距设置为 1.2 */
  margin-left: 10px; /* 左边距为 10px */
  margin-right: 10px; /* 右边距为 10px */
  /*writing-mode: vertical-rl;*/ /* 设置文字垂直从右向左排列 */
}
.x3总结内容2{
  position: absolute;
  font-family: '方正楷体', cursive;
  font-size: 1.6em;
  /*
  border: 1px solid black;
  border-radius: 10%;
  */
  z-index:999;
  top:450px;
  left:1030px;
  height:370px;
  width:360px;
  color:black;
  text-indent: 2em; /* 段首空两格 */
  line-height: 1.3; /* 字体间距设置为 1.2 */
  margin-left: 10px; /* 左边距为 10px */
  margin-right: 10px; /* 右边距为 10px */
  /*writing-mode: vertical-rl;*/ /* 设置文字垂直从右向左排列 */
}

.nav_links {
  list-style: none;
  padding: 10px;
}
.nav_links li {
  display: inline-block;
  padding: 0px 40px;
  font-family: "主标题备注-二级-三号", sans-serif;
  font-size: 30px;
}

.logo {
  cursor: pointer;
  order: 4;
  margin-left: auto;
  margin-right: 5%;
  width: 120px;
  height: 40px;
}
</style>