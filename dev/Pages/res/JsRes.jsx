import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import * as htmlResAction from '../../actions/htmlRes';
import * as userAction from '../../actions/user';
import List from '../../Components/list/jsRes';
import {PageList} from '../../MTUI/index';
import PageListDom from '../Components/plus/PageListDom'
import conf from '../Conf/Conf'
import Loading from '../Common/loading'

export  class jsRes extends Component {
    constructor(props) {
        super(props);
        this.setCallBack = this.setCallBack.bind(this)
    }
    componentWillMount() {
        window.scrollTo(0,0)
        const { jsList } = this.props;
        var nowpage = jsList.nowpage;
        var pageSize = jsList.pageSize;
        this.setCallBack(nowpage,pageSize);
    }

    //分页回调
    setCallBack (nowpage,eachPageCount){
        //模拟ajax请求
        window.scrollTo(0,0)
        var start = (nowpage-1)*eachPageCount
        this.props.actions.getHtmlList(nowpage,9,"jsRes");
        var count = this.props.jsList.count;
        this.setState({
            count : count
        });

    }
    render() {
        const { jsList ,actions,loading} = this.props;
            return (
                    <div className="row mtop60" >
                        <div className="col-md-8" >
                            <div className={this.props.loading?"":"none"}>
                                <List  actions={actions} {...jsList}></List>
                                <PageList jumpShow={false} selectShow={false}  id="pageList1" count={jsList.count} nowpage={jsList.nowpage}  showPage="5" callback={this.setCallBack.bind(this)}/>
                            </div>
                            <div className={this.props.loading?"none":""}>
                                <Loading></Loading>
                            </div>

                        </div>
                        <div className="col-md-4 right">
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                            <img className="advertiseImg" src="img/3.jpg" />
                        </div>
                    </div>
            );

    }

}




export default  connect((state)=>{
    return {
        jsList: state.htmlRes.jsList,
        loading:state.user.loading
    }
}, (dispatch)=>{
    const allAction =Object.assign({},htmlResAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(jsRes)