import * as actionConstant from '../constants/actionConstant';


//定义方法名称，取个名称，action 内使用一个字符串类型的 type 字段来表示将要执行的动作
//初始化数据
const initialState = {
  userInfo:{},
  isShowLogin:false
}


export default function user(state = initialState, action) {
	switch(action.type) {
		case actionConstant.SET_USER_INFO:
			return Object.assign({}, state, {
				userInfo:action.userInfo
			});
		case actionConstant.SET_LOGIN_MASK:
			return Object.assign({}, state, {
				isShowLogin:action.isShowLogin
			});
		default : return state;
	}
}
