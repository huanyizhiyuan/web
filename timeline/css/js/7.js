import * as echarts from "echarts";

var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;

// There should not be negative values in rawData
const rawData = [[100], [820]];
const totalData = [];
for (let i = 0; i < rawData[0].length; ++i) {
  let sum = 0;
  for (let j = 0; j < rawData.length; ++j) {
    sum += rawData[j][i];
  }
  totalData.push(sum);
}
const grid = {
  left: 100,
  right: 100,
  top: 50,
  bottom: 50,
};
const gridWidth = myChart.getWidth() - grid.left - grid.right;
const gridHeight = myChart.getHeight() - grid.top - grid.bottom;
const categoryWidth = gridWidth / rawData[0].length;
const barWidth = categoryWidth * 0.6;
const barPadding = (categoryWidth - barWidth) / 2;
const series = [
  "Direct",
  // 'Mail Ad',
  // 'Affiliate Ad',
  // 'Video Ad',
  "Search Engine",
].map((name, sid) => {
  return {
    name,
    type: "bar",
    stack: "total",
    barWidth: "100%",
    label: {
      show: true,
      formatter: (params) => Math.round(params.value * 1000) / 10 + "%",
    },
    data: rawData[sid].map((d, did) =>
      totalData[did] <= 0 ? 0 : d / totalData[did]
    ),
  };
});
const color = ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de"];
const elements = [];
for (let j = 1, jlen = rawData[0].length; j < jlen; ++j) {
  const leftX = grid.left + categoryWidth * j - barPadding;
  const rightX = leftX + barPadding * 2;
  let leftY = grid.top + gridHeight;
  let rightY = leftY;
  for (let i = 0, len = series.length; i < len; ++i) {
    const points = [];
    const leftBarHeight = (rawData[i][j - 1] / totalData[j - 1]) * gridHeight;
    points.push([leftX, leftY]);
    points.push([leftX, leftY - leftBarHeight]);
    const rightBarHeight = (rawData[i][j] / totalData[j]) * gridHeight;
    points.push([rightX, rightY - rightBarHeight]);
    points.push([rightX, rightY]);
    points.push([leftX, leftY]);
    leftY -= leftBarHeight;
    rightY -= rightBarHeight;
    elements.push({
      type: "polygon",
      shape: {
        points,
      },
      style: {
        fill: color[i],
        opacity: 0.25,
      },
    });
  }
}
option = {
  legend: {
    selectedMode: false,
  },
  grid,
  yAxis: {
    type: "value",
  },
  xAxis: {
    type: "category",
    data: ["Mon"],
  },
  series,
  graphic: {
    elements,
  },
};

option && myChart.setOption(option);
