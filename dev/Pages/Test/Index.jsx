import './style.css'
import React from 'react'
import LoadingBox from '../../MTUI/LoadingBox'
import setMinHeight from '../../Mixins/setMinHeight'
import { Tool, merged } from '../../Tool';

const Test = React.createClass({
    mixins:[setMinHeight],
    componentDidMount: function() {
        Tool.post(`/api/v1/reply/ups`, { }, (res) => {
           console.log(res);
        });


    },
    render: function() {
        var html = 'var a=124;'
        return (
            <div className="start" style={{ minHeight: this.state.height+"px"}}>
                <div className="contents">
                    <h1>这是一个测试页面</h1>
                    <p>这是一个测试页面</p>
                    <LoadingBox height="100px"/>
                </div>
            </div>
        );
    }
});
//关于我们
module.exports = Test;