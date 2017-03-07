import './../../Components/htmlRes/style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

export  class htmlRes extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props)
        const { List ,actions} = this.props;
        return (
                    <ul className="index-list" >
                        {
                            this.props.list.map((item, index) => {
                                return <ListItem  actions={actions} key={item.id} {...item} />
                            })
                        }
                    </ul>
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
                        <div className="row">
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

export default  htmlRes;








