import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as testAction from '../../actions/res';
import * as userAction from '../../actions/user';
import Tabs from '../../BUI/Tabs.jsx';
import CommunityList from '../../Components/community/communityList';


export class Detail extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
    }

    render() {
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
                <div className="mtop60 row community" >
                   <div className="scrollBanner">
                       <img src="./img/banner.jpg"/>
                   </div>
                    <div className="col-lg-8">
                            <ul className="modelList">
                                <li>java开发</li>
                                <li>web开发</li>
                                <li>web开发</li>
                                <li>java开发</li>
                                <li>web开发</li>
                                <li>web开发</li>
                                <li>java开发</li>
                                <li>web开发</li>
                                <li>web开发</li>
                                <br className="clear"/>
                            </ul>

                      <Tabs {...tabsData}>
                          <div title="时间" className='communityList'><CommunityList></CommunityList></div>
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
            )
    }
}




const mapStateToProps= function mapStateToProps(state) {
    return {
        userInfo:state.user.userInfo,
    }
}
const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
    const allAction =Object.assign({},userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Detail)