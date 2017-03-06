import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import LoadingBox from '../../MTUI/LoadingBox'
import setMinHeight from '../../Mixins/setMinHeight'
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as htmlResAction from '../../actions/htmlRes';
import * as userAction from '../../actions/user';


export  class htmlRes extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        window.scrollTo(0,0)
        const { htmlList } = this.props
        if (htmlList.list.length === 0) {
            this.props.actions.getHtmlList();
        }


    }
    componentDidMount() {
    }



    render() {
        const { htmlList ,actions} = this.props;
        return (
            <div className="row mtop60" >
                <div className="col-md-8">
                    <ul className="index-list" >
                        {
                            this.props.htmlList.list.map((item, index) => {
                                return <ListItem actions={actions} key={item.id} {...item} />
                            })
                        }
                    </ul>
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



class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        let item = this.props
        return (
            <Link to={`/htmlResDetail/${item.id}`}>
                <div  className="testItem row" >
                    <div className="item">
                        <div class="row">
                            <div className="col-md-5 list1_left">
                                <img className="currImg" src ={item.content.titleImg} />
                            </div>
                            <div className="col-md-7 list1_right">
                                <p className="title">{item.content.title}</p>
                                <p className="content">{item.content.breif}</p>
                                <div className="bottom_left">
                                    阅读量:{item.readyNum}
                                </div>
                                <div className="bottom_right">
                                    2017-2-17
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default  connect((state)=>{
    return { htmlList: state.htmlRes.htmlList }
}, (dispatch)=>{
    const allAction =Object.assign({},htmlResAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(htmlRes)




