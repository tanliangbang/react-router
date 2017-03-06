import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';

export function setUserInfo(data) {
    return {
        type: actionConstant.SET_USER_INFO,
        userInfo :data
    }
}

export function isShowLogin(isShowLogin) {
    return {
        type: actionConstant.SET_LOGIN_MASK,
        isShowLogin :isShowLogin
    }
}


export const setLoginMask = (isShowLogin) => {
    return dispatch => {
        dispatch(showLogin(isShowLogin))
    }
}

export const login = (username,password) => {
    return dispatch => {
        Tool.post(`/api/users/login`, {username:username,password:password}, (response) => {
           console.log(response)
        }, (error) => {
            console.log('error: ', error)
        });
    }
}

export const loginOut = () => {
  return dispatch => {
    dispatch(setUserInfo({name:'',photo:'',tips:''}))
  }
}
