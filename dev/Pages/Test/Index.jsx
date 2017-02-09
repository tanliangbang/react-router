import './style.css'
import React, { Component, PropTypes } from 'react'
import LoadingBox from '../../MTUI/LoadingBox'
import setMinHeight from '../../Mixins/setMinHeight'
import { Tool, merged } from '../../Tool';



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


export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state ={
            list:[]
        }
    }
    componentDidMount(){
        var _this = this;

        Tool.get('/api/res/getResContentList', {name:"jsRes",start:0,size:10}, (res) => {
            _this.setState({
                list: res.content
            })
        }, () => {
        });
    }
    render() {
        return (
            <div className="start" >
                 <List list = {this.state.list}/>
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
        console.log(currItem)
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





