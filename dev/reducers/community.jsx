import * as actionConstant from '../constants/actionConstant';

/**
 * Created by Administrator on 2017/2/14.
 */
// 初始化状态
let initTestList = {
    communityList:[],
}

export default function htmlRes(state = initTestList, action) {
    switch (action.type) {
        case actionConstant.GET_COMMUNITY_LIST:
            return Object.assign({}, state, {
                communityList:action.communityList
            });

        default : return state;

    }
}