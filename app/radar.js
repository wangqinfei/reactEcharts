/**
 * Created by fei on 2017/4/4.
 */
import React, { Component } from 'react';

//导入echarts
var echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/radar') //图表类型
require('echarts/lib/component/title') //标题插件

export class PieReact extends React.Component {

    constructor(props) {
        super(props);
        this.setPieOption = this.setPieOption.bind(this)
    }

    componentDidMount() {
        //外部传入的data数据
        console.log(this.props.data);
         let myChart = echarts.init(this.refs.pieReact); //初始化echarts

         //我们要定义一个setPieOption函数将data传入option里面
         let options = this.setPieOption(this.props.data);
         //设置options
         myChart.setOption(options)
    }

    render() {
        return (
            <div className="pie-react">
                <div ref="pieReact" style={{width: "100%", height: "50%"}}></div>
            </div>
        )
    }

    //一个基本的echarts图表配置函数
    setPieOption(data) {
        var option = {
            title : {
                text: '学生考勤快报'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['XXX','yyy']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            polar : [
                {
                    indicator : [
                        {text : '作文', max  : 100},
                        {text : '词汇', max  : 100},
                        {text : '句子', max  : 100},
                        {text : '语段', max  : 100},
                        {text : '文学常识', max  : 100},
                        {text : '文章', max  : 100}
                    ],
                    radius : 130
                }
            ],
            series : [
                {
                    name: '考试成绩数据',
                    type: 'radar',
                    data : [
                        {
                            value : [97, 72, 88, 94, 90, 86],
                            name : 'X同学',
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default'
                                    },
                                    label: {
                                        show: true
                                    }
                                }
                            }
                        },
                        {
                            value : [97, 62, 74, 95, 88, 92],
                            name : '班级情况',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed'
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        };

        return option;

    }
}