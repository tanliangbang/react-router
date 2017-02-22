import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoadingBox from '../../MTUI/LoadingBox'
import { Tool, merged } from '../../Tool';
import * as user from '../../actions/user';
import Mask from '../../BUI/Mask';
import { setLogin } from '../../actions/user'


export  class Login extends Component {
    constructor(props) {
        super(props);
        this.closeLoginBox = this.closeLoginBox.bind(this)
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
        this.props.setLogin(false);
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
                        <input text="password" className="username" />
                    </div>

                    <div className="form-control">
                        <label>密码:</label>
                        <input text="text" className="password" />
                    </div>
                    <div className="remember">
                        记住密码: <input type="checkbox"/>
                    </div>
                    <button className="login-Btn" >确&nbsp;&nbsp;&nbsp;&nbsp;定</button>

                </div>
            </div>

        );
    }

}


//主页
export default connect(
    state => ({
        isShowLogin:state.isShowLogin,
        path: state.routing.locationBeforeTransitions.pathname
    }),{setLogin}
)(Login);



