import * as actionConstant from '../constants/actionConstant';

/**
 * Created by Administrator on 2017/2/14.
 */
// 初始化状态
let initTestList = {
    communityList:[],
    communityArticleList:[]
}

export default function htmlRes(state = initTestList, action) {
    switch (action.type) {
        case actionConstant.GET_COMMUNITY_LIST:
            return Object.assign({}, state, {
                communityList:action.communityList
            });
        case actionConstant.GET_COMMUNITYARTICLE_LIST:
            return Object.assign({}, state, {
                communityArticleList:action.communityArticleList
            });

        default : return state;

    }
}