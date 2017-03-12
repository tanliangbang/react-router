import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import {reduxForm,Field} from 'redux-form';
import { Tool, merged } from '../../Tool';


import * as userAction from '../../actions/user';

export  class comments extends Component {
    constructor(props) {
        super(props);
        this.commentSubmit = this.commentSubmit.bind(this);

    }
    commentSubmit(){
        var topic_id = this.props.topicId;

        if(this.props.userInfo==null){
            this.props.actions.isShowLogin(true);
        }
        if(this.refs.commentTextarea.value==""){
            return;
        }

        Tool.post(`/api/comments/comment`, {topic_id:topic_id,content:this.refs.commentTextarea.value}, (res) => {
        }, (error) => {
            console.log('error: ', error)
        });

    }

    componentDidMount() {
        $('.faceImg').qqFace({
            id : 'facebox',
            assign:'commentTextarea',
            path:'/img/arclist/'	//表情存放的路径

        });
    }


    render() {
        const {handleSubmit} = this.props;
        return (

            <div className="com_form" >
                <form onSubmit={handleSubmit(this.commentSubmit)}>
                   <textarea ref="commentTextarea" className="form-control commentTextArea"  id="commentTextarea" name="commentTextarea"></textarea>
                    <div>
                        <a className="faceImg" title="插入表情"></a>    <button  className="commentBtn" type="submit" >确&nbsp;&nbsp;&nbsp;&nbsp;定</button>
                        <br className="clear"/>
                    </div>
                </form>

            </div>
        );
    }

}



export default  connect((state)=>{
    return {
        userInfo:state.user.userInfo,
        path: state.routing.locationBeforeTransitions.pathname
    }
}, (dispatch)=>{
    const allAction =Object.assign({},userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'commentForm',
})(comments))