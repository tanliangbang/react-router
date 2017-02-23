import './style.css'
import React, { Component, PropTypes } from 'react'
import setMinHeight from '../../Mixins/setMinHeight'
import Tabs from '../../BUI/Tabs'

class Help extends Component{
    constructor(props) {
        super(props);
        // 设置 initial state
    }
    componentDidMount () {
  }
  render() {

      var tabsData = {
          className : 'myTest',
          defaultVal : 0,
          animate : true,
          callBack: function(index,title){ //切换后的回调函数
              console.log("tabs为：",index);
              console.log("title为：",title);
          }
      }


    return (
          <div className="start" >
            <div className="contents">
                <Tabs {...tabsData}>
                    <div title="小桥流水" className='mytabs mytas-c1'>我就是随便写点什么</div>
                    <div title="拆菊东篱" className='mytabs mytas-c2'>拆菊东篱loading...</div>
                    <div title="古道西风" className='mytabs mytas-c2'>古道西风loading...</div>
                    <div title="其他" className='mytabs mytas-c2'>其他loading...</div>
                </Tabs>
            </div>
          </div>
      );
  }
}
//关于我们
module.exports = Help;