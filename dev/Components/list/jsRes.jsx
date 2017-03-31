import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';

export  class jsRes extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        const { list ,actions,resType} = this.props;
        return (
            <div className="jsRes-list row" >
                <div className="col-md-4">
                    {
                        this.props.list.map((item, key) => {
                            return key%3==0?<ListItem  resType={resType} actions={actions} key={key} index={key} {...item} />:null
                        })
                    }
                </div>
                <div className="col-md-4">
                    {
                        this.props.list.map((item, key) => {
                            return key%3==1?<ListItem resType={resType}  actions={actions} key={key} index={key} {...item} />:null
                        })
                    }
                </div>
                <div className="col-md-4">
                    {
                        this.props.list.map((item, key) => {
                            return key%3==2?<ListItem resType={resType}  actions={actions} key={key} index={key} {...item} />:null
                        })
                    }
                </div>

            </div>
        );
    }

}
//bounceIn animated
class ListItem extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        let item = this.props;
        var style= {animation: "jsAnimation 0.3s linear",animationDelay:+parseFloat(this.props.index%10*0.05)+"s",animationFillMode:"both" }

        return (
            <Link to={{pathname:`/resDetail/${item.id}`,query:{resType:this.props.resType}}} >
                <div  className="jsItem" style={style}>
                    <div>
                      <img  src ={item.content.titleImg} />
                   </div>
                   <p className="title">{item.content.title}</p>
                   <p className="breif">{item.content.breif}</p>

                  <div className="bottom">
                      <div className="fl">
                          阅读量:{item.readyNum}
                      </div>
                      <div className="fr">
                          {Tool.formatDate(item.createTime)}
                      </div>
                      <br className="clear"/>
                  </div>
                </div>
            </Link>
        );
    }
}

export default  jsRes;








