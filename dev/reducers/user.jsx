import * as actionConstant from '../constants/actionConstant';


//定义方法名称，取个名称，action 内使用一个字符串类型的 type 字段来表示将要执行的动作
//初始化数据
const initialState = {
  userInfo:null,
	SET_LOGINANDREGIST_MASK:'login',
  loginFail:false,
  registFail:false,
  registerState:0,
  showChangeUser:false,
}


export default function user(state = initialState, action) {

	switch(action.type) {
		case actionConstant.SET_USER_INFO:
			return Object.assign({}, state, {
				userInfo:action.userInfo
			});
		case actionConstant.SET_LOGINANDREGIST_MASK:
			return Object.assign({}, state, {
				loginOrRegist:action.loginOrRegist
			});
		case actionConstant.SHOW_CHANGE_USER:
			return Object.assign({}, state, {
				showChangeUser:action.showChangeUser
			});
		case actionConstant.SET_LOGIN_FAIL:
			return Object.assign({}, state, {
				loginFail:action.loginFail
			});
		case actionConstant.SET_REGIST_FAIL:
			return Object.assign({}, state, {
				registFail:action.registFail
			});
		case actionConstant.SET_REGISTER_FAIL:
			return Object.assign({}, state, {
				registerState:action.registerState
			});
		default : return state;
	}
}
