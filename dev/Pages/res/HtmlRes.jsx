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

export  class htmlRes extends Component {
    constructor(props) {
        super(props);
        this.setCallBack = this.setCallBack.bind(this)
        this.state ={
            count : 0,
            start:1,
        };
    }

    moreList(){
      var start=  this.state.start +1;
      this.props.actions.getHtmlList((this.state.start-1)*10,10,"htmlRes");
      this.setState({start:start})

    }
    componentWillMount() {
        window.scrollTo(0,0)
        const { htmlList } = this.props
        this.props.actions.getHtmlList(0,10,"htmlRes");
    }

    //分页回调
    setCallBack (nowpage,eachPageCount){
        //模拟ajax请求
        var start = (nowpage-1)*eachPageCount
        this.props.actions.getHtmlList(start,eachPageCount,"htmlRes");
        var count = this.props.htmlList.count;
        window.scrollTo(0,0)
        this.setState({
            count : count
        });

    }
    render() {
        const { htmlList ,actions,loading} = this.props;
            return (
                    <div className="row mtop60" >
                        <div className="col-md-8" >
                            <div className={this.props.loading?"":"none"}>

                                <List  actions={actions} {...htmlList}></List>
                                <a className="moreBtn" onClick={this.moreList.bind(this)}>查看更多</a>
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


/*
<PageList jumpShow={false} selectShow={false}  id="pageList1" count={htmlList.count} showPage="7" callback={this.setCallBack}/>
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