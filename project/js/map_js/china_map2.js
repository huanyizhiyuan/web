import chinaJson from '../../json/china.json'
import mapDriver from './mapDriver.js'
import * as echarts from 'echarts'; //全局引入 ，可按需引入
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';


const Map = forwardRef((props, ref) => {
    const chartRef = useRef()

    // echarts 实例
    let [myChart, setMyChart] = useState(null)
    let myChartRef = useRef()
    //地图配置对象
    let [distributionOptions, setDistributionOptions] = useState('')
    let distributionOptionsRef = useRef()

    let changeOptions = (name = 'china') => {
        // 经纬度数据
        const seriesList = [
            {
                icon: require('../../img/导航.jpg'),
                name: "在线车辆",
                data: [
                    {
                        value: [106.9, 27.7],
                        itemStyle: { color: '#41b75f' }
                    },
                    {
                        value: [115.29, 27.32],
                        itemStyle: { color: '#41b75f' }
                    }
                ]
            },
            {
                icon: require('../../img/导航.jpg'),
                name: "离线车辆",
                data: [
                    {
                        value: [126.04, 27.03],
                        itemStyle: { color: 'rgb(243, 177, 83)' }
                    },
                    {
                        value: [97.82, 20.58],
                        itemStyle: { color: 'rgb(243, 177, 83)' }
                    }
                ]
            },
            {
                icon: require('../../img/导航.jpg'),
                name: "故障车辆",
                data: [
                    {
                        value: [104.82, 26.58],
                        itemStyle: { color: 'rgb(238, 80, 80)' }
                    }
                ]
            }
        ]
        // 图标
        const series = seriesList.map(v => {
            return {
                type: "scatter", //配置显示方式为用户自定义
                coordinateSystem: "geo",
                symbol: "image://" + v.icon,
                symbolSize: 20,
                data: v.data
            }
        })

        // options
        let options = {
            tooltip: {        // 提示框组件
                show: true,     // 显示提示框组件
                trigger: "item",     // 触发类型
                triggerOn: "mousemove",  // 出发条件
                formatter: "名称:{b}<br/>坐标:{c}"
            },
            series,  // 数据
            geo: {
                map: name || 'china',  // 引入地图 省份或者 国家
                roam: false, //开启鼠标缩放和漫
                zoom: 1.23,
                label: {
                    normal: {
                        //静态的时候展示样式
                        show: name === 'world' ? false : true, //是否显示地图省份得名称
                        textStyle: {
                            color: "#000",
                            fontSize: 8,
                            fontFamily: "Arial"
                        }
                    },
                    emphasis: {  // 高亮状态下的样式
                        //动态展示的样式
                        show: name === 'world' ? false : true,
                        color: "#fff"
                    }
                },
                itemStyle: {   // 地图区域的多边形 图形样式。
                    normal: {
                        areaColor: "rgb(231,237,252)",
                        borderWidth: 0.5, //设置外层边框
                        shadowBlur: 1,
                        shadowOffsetY: 1,
                        shadowOffsetX: 0,
                        // shadowColor: "#01012a",
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                    },
                    emphasis: {
                        areaColor: "rgb(194,209,254)",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 5,
                        borderWidth: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            },
            visualMap: {
                // 设置地图范围值显示的颜色
                selectedMode: false, // 不能选择
                hoverLink: false, // 取消鼠标移入效果
                textStyle: {
                    color: '#86909C',
                    fontSize: 12
                },
                orient: 'horizontal',
                itemGap: 10,
                itemWidth: 10,
                itemHeight: 10,
                pieces: [
                    {
                        gt: 0.9,
                        lte: 1,
                        label: '在线车辆',
                        color: '#41B75F'
                    },
                    {
                        gte: 0.8,
                        lte: 0.9,
                        label: '离线车辆',
                        color: '#F3B153'
                    },
                    {
                        lt: 0.8,
                        label: '故障车辆',
                        color: '#EE5050'
                    }
                ],
                top: 0,
                left: 0
            }
        }
        setDistributionOptions(options)
        distributionOptionsRef.current = options
    }

    //显示各省地图
    // const getProvinceMapOpt = async (provinceAlphabet, name) => {
    //     let res = await api.getAxiosData(`province/${provinceAlphabet}`)
    //     if (res) {
    //         echarts.registerMap(name, res)
    //         changeOptions(name)
    //         myChartRef.current.setOption(distributionOptionsRef.current, true)
    //     }
    // }

    //初始化地图
    let initMap = () => {
        echarts.registerMap("china", chinaJson)
        changeOptions("china")
        let chart = echarts.init(chartRef.current)
        setMyChart(chart)
        myChartRef.current = chart
        myChartRef.current.setOption(distributionOptionsRef.current)

        //点击事件
        myChartRef.current.on("click", chinaParam => {
            // 根据点击的省份名称,从 chinaJson 中查找对应的省份数据
            if (provinceData) {
                // 使用省份数据渲染地图
                echarts.registerMap(provinceData.properties.name, {
                    "type": "FeatureCollection",
                    "features": [provinceData]
                });
                changeOptions(provinceData.properties.name);
                myChartRef.current.setOption(distributionOptionsRef.current, true);
            }
        })
        window.onresize = function () {
            myChartRef.current.resize()
        }
    }

    //暴露出去的数据
    useImperativeHandle(ref, () => ({
        initMap, //初始化表格
        changeMapType
    }))

    return <div id='map' ref={chartRef} />
})
export default Map;