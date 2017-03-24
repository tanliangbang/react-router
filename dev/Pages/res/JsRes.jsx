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
    }
    componentWillMount() {
        window.scrollTo(0,0)
        this.props.actions.getHtmlList(this.props.jsList.nowpage,9,"jsRes");
    }

    moreList(){
        this.props.actions.getHtmlList(this.props.jsList.nowpage+1,9,"jsRes");
    }
    render() {
        const { jsList ,actions,loading} = this.props;
            return (
                    <div className="row mtop60" >
                        <div className="col-md-8" >
                            <div>
                                <List  actions={actions} {...jsList}></List>
                                <a className={this.props.loading?"moreBtn":"none"} onClick={this.moreList.bind(this)}>查看更多</a>
                                <div className={this.props.loading?"none":""}>
                                    <Loading></Loading>
                                </div>

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