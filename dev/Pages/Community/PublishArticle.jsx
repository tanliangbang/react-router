import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as communityAction from '../../actions/community';
import * as userAction from '../../actions/user';
import Tabs from '../../BUI/Tabs.jsx';
import CommunityList from '../../Components/community/communityList';
import {nomalTextInput,UpLoadImg} from '../../Components/form/form';


export class PublishArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:"",
            resType:Tool.getQueryString(this.props.location.search,"resType")
        }
        if(this.props.userInfo==null){
            this.props.history.pushState(null,'/community')
        }

    }


    componentDidMount() {
         UE.getEditor('editor');
    }
    componentWillUnmount(){
        UE.getEditor('editor').destroy();
    }

    getUrl(url){
        this.setState({
            url:url
        })
    }

    publish(){

        if(this.refs.title.value==""){
            alert("请填写标题")
            return;
        }
        var title = this.refs.title.value;
        var breif = this.refs.breif.value;
        var url = this.state.url;
        var content = UE.getEditor("editor").getContent();
        var uid = this.props.userInfo.id;
        var resType = this.state.resType;
        this.props.actions.publishArticle(title,breif,url,content,uid,resType)
    }

    render() {

        return(
            <div className="pageMg publishArticle" >
                <div className="row" >
                    <div className="col-lg-1 ptitle">
                           标题
                    </div>
                    <div className="col-lg-10">
                        <input ref="title" className="form-control" placeholder="标题"  type="text" />
                    </div>
                </div>
                    <div className="row" >
                        <div className="col-lg-1 ptitle">
                            简介
                        </div>
                        <div className="col-lg-10">
                            <input ref="breif" className="form-control" placeholder="简介"  type="text" />
                        </div>
                    </div>
                <div>
                    <div className="row" >
                        <div className="col-lg-1 ptitle">
                            图片
                        </div>
                        <div className="col-lg-11">
                            <UpLoadImg callback={this.getUrl.bind(this)}></UpLoadImg>
                        </div>
                    </div>
                </div>

                <div className="editor">
                    <div className="row" >
                        <div className="col-lg-1 ptitle">
                            内容
                        </div>
                        <div className="col-lg-11">
                            <script  id="editor" type="text/plain" style={{height:"500px"}}></script>
                        </div>
                    </div>
                </div>

                <div  onClick={this.publish.bind(this)} className="upLoadBtn">发&nbsp;布</div>

            </div>
        )
    }
}


export default  connect((state)=>{
    return {
        userInfo:state.user.userInfo,
    }
}, (dispatch)=>{
    const allAction =Object.assign({},userAction,communityAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'publishForm',
})(PublishArticle))

