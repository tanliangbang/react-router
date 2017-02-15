import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as testActions from '../actions/test';


export default class Test extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="start" >
               <div>sdfsdfsdfsdf</div>
            </div>
        );
    }

}