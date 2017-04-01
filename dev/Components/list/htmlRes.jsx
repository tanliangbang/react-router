import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';

export  class htmlRes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list ,actions,resType} = this.props;
        return (
                    <ul className="htmlRes" >
                        {
                            this.props.list.map((item, key) => {
                                return <ListItem resType={resType}  actions={actions} key={key} index={key} {...item} />
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
        var style= {animation: "htmlAnimation 0.5s linear",animationDelay:+parseFloat(this.props.index%10*0.05)+"s",animationFillMode:"both" }
        let item = this.props;
        return (
            <Link to={{pathname:`/resDetail/${item.id}`,query:{resType:this.props.resType}}} style={style}>
                <div  className="testItem row my_class" >
                    <div className="item">
                        <div className="row">
                            <div className="col-md-3 list1_left currImg">
                                <div>
                                    <img  src ={item.content.titleImg} />
                                </div>
                            </div>
                            <div className="col-md-9 list1_right">
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








