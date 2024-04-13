<style scoped>
.xxx{
  background: url("../img/math_img/背景图片2.png") no-repeat;
}
.box_map {
  left: 2%;
  top: 100px;
  width: 680px;
  height: 550px;
  position: relative;
  border: solid black 0px;
  background-color: #73b3cdb9;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
@font-face {
  font-family: "方正仿宋";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(../font/三级加粗-正文-三号-方正仿宋_GBK.TTF) format("truetype");
}
@font-face {
  font-family: "一级-三号"; /* 自定义字体的名字 */
  src: url("../font/一级-三号-方正黑体_GBK.TTF") format("truetype"); /* 字体文件的路径和格式 */
}
@font-face {
  font-family: "主标题-二号"; /* 自定义字体的名字 */
  src: url("../font/主标题_二号_方正小标宋_GBK.TTF") format("truetype"); /* 字体文件的路径和格式 */
}
@font-face {
  font-family: "主标题备注-二级-三号"; /* 自定义字体的名字 */
  src: url("../font/主标题备注-二级-三号-方正楷体_GBK.TTF") format("truetype"); /* 字体文件的路径和格式 */
}
.span_map {
  top: 20px;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  left: 20px;
  display: inline-block;
  z-index: 999;
  /*background-color: #6be6c1;*/
  /*border: solid blue 1px;*/
  font-family: "主标题备注-二级-三号", cursive;
  font-weight: 900;
  color: rgb(69, 72, 75);
}
.地图说明 {
  position: absolute;
  font-family: "主标题备注-二级-三号", cursive;
  font-weight: 900;
  z-index: 999;
  top: 500px;
  padding: 5px;
  left: 20px;
  color: rgb(69, 72, 75);
}
.地图说明2{
  position: absolute;
  font-family: "主标题备注-二级-三号", cursive;
  font-size:40px;
  font-weight: 500;
  z-index: 999;
  top: 20px;
  padding: 5px;
  left: 250px;
  color: rgb(69, 72, 75);
}
#container_graph {
  background-image: url("../img/zhuzhuangtu.png");
  background-repeat: no-repeat;
  background-size: contain;
}

</style>

<template>
  <!--我增加的CSS都放在代码最底部，其余的CSS文件你只需要把H5中的移植过来就行，除了base.css中的body换成.xxx  -->

  <!--vue下的大背景-->
  <!--vue没有body，只能自己做一个div了。把body移植过来就行。-->
  <!--
    VUE里面的CSS和原来的CSS基本上是类似的。
    我仅仅在base.css里修改了body成.xxx，这个你看一下就成。
  -->
  <div class="xxx">
    <!--导航栏，移植过来就行-->
    <header class="home_menu">
      <img src="../img/tbtbtb.png" class="logo" alt="logo">
      <nav>
        <ul class="nav_links">
          <li class="nav_li">
            <a href="http://localhost:63342/wywywywy/project/数学家_时间轴.html">前赴后继</a>
          </li>
          <li class="nav_li">
            <a href="http://localhost:63342/wywywywy/project/%E5%92%8C%E5%BC%A6%E5%9B%BE.html">千丝万缕</a>
          </li>
          <li class="nav_li">
            <a href="http://localhost:5173/#/Map">五湖四海</a>
          </li>
          <li class="nav_li">
            <a href="http://localhost:63342/wywywywy/project/index.html">返回首页</a>
          </li>
        </ul>
      </nav>
    </header>

    <!--
    地图：
    1、大div负责点击任意二级地图地区后回退
    2、ref="mapContainer"就负责装地图和文字
    3、文字有三个span：
      a、宏观：一级地图放大到25px字体大小
      b、微观：一级地图缩小到12px字体大小
      c、地图说明：安全保障说明，来自于国内高德开放地图平台，国家版权号码。
    4、地图具体更改颜色代码位置：
      a、132行+173行宏观微观字体大小
      b、290行是鼠标移入后的文本框显示配色。（目前是黑底白色字）
      c、306行是地图背景色，涉及一级地图（国）和二级地图（省），这四兄弟可以查一下是干嘛的。
          areaColor: '#c0a69d',
          borderColor: '#ffffff',
          shadowColor: 'rgba(128,85,64,0)',
          shadowBlur: 20
      d、334行emphasis是一级地图触碰后显示的颜色。
      e、381行是一级地图上散点的显示颜色。
      f、387行是鼠标碰到散点显示的信息。
      g、415行使鼠标碰到散点显示的颜色。
      h、419行开始是特效。
        我的评价是问POE或者ChatGPT吧，太复杂咯。
      i、493行开始是二级地图的配色。
  -->
    <div @click="handleOutsideClick">
      <div ref="mapContainer" class="box_map">
        <div
          ref="map"
          style="width: 700px; height: 550px; border: solid red 0px"
        />
        <span
          :style="{ fontSize: macroFontSize + 'px' }"
          @click="toback"
          class="span_map"
          >宏观</span
        >
        <span
          :style="{ fontSize: microFontSize + 'px' }"
          @click="toback"
          class="span_map"
          style="left: 100px"
          >微观</span
        >
        <span class="地图说明2">
          中原地区
        </span>
        <span class="地图说明"
          >©2022 高德软件 GS京(2022)1061号，数据来源于高德开放平台</span
        >
      </div>
    </div>

    <!--与和谐图类似的内容，我是照搬的。-->
    <div id="container_text">
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <!-- <span class="标题栏">锦绣承绪</span>
        <span class="内容栏">点击数学家之间显示关系内容。</span> -->
        <div class="biaoti">数锦寰宇</div>
        <div class="neirong">
          <p>
            古代数学家主要分布于中原地区，群英荟萃的他们，抱着满腔热血，投身于数学发展之中，
            为的是送国民以福祉，促进社会发展繁荣。
            他们对天文历法、测量规划等实用学科做出了重大贡献,为中国古代工程建筑、生产发展等方面提供了理论支持和实践工具。
            他们追求真理、勇于创新的科学精神,也为中华民族积累了宝贵的文化遗产。
          </p>
          <p style="color: rgb(76, 145, 145)">[点击地图省份进行查看。]</p>
        </div>
        <!-- <div class="header_graph_和弦"></div> -->
      </div>
    </div>
    <!--与和谐图类似的图，但是没有交互。-->
    <div id="container_graph"></div>
  </div>
