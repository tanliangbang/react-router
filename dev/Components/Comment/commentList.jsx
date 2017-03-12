import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import {reduxForm,Field} from 'redux-form';
import { Tool, merged } from '../../Tool';


import * as userAction from '../../actions/user';
import * as commentAction from '../../actions/comment';

export  class commentList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.commentList.list.length<=0){
            this.props.actions.getCommentList()
        }
    }


    render() {
        const { commentList ,actions} = this.props;
        return (
          <div className="commentList">
              <div className="commentListTitle">评论列表</div>
              <ul>
                  {
                      this.props.commentList.list.map((item, index) => {
                          return <ListItem  actions={actions} key={item.id} {...item} />
                      })
                  }
              </ul>
          </div>
        );
    }

}


class ListItem extends React.Component {

    render() {
        console.log(this.props)
        const {actions} = this.props;

        return (
             <li>
                 <div className="top">
                     <div className="fl">首都师范大学</div>
                     <div className="fr">2017-3-4 8:50</div>
                     <br className="clear"/>
                 </div>
                 <p className="cContent">就是肯定就放开手的减肥快圣诞节疯狂送到家附近开始对方</p>
                 <div className="bottom">
                     <div className="oparetion fr">回复</div>
                     <br className="clear"/>
                 </div>
             </li>

        );
    }

}



export default  connect((state)=>{
    return {
        userInfo:state.user.userInfo,
        commentList:state.comment.commentList,
        path: state.routing.locationBeforeTransitions.pathname
    }
}, (dispatch)=>{
    const allAction =Object.assign({},commentAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'commentForm',
})(commentList))