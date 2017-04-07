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
            url:""
        }
    }


    componentDidMount() {
        var ue = UE.getEditor('editor');
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
        this.props.actions.publishArticle(this.refs.title.value,this.refs.breif.value,this.state.url,UE.getEditor("editor").getContent(),this.props.userInfo.id)
    }

    render() {

        return(
            <div className="mtop60 publishArticle" >
                <div className="nomal" >
                         <input ref="title" className="form-control" placeholder="标题"  type="text" />
                </div>
                <div className="nomal" >
                    <input ref="breif" className="form-control" placeholder="简介"  type="text" />
                </div>
                <div>
                   <UpLoadImg callback={this.getUrl}></UpLoadImg>
                </div>

                <div className="editor">
                    <script  id="editor" type="text/plain" style={{height:"500px"}}></script>
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

