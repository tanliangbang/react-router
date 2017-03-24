import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';

export  class right_recommend extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="right_recommend">
                <div>
                    推荐排行
                </div>

                <a className="row">
                     <div className="col-lg-3">
                         <img  src="./img/logo.png"/>
                     </div>
                    <div className="col-lg-9">
                         <p>就发生了地方军绿色的房间里电饭锅电饭锅电饭锅士大夫似的</p>
                          <div className="promit">
                              js代码网  发表于 2017-12-33
                          </div>
                    </div>
                </a>

                <a className="row">
                    <div className="col-lg-3">
                        <img  src="./img/logo.png"/>
                    </div>
                    <div className="col-lg-9">
                        <p>就发生了地方军绿色的房间里电饭锅电饭锅电饭锅士大夫似的</p>
                        <div className="promit">
                            js代码网  发表于 2017-12-33
                        </div>
                    </div>
                </a>



                <a className="row">
                    <div className="col-lg-3">
                        <img  src="./img/logo.png"/>
                    </div>
                    <div className="col-lg-9">
                        <p>就发生了地方军绿色的房间里电饭锅电饭锅电饭锅士大夫似的</p>
                        <div className="promit">
                            js代码网  发表于 2017-12-33
                        </div>
                    </div>
                </a>


                <a className="row">
                    <div className="col-lg-3">
                        <img  src="./img/logo.png"/>
                    </div>
                    <div className="col-lg-9">
                        <p>就发生了地方军绿色的房间里电饭锅电饭锅电饭锅士大夫似的</p>
                        <div className="promit">
                            js代码网  发表于 2017-12-33
                        </div>
                    </div>
                </a>


                <a className="row">
                    <div className="col-lg-3">
                        <img  src="./img/logo.png"/>
                    </div>
                    <div className="col-lg-9">
                        <p>就发生了地方军绿色的房间里电饭锅电饭锅电饭锅士大夫似的</p>
                        <div className="promit">
                            js代码网  发表于 2017-12-33
                        </div>
                    </div>
                </a>








            </div>
        );
    }

}


export default  right_recommend;








