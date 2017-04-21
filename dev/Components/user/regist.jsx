import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import LoadingBox from '../../MTUI/LoadingBox'
import { Tool, merged } from '../../Tool';
import Mask from '../../BUI/Mask';
import {nomalTextInput} from '../../Components/form/form';





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
    if (values.repassword!=values.password) {
        errors.repassword = '密码不一致';
        return errors;
    }
}

export  class Regist extends Component {
    constructor(props) {
        super(props);
        this.regist = this.regist.bind(this);

    }



    regist(formProps){
        let username = formProps.username;
        let password = formProps.password;
        console.log(username,password)
        this.props.actions.register(username,$.md5(password));
    }

    render() {
        const {handleSubmit,registFail} = this.props;
        let loginFailClass = 'loginFail ';
        if(!registFail){
            loginFailClass = loginFailClass+"none"
        }
        return (
            <form onSubmit={handleSubmit(this.regist)}>
                <div className="content">
                    <Field  name="username" type="text" component={nomalTextInput} label="用户名"/>
                    <Field  name="password" type="password" component={nomalTextInput} label="密码"/>
                    <Field  name="repassword" type="password" component={nomalTextInput} label="确认密码"/>
                    <div className={loginFailClass}>用户名已存在</div>
                    <button  className="login-Btn" type="submit" >确&nbsp;&nbsp;&nbsp;&nbsp;定</button>
                </div>
            </form>
        )
    }

}


export default  reduxForm({
    form: 'registForm',
    validate
})(Regist);