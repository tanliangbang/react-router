import * as actionConstant from '../constants/actionConstant';

/**
 * Created by Administrator on 2017/2/14.
 */
// 初始化状态
let initTestList = {
    htmlList:{
        count:0,
        list:[],
        nowpage:1,
        pageSize:10,
    },
    jsList:{
        count:0,
        list:[],
        nowpage:1,
        pageSize:10,
    },
    htmlDetail:null
}

export default function htmlRes(state = initTestList, action) {
    switch (action.type) {
        case actionConstant.INIT_HTML_LIST:
/*
            var list = state.htmlList.list.concat(action.list)
*/
            return Object.assign({}, state, {
                htmlList:{
                    count:action.count,
                    list:action.list,
                    nowpage:state.htmlList.resType==action.resType?action.nowpage:1,
                    pageSize:action.pageSize,
                    resType:action.resType
                }
            });

          case actionConstant.INIT_JS_LIST:
            return Object.assign({}, state, {
                jsList:{
                    count:action.count,
                    list:action.list,
                    nowpage:action.nowpage,
                    pageSize:action.pageSize,
                }
            });

        case actionConstant.INIT_HTML_DETAIL:
            return Object.assign({}, state, {
                htmlDetail:action.htmlDetail
            });
        default : return state;

    }
}