import * as actionConstant from '../constants/actionConstant';

/**
 * Created by Administrator on 2017/2/14.
 */
// 初始化状态
let initTestList = {
    resList:{
        count:0,
        list:[],
        nowpage:1,
        pageSize:10,
    },
    menuList:[],
    isLoading:false,
    resDetail:null
}

export default function htmlRes(state = initTestList, action) {
    switch (action.type) {
        case actionConstant.INIT_RESLIST:
            var list = null;
            if(action.nowpage==1){
                list = action.list;
            }else{
                list = state.resList. list.concat(action.list)
            }
            return Object.assign({}, state, {
                resList:{
                    count:action.count,
                    list:list,
                    nowpage:action.nowpage,
                    pageSize:action.pageSize,
                    resType:action.resType
                }
            });



        case actionConstant.INIT_HTML_DETAIL:
            return Object.assign({}, state, {
                resDetail:action.resDetail
            });
        case actionConstant.INIT_MENU:
            return Object.assign({}, state, {
                menuList:action.menuList
            });
        case actionConstant.RES_LOADING:
            return Object.assign({}, state, {
                isLoading:action.isLoading
            });
        default : return state;

    }
}