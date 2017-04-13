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


export  class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.getCommunityArticleList("javacommunity");

    }
    componentDidMount() {

    }




    render() {
        const {communityArticleList} =  this.props;

        var tabsData = {
            className : 'modelTableOpear',
            defaultVal : 0,
            animate : true,
            callBack: function(index,title){ //切换后的回调函数
                console.log("tabs为：",index);
                console.log("title为：",title);
            }
        }
        return (
            <div   className="userInfo pageMg">
                 <div className="utop">
                     <div className="fl">
                         <img className="userAavar" src="./../../img/userImg.jpg"/>
                     </div>
                     <div className="fl simpleInfo">
                         <div>谭亮邦</div>
                         <div>web前端工程师</div>
                         <div>个人名言:哲人无忧，智者常乐。并不是因为所爱的一切他都拥有了，而是所拥有的一切他都爱。</div>
                     </div>
                     <div className="fr changeInfoBtn">修改信息</div>
                 </div>

                 <div className="row pdcontent">
                     <div className="col-lg-8">
                         <Tabs {...tabsData}>
                             <div title="时间" className='communityList'>
                                 <div>
                                     <CommunityList {...communityArticleList}  res_type="javacommunity"></CommunityList>
                                 </div>
                             </div>
                             <div title="评论" className='communityList'>拆菊东篱loading...</div>
                             <div title="热门" className='communityList'>古道西风loading...</div>
                             <div title="其他" className='communityList'>其他loading...</div>
                         </Tabs>
                     </div>
                     <div className="col-lg-4">
                         <img className="advertiseImg" src="./img/3.jpg" />
                         <img className="advertiseImg" src="./img/3.jpg" />
                     </div>
                 </div>


            </div>
        );
    }

}

export default  connect((state)=>{
    return {
        communityArticleList:state.community.communityArticleList,
        path: state.routing.locationBeforeTransitions.pathname
    }
}, (dispatch)=>{
    const allAction =Object.assign({},communityAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(Login)



