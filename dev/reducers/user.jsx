import * as actionConstant from '../constants/actionConstant';


//定义方法名称，取个名称，action 内使用一个字符串类型的 type 字段来表示将要执行的动作
//初始化数据
const initialState = {
  userInfo:null,
  isShowLogin:false,
  loginFail:false,
  registerState:0,
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
		case actionConstant.SET_LOGIN_FAIL:
			return Object.assign({}, state, {
				loginFail:action.loginFail
			});
		case actionConstant.SET_REGISTER_FAIL:
			return Object.assign({}, state, {
				registerState:action.registerState
			});
		default : return state;
	}
}
