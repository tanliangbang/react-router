import './style.css'
import React from 'react'
import setMinHeight from '../../Mixins/setMinHeight'

const Index = React.createClass({
  mixins:[setMinHeight],
  render: function() {

    return (
        <div className="index pageMg" style={{ minHeight: this.state.height+"px",background:'#27303e'}}>
          <div className="index-box">
            <h1 className="index-head">BANGBANG Vesion1</h1>
          </div>
        </div>
    );
  }
});
//主页
module.exports = Index;