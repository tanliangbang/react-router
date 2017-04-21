import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import LoadingBox from '../../MTUI/LoadingBox'
import { Tool, merged } from '../../Tool';
import Mask from '../../BUI/Mask';
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

export  class Login extends Component {
    constructor(props) {
        super(props);
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

    render() {
        const {handleSubmit,loginFail} = this.props;
        let loginFailClass = 'loginFail ';
        if(!loginFail){
            loginFailClass = loginFailClass+"none"
        }
        return (
            <form  onSubmit={handleSubmit(this.login)} >
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
        )
    }

}


export default  reduxForm({
    form: 'loginForm',
    initialValues:getInitDate(),
    validate
})(Login);