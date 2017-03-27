import '../../Components/list/style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as testAction from '../../actions/res';
import * as userAction from '../../actions/user';
import Comments from '../../Components/Comment/comment';
import CommentList from '../../Components/Comment/commentList';
import * as commentAction from '../../actions/comment';
import Right_nomal from '../../Components/right/right_nomal';


export class Detail extends Component {
    constructor(props) {
        super(props);
        var type = Tool.getQueryString(this.props.location.search,"resType");
        this.state ={
            resType:type
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.params.id != this.props.params.id) {
            this.props.actions.getResDetail(nextProps.params.id,this.state.resType);
            this.props.actions.getCommentList(this.props.params.id)
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.actions.getResDetail(this.props.params.id,this.state.resType);
        this.props.actions.getCommentList(this.props.params.id)
    }

    render() {
         let  content = {};
         let  id = null;
         let comment ="";
         const {resDetail} = this.props;
        if(resDetail&&resDetail.id==this.props.params.id){
             content = this.props.resDetail.content;
             id = this.props.resDetail.id;
             return(
                 <div className="mtop60 row" >
                     <div className="col-lg-8 htmlResDetail">
                         <div className="htmlResTitle">{content.title}</div>

                         <div className="detailContent"  dangerouslySetInnerHTML={{__html: content.content}}></div>
                         <hr/>
                         <Comments {...this.props}></Comments>
                         <CommentList {...this.props} ></CommentList>
                     </div>
                     <div className="col-lg-4">
                         <Right_nomal resType={this.state.resType} rightType="readyNum"></Right_nomal>
                         <Right_nomal resType={this.state.resType} rightType="recommend"></Right_nomal>
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
        resDetail: state.res.resDetail,
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