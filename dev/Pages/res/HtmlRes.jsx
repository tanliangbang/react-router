import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import * as htmlResAction from '../../actions/htmlRes';
import * as userAction from '../../actions/user';
import List from '../../Components/list/htmlRes';
import {PageList} from '../../MTUI/index';
import PageListDom from '../Components/plus/PageListDom'
import conf from '../Conf/Conf'
import Loading from '../Common/loading'
import Right_readerNum from '../../Components/right/right_readerNum';
import Right_recommend from '../../Components/right/right_recommend';



export  class htmlRes extends Component {
    constructor(props) {
        super(props);
    }

    moreList(){
        this.props.actions.getHtmlList(this.props.htmlList.nowpage+1,10,"htmlRes");
    }
    componentWillMount() {
        window.scrollTo(0,0)
        this.props.actions.getHtmlList(this.props.htmlList.nowpage,10,"htmlRes");
    }


    render() {
        return (
                    <div className="row mtop60" >
                        <div className="col-md-8" >
                            <div >
                                <List  {...this.props}></List>
                                <div className={this.props.loading?"none":""}>
                                    <Loading></Loading>
                                </div>
                                <a className={this.props.loading?"moreBtn":"none"} onClick={this.moreList.bind(this)}>查看更多</a>
                            </div>


                        </div>
                        <div className="col-md-4 right">
                            <Right_readerNum></Right_readerNum>
                            <Right_recommend></Right_recommend>
                            <Right_recommend></Right_recommend>
                            <Right_recommend></Right_recommend>
                            <Right_recommend></Right_recommend>
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                        </div>
                    </div>
            );

    }

}


/*
 <PageList jumpShow={false} selectShow={false}  id="pageList1" count={htmlList.count} nowpage={htmlList.nowpage}    showPage="5" callback={this.setCallBack.bind(this)}/>
 <a className="moreBtn" onClick={this.moreList.bind(this)}>查看更多</a>

*/

export default  connect((state)=>{
    return {
        htmlList: state.htmlRes.htmlList,
        loading:state.user.loading
    }
}, (dispatch)=>{
    const allAction =Object.assign({},htmlResAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(htmlRes)