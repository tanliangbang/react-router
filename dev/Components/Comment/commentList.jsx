import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import {reduxForm,Field} from 'redux-form';
import { Tool, merged } from '../../Tool';


import * as userAction from '../../actions/user';

export  class commentList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { commentList ,actions} = this.props;
            return (
                <div className="commentList">
                    <div className="commentListTitle">评论列表</div>
                    <ul>
                        {
                            this.props.commentList.list.map((item, index) => {
                                return <ListItem currId={this.props.params.id}  actions={actions} key={item.id} {...item} />
                            })
                        }
                    </ul>
                </div>
            );

        }
}


class ListItem extends Component {

    render() {
            const {cTime,content,user,actions} = this.props;
            if(this.props.topic_id==this.props.currId) {
                return (
                    <li>
                        <div className="top">
                            <div className="fl">{this.props.user.userName}</div>
                            <div className="fr">{Tool.formatDate(this.props.cTime)}</div>
                            <br className="clear"/>
                        </div>

                        <p className="cContent" dangerouslySetInnerHTML={{__html: Tool.replace_em(this.props.content)}}></p>
                        <div className="bottom">
                            <div className="oparetion fr">回复</div>
                            <br className="clear"/>
                        </div>
                    </li>
                );
            }
            return (
                <div></div>
            )


    }

}


export default  commentList;