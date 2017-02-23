import './style.css'
import React, { Component } from 'react'

export default class Tabs extends Component{
    constructor(props) {
        super(props);
        this.showCurrContent = this.showCurrContent.bind(this)
        this.state = {
            defaultVal : this.props.defaultVal
        }
    }

    showCurrContent(e){
        var index = e.currentTarget.dataset.index
        this.setState({
            defaultVal : index
        });
        console.log(this)
    }

    theader(){
         var arr = []
        this.props.children.map(function(elem,index) {
            arr.push(<li onClick={this.showCurrContent}  data-index={index} className={index==this.state.defaultVal?'mt-tabs-active':''} key={index}><a>{elem.props.title}</a> </li>)
        }.bind(this))

        return arr
    }
    tbody(){
        var arr = [];
        this.props.children.map(function(elem,index) {
            arr.push(<div className={index==this.state.defaultVal?'':'content-hidden'} key={index}>{elem} </div>)
        }.bind(this))

        return arr
    }

    render() {
        var animate = ' mt-tabs-animate';
        if(!this.props.animate){
            animate="";
        }
        return(
            <div className={"myTabs " + this.props.className} >
                <ul className="myTabs-header">
                    {this.theader()}
                </ul>
                <div className={"myTabs-content" +animate}>
                    {this.tbody()}
                </div>
            </div>
        )
    }
}
