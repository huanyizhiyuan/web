<style>
.xxx{
  background: url("../img/math_img/背景图片3.png") no-repeat;
  background-color: rgba(255, 255, 255, 0.1);
}
#main {
  position: relative;
  left: 5%;
  top: 16%;
  width: 600px;
  height: 560px;
  border: 0px solid black;
  border-radius: 50px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
#聚类图 {
  position: absolute;
  left: 0px;
  top: 0;
  width: 600px;
  height: 560px;
  border: 0px solid blue;
  border-radius: 50px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}
#聚类图2 {
  position: absolute;
  left: 0px;
  top: 0;
  width: 600px;
  height: 560px;
  border: 0px solid blue;
  border-radius: 50px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
.text {
  top: 500px;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  left: 20px;
  display: inline-block;
  z-index: 999;
  /*background-color: #6be6c1;*/
  /*border: solid blue 1px;*/
  font-family: "方正仿宋", cursive;
  font-weight: 900;

}
.文字介绍内容 {
  position: absolute;
  width: 250px;
  height: 100%;
  /* border: 1px solid black; */
  font-family: "主标题备注-二级-三号", cursive;
  font-weight: 900;
  z-index: 999;
  background-color: antiquewhite;
  border-radius: 50px 0 0 50px;
  writing-mode: vertical-lr;
  /* padding-top: 10px; */
  /* padding-bottom: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-justify: center; */
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}
#雷达图 {
  position: absolute;
  left: 250px;
  width: 350px;
  height: 100%;
  /* border: 1px solid darkviolet; */
  z-index: 999;
  background-color: #d7e6fa;
  border-radius: 0 50px 50px 0;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}
