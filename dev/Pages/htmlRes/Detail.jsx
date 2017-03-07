import './../../Components/htmlRes/style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as testAction from '../../actions/htmlRes';
import * as userAction from '../../actions/user';


export class Detail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        window.scrollTo(0,0)
        this.props.actions.getHtmlDetail(this.props.params.id);
    }

    render() {
         let  content = {};
         if(this.props.htmlDetail){
             content = this.props.htmlDetail.content
         }

        return(
            <div className="mtop60 row">
                <div className="col-lg-8">
                    <div  dangerouslySetInnerHTML={{__html: content.content}}></div>
                </div>
                <div className="col-lg-4 right">
                    <img className="advertiseImg" src="../img/3.jpg" />
                    <img className="advertiseImg" src="../img/3.jpg" />
                    <img className="advertiseImg" src="../img/3.jpg" />
                    <img className="advertiseImg" src="../img/3.jpg" />
                    <img className="advertiseImg" src="../img/3.jpg" />
                </div>
            </div>

        )
    }
}


const mapStateToProps= function mapStateToProps(state) {

    return { htmlDetail: state.htmlRes.htmlDetail }
}
const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
    const allAction =Object.assign({},testAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Detail)