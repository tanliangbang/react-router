import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

//todos
import res from './res'

import user from './user'
import comment from './comment'
import right from './right'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
	res,
	user, //用户的一些信息
	comment,
	right,
	form: formReducer,
	routing: routerReducer //整合路由
})

export default rootReducer