.logo {
  cursor: pointer;
  order: 4;
  margin-left: auto;
  margin-right: 5%;
  width: 120px;
  height: 40px;
}
.timeline-link {
  cursor: pointer;
}
.direction {
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: #e8e5de;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-left: 5%;
  margin-right: 5%; */
  padding-left: 10%;
  padding-right: 5%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  /* background-color: aliceblue; */
  /* border: 2px solid; 边框宽度为1像素，实线，红色 */
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
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
.小片段标题 {
  display: block;
  text-align: center;
  margin-right: 10px; /* 调整标题距文字的距离 */
  /* margin-right: 10px; */
  font-size: 25px;
  font-weight: 900;
  color: #ff6f61; /* 使用一种独特的颜色 */
}
.长段文字介绍 {
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
<template>
  <div class="xxx">
    <header class="home_menu">
      <img src="../img/tbtbtb.png" class="logo" alt="logo" />
      <nav>
        <ul class="nav_links">
          <li class="nav_li">
            <a href="http://localhost:63342/wywywywy/timeline/face.html">成年累月</a>
          </li>
          <li class="nav_li">
            <a href="http://localhost:5173/#/Cluster_diagram">由此及彼</a>
          </li>
          <li class="nav_li">
            <a href="http://localhost:63342/wywywywy/project/index.html">返回首页</a>
          </li>
        </ul>
      </nav>
    </header>
    <!-- 为ECharts准备一个具备大小的Dom -->
    <div id="main">
      <div ref="chart1Container" id="聚类图" v-if="showCluster1"></div>
      <div ref="chart2Container" id="聚类图2" v-if="showCluster2"></div>
      <span @click="toggleCluster1" class="text">形式</span>
      <span @click="toggleCluster2" class="text" style="left: 80px">领域</span>
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
            中国古代数学在<b>形式上</b>展现了令人赞叹的多样性，并在多个<b>领域</b>有着广泛的涉猎。
            在形式上，有通过<b>严谨的算术推导</b>，构建了复杂的数学公式与定理；
            有采用<b>直观的几何图形</b>，通过图形分析来揭示数学规律；
            还有通过<b>表格和图表</b>，系统化地整理和呈现了数学知识。
            这种多样化的表达形式不仅丰富了数学学科，还使得数学知识更易于理解和应用。
            在学科领域上，中国古代数学同样广泛且深入，无论是在<b>算术、代数，还是在天文观测和历法制定</b>中，都达到了举世无双的成就。
            这种多样性与理论性并存的数学体系，充分展示了中国古代数学的卓越成就和深厚底蕴。
          </p>
          <p style="color: rgb(76, 145, 145)">[点击聚类图进行仔细查看。]</p>
        </div>
      </div>
      <div class="header_graph_和弦"></div>
    </div>
    <!--与和谐图类似的图，但是没有交互。-->
    <div style="top: 62%" id="container_graph">
      <!--带有交互性质的文字，实时改变-->
      <div class="文字介绍内容">
        <span class="小片段标题">《书名》</span>
        <span class="长段文字介绍">[书籍内容介绍]</span>
      </div>
      <div id="雷达图"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import * as ecStat from "echarts-stat";
import "../css/base.css";
import "../css/header.css";
import "../css/和弦文本框配置仿照.css";
import clusterData1 from "../data/clusterData1"; // 导入第一种聚类图的数据
import clusterData2 from "../data/clusterData2"; // 导入第二种聚类图的数据
import imageName from "../data/bookname"; // 导入书名
import imageBody from "../data/bookbody"; // 导入书内容
import imagePath from "../data/imagePath.js"; // 导入图片路径。
import radarData from "../data/radarData"; // 导入雷达图的数据
let chart1 = null;
let chart2 = null;
let radarChart = null;
export default {
  name: "App",
  data() {
    return {
      //设置聚类的数量为 6 个。
      // CLUSTER_COUNT: 3,
      //设置输出聚类索引的维度为第三个维度(从0开始计数)。
      // DIENSIION_CLUSTER_INDEX: 3,
      pieces1: [
        { value: 0, label: "经典注释与数学融合", color: 'rgb(236,138,164)' },
        { value: 1, label: "数学理论与方法专著", color: 'rgb(131,203,172)' },
        { value: 2, label: "数学问题与应用", color: 'rgb(248,195,135)' },
        { value: 3, label: "问答式教学与实例演示", color: 'rgb(195,215,223)' },
        { value: 4, label: "图文并茂", color: 'rgb(163,129,186)' },
        // {value: 5, label:'cluster 5', color: '#8378EA'},
        // {value: 6, label:'cluster 6', color: '#96BFFF'},
      ],
      pieces2: [
        { value: 0, label: "解析几何", color: 'rgb(242,200,103)' },
        { value: 1, label: "数形结合", color: 'rgb(48,174,207)' },
        { value: 2, label: "数值计算方法", color: 'rgb(245,176,135)' },
        { value: 3, label: "计算几何", color: 'rgb(163,129,186)' },
        { value: 4, label: "纯图形学", color: 'rgb(131,203,172)' },
        { value: 5, label: "天文空间解析几何", color: 'rgb(236,138,164)' },
        // {value: 6, label:'cluster 6', color: '#96BFFF'},
      ],
      booknameData: imageName,
      bookbodyData: imageBody,
      // 新增数据属性
      showCluster1: true, // 初始显示第一种聚类图
      showCluster2: false, // 初始隐藏第二种聚类图
      clusterData1: clusterData1,
      clusterData2: clusterData2,
      //雷达图系列：
      //定义了一个包含多个二维数据点的数据数组。
      chartData: [],
      //雷达图数据存储。
      radarData: radarData,
      radarOption: null,
    };
  },
  mounted() {
    echarts.registerTransform(ecStat.transform.clustering);

    // 初始化chart1
    const chartContainer = document.getElementById("聚类图");
    console.log("初始化 chart1, 容器为:", chartContainer);
    chart1 = echarts.init(chartContainer);

    this.updateChart1();
    //雷达图数据
    this.renderRadarChart();
    //先行注册一下。
    chart1.on("click", this.handleScatterClick);
  },
  methods: {
    updateChart1() {
      let option = {
        dataset: [
          { source: this.clusterData1 },
          {
            transform: {
              type: "ecStat:clustering",
              config: {
                clusterCount: 5,
                outputType: "single",
                outputClusterIndexDimension: 3,
              },
            },
          },
        ],
        tooltip: { position: "top" },
        visualMap: {
          type: "piecewise",
          // top: "middle",
          top:150,
          min: 0,
          max: 5,
          left: 10,
          splitNumber: 5,
          dimension: 3,
          pieces: this.pieces1,
          inRange: { opacity: 1 },
          outOfRange: { opacity: 0 },
        },
        grid: { left: 120 },
        xAxis: { show: false },
        yAxis: { show: false },
        series: {
          type: "scatter",
          //显示哪几个维度
          encode: { tooltip: [0, 1, 3] },
          symbolSize: 80,
          itemStyle: {
            focus: "series",
            borderColor: "#c2ffe5", // 设置高亮时的边框颜色为红色
            shadowBlur: 20, // 添加阴影效果
          },
          emphasis: {
            itemStyle: {
              focus: "series",
              borderColor: "#c2ffe5", // 设置高亮时的边框颜色为红色
              shadowBlur: 20, // 添加阴影效果
            },
          },
          datasetIndex: 1,
          symbol: function (params) {
            const imageIndex = params[2];
            const imagePaths = imagePath;
            return "image://" + imagePaths[imageIndex];
          },
        },
      };
      chart1.setOption(option);
    },
    updateChart2() {
      //option 对象定义了 ECharts 实例的配置选项:
      let option = {
        //dataset 配置了原始数据源和数据转换过程。
        dataset: [
          { source: this.clusterData2 },
          {
            transform: {
              type: "ecStat:clustering",
              config: {
                clusterCount: 6,
                outputType: "single",
                outputClusterIndexDimension: 3,
              },
            },
          },
        ],
        //tooltip 配置了工具提示的位置。
        tooltip: {
          position: "top",
        },
        //visualMap 配置了视觉映射组件的外观和参数,包括映射的值域、分段值、颜色等。
        visualMap: {
          type: "piecewise",
          top: "middle",
          min: 0,
          max: 6,
          left: 10,
          splitNumber: 6,
          dimension: 3,
          pieces: this.pieces2,
          inRange: { opacity: 1 },
          outOfRange: { opacity: 0 },
        },
        //grid 配置了绘图区域的位置。
        grid: { left: 120 },
        xAxis: { show: false },
        yAxis: { show: false },
        series: {
          type: "scatter",
          encode: { tooltip: [0, 1, 3] },
          symbolSize: 80,
          itemStyle: {
            focus: "series",
            borderColor: "#c2ffe5", // 设置高亮时的边框颜色为红色
            shadowBlur: 20, // 添加阴影效果
          },
          emphasis: {
            itemStyle: {
              focus: "series",
              borderColor: "#c2ffe5", // 设置高亮时的边框颜色为红色
              shadowBlur: 20, // 添加阴影效果
            },
          },
          datasetIndex: 1,
          symbol: function (params) {
            // 根据数据的值返回对应的图片路径，这里假设使用第三维数据的值作为索引
            const imageIndex = params[2];
            const imagePaths = imagePath;
            return "image://" + imagePaths[imageIndex];
          },
        },
      };
      chart2.setOption(option);
    },
    toggleCluster1() {
      this.showCluster1 = true;
      this.showCluster2 = false;

      if (chart1) {
        chart1.dispose();
      }
      // if (chart2) {chart2.dispose();}

      this.$nextTick(() => {
        const chartContainer1 = document.getElementById("聚类图");
        console.log("初始化 chart1, 容器为:", chartContainer1);
        chart1 = echarts.init(chartContainer1);
        this.updateChart1();

        // 注册点击事件处理函数
        chart1.on("click", this.handleScatterClick);
      });
      // this.renderRadarChart();
    },
    toggleCluster2() {
      this.showCluster1 = false;
      this.showCluster2 = true;

      // if (chart1) {chart1.dispose();}
      if (chart2) {
        chart2.dispose();
      }

      this.$nextTick(() => {
        const chartContainer2 = document.getElementById("聚类图2");
        console.log("初始化 chart2, 容器为:", chartContainer2);
        chart2 = echarts.init(chartContainer2);
        this.updateChart2();

        // 注册点击事件处理函数
        chart2.on("click", this.handleScatterClick);
      });
      // this.renderRadarChart();
    },
    renderRadarChart() {
      // 初始化或更新雷达图
      if (radarChart) {
        radarChart.dispose();
      }
      this.$nextTick(() => {
        const chartContainer3 = document.getElementById("雷达图");
        console.log("初始化 雷达图, 容器为:", chartContainer3);
        radarChart = echarts.init(chartContainer3);

        this.updateRadarChart();
      });
    },
    updateRadarChart() {
      console.log("函数中chartData=" + this.chartData);
      this.radarOption = {
        //修改背景。
        // backgroundColor: "#000928",
        title: {
          text: "数学领域分析",
          textAlign: "center",
          top: "2%",
          left: "48%",
          textStyle: {
            color: "#cf5e4e",
            fontSize: 16,
            fontWeight: "600",
            FontFamily: "主标题备注-二级-三号",
          },
        },
        color: ["#3D91F7", "#61BE67"],
        tooltip: {},
        radar: {
          radius: "60%",
          triggerEvent: true,
          axisName: {
            color: "#91d45e",
            fontSize: "16", // 将指标名称字体大小调整为 16
            borderRadius: 3,
            fontWeight: "550",
            padding: [3, 5],
          },
          axisNameGap: "2",
          indicator: [
            { name: "算术", max: 10 },
            { name: "代数", max: 10 },
            { name: "几何", max: 10 },
            { name: "天文数学", max: 10 },
            { name: "组合数学", max: 10 },
            { name: "数学分析", max: 10 },
          ],
          splitArea: {
            areaStyle: {
              color: [
                // "rgba(222,134,85, 0.1)",
                // "rgba(222,134,85, 0.2)",
                // "rgba(222,134,85, 0.4)",
                // "rgba(222,134,85, 0.6)",
                // "rgba(222,134,85, 0.8)",
                // "rgba(222,134,85, 1)",
                "rgba(62,162,170, 0.1)",
                "rgba(62,162,170, 0.2)",
                "rgba(62,162,170, 0.4)",
                "rgba(62,162,170, 0.6)",
                "rgba(62,162,170, 0.8)",
                "rgba(62,162,170, 1)",
              ].reverse(),
            },
          },
          axisLabel: {
            //展示刻度
            show: true,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0)",
            },
          },
          splitLine: {
            lineStyle: {
              width: 2,
              color: [
                // "rgba(224,134,82, 0.1)",
                // "rgba(224,134,82, 0.2)",
                // "rgba(224,134,82, 0.4)",
                // "rgba(224,134,82, 0.6)",
                // "rgba(224,134,82, 0.8)",
                // "rgba(224,134,82, 1)",
                "rgba(64,162,167, 0.1)",
                "rgba(64,162,167, 0.2)",
                "rgba(64,162,167, 0.4)",
                "rgba(64,162,167, 0.6)",
                "rgba(64,162,167, 0.8)",
                "rgba(64,162,167, 1)",
              ].reverse(),
            },
          },
        },
        //点击后出现的多边形
        series: [
          {
            name: "一级权重分析",
            type: "radar",
            areaStyle: {
              color: "rgba(204,212,94, 0.3)",
            },
            symbolSize: 0,
            lineStyle: {
              color: "rgba(204,212,94, 1)",
              width: 1,
            },
            data: [this.chartData],
          },
        ],
      };
      radarChart.setOption(this.radarOption);
    },
    handleScatterClick(params) {
      console.log("我点击了数据。");
      // 从点击的散点数据中获取图书索引
      const bookIndex = params.data[2];

      // 根据索引获取图书名称，书籍内容介绍
      const bookName = this.booknameData[bookIndex];
      const bookBody = this.bookbodyData[bookIndex];

      // 获取需要更新的 DOM 元素
      const introContainer = document.querySelector(".文字介绍内容");
      // 更新标题和内容
      introContainer.innerHTML = `
      <span class="小片段标题">${bookName}</span>
      <span class="长段文字介绍">${bookBody}</span>


      `;

      // 根据图书名称获取雷达图数据，用索引获取，书名另有用处，然后更新雷达图数据
      this.chartData = this.radarData[bookIndex];

      // 重新渲染雷达图
      this.renderRadarChart();
    },
  },
};
</script>
