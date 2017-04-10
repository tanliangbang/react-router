import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';

export  class CommunityList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {content,res_type} = this.props;
        if(content){
            return (
                <div className="CommunityList">
                    {
                        content.map((item, key) => {
                            return (
                                    <div key={key}  className="content">
                                        <div className="top">
                                            <img className="avatar" src="./../../img/userImg.jpg"/>
                                            <span>{item.from_user.userName}</span>
                                        </div>
                                        <p className="title">
                                            <Link   to={{pathname:`/resDetail/${item.id}`,query:{resType:res_type}}} >
                                               {item.content.title}
                                            </Link>
                                        </p>
                                        <p className="breif">
                                            {item.content.breif}
                                        </p>
                                        <div className="bottom">
                                            评论:1222&nbsp;&nbsp;浏览:1555&nbsp;&nbsp;喜欢:1555
                                        </div>
                                        <img className={item.content.titleImg?'breifImg':'none'} src={item.content.titleImg} />
                                    </div>
                            )

                        })

                    }
                </div>
            );
        }

        return null;

    }

}

export default  CommunityList;








