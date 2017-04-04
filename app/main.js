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
                value : [120, 118, 130, 100, 99, 70],
                name : '张三',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                }
            },
            {
                value : [90, 113, 140, 30, 70, 60],
                name : '李四',
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