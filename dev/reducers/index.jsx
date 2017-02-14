import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//todos
import test from './test'

import user from './user'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
	test,
	user, //用户的一些信息
	routing: routerReducer //整合路由
})

export default rootReducer