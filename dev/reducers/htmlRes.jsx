import * as actionConstant from '../constants/actionConstant';

/**
 * Created by Administrator on 2017/2/14.
 */
// 初始化状态
let initTestList = {
    htmlList:{
        current: 1,
        list:[]
    },
    htmlDetail:null
}

export default function test(state = initTestList, action) {
    switch (action.type) {
        case actionConstant.INIT_HTML_LIST:


            return Object.assign({}, state, {
                htmlList:{
                    current: 1,
                    list:action.list
                }
            });


        case actionConstant.INIT_HTML_DETAIL:
            return Object.assign({}, state, {
                htmlDetail:action.htmlDetail
            });
        default : return state;

    }
}