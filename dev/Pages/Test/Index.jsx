import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoadingBox from '../../MTUI/LoadingBox'
import setMinHeight from '../../Mixins/setMinHeight'
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as testAction from '../../actions/test';
import * as user from '../../actions/user';
/**
 * (循环列表)
 *
 * @class List
 * @extends {Component}
 */
class List extends Component {
    constructor(props) {
        super(props);
        // 设置 initial state
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
        this.props.actions.test()
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
            <div className="start" >
                 <List list={navMain} actions = {actions}></List>
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
       console.log(this)
    }

    render() {
        let currItem = this.props
        return (
            <div  className="testItem"  style={{ minHeight: this.state.height+"px"}}>
                    <div className="item">
                        <div className="itemLeft">
                            <img  className="img"  src ={currItem.content.titleImg}/>
                        </div>
                        <div className="itemRight">
                            <p className="title">{currItem.content.title}</p>
                            <p className="content">{currItem.content.breif}</p>
                            <div className="bottom_left">
                                阅读量:12
                            </div>
                            <div  className="bottom_right" onClick={this.testClick}>
                                 点赞
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
    return {
        actions: bindActionCreators({testAction}, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Test)


