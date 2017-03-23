import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { Tool, merged } from '../../Tool';

export  class htmlRes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { htmlList ,actions} = this.props;
        return (
                    <ul className="htmlRes" >
                        {
                            this.props.htmlList.list.map((item, key) => {
                                return <ListItem   actions={actions} key={key} index={key} {...item} />
                            })
                        }
                    </ul>
        );
    }

}
//bounceIn animated
class ListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var style= {animation: "htmlAnimation 0.5s linear",animationDelay:+parseFloat(this.props.index*0.2)+"s",animationFillMode:"both" }

        let item = this.props;
        return (
            <Link to={{pathname:`/resDetail/${item.id}`,query:{name:"htmlRes"}}} style={style}>
                <div  className="testItem row my_class" >
                    <div className="item">
                        <div className="row">
                            <div className="col-md-5 list1_left currImg">
                                <div>
                                    <img  src ={item.content.titleImg} />
                                </div>
                            </div>
                            <div className="col-md-7 list1_right">
                                <p className="title">{item.content.title}</p>
                                <p className="content">{item.content.breif}</p>
                                <div className="bottom_left">
                                    阅读量:{item.readyNum}
                                </div>
                                <div className="bottom_right">
                                    {Tool.formatDate(item.createTime)}
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








