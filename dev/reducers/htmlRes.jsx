import * as actionConstant from '../constants/actionConstant';

/**
 * Created by Administrator on 2017/2/14.
 */
// 初始化状态
let initTestList = {
    htmlList:{
        count:0,
        list:[]
    },
    htmlDetail:null
}

export default function htmlRes(state = initTestList, action) {
    switch (action.type) {
        case actionConstant.INIT_HTML_LIST:
            var list = state.htmlList.list.concat(action.list)
            return Object.assign({}, state, {
                htmlList:{
                    count:action.count,
                    list:list
                }
            });


        case actionConstant.INIT_HTML_DETAIL:
            return Object.assign({}, state, {
                htmlDetail:action.htmlDetail
            });
        default : return state;

    }
}