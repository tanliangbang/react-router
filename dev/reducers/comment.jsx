import * as actionConstant from '../constants/actionConstant';


//定义方法名称，取个名称，action 内使用一个字符串类型的 type 字段来表示将要执行的动作
//初始化数据
const initialState = {
    commentList:{
        count:0,
        list:[]
    },
}


export default function comment(state = initialState, action) {
    switch(action.type) {
        case actionConstant.GET_COMMENT_LIST:
            return Object.assign({}, state, {
                commentList:{
                    count:action.count,
                    list:action.list
                }
            });
        default : return state;
    }
}
