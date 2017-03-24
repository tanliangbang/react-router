import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';

export  class right_readerNum extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="right_readerNum">
                <div>
                    阅读排行
                </div>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
                <a>30 + 优质的配色工具、图标合集、设计素材合集</a>
            </div>
        );
    }

}


export default  right_readerNum;








