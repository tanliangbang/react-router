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
import Login from '../../Components/user/login';
import Regist from '../../Components/user/regist';






export  class LoginAndRegist extends Component {
    constructor(props) {
        super(props);
        this.closeLoginBox = this.closeLoginBox.bind(this);
        this.state = {
            loginOrRegist:'login'
        }

    }




    componentDidMount() {
       this.refs.loginAndRegist.style.display = "none";
    }
    componentDidUpdate(){
        if(this.props.loginOrRegist){
            if(this.state.loginOrRegist!=this.props.loginOrRegist){
                this.setState({
                    loginOrRegist:this.props.loginOrRegist
                })
            }
            this.refs.mask.showMask();
            this.refs.loginAndRegist.style.display = "block"
        }else{
            this.refs.mask.closeMask();
            this.refs.loginAndRegist.style.display = "none"
        }
    }
    closeLoginBox(){
        this.props.actions.showLoginOrRegist(false);
    }

    toLogin(temp){
        console.log(this.props.actions)
         this.setState({
             loginOrRegist:temp
         })
    }



    render() {
         console.log(this.state.loginOrRegist)
        return (
            <div ref="loginAndRegist"  className="loginAndRegist">
                <Mask ref="mask"/>
                <div className="maskCommonTop">
                     <div className="loginNav">
                         <a onClick={this.toLogin.bind(this,"login")} className={this.state.loginOrRegist=="login"?"active":"nomal"}>登入</a>
                         <a onClick={this.toLogin.bind(this,"regist")} className={this.state.loginOrRegist=="regist"?"active":"nomal"}>注册</a>
                         <i className="clear"></i>
                     </div>
                    {this.state.loginOrRegist=="login"?<Login {...this.props} />:<Regist {...this.props} />}
                     <div className="close" onClick={this.closeLoginBox}></div>
                </div>

            </div>
        );
    }

}





export default  connect((state)=>{
    return {
        loginOrRegist:state.user.loginOrRegist,
        loginFail:state.user.loginFail,
        registFail:state.user.registFail,
        path: state.routing.locationBeforeTransitions.pathname,
    }
}, (dispatch)=>{
    const allAction =Object.assign({},htmlResAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(LoginAndRegist)

