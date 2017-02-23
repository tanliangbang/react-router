import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoadingBox from '../../MTUI/LoadingBox'
import setMinHeight from '../../Mixins/setMinHeight'
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as testAction from '../../actions/test';
import * as userAction from '../../actions/user';
/**
 * (循环列表)
 *
 * @class List
 * @extends {Component}
 */
class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {actions} = this.props;
        return (
            <ul className="index-list" >
                {
                    this.props.list.map((item, index) => {
                        return <ListItem actions={actions} key={item.id} {...item} />
                    })
                }
            </ul>
        );
    }
}

export  class Test extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const { navMain } = this.props
        if (navMain.length === 0) {
            this.props.actions.getTest();
        }


    }
    componentDidMount() {
    }



    render() {
        const { navMain ,actions} = this.props;
        return (
            <div className="start row" >
                <div className="col-lg-8">
                    <List list={navMain} actions = {actions}></List>
                </div>
                <div className="col-lg-4 right">
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
        // 设置 initial state
        this.state = {};
        this.testClick = this.testClick.bind(this)
    }

    testClick() {
      this.props.actions.loginOut();
    }

    render() {
        let item = this.props
        return (
            <div  className="testItem row"  style={{ minHeight: this.state.height+"px"}}>
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
        );
    }
}

const mapStateToProps= function mapStateToProps(state) {
    return { navMain: state.test.navMain }
}
const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
    const allAction =Object.assign({},testAction,userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Test)

