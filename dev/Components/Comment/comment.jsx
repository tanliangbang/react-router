import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import {reduxForm,Field} from 'redux-form';
import { Tool, merged } from '../../Tool';

export  class comments extends Component {
    constructor(props) {
        super(props);
        this.commentSubmit = this.commentSubmit.bind(this);
    }
    commentSubmit(){
        let topic_id = this.props.htmlDetail.id;
        let from_uid = this.props.from_uid?this.props.from_uid:0;
        if(this.props.userInfo==null){
            this.props.actions.isShowLogin(true);
        }
        if(this.refs.commentTextarea.value==""){
            return;
        }
        let reply_id = this.props.reply_id?this.props.reply_id:0
        this.props.actions.comment(topic_id,this.refs.commentTextarea.value,from_uid,reply_id);

    }

    componentDidUpdate(){
        if(this.props.commentSuccess){
            this.refs.commentTextarea.value="";
        }
        console.log(this.props)
    }

    componentDidMount() {
        var textAreaId = this.props.id?this.props.id:0;
        $('.faceBtn'+textAreaId).qqFace({
            id : 'facebox',
            assign:'commentTextarea'+textAreaId,
            path:'/img/arclist/'	//表情存放的路径
        });
    }


    render() {
        const {handleSubmit} = this.props;
        var textVal = this.props.id?"commentTextarea"+this.props.id:"commentTextarea0";
        var faceClass = this.props.id?"faceImg faceBtn"+this.props.id:"faceImg faceBtn0";
        return (

            <div className="com_form" >
                <form onSubmit={handleSubmit(this.commentSubmit)}>
                   <textarea ref="commentTextarea" className="form-control commentTextArea" placeholder={this.props.to_user?"回复: "+this.props.to_user.userName:""}  id={textVal} name={textVal}></textarea>
                    <div>
                        <a className={faceClass} title="插入表情"></a>    <button  className="commentBtn" type="submit" >确&nbsp;&nbsp;&nbsp;&nbsp;定</button>
                        <br className="clear"/>
                    </div>
                </form>

            </div>
        );
    }

}



export default  reduxForm({
    form: 'commentForm',
})(comments);
