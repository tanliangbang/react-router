/**
* 整个项目的入口
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from './Common/Menu'
import Footer from './Common/Footer'
import Login from './user/login'

import * as user from '../actions/user';

const App = React.createClass({
  render() {
	 /* if(this.props.userInfo.name==""){
		  return(
			  <Login>
			  </Login>
		  )
	  }*/
		return (
			<div className="app">
			  <Menu />
			  {this.props.children}
		  <Footer/>
		  </div>
		);
  }
});
//APP入口

const mapStateToProps= function mapStateToProps(state) {
	return { userInfo: state.user }
}
const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(user, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

