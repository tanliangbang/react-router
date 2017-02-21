import './style.css';
import React,{Component, PropTypes} from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router'
import {ModalShow , Modal} from '../../MTUI/index'
import Mask from '../../BUI/Mask';
import Login from '../../Pages/User/Login';

class Menu extends Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.loginClick = this.loginClick.bind(this);
    }
    loginClick (){
        alert("登入")
    }
  render() {
      var modal2 = <Modal width='400px' height='240px' background='red' title="登入" drag="true">这个是有头部的弹出窗。</Modal>;

      return (
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand hidden-sm" >BANGBANG</a>
                </div>
                <div className="navbar-collapse collapse" role="navigation" aria-expanded="false" >
                    <ul className="nav navbar-nav">
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/test"}>测试专用</Link></li>
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/reduxdom"}>Redux Dom {this.props.tips==0?"":<span className="tips">{this.props.tips}</span>}</Link></li>
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/start"}>开始使用</Link></li>
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/components/plus"}>组件库</Link></li>
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/help"}>帮助</Link></li>
                    </ul>
                    <ul className="navbar-right loginBtn">
                        <li>
                            <span><a onClick={this.loginClick}>登入</a></span>/
                            <span>
                               <Mask></Mask>
                               <Login></Login>
                            </span>


                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
  }
}
//主页 
export default connect(
  state => ({ 
    tips: state.user.tips,
    path: state.routing.locationBeforeTransitions.pathname
  })
)(Menu);