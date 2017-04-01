import './style.scss';
import React,{Component, PropTypes} from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router'
import {ModalShow , Modal} from '../../MTUI/index'
import * as userAction from '../../actions/user';
import * as resAction from '../../actions/res';

import { bindActionCreators } from 'redux';



class Menu extends Component {
    constructor(props) {
        super(props);
        this.loginClick = this.loginClick.bind(this);
        this.loginOut = this.loginOut.bind(this);
    }
    componentWillMount() {
        this.props.actions.getMenu("myArticle");
    }
    loginClick (){
        this.props.actions.isShowLogin(true);
    }
    loginOut(){
        this.props.actions.loginOut();
    }
  render() {
      let loginNav = "";
      const {menuList,userInfo} = this.props;
      if(userInfo==null){
          loginNav  = (
             <li>
                <span><a onClick={this.loginClick}>登入</a></span>/
                 <span>
                      <Link  to={HOME_PATH+"/register"}>注册</Link>
                 </span>
             </li>
          )
      }else{
          loginNav  = (
              <li>
                  <span><a>{userInfo.username}</a></span>/
                 <span>
                      <a onClick={this.loginOut}>退出</a>
                 </span>
              </li>
          )
      }

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
                <div className="navbar-collapse collapse" role="navigation" aria-expanded="false">
                    <ul className="nav navbar-nav" >
                        {
                            menuList.map((item, key) => {
                                return   <li key={key}><Link   onlyActiveOnIndex={true} activeClassName="active" to={{pathname:HOME_PATH+"/res/"+item.name,query:{index:key}}}  >{item.cname}</Link></li>
                            })
                        }
                        <li><Link  onlyActiveOnIndex={true} activeClassName="active" to={HOME_PATH+"/community"}>程序员社区 </Link></li>

                    </ul>
                    <ul className="navbar-right loginBtn">
                        {loginNav}
                    </ul>
                </div>
            </div>
        </div>

    );
  }
}

export default  connect((state)=>{
    return {
        userInfo:state.user.userInfo,
        menuList:state.res.menuList,
        path: state.routing.locationBeforeTransitions.pathname
    }
}, (dispatch)=>{
    const allAction =Object.assign({},resAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(Menu)