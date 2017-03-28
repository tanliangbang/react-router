import * as actionConstant from '../constants/actionConstant';


//定义方法名称，取个名称，action 内使用一个字符串类型的 type 字段来表示将要执行的动作
//初始化数据
const initialState = {
    recommendList:[],
    readyRankList:[],
    recommentLoading:false,
    readyRankLoading:false,
}


export default function user(state = initialState, action) {

    switch(action.type) {
        case actionConstant.RIGHT_RECOMMEND:
            return Object.assign({}, state, {
                recommendList:action.recommendList
            });
        case actionConstant.RIGHT_READYRANK:
            return Object.assign({}, state, {
                readyRankList:action.readyRankList
            });
        case actionConstant.RECOMMED_LOADING:
            return Object.assign({}, state, {
                recommentLoading:action.recommentLoading
            });
        case actionConstant.READYRANK_LOADING:
            return Object.assign({}, state, {
                readyRankLoading:action.readyRankLoading
            });
        default : return state;
    }
}