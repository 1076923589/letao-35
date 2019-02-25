
// 柱状图
var myChart = echarts.init(document.querySelector('.common_left'));
// console.log(myChart);


// 指定图表的配置项和数据
var option = {
    title: {
        text: '2019-前端帅哥人数'
    },
    tooltip: {},
    legend: {
        data:['人数', '销量']
    },
    xAxis: {
        data: ["小帅","小小帅","小中帅","中帅","中帅帅","老帅了"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 40],   
    },
    {
        name: '人数',
        type: 'bar',
        data: [12, 32, 26, 33, 11, 20],   
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);



// 饼状图
var myChart = echarts.init(document.querySelector('.common_right'));
// console.log(myChart);


// 指定图表的配置项和数据
option = {
    title : {
        text: '傻子集中地',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['耐克','阿迪','海澜之家','特步','乔丹']
    },
    series : [
        {
            name: '销量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'耐克'},
                {value:310, name:'阿迪'},
                {value:234, name:'海澜之家'},
                {value:135, name:'特步'},
                {value:1548, name:'乔丹'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);