import './style.css';
import React,{Component, PropTypes} from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router'
import {ModalShow , Modal} from '../../MTUI/index'
import * as userAction from '../../actions/user';
import { bindActionCreators } from 'redux';



class Menu extends Component {
    constructor(props) {
        super(props);
        this.loginClick = this.loginClick.bind(this);
    }
    loginClick (){
        this.props.actions.isShowLogin(true);
        console.log(this)
    }
  render() {
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
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/htmlRes"}>测试专用</Link></li>
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/reduxdom"}>Redux Dom {this.props.tips==0?"":<span className="tips">{this.props.tips}</span>}</Link></li>
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/start"}>开始使用</Link></li>
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/components/plus"}>组件库</Link></li>
                        <li><Link onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/help"}>帮助</Link></li>
                    </ul>
                    <ul className="navbar-right loginBtn">
                        <li>
                            <span><a onClick={this.loginClick}>登入</a></span>/
                            <span>
                                 注册
                            </span>


                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
  }
}

export default  connect((state)=>{
    return {
        path: state.routing.locationBeforeTransitions.pathname
    }
}, (dispatch)=>{
    const allAction =Object.assign({},userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(Menu)