import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Tool, merged } from '../../Tool';

export  class CommunityList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className="CommunityList">
               <div className="content">
                   <div className="top">
                       <img className="avatar" src="./../../img/logo.png"/>
                       <span>欧阳小川</span>
                   </div>
                   <p className="title">
                       思念把我洗劫一空
                   </p>
                   <p>
                       思念把我洗劫一空 往事向我逼近﻿﻿ 思念把我洗劫一空﻿﻿ 绕过时光的脸颊﻿﻿ 我找到过去的你﻿﻿﻿﻿ 远方的人﻿﻿ 你快指引我﻿﻿ 这是我尘封的秘密﻿﻿﻿﻿ 月老啊﻿﻿ 让那...
                   </p>
                   <div className="bottom">
                       评论:1222&nbsp;&nbsp;浏览:1555&nbsp;&nbsp;喜欢:1555
                   </div>
               </div>
               <img className="breifImg" src="http://119.29.237.158:3000/public/files/aa1.jpg" />
           </div>
        );
    }

}

export default  CommunityList;








