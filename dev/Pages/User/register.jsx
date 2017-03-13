import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import {browserHistory } from 'react-router';

import { Tool, merged } from '../../Tool';
import * as userAction from '../../actions/user';
import * as htmlResAction from '../../actions/htmlRes';

import {registerTextInput} from '../../components/form';




export  class Register extends Component {
    constructor(props) {
        super(props);
        this.registerSubmit = this.registerSubmit.bind(this);
        this.state = {
            time:3,
            isInterval:true

    }
    }

    registerSubmit(formProps){
        var currDate = {};
        for(var curr in formProps){
            currDate[curr] = formProps[curr]
        }
        currDate.password = $.md5(currDate.password)
        this.props.actions.register(currDate);
    }

    componentWillMount() {
    }

    componentDidUpdate(){
        this.props.actions.getHtmlList(0,10);
        if(this.props.registerState==1 && this.state.isInterval){
            var time = 3;
            var toInterval =  setInterval(function(){
                time--;
                this.setState({
                    time:time,
                    isInterval:false
                });
                if(time<=0){
                    clearInterval(toInterval);
                    browserHistory.push("/");
                    this.props.actions.registerFail(0)
                }
            }.bind(this),1000)
        }

    }




    render() {
        const {handleSubmit} = this.props;
        const {time} = this.state;
        if(this.props.registerState==0||this.props.registerState==2){
            return (
                <div  className="register mtop60">
                    <div className="reTitle">填写用户信息</div>
                    <hr/>
                    <form onSubmit={handleSubmit(this.registerSubmit)}>
                        <Field  name="username" label="用户名" component={registerTextInput} type="text"/>
                        <Field name="password" label="密码" component={registerTextInput} type="password"/>
                        <Field name="repassword" label="确认密码" component={registerTextInput} type="password"/>
                        <Field  name="nick" label="昵称" component={registerTextInput} type="text"/>
                        <Field  name="moblie" label="电话号码" component={registerTextInput} type="text"/>
                        <Field name="email" label="邮箱" component={registerTextInput} type="email"/>
                        <div className="row t-align">
                            <button className="regist-Btn" type="submit" >确&nbsp;&nbsp;&nbsp;&nbsp;定</button>
                        </div>
                    </form>
                </div>
            )
        }else{
            return(
                <div className="register mtop60 t-align">
                    <img className="registSuccessImg" src="../img/timg.jpg" />
                    <div className="toOtherPromit">{time}秒后自动跳转</div>
                </div>
            )
        }

    }

}


function validate(values) {
    const errors = {};
    if (!values.username) {
        errors.username = '请输入用户名'
    }else if (values.username.length>15) {
        errors.username = '用户名不能超过十五位'
    }
    if (!values.password) {
        errors.password = '请输入密码'
    }else if (values.password.length>15) {
        errors.password = '密码不能超过十五位';
    }

    if (!values.repassword) {
        errors.repassword = '请输入确认密码'
    }else if (values.repassword!=values.password) {
        errors.repassword = '两次密码不一致';
    }

    return errors;


}



export default  connect((state)=>{
    return {
        path: state.routing.locationBeforeTransitions.pathname,
        registerState:state.user.registerState,
    }
}, (dispatch)=>{
    const allAction =Object.assign({},htmlResAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'registerForm',
    validate
})(Register))

