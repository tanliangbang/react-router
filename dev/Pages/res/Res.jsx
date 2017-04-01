import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import * as htmlResAction from '../../actions/res';
import * as userAction from '../../actions/user';
import HtmlRes from '../../Components/list/htmlRes';
import JsRes from '../../Components/list/jsRes';

import Loading from '../Common/loading'
import Right_nomal from '../../Components/right/right_nomal';



export  class htmlRes extends Component {
    constructor(props) {
        super(props);
        var index = Tool.getQueryString(this.props.location.search,"index");
        index = index!==null?index:0
        this.state={
            resType:this.props.params.id,
            index:index
        }

    }

    moreList(){
        this.props.actions.getResList(this.props.resList.nowpage+1,10,this.state.resType);
    }
    componentWillMount() {
        this.props.actions.getResList(1,10,this.state.resType);
    }
    componentWillReceiveProps(nextProps) {
       if(nextProps.params.id!==this.state.resType){
           window.scrollTo(0,0)
           this.props.actions.getResList(1,10,nextProps.params.id);
           console.log(nextProps)
           var index = Tool.getQueryString(nextProps.location.search,"index");
           this.setState({
               resType:nextProps.params.id,
               index:index
           })
       }
    }


    render() {
        const {resList,loading} = this.props
        var templete = "";
        if(this.state.index%2!==0){
            templete = <JsRes  list={resList.list} resType={this.state.resType}></JsRes>;
        }else{
            templete = <HtmlRes  list={resList.list} resType={this.state.resType}></HtmlRes>;
        }
        return (
                    <div className="row mtop60" >
                        <div className="col-md-8" >
                            <div >

                                <div className={resList.resType==this.props.params.id?"":"none"}>
                                    {templete}
                                </div>

                                <div className={loading?"none":""}>
                                    <Loading></Loading>
                                </div>
                                <a className={loading?"moreBtn":"none"} onClick={this.moreList.bind(this)}>查看更多</a>
                            </div>


                        </div>
                        <div className="col-md-4 right">
                            <Right_nomal resType={this.state.resType} rightType="readyNum"></Right_nomal>
                            <Right_nomal resType={this.state.resType} rightType="recommend"></Right_nomal>
                            <img className="advertiseImg" src="./img/3.jpg" />
                            <img className="advertiseImg" src="./img/3.jpg" />
                            <img className="advertiseImg" src="./img/3.jpg" />
                            <img className="advertiseImg" src="./img/3.jpg" />
                        </div>
                    </div>
            );

    }

}



export default  connect((state)=>{
    return {
        resList: state.res.resList,
        loading:state.res.isLoading
    }
}, (dispatch)=>{
    const allAction =Object.assign({},htmlResAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(htmlRes)