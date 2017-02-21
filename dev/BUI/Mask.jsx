/**
 * 自定义内容的弹窗插件
 * @author : BANGBANG
 * @date : 2017-2-21
 */
import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { render } from 'react-dom'


export default class Mask extends Component{
    constructor(props) {
        super(props);
        // 设置 initial state
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.refs.mask.style.display = "none"
        document.body.appendChild(this.refs.mask)
    }
    handleClickClose(e){
        console.log("关闭弹窗")
    }

    handleClick(){
       document.querySelector(".b-maskDiv").style.display="block"
    }
    render() {
       return(
           <div ref='mask' className="b-maskDiv"></div>
       )
    }
}