import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import LoadingBox from '../../MTUI/LoadingBox'
import { Tool, merged } from '../../Tool';
import * as userAction from '../../actions/user';
import Mask from '../../BUI/Mask';
import * as htmlResAction from '../../actions/res';
import {nomalTextInput} from '../../Components/form/form';




const getInitDate = ()=>{
    let currData ={};
    let user = Tool.readData('user');
    if(user){
        user = JSON.parse(user);
        currData.username = user.username;
        currData.remember = true;
    }
    return currData;
}


export  class Login extends Component {
    constructor(props) {
        super(props);
        this.closeLoginBox = this.closeLoginBox.bind(this);
        this.login = this.login.bind(this);
    }

    login(formProps){
        let username = formProps.username;
        let password = formProps.password;
        this.props.actions.login(username,$.md5(password));
        if(formProps.remember){
            Tool.saveData('user',JSON.stringify({username:username,password:$.md5(password)}),60*3)
        }
    }

    componentDidMount() {
       this.refs.loginBox.style.display = "none";
    }
    componentDidUpdate(){
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
        const {handleSubmit,loginFail} = this.props;
        let loginFailClass = 'loginFail ';
        if(!loginFail){
            loginFailClass = loginFailClass+"none"
        }
        return (
            <div ref="loginBox"  className="login-box">
                <Mask ref="mask"/>
                <div className="maskCommonTop">
                    <label className="loginTitle">登入</label>
                    <a onClick={this.closeLoginBox}></a>
                </div>
                <hr className="loginLine"/>
                <form onSubmit={handleSubmit(this.login)}>
                    <div className="content">
                        <Field  name="username" type="text" component={nomalTextInput} label="用户名"/>
                        <Field  name="password" type="password" component={nomalTextInput} label="密码"/>
                        <div className="remember">
                            记住我: <Field  name="remember" type="checkbox" component="input" />
                        </div>
                        <div className={loginFailClass}>用户名密码错误</div>
                        <button  className="login-Btn" type="submit" >确&nbsp;&nbsp;&nbsp;&nbsp;定</button>
                    </div>
                </form>
            </div>
        );
    }

}


function validate(values) {
    const errors = {};
    if (!values.username) {
        errors.username = '请输入用户名'
        return errors;
    }
    if (values.username.length>15) {
        errors.username = '用户名不能超过十五位'
        return errors;
    }
    if (!values.password) {
        errors.password = '请输入密码'
        return errors;
    }
    if (values.password.length>15) {
        errors.password = '密码不能超过十五位';
        return errors;
    }

}



export default  connect((state)=>{
    return {
        isShowLogin:state.user.isShowLogin,
        loginFail:state.user.loginFail,
        path: state.routing.locationBeforeTransitions.pathname,
    }
}, (dispatch)=>{
    const allAction =Object.assign({},htmlResAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'loginForm',
    initialValues:getInitDate(),
    validate
})(Login))

