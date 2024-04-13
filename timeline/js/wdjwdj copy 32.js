var chartDom = document.getElementById("332");
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
          name: "THE SUM OF OUR RESEARCH",
          title: {
            offsetCenter: [0, "85%"],
          },
        },
      ],
    },
  ],
};

option && myChart.setOption(option);
