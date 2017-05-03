import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import LoadingBox from '../../MTUI/LoadingBox'
import { Tool, merged } from '../../Tool';
import * as userAction from '../../actions/user';
import Mask from '../../BUI/Mask';
import Tabs from '../../BUI/Tabs.jsx';
import * as communityAction from '../../actions/community';
import CommunityList from '../../Components/community/communityList';

import  ChangeUser from '../../pages/User/changeUser';


export  class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.showChangeUser = this.showChangeUser.bind(this)
    }

    componentWillMount() {
        this.props.actions.getCommunityArticleList("javacommunity");
    }
    componentDidMount() {
    }


    showChangeUser(){
        this.props.actions.showChangeUser(true)
    }


    render() {
        const {communityArticleList,userInfo} =  this.props;
        var tabsData = {
            className : 'modelTableOpear',
            defaultVal : 0,
            animate : true,
            callBack: function(index,title){ //切换后的回调函数
                console.log("tabs为：",index);
                console.log("title为：",title);
            }
        }
        if(!userInfo){
            return(<div></div>);
        }
        return (
            <div   className="userInfo pageMg">
                 <ChangeUser name="change"  ref="changeUser"></ChangeUser>
                 <div className="utop">
                     <div className="fl">
                         <img className="userAavar" src={userInfo.userAavar?userInfo.userAavar:"./../../img/userImg.jpg"}/>
                     </div>
                     <div className="fl simpleInfo">
                         <div>{userInfo.nick}</div>
                         <div>{userInfo.job?userInfo.job:'未填写职业'}<span className="line">|</span>{userInfo.address?userInfo.address:"未填写地址"}<span className="line">|</span>{userInfo.sex==1?"男":"女"}</div>
                         <div>{userInfo.userBreif?userInfo.userBreif:"未填写简介"}</div>
                     </div>
                     <div className="fr changeInfoBtn" onClick={this.showChangeUser}>修改信息</div>
                 </div>

                 <div className="row pdcontent">
                     <div className="col-lg-8">
                         <Tabs {...tabsData}>
                             <div title="我的文章" className='communityList'>
                                 <div>
                                     <CommunityList {...communityArticleList}  res_type="javacommunity"></CommunityList>
                                 </div>
                             </div>
                             <div title="评论" className='communityList'>正在开发，敬请期待!</div>
                             <div title="关注" className='communityList'>正在开发，敬请期待!</div>
                             <div title="收藏" className='communityList'>正在开发，敬请期待!</div>
                         </Tabs>
                     </div>
                     <div className="col-lg-4">
                         <img className="advertiseImg" src="./img/right1.jpg" />
                         <img className="advertiseImg" src="./img/right1.jpg" />
                     </div>
                 </div>


            </div>
        );
    }

}

export default  connect((state)=>{
    return {
        userInfo:state.user.userInfo,
        communityArticleList:state.community.communityArticleList,
        path: state.routing.locationBeforeTransitions.pathname
    }
}, (dispatch)=>{
    const allAction =Object.assign({},communityAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(UserInfo)



