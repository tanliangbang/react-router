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
import  * as user from '../actions/user'


class App extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
	}
  render() {
		return (
			<div className="app">
			  <Menu />
				<Login isShowLogin={this.props.isShowLogin}/>
				{this.props.children}
		      <Footer/>
			</div>
		);
  }
}
//APP入口

const mapStateToProps= function mapStateToProps(state) {
	return { isShowLogin: state.user.isShowLogin }
}
const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(user, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