</template>

<script>
// 引入SVG渲染器插件 扩展块，需要单独引入才能使用。
// import * as echarts from "echarts";
// import 'echarts/lib/component/svgRenderer';
import * as echarts from "echarts";
import { SVGRenderer } from "echarts/renderers";

import "../css/base.css";
import "../css/header.css";
import "../css/和弦文本框配置仿照.css";

import chinaJson from "../json/chinamap/china.json";
import beijing from "../json/chinamap/110000.json";
import tianjin from "../json/chinamap/120000.json";
import hebei from "../json/chinamap/130000.json";
import shanxisheng from "../json/chinamap/140000.json";
import neimenggu from "../json/chinamap/150000.json";
import liaoning from "../json/chinamap/210000.json";
import jilin from "../json/chinamap/220000.json";
import heilongjiang from "../json/chinamap/230000.json";
import shanghai from "../json/chinamap/310000.json";
import jiangsu from "../json/chinamap/320000.json";
import zhejiang from "../json/chinamap/330000.json";
import anhui from "../json/chinamap/340000.json";
import fujian from "../json/chinamap/350000.json";
import jiangxi from "../json/chinamap/360000.json";
import shandong from "../json/chinamap/370000.json";
import henan from "../json/chinamap/410000.json";
import hubei from "../json/chinamap/420000.json";
import hunan from "../json/chinamap/430000.json";
import guangdong from "../json/chinamap/440000.json";
import guangxi from "../json/chinamap/450000.json";
import hainan from "../json/chinamap/460000(1).json";
import chongqing from "../json/chinamap/500000.json";
import sichuan from "../json/chinamap/510000.json";
import guizhou from "../json/chinamap/520000.json";
import yunnan from "../json/chinamap/530000.json";
import xizang from "../json/chinamap/540000.json";
import shanxi from "../json/chinamap/610000.json";
import gansu from "../json/chinamap/620000.json";
import qinghai from "../json/chinamap/630000.json";
import ningxia from "../json/chinamap/640000.json";
import xinjiang from "../json/chinamap/650000.json";
import taiwan from "../json/chinamap/710000.json";
import xianggang from "../json/chinamap/810000.json";
import aomen from "../json/chinamap/820000.json";
export default {
  name: "App",

  data() {
    return {
      map: [],
      links: [],
      myChart: null,
      currentname: "", //当前的地图名字
      currentJson: null, //当前的json
      //宏观与微观：
      macroFontSize: 25, // 宏观文字初始大小
      microFontSize: 12, // 微观文字初始大小
    };
  },

  watch: {
    links: {
      handler(val) {
        const depth = val.length;

        if (!depth) return;
        this.initParamsCity(val[val.length - 1]); // 始终渲染最后一个数据
      },
      immediate: true,
      deep: true,
    },
  },

  methods: {
    handleOutsideClick(event) {
      const mapContainer = this.$refs.mapContainer;
      const target = event.target;
      // 判断点击目标是否在地图容器内
      if (mapContainer.contains(target)) {
        console.log("我点击了地图外。");
        // 点击在外部,执行回溯操作
        this.backToParent();
      }
      if (!mapContainer.contains(target)) {
        console.log("我点击在地图上。");
        // 点击在外部,执行回溯操作
        // this.backToParent();
      }
    },
    backToParent() {
      if (this.links.length === 1) return; // 最后一级,不能继续回溯
      this.links.pop(); // 移除当前层级
    },
    initParamsCity(name) {
      // 根据层级调整文字大小
      if (name === "中国") {
        this.macroFontSize = 25;
        this.microFontSize = 12;
      } else {
        this.macroFontSize = 12;
        this.microFontSize = 25;
      }
      // 有返回记录
      // 要有城市映射
      const map = {
        中国: chinaJson,
        广西壮族自治区: guangxi,
        黑龙江省: heilongjiang,
        江苏省: jiangsu,
        浙江省: zhejiang,
        安徽省: anhui,
        江西省: jiangxi,
        山东省: shandong,
        河南省: henan,
        福建省: fujian,
        广东省: guangdong,
        贵州省: guizhou,
        海南省: hainan,
        湖南省: hunan,
        云南省: yunnan,
        湖北省: hubei,
        重庆市: chongqing,
        陕西省: shanxi,
        辽宁省: liaoning,
        吉林省: jilin,
        内蒙古自治区: neimenggu,
        新疆维吾尔自治区: xinjiang,
        西藏自治区: xizang,
        四川省: sichuan,
        青海省: qinghai,
        甘肃省: gansu,
        宁夏回族自治区: ningxia,
        山西省: shanxisheng,
        河北省: hebei,
        上海市: shanghai,
        北京市: beijing,
        天津市: tianjin,
        台湾省: taiwan,
        香港特别行政区: xianggang,
        澳门特别行政区: aomen,
      };
      const jiangsuData = [
        { name: "祖冲之", value: [118.8062, 31.9208] },
        { name: "赵爽", value: [119.3548, 31.9961] },
        { name: "李锐", value: [120.5954, 31.3043] },
        { name: "赵恒明", value: [119.109414, 33.599164] },
      ];
      const shanghaiData = [{ name: "徐光启", value: [121.5008, 31.093] }];
      const zhejiangData = [
        { name: "杨辉", value: [120.1784, 30.2823] },
        { name: "沈括", value: [120.2991, 30.1889] },
        { name: "吴敬", value: [119.9846, 30.2858] },
        { name: "李善兰", value: [120.7023, 30.7942] },
        { name: "钱仲远", value: [119.647535, 29.098425] },
        { name: "郑明哲", value: [118.840353, 28.983228] },
      ];
      const hebeiData = [
        { name: "祖暅", value: [115.4814, 38.8975] },
        { name: "祖皓", value: [115.3084, 38.9621] },
        { name: "信都芳", value: [116.8366, 38.3153] },
        { name: "甄鸾", value: [114.9877, 38.1915] },
        { name: "李治", value: [114.6508, 37.9078] },
        { name: "张丘建", value: [114.6994, 37.1795] },
        { name: "张遂", value: [114.3488, 37.0414] },
      ];
      const shandongData = [
        { name: "刘徽", value: [117.547182, 36.880193] },
        { name: "刘洪", value: [117.951987, 35.710721] },
        { name: "甘德", value: [117.191364, 36.73804] },
      ];
      const henanData = [
        { name: "张衡", value: [115.191364, 35.89804] },
        { name: "楚衍", value: [114.296657, 34.827013] },
        { name: "贾宪", value: [114.438373, 34.599028] },
        { name: "朱载堉", value: [115.068112, 35.753996] },
      ];
      //山西
      const shanxishengData = [
        { name: "刘益", value: [113.31047, 40.101527] },
        { name: "王文素", value: [112.735055, 38.428714] },
      ];
      //陕西
      const shanxiData = [
        { name: "李淳风", value: [107.026748, 33.081807] },
        { name: "王孝通", value: [108.934808, 34.364125] },
      ];
      const sichuanData = [
        { name: "落下闳", value: [104.404606, 31.132363] },
        { name: "朱世杰", value: [103.852627, 30.086494] },
        { name: "秦九韶", value: [104.071216, 30.664789] },
      ];
      const anhuiData = [
        { name: "程大位", value: [117.223374, 31.835215] },
        { name: "梅文鼎", value: [118.760022, 30.950788] },
        { name: "汪莱", value: [118.41139, 31.358798] },
      ];
      const hunanData = [{ name: "赵阳煜", value: [112.819838, 28.052924] }];
      const chinaCircleData = [
        { name: "江苏省", value: [119.9554, 32.9581, 4] },
        { name: "上海市", value: [121.4779, 31.2361, 1] },
        { name: "浙江省", value: [120.2498, 29.3516, 6] },
        { name: "河北省", value: [115.2273, 38.287, 7] },
        { name: "山东省", value: [117.847204, 36.600177, 3] },
        { name: "河南省", value: [113.505442, 34.190143, 4] },
        { name: "山西省", value: [111.87648, 36.127672, 2] },
        { name: "陕西省", value: [108.574966, 34.067743, 2] },
        { name: "四川省", value: [102.826905, 30.753833, 3] },
        { name: "安徽省", value: [116.967202, 32.503652, 3] },
        { name: "湖南省", value: [112.967016, 28.167116, 1] },
      ];
      const provincesData = {
        chinamap: chinaCircleData,
        江苏省: jiangsuData,
        上海市: shanghaiData,
        浙江省: zhejiangData,
        河北省: hebeiData,
        河南省: henanData,
        山东省: shandongData,
        山西省: shanxishengData,
        陕西省: shanxiData,
        四川省: sichuanData,
        安徽省: anhuiData,
        // '广东省': guangdongData,
        // 其他省份数据...
      };
      //不同级别的地图。
      const mapname = name === "中国" ? "chinamap" : name;

      echarts.registerMap(mapname, {
        geoJSON: map[name],
      });

      // 销毁上一次地图实例
      if (this.myChart) this.myChart.dispose();
      // 设置实例大小
      this.myChart = echarts.init(this.$refs.map, null, {
        width: 700,
        height: 550,
      });

      this.myChart.setOption({
        //所有级别地图的文本框，需要设计师来处理。
        tooltip: {
          trigger: "item",
          formatter: "{b}",
          // backgroundColor: "rgba(50,50,50,0.7)",
          backgroundColor: "#b6e2f0",
          textStyle: {
            // color: "#fff",
            color: "#000,0.8",
            fontSize: 14,
          },
          padding: 5,
          borderRadius: 4,
          position: function (point, params, dom, rect, size) {
            return [point[0] + 10, point[1]];
          },
        },
        geo: [
          {
            map: mapname,
            show: true, //显示效果
            // roam: true, //拖拽效果
            //作用是不让它显示出省份名字，而通过文本框的效果浮现出来。
            label: {
              emphasis: {
                show: false,
                position: "inside", // 标签位置设置为区域内
              },
            },
            // 地图的背景色
            itemStyle: {
              normal: {
                // areaColor: "#c0a69d",
                areaColor: "#86c576",
                borderColor: "#ffffff",
                // shadowColor: '#805540',
                shadowColor: "rgba(128,85,64,0)",
                shadowBlur: 20,
              },
              //触碰时候的背景色。
              emphasis: {
                // areaColor: "#d7d5c9",
                areaColor: "#c58e76",
              },
            },
          },
        ],
        //数据点的效果：
        //具体的数据点：1、一级地图；2、二级地图。
        series: [
          // 处理一级地图(中国地图)数据
          ...(mapname === "chinamap"
            ? [
                {
                  type: "scatter",
                  coordinateSystem: "geo", //显示在图上
                  // data: provincesData[mapname],     //数据点，这个可以加。
                  data: provincesData[mapname].map((item) => {
                    return {
                      name: item.name,
                      value: [item.value[0], item.value[1], item.value[2]],
                    };
                  }),
                  symbolSize: function (value) {
                    if (value[2] > 4) {
                      return Math.pow(value[2], 1.3) * 3;
                    } else if (value[2] > 2) {
                      return Math.pow(value[2], 1.5) * 3;
                    } else if (value[2] === 1) {
                      return Math.pow(value[2], 2) * 10;
                    } else {
                      return Math.pow(value[2], 1.5) * 5;
                    }

                    // return Math.sqrt(value[2]) * 10;
                  },
                  //显示的文本，当然可以不显示文本，到二级地图显示文本。
                  // label: {
                  //   show: false,
                  //   formatter: '{@[2]}',
                  //   fontSize: 16,
                  //   color: '#000',
                  // },
                  itemStyle: {
                    //我也说不出来areaColor和color的差别。
                    //选择透明色：
                    // color: 'rgba(0,0,0,0)',
                    // color: "#ffffff",
                    color: "#f0f0f0",
                    //areaColor: '#4e2b80',  //区域颜色
                    // borderColor: '#ffffff',  //边框颜色
                    // borderWidth: 1
                  },
                  tooltip: {
                    formatter: function (params) {
                      return `${params.name}<br/>人数: ${params.value[2]}`;
                    },
                  },
                  // emphasis: { // 鼠标移入时显示的默认样式
                  //   itemStyle: {
                  //     areaColor: '#4adcf0',
                  //     borderColor: '#404a59',
                  //     borderWidth: 1
                  //   },
                  //   label: { // 文字
                  //     show: false,
                  //     color: '#0D5EFF',
                  //     fontSize: 12,
                  //     fontWeight: 600
                  //   },
                  // },
                  // tooltip: {
                  //   trigger: 'item',
                  //   formatter: '{b}: {c}' // 显示 系列名: 数据值
                  // },
                  zlevel: 10, //层级，层级大的会在层级小的上面
                  emphasis: {
                    itemStyle: {
                      // color: 'rgba(0,0,0,0)',
                      // color: '#f4e925' // 高亮颜色
                      // color: "#e4fd00",
                      color: "#b6e2f0",
                    },
                  },
                },
                // 气泡
              //   {
              //     type: "effectScatter",
              //     coordinateSystem: "geo", //使用地理坐标系
              //     //要有对应的经纬度才显示，先经度再维度
              //     data: provincesData[mapname].map((item) => {
              //       return {
              //         name: item.name, // 显示数据值
              //         value: [item.value[0], item.value[1], item.value[2]], // 添加半径到数据中
              //       };
              //     }),
              //     // showEffectOn: 'emphasis', // 只有在鼠标移入时显示特效
              //     showEffectOn: "render", //绘制完成后显示特效
              //     /*
              // effectType啥都不使用，就是波纹
              // 使用 'scale' 特效类型,它会产生一种放大的动画效果:
              // 使用 'buzz' 特效,它会产生一种震动效果:
              //  */
              //     // effectType: 'buzz', // 使用 'scale' 特效
              //     effectType: "scale", // 启用波纹特效
              //     rippleEffect: {
              //       period: 15,
              //       scale: 2, // 波纹的最大缩放比例
              //       brushType: "stroke",
              //     },
              //     symbolSize: function (value) {
              //       if (value[2] > 4) {
              //         return Math.pow(value[2], 1.3) * 3;
              //       } else if (value[2] > 2) {
              //         return Math.pow(value[2], 1.5) * 3;
              //       } else if (value[2] === 1) {
              //         return Math.pow(value[2], 2) * 10;
              //       } else {
              //         return Math.pow(value[2], 1.5) * 5;
              //       }
              //
              //       // return Math.sqrt(value[2]) * 5; // 根据数据值计算气泡大小,这里将半径放大了2倍
              //     },
              //
              //     hoverAnimation: true,
              //     //下面三个是基础的属性
              //     label: {
              //       //图形上的文本标签
              //       show: true,
              //       formatter: "{@name}",
              //       position: "inside",
              //       fontWeight: 500,
              //       fontSize: 10,
              //     },
              //     //默认样式
              //     itemStyle: {
              //       // color: 'rgba(0,0,0,0)',
              //       // color: 'rgb(246,228,221)',
              //       color: "#ffffff",
              //       // shadowBlur: 10,
              //       // shadowColor: '#333'
              //     },
              //     //鼠标移入时样式
              //     emphasis: {
              //       itemStyle: {
              //         // color: 'rgba(0,0,0,0)',
              //         // color: '#f4e925' // 高亮颜色
              //         color: "#e4fd00",
              //       },
              //     },
              //     zlevel: 1,
              //   },
              ]
            : []),
          // 处理江苏省一级地图数据
          ...(mapname !== "chinamap"
            ? [
                {
                  type: "scatter",
                  coordinateSystem: "geo",
                  data: provincesData[mapname],
                  symbolSize: 30,
                  label: {
                    show: true,
                    formatter: "{@[0], @[1]}",
                    fontSize: 14,
                    color: "#fff",
                  },
                  itemStyle: {
                    // color: 'rgba(0,0,0,0)',
                    color: "#f4e925",
                  },
                  symbol: "image://./src/svg/dot-arrow-down.svg", // 指定自定义图标的路径
                  zlevel: 10,
                },
              ]
            : []),
        ],
      });

      this.myChart.on("click", (params) => {
        if (this.links.length === 2) return;
        this.links.push(params.name);
      });
    },

    toback() {
      if (this.links.length === 1) return; // 最后的中国地图不能再删除了
      this.links.pop();
    },
  },
  mounted() {
    this.links.push("中国");
  },
};
</script>
