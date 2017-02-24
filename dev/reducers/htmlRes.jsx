import * as actionConstant from '../containers/actionConstant';

/**
 * Created by Administrator on 2017/2/14.
 */
// 初始化状态
let initTestList = {
    htmlList:{
        current: 1,
        list:[]
    },
    htmlDetail:{}
}

export default function test(state = initTestList, action) {
    switch (action.type) {
        case actionConstant.INIT_HTML_LIST:
            return {
                htmlList:{
                    current: 1,
                    list:action.list
                }
        }

        default : return state;

    }
}