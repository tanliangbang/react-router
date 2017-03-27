import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import * as rightAction from '../../actions/right';

export  class right_recommend extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        window.scrollTo(0,0);
        var resType = this.props.resType?this.props.resType:"htmlRes";
        var rightType = this.props.rightType?this.props.rightType:"readyNum";
         if(rightType=="readyNum"){
             this.props.actions.getRightReadyRank(resType)

         }else{
             this.props.actions.getRightRecommend(resType)
         }
    }

    componentWillReceiveProps(nextProps) {
        var resType = this.props.resType?this.props.resType:"htmlRes";
        var rightType = this.props.rightType?this.props.rightType:"readyNum";
        if(nextProps.resType!==this.props.resType){
            if(rightType=="readyNum"){
                this.props.actions.getRightReadyRank(nextProps.resType)

            }else{
                this.props.actions.getRightRecommend(nextProps.resType)
            }
        }
    }

    render() {
        const {recommendList,resType,actions,readyRankList} = this.props;
        if(this.props.rightType=="readyNum"){
            return (
                <div className="right_recommend">
                    <div>
                        阅读排行
                    </div>
                    {
                        readyRankList.map((item, key) => {
                            return  <RightItem resType = {resType} actions={actions} key={key} index={key} {...item} />
                        })
                    }
                </div>
            );
        }else{
            return (
                <div className="right_recommend">
                    <div>
                        推荐排行
                    </div>
                    {
                        recommendList.map((item, key) => {
                            return  <RightItem resType = {resType} actions={actions} key={key} index={key} {...item} />
                        })
                    }
                </div>
            );
        }

    }
}


class RightItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id,content,createTime,resType} = this.props
        var style= {};
        if(resType=="htmlRes"){
            style= {animation: "htmlAnimation 0.5s linear",animationDelay:+parseFloat(this.props.index%10*0.05)+"s",animationFillMode:"both" }
        }else{
            style= {animation: "jsAnimation 0.3s linear",animationDelay:+parseFloat(this.props.index%9*0.05)+"s",animationFillMode:"both" }
        }
        return (
            <Link  className="row" to={{pathname:`/resDetail/${id}`,query:{resType:resType}}} style={style}>
                <div className="col-lg-3">
                    <img src={content.titleImg}/>
                </div>
                <div className="col-lg-9">
                    <p>{content.title}</p>
                    <div className="promit">
                        {content.from} 发表于 {Tool.formatDate(createTime)}
                    </div>
                </div>
            </Link>
        );
    }
}



export default  connect((state)=>{
    return {
        recommendList:state.right.recommendList,
        readyRankList:state.right.readyRankList
    }
}, (dispatch)=>{
    const allAction =Object.assign({},rightAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(right_recommend)






