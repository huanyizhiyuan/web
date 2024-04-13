var chartDom = document.getElementById("333");
var myChart = echarts.init(chartDom);

var option;

option = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      min: 0, // 最小值
      max: 35, // 最大值
      progress: {
        show: true,
      },
      detail: {
        valueAnimation: true,
        formatter: "{value}",
      },
      data: [
        {
          value: 25,
          name: "著作典籍数",
          title: {
            offsetCenter: [0, "85%"],
          },
        },
      ],
    },
  ],
};

option && myChart.setOption(option);
