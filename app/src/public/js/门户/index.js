/**
 * Created by liaohui1080 on 16/6/15.
 */

var pageHome = (function () {




    //首页面
    var index = function () {
        console.log('index')

        var echarts1 = function () {

            console.log('echarts1')
            var myChart2 = echarts.init(document.getElementById('echarts1'));
            // 过渡---------------------
            myChart2.showLoading({
                text: '正在努力的读取数据中...',    //loading话术
            });
            myChart2.hideLoading();
            // myChart.grid(20,20,0,0)
            window.onresize = myChart2.resize;


            var option = {
                color:["#017ed8",'#9dc200'],
                tooltip : {
                    trigger: 'axis'
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['贵阳','六盘水','铜仁','黔西南']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'运行时间',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'标准执行',
                        type:'bar',
                        data:[2.6, 5.9, 9.0, 26.4],
                        markPoint : {
                            data : [
                                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            };

            myChart2.setOption(option);
        };


        var echarts2 = function () {

            console.log('echarts2')
            var myChart = echarts.init(document.getElementById('echarts2'));
            // 过渡---------------------
            myChart.showLoading({
                text: '正在努力的读取数据中...',    //loading话术
            });
            myChart.hideLoading();
            // myChart.grid(20,20,0,0)
            window.onresize = myChart.resize;


            var option = {
                color:["#aa37ba",'#ff9b41',"#d5355b","#3553d5"],
                tooltip: {
                    //trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },

                legend: {
                    //data: ['展现','点击','访问']
                    data: ['一般隐患','挂牌督办','重大隐患']
                },
                series: [
                    {
                        name: '预期',
                        type: 'funnel',
                        left: '10%',
                        width: '80%',
                        label: {
                            normal: {
                                formatter: '预期'
                            },
                            emphasis: {
                                position:'inside',
                                formatter: '{b}预期: {c}%'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.7
                            }
                        },
                        data: [
                            {value: 60, name: '一般隐患'},
                            {value: 40, name: '挂牌督办'},
                            {value: 20, name: '重大隐患'}
                        ]
                    },
                    {
                        name: '实际',
                        type: 'funnel',
                        left: '10%',
                        width: '80%',
                        maxSize: '80%',
                        label: {
                            normal: {
                                position: 'inside',
                                formatter: '{c}%',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            emphasis: {
                                position:'inside',
                                formatter: '{b}实际: {c}%'
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.5,
                                borderColor: '#fff',
                                borderWidth: 2
                            }
                        },
                        data: [
                            {value: 30, name: '一般隐患'},
                            {value: 10, name: '挂牌督办'},
                            {value: 5, name: '重大隐患'}
                        ]
                    }
                ]
            };

            myChart.setOption(option);
        };



        $(window).resize(function(){
            echarts1();
            echarts2();
        });
        echarts2();
        echarts1();

    };

    return {index: index}

})($);


pageHome.index();
