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
    }

   /* moreList(){
      var start=  this.state.start +1;
      this.props.actions.getHtmlList((this.state.start-1)*10,10,"htmlRes");
      this.setState({start:start})
    }*/
    componentWillMount() {
        window.scrollTo(0,0)
        const { htmlList } = this.props;
        var nowpage = htmlList.nowpage;
        var pageSize = htmlList.pageSize;
        this.setCallBack(nowpage,pageSize);
    }

    //分页回调
    setCallBack (nowpage,eachPageCount){
        //模拟ajax请求
        this.props.actions.getHtmlList(nowpage,10,"htmlRes");
        var count = this.props.htmlList.count;
        window.scrollTo(0,0)
        this.setState({
            count : count
        });

    }
    render() {
        const { htmlList } = this.props;
        return (
                    <div className="row mtop60" >
                        <div className="col-md-8" >
                            <div className={this.props.loading?"":"none"}>

                                <List  {...this.props}></List>
                                <PageList jumpShow={false} selectShow={false}  id="pageList1" count={htmlList.count} nowpage={htmlList.nowpage}    showPage="5" callback={this.setCallBack.bind(this)}/>

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