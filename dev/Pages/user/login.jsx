import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import LoadingBox from '../../MTUI/LoadingBox'
import { Tool, merged } from '../../Tool';
import * as userAction from '../../actions/user';
import Mask from '../../BUI/Mask';
import * as htmlResAction from '../../actions/htmlRes';

export  class Login extends Component {
    constructor(props) {
        super(props);
        this.closeLoginBox = this.closeLoginBox.bind(this);
        this.login = this.login.bind(this);
    }

    login(){
        this.props.actions.login(this.refs.username.value,this.refs.password.value)
    }
    componentDidMount() {
       this.refs.loginBox.style.display = "none"
    }
    componentDidUpdate(){
        console.log(this)
        if(this.props.isShowLogin){
            this.refs.mask.showMask();
            this.refs.loginBox.style.display = "block"
        }else{
            this.refs.mask.closeMask();
            this.refs.loginBox.style.display = "none"
        }
    }
    closeLoginBox(){
        this.props.actions.isShowLogin(false);
    }




    render() {
        return (

            <div ref="loginBox"  className="login-box">
                <Mask ref="mask"/>

                <div className="top">
                    <div>登入</div>
                    <a onClick={this.closeLoginBox}>关闭</a>
                </div>
                <div className="content">
                    <div className="form-control">
                        <label>用户名:</label>
                        <input text="text" ref="username" classNssdseewwefdme="username"  />
                    </div>

                    <div className="form-control">
                        <label>密码:</label>
                        <input text="password" ref="password" className="password"  />
                    </div>
                    <div className="remember">
                        记住密码: <input type="checkbox"/>
                    </div>
                    <button className="login-Btn" onClick={this.login}>确&nbsp;&nbsp;&nbsp;&nbsp;定</button>

                </div>
            </div>

        );
    }

}


export default  connect((state)=>{
    return {
        isShowLogin:state.user.isShowLogin,
        path: state.routing.locationBeforeTransitions.pathname
    }
}, (dispatch)=>{
    const allAction =Object.assign({},htmlResAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(Login)

