import './style.css'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoadingBox from '../../MTUI/LoadingBox'
import setMinHeight from '../../Mixins/setMinHeight'
import { Tool, merged } from '../../Tool';
import { getData, postData } from '../../utils/fetchData'
import * as testAction from '../../actions/test';


const mapStateToProps= function mapStateToProps(state) {
    return { navMain: state.test.navMain }
}

const  mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(testAction, dispatch) }
}




/**
 * (循环列表)
 *
 * @class List
 * @extends {Component}
 */
class List extends Component {
    render() {
        return (
            <ul className="index-list">
                {
                    this.props.list.map((item, index) => {
                        return <ListItem key={item.id} {...item} />
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
     let curr =  this.props.actions.getTest();
     console.log(curr)

    }
    componentDidMount() {
        console.log(this.props)

    }

    render() {
        return (
            <div className="start" >
               ssssssssssssssss
            </div>
        );
    }

}



class ListItem extends React.Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {

        };

    }


    render() {
        var currItem = this.props
        return (
            <div  className="index-Item" style={{ minHeight: this.state.height+"px"}}>
                <div >
                    <div class="row">
                        <div >
                            <img  src ="{currItem.content.titleImg}"/>
                        </div>
                        <div>
                            <p class="title">{currItem.content.title}</p>
                            <p class="content">{currItem.content.breif}</p>
                            <div class="bottom_left">
                                阅读量:12
                            </div>
                            <div class="bottom_right">
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Test)


