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
        this.closeMask = this.closeMask.bind(this);
        this.showMask = this.showMask.bind(this)
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.refs.mask.style.display = "none"
        document.body.appendChild(this.refs.mask)
    }
    closeMask(){
        this.refs.mask.style.display = "none"
    }

    showMask(){
        this.refs.mask.style.display = "block"
    }
    render() {
       return(
           <div ref='mask' className="b-maskDiv"></div>
       )
    }
}