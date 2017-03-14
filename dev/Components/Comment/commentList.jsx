import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import {reduxForm,Field} from 'redux-form';
import { Tool, merged } from '../../Tool';
import Comments from './comment';
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
                                return <ListItem {...this.props}  actions={actions} key={item.id} {...item} />
                            })
                        }
                    </ul>
                </div>
            );

        }
}


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state ={
            commentShow:false,
            reply_id : 0,
            from_uid:0
        }
    }

    replyShow(reply_id,from_uid){
        var commentShow = !this.state.commentShow;
        var reply_id = reply_id?reply_id:0;
        var from_uid = from_uid?from_uid:0;
        console.log(from_uid);
        this.setState({
            commentShow:commentShow,
            reply_id:reply_id,
            from_uid:from_uid
        })
    }
    render() {
            const {cTime,content,user,actions,id,reply} = this.props;
            const {commentShow,reply_id,from_uid} = this.state;
            console.log(this.props)
            if(this.props.topic_id==this.props.params.id) {
                return (
                    <li>
                        <div className="top">
                            <div className="fl">{user.userName}</div>
                            <div className="fr">{Tool.formatDate(cTime)}</div>
                            <br className="clear"/>
                        </div>

                        <p className="cContent" dangerouslySetInnerHTML={{__html: Tool.replace_em(content)}}></p>
                        <div className="bottom">
                                <div>
                                    <a className="oparetion fr replyBtn" onClick={this.replyShow.bind(this,id,this.props.from_uid)}>回复</a>
                                    <br className="clear"/>
                                </div>

                                {
                                    this.props.reply.list.map((item, index) => {
                                        return (
                                            <div className="reply">
                                                <div className="top">
                                                    <div className="fl">{item.user.userName+"回复"+item.to_user.userName}</div>
                                                    <div className="fr">{Tool.formatDate(item.cTime)}</div>
                                                    <br className="clear"/>
                                                </div>
                                                <div className="cContent" >
                                                    <p dangerouslySetInnerHTML={{__html: Tool.replace_em(item.content)}}></p>
                                                    <a className="replyBtn1" onClick={this.replyShow.bind(this,id,item.from_uid)}>回复</a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                              <div className={commentShow?"":"none"}>
                                  <Comments {...this.props} reply_id ={reply_id} from_uid={from_uid} ></Comments>
                              </div>
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