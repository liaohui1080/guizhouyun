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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyLpl6jmiLcvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpYW9odWkxMDgwIG9uIDE2LzYvMTUuXG4gKi9cblxudmFyIHBhZ2VIb21lID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cblxuICAgIC8v6aaW6aG16Z2iXG4gICAgdmFyIGluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5kZXgnKVxuXG4gICAgICAgIHZhciBlY2hhcnRzMSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VjaGFydHMxJylcbiAgICAgICAgICAgIHZhciBteUNoYXJ0MiA9IGVjaGFydHMuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWNoYXJ0czEnKSk7XG4gICAgICAgICAgICAvLyDov4fmuKEtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIG15Q2hhcnQyLnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5q2j5Zyo5Yqq5Yqb55qE6K+75Y+W5pWw5o2u5LitLi4uJywgICAgLy9sb2FkaW5n6K+d5pyvXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG15Q2hhcnQyLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAvLyBteUNoYXJ0LmdyaWQoMjAsMjAsMCwwKVxuICAgICAgICAgICAgd2luZG93Lm9ucmVzaXplID0gbXlDaGFydDIucmVzaXplO1xuXG5cbiAgICAgICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgY29sb3I6W1wiIzAxN2VkOFwiLCcjOWRjMjAwJ10sXG4gICAgICAgICAgICAgICAgdG9vbHRpcCA6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWxjdWxhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB4QXhpcyA6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhIDogWyfotLXpmLMnLCflha3nm5jmsLQnLCfpk5zku4EnLCfpu5Topb/ljZcnXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB5QXhpcyA6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6ICd2YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc2VyaWVzIDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOifov5DooYzml7bpl7QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTonYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6WzIuMCwgNC45LCA3LjAsIDIzLjJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya1BvaW50IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlIDogJ21heCcsIG5hbWU6ICfmnIDlpKflgLwnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGUgOiAnbWluJywgbmFtZTogJ+acgOWwj+WAvCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtMaW5lIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlIDogJ2F2ZXJhZ2UnLCBuYW1lOiAn5bmz5Z2H5YC8J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6J+agh+WHhuaJp+ihjCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOidiYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTpbMi42LCA1LjksIDkuMCwgMjYuNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrUG9pbnQgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWUgOiAn5bm05pyA6auYJywgdmFsdWUgOiAxODIuMiwgeEF4aXM6IDcsIHlBeGlzOiAxODN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZSA6ICflubTmnIDkvY4nLCB2YWx1ZSA6IDIuMywgeEF4aXM6IDExLCB5QXhpczogM31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya0xpbmUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGUgOiAnYXZlcmFnZScsIG5hbWUgOiAn5bmz5Z2H5YC8J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBteUNoYXJ0Mi5zZXRPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHZhciBlY2hhcnRzMiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VjaGFydHMyJylcbiAgICAgICAgICAgIHZhciBteUNoYXJ0ID0gZWNoYXJ0cy5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlY2hhcnRzMicpKTtcbiAgICAgICAgICAgIC8vIOi/h+a4oS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgbXlDaGFydC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGV4dDogJ+ato+WcqOWKquWKm+eahOivu+WPluaVsOaNruS4rS4uLicsICAgIC8vbG9hZGluZ+ivneacr1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBteUNoYXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAvLyBteUNoYXJ0LmdyaWQoMjAsMjAsMCwwKVxuICAgICAgICAgICAgd2luZG93Lm9ucmVzaXplID0gbXlDaGFydC5yZXNpemU7XG5cblxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjpbXCIjYWEzN2JhXCIsJyNmZjliNDEnLFwiI2Q1MzU1YlwiLFwiIzM1NTNkNVwiXSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vdHJpZ2dlcjogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IFwie2F9IDxici8+e2J9IDoge2N9JVwiXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAvL2RhdGE6IFsn5bGV546wJywn54K55Ye7Jywn6K6/6ZeuJ11cbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWyfkuIDoiKzpmpDmgqMnLCfmjILniYznnaPlip4nLCfph43lpKfpmpDmgqMnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfpooTmnJ8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Z1bm5lbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnMTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogJ+mihOacnydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOidpbnNpZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6ICd7Yn3pooTmnJ86IHtjfSUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsTGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC43XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDYwLCBuYW1lOiAn5LiA6Iis6ZqQ5oKjJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiA0MCwgbmFtZTogJ+aMgueJjOedo+WKnid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMjAsIG5hbWU6ICfph43lpKfpmpDmgqMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5a6e6ZmFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmdW5uZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzEwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhTaXplOiAnODAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnaW5zaWRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiAne2N9JScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjonaW5zaWRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiAne2J95a6e6ZmFOiB7Y30lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAzMCwgbmFtZTogJ+S4gOiIrOmakOaCoyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMTAsIG5hbWU6ICfmjILniYznnaPlip4nfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDUsIG5hbWU6ICfph43lpKfpmpDmgqMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbXlDaGFydC5zZXRPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgfTtcblxuXG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgZWNoYXJ0czEoKTtcbiAgICAgICAgICAgIGVjaGFydHMyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlY2hhcnRzMigpO1xuICAgICAgICBlY2hhcnRzMSgpO1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7aW5kZXg6IGluZGV4fVxuXG59KSgkKTtcblxuXG5wYWdlSG9tZS5pbmRleCgpO1xuIl0sImZpbGUiOiLpl6jmiLcvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
