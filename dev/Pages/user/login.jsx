import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoadingBox from '../../MTUI/LoadingBox'
import { Tool, merged } from '../../Tool';
import * as user from '../../actions/user';


export  class Login extends Component {
    constructor(props) {
        super(props);
        this.loginBtn = this.loginBtn.bind(this);
    }
    loginBtn(){
       this.props.actions.login();
    }
    componentWillMount() {
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className="start" >
                 <button onClick={this.loginBtn}>登入</button>
            </div>
        );
    }

}


const mapStateToProps= function mapStateToProps(state) {
    return {user:state.user}
}
const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(user, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)


