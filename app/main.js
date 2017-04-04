/**
 * Created by fei on 2017/4/4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import  { PieReact }  from './radar'

//data的格式
var Home = React.createClass({
    render () {
        var data = [
            {
                value : [97, 72, 88, 94, 90, 86],
                name : '同学',
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
                name : '班级',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                }
            }
        ];
        return (
            <PieReact
                data={data}
            />
        )
    }
});

ReactDOM.render(<Home/>,document.getElementById('root'));