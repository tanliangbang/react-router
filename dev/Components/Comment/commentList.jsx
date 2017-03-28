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
        const { commentList,resType } = this.props;
        return (
                <div className="commentList" >
                    <div className="commentListTitle">评论列表</div>
                    <ul>
                        {
                            this.props.commentList.list.map((item, key) => {
                                return <ListItem   {...this.props} key={key}    {...item} />
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
            reply_id : 0,
            from_uid:0,
            to_user:{},
            curr_id:0
        }
    }


    replyShow(reply_id,from_uid,to_user,curr_id){
        var reply_id = reply_id?reply_id:0;
        var from_uid = from_uid?from_uid:0;
        var curr_id = curr_id==this.state.curr_id?0:curr_id
        this.setState({
            reply_id:reply_id,
            from_uid:from_uid,
            to_user:to_user,
            curr_id:curr_id
        })
    }
    render() {
            const {cTime,content,user,actions,id,reply,resType} = this.props;
            const {reply_id,from_uid,to_user,curr_id} = this.state;
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
                                    <a className="oparetion fr replyBtn" onClick={this.replyShow.bind(this,id,this.props.from_uid,user,id)}>回复</a>
                                    <br className="clear"/>
                                </div>
                                    {
                                        curr_id==id?(
                                            <Comments {...this.props} resType={resType} id={id} reply_id ={reply_id} from_uid={from_uid} to_user={to_user} ></Comments>
                                        ):(
                                            null
                                        )
                                    }

                                 <ReplyList {...reply} {...this.props} topic_id = {id}></ReplyList>
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



class ReplyList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            reply_id : 0,
            from_uid:0,
            to_user:{},
            curr_id:0
        }

    }
    replyShow(reply_id,from_uid,to_user,curr_id){
        var reply_id = reply_id?reply_id:0;
        var from_uid = from_uid?from_uid:0;
        var curr_id = curr_id==this.state.curr_id?0:curr_id
        this.setState({
            reply_id:reply_id,
            from_uid:from_uid,
            to_user:to_user,
            curr_id:curr_id
        })

    }
    render() {
        const {list,topic_id} = this.props;
        const {reply_id,from_uid,to_user,curr_id} = this.state;
        return (
               <div>
                   {
                      list.map((item, key) => {
                           return (
                               <div key={key} className="reply">
                                   <div className="top">
                                       <div className="fl">{item.user.userName+" 回复: "+ item.to_user.userName}</div>
                                       <div className="fr">{Tool.formatDate(item.cTime)}</div>
                                       <br className="clear"/>
                                   </div>
                                   <div className="cContent" >
                                       <p dangerouslySetInnerHTML={{__html: Tool.replace_em(item.content)}}></p>
                                       <a className="replyBtn1" onClick={this.replyShow.bind(this,topic_id,item.from_uid,item.user,item.id)}>回复</a>
                                   </div>

                                   <div>
                                       {
                                           curr_id==item.id?(
                                               <Comments {...this.props} id={item.id} reply_id ={item.reply_id} from_uid={item.from_uid} to_user={item.to_user} ></Comments>
                                           ):(
                                               null
                                           )
                                       }
                                   </div>
                               </div>
                           )
                       })
                   }

               </div>
            );
    }

}










export default  commentList;