import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as testAction from '../../actions/res';
import * as userAction from '../../actions/user';
import Tabs from '../../BUI/Tabs.jsx';
import CommunityList from '../../Components/community/communityList';
import {nomalTextInput,UpLoadImg} from '../../Components/form/form';


export class PublishArticle extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        var ue = UE.getEditor('editor');
    }

    clickFile(){
        console.log(this)
    }

    render() {

        return(
            <div className="mtop60 publishArticle" >
                <div className="nomal" >
                    <Field  name="title"  type="text" component={nomalTextInput} label="标题"/>
                </div>

                <div>
                   <UpLoadImg></UpLoadImg>
                </div>

                <div>
                    <script id="editor" type="text/plain" style={{height:"500px"}}></script>
                </div>


            </div>
        )
    }
}


export default  connect((state)=>{
    return {
        userInfo:state.user.userInfo,
    }
}, (dispatch)=>{
    const allAction =Object.assign({},userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'publishForm',
})(PublishArticle))

