import '../../Components/list/style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as testAction from '../../actions/htmlRes';
import * as userAction from '../../actions/user';
import Comments from '../../Components/Comment/comment';
import CommentList from '../../Components/Comment/commentList';
import * as commentAction from '../../actions/comment';


export class Detail extends Component {
    constructor(props) {
        super(props);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.params.id != this.props.params.id) {
            this.props.actions.getHtmlDetail(this.props.params.id,"htmlRes");
            this.props.actions.getCommentList(this.props.params.id)
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        var type = Tool.getQueryString(this.props.location.search,"name")
        this.props.actions.getHtmlDetail(this.props.params.id,type);
        this.props.actions.getCommentList(this.props.params.id)
    }

    render() {
         let  content = {};
         let  id = null;
         let comment ="";
         if(this.props.htmlDetail&&this.props.htmlDetail.id==this.props.params.id){
             content = this.props.htmlDetail.content;
             id = this.props.htmlDetail.id;
             return(
                 <div className="mtop60 row">
                     <div className="col-lg-8 htmlResDetail">
                         <div className="htmlResTitle">{content.title}</div>

                         <div className="detailContent"  dangerouslySetInnerHTML={{__html: content.content}}></div>
                         <hr/>
                         <Comments {...this.props}></Comments>
                         <CommentList {...this.props} ></CommentList>
                     </div>
                     <div className="col-lg-4 right">
                         <img className="advertiseImg" src="../img/3.jpg" />
                         <img className="advertiseImg" src="../img/3.jpg" />
                         <img className="advertiseImg" src="../img/3.jpg" />
                         <img className="advertiseImg" src="../img/3.jpg" />
                         <img className="advertiseImg" src="../img/3.jpg" />
                     </div>
                 </div>
             )
         }
         return (<div></div>)


    }
}




const mapStateToProps= function mapStateToProps(state) {

    return {
        userInfo:state.user.userInfo,
        htmlDetail: state.htmlRes.htmlDetail,
        commentList:state.comment.commentList,
        commentSuccess:state.comment.commentSuccess
    }
}
const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
    const allAction =Object.assign({},testAction,userAction,commentAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Detail)