// 监听全局变量的变化
var intervalId = setInterval(function () {
  if (clickedNode !== null) {
    updateData(clickedNode);
    clickedNode = null; // 重置全局变量
    myChart.setOption(option); // 更新环形图
  }
}, 100);

var data = [
  { name: "作品相似度", value: 54 },
  { name: "学术传承度", value: 44 },
  { name: "时代关联度", value: 50 },
];

var colors = [
  ["#086d56", "#a6e2cf"],
  ["#ff8c37", "#ffdcc3"],
  ["#ffc257", "#ffedcc"],
];

function generateOption(data) {
  var titleArr = [],
      seriesArr = [];

  data.forEach(function (item, index) {
    titleArr.push({
      text: item.name,
      left: index * 35 + 15 + "%",
      top: "75%",
      textAlign: "center",
      textStyle: {
        fontWeight: "normal",
        fontSize: "16",
        color: colors[index][0],
        textAlign: "center",
      },
    });

    seriesArr.push({
      name: item.name,
      type: "pie",
      clockWise: false,
      radius: [60, 70],
      itemStyle: {
        normal: {
          color: colors[index][0],
          shadowColor: colors[index][0],
          shadowBlur: 0,
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      hoverAnimation: false,
      center: [index * 35 + 15 + "%", "50%"],
      data: [
        {
          value: item.value,
          label: {
            normal: {
              formatter: function (params) {
                return params.value + "%";
              },
              position: "center",
              show: true,
              textStyle: {
                fontSize: "20",
                fontWeight: "bold",
                color: colors[index][0],
              },
            },
          },
        },
        {
          value: 100 - item.value,
          name: "invisible",
          itemStyle: {
            normal: {
              color: colors[index][1],
            },
            emphasis: {
              color: colors[index][1],
            },
          },
        },
      ],
    });
  });

  return {
    title: titleArr,
    series: seriesArr,
  };
}

var option = generateOption(data);

// 基于准备好的dom,初始化echarts实例
var myChart = echarts.init(document.getElementById("header_graph_和弦"), null, {
  renderer: "canvas", // 使用 canvas 渲染器
  z: 999, // 设置更高的 z-index 值
});

// 定义一个函数来更新数据
function updateData(clickedNode) {
  if (clickedNode) {
    var from = clickedNode.from;
    var to = clickedNode.to;
    // 根据点击的节点信息更新 data 数组
    if (
        (from === "刘徽" && to === "祖冲之") ||
        (from === "祖冲之" && to === "刘徽")
    ) {
      // 更新三个环形图的数据
      data[0].value = 36;
      data[1].value = 88;
      data[2].value = 56;
    }
    if (
        (from === "朱世杰" && to === "贾宪") ||
        (from === "贾宪" && to === "朱世杰")
    ) {
      // 更新三个环形图的数据
      data[0].value = 34;
      data[1].value = 80;
      data[2].value = 55;
    }

    if (
        (from === "李冶" && to === "杨辉") ||
        (from === "杨辉" && to === "李冶")
    ) {
      // 更新三个环形图的数据
      data[0].value = 82;
      data[1].value = 92;
      data[2].value = 100;
    }

    if (
        (from === "赵爽" && to === "刘徽") ||
        (from === "刘徽" && to === "赵爽")
    ) {
      // 更新三个环形图的数据
      data[0].value = 77;
      data[1].value = 45;
      data[2].value = 20;
    }

    if (
        (from === "祖冲之" && to === "祖暅") ||
        (from === "祖暅" && to === "祖冲之")
    ) {
      // 更新三个环形图的数据
      data[0].value = 1;
      data[1].value = 9;
      data[2].value = 100;
    }

    if (
        (from === "贾宪" && to === "杨辉") ||
        (from === "杨辉" && to === "贾宪")
    ) {
      // 更新三个环形图的数据
      data[0].value = 81;
      data[1].value = 33;
      data[2].value = 56;
    }

    if (
        (from === "张丘建" && to === "刘徽") ||
        (from === "刘徽" && to === "张丘建")
    ) {
      // 更新三个环形图的数据
      data[0].value = 12;
      data[1].value = 34;
      data[2].value = 99;
    }

    if (
        (from === "郭守敬" && to === "王恂") ||
        (from === "王恂" && to === "郭守敬")
    ) {
      // 更新三个环形图的数据
      data[0].value = 99;
      data[1].value = 22;
      data[2].value = 12;
    }

    if (
        (from === "李冶" && to === "朱世杰") ||
        (from === "朱世杰" && to === "李冶")
    ) {
      // 更新三个环形图的数据
      data[0].value = 80;
      data[1].value = 80;
      data[2].value = 80;
    }
    option = generateOption(data);
  }
}

// 设置option
myChart.setOption(option);
