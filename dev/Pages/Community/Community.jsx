import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as communityAction from '../../actions/community';
import * as userAction from '../../actions/user';
import Tabs from '../../BUI/Tabs.jsx';
import CommunityList from '../../Components/community/communityList';


export class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res_type:"",
            currModel:0,
        }
    }


    componentWillMount() {
        this.props.actions.getCommunityList();
    }

    publishFn(){
        if(this.props.userInfo==null){
            this.props.actions.showLoginOrRegist("login");
            return;
        }
        browserHistory.push('publishArticle?resType='+this.state.res_type)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.communityList.length>0&&nextProps.communityArticleList.length<=0){
            this.props.actions.getCommunityArticleList(nextProps.communityList[0].name);
            this.setState({
                res_type:nextProps.communityList[0].name,
                currModel:nextProps.communityList[0].id
            })
       }else if(this.state.currModel==0){
            this.setState({
                res_type:nextProps.communityList[0].name,
                currModel:nextProps.communityList[0].id
            })
        }
    }

    toModel(item){
        this.setState({
            res_type:item.name,
            currModel:item.id
        })
        this.props.actions.getCommunityArticleList(item.name);
    }


    render() {
            const {communityList,communityArticleList} =  this.props;
            var tabsData = {
                className : 'modelTableOpear',
                defaultVal : 0,
                animate : true,
                callBack: function(index,title){ //切换后的回调函数
                    console.log("tabs为：",index);
                    console.log("title为：",title);
                }
            }
            return(
                <div className="pageMg row community" >
                   <div className="scrollBanner">
                       <img src="./img/banner.jpg"/>
                   </div>

                    <div>
                        <ul className="modelList">
                            {
                                this.props.communityList.map((item, key) => {
                                    return <li key={key} onClick={this.toModel.bind(this,item)} className={item.id==this.state.currModel?"modelActive":""}>{item.cname}</li>
                                })
                            }
                            <div onClick={this.publishFn.bind(this)} className="publishBtn">我要发文</div>
                            <br className="clear"/>
                        </ul>
                    </div>

                    <div className="col-lg-8 bgColor contentList">
                        <CommunityList {...communityArticleList}  res_type={this.state.res_type}></CommunityList>
                    </div>
                    <div className="col-lg-4">
                        <img className="advertiseImg" src="./img/3.jpg" />
                        <img className="advertiseImg" src="./img/3.jpg" />

                    </div>

                </div>
            )
    }
}




const mapStateToProps= function mapStateToProps(state) {
    return {
        userInfo:state.user.userInfo,
        communityList:state.community.communityList,
        communityArticleList:state.community.communityArticleList
    }
}
const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
    const allAction =Object.assign({},userAction,communityAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Detail)