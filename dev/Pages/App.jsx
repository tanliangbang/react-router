/**
* 整个项目的入口
* @author : Mantou
* @date : 2016-03-01
*/
import React ,{Component} from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from './Common/Menu'
import Footer from './Common/Footer'

import Login from './User/Login';
import  * as userAction from '../actions/user'


class App extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
	    this.props.actions.getUserInfo();
	}
  render() {
			return (
				<div className="app">
					<Menu />
					<Login />
					{this.props.children}
					<Footer/>
				</div>
			);

  }
}
//APP入口

const mapStateToProps= function mapStateToProps(state) {
	return {userInfo:state.user.userInfo}
}
const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userAction, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
