import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'


export default class Detail extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.params.id)
    }
    render() {
        return(
            <div>aaaaaaaaaa</div>
        )
    }
}