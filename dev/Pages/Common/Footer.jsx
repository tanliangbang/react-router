/**
* footer
* @param : 输入
* @return : 返回
*/
import React from 'react'

const Footer = React.createClass({
  render() {
    return (
        <div className="footer">
            作者：谭亮邦&nbsp;&nbsp;&nbsp;
            QQ：648103576&nbsp;&nbsp;&nbsp;
            程序员技术文章网站 本站展示页用的是react-router-redux 文章管理用的还angular 后端用的是node js
        </div>
    );
  }
});
//关于我们
module.exports = Footer;