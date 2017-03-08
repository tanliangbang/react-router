import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm,Field} from 'redux-form';
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

    login(formProps){
        let username = formProps.username;
        let password = formProps.password;
        this.props.actions.login(username,$.md5(password));
        if(this.refs.remember.checked){
            Tool.saveData('user',JSON.stringify({username:username,password:$.md5(password)}),60*3)
        }
    }

    componentDidMount() {

        var user = Tool.readData('user');
        if(user){
            user = JSON.parse(user);
            this.refs.remember.checked = true;
            this.refs.username.value = user.username;
        }

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
        const {handleSubmit} = this.props;
        const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
            <div >
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type}/>
                    {touched && ((error && <span>{error}</span>))}
                </div>
            </div>
        )
        return (
            <div ref="loginBox"  className="login-box">
                <Mask ref="mask"/>
                <div className="top">
                    <div>登入</div>
                    <a onClick={this.closeLoginBox}>关闭</a>
                </div>
                <form onSubmit={handleSubmit(this.login)}>
                    <div className="content">
                        <Field  name="username" type="text" component={renderField} label="用户名"/>
                        <Field  name="password" type="password" component={renderField} label="密码"/>
                        <div className="remember">
                            记住密码: <input ref="remember"  type="checkbox"/>
                        </div>
                        <button  className="login-Btn" type="submit" >确&nbsp;&nbsp;&nbsp;&nbsp;定</button>
                    </div>
                </form>
            </div>
        );
    }

}


function validate(values) {
    const errors = {};
    console.log();
    if (!values.username) {
        errors.username = '请输入用户名'
    }
    if (!values.password) {
        errors.password = '请输入密码'
    }
    return errors
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
})(reduxForm({
    form: 'loginForm',

})(Login))

