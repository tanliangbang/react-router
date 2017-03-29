/**
 * loading
 * @param : null
 * @return :
 */
import React, { Component, PropTypes } from 'react'

export  class Loading extends Component {
    render() {
        return (
            <div className="loading_div">
                <img src="./img/loading.gif"/>
            </div>
        );
    }
};
//关于我们
module.exports = Loading;