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

export function loginFail(isFail) {
    return {
        type: actionConstant.SET_LOGIN_FAIL,
        loginFail :isFail
    }
}

export function registerFail(isFail) {
    return {
        type: actionConstant.SET_REGISTER_FAIL,
        registerFail :isFail
    }
}


export const setLoginMask = (isShowLogin) => {
    return dispatch => {
        dispatch(showLogin(isShowLogin))
    }
}

export const login = (username,password) => {
    return dispatch => {
        Tool.post(`/api/users/login`, {username:username,password:password}, (res) => {
            if(res.statusCode==200){
               dispatch(setUserInfo(res.data))
               dispatch(isShowLogin(false))
            }else if(res.statusCode==500) {
                dispatch(loginFail(true));
                setTimeout(()=>{
                    dispatch(loginFail(false));
                },2000)
            }
        }, (error) => {
            console.log('error: ', error)
        });
    }
}


export const register = (user) => {
    return dispatch => {
        Tool.post(`/api/users/register`, user, (res) => {
            if(res.statusCode==200){
                registerFail(false)
            }else if(res.statusCode==500) {
                registerFail(true)
            }
        }, (error) => {
            console.log('error: ', error)
        });
    }
}

export const getUserInfo = () => {
    return dispatch => {
        Tool.get(`/api/users/getUserInfo`, {}, (res) => {
            if(res.statusCode==200){
                dispatch(setUserInfo(res.data))
            }
        }, (error) => {
            console.log('error: ', error)
        });
    }
}


export const loginOut = () => {
  return dispatch => {
      Tool.get(`/api/users/loginOut`, {}, (res) => {
          if(res.statusCode==200){
              dispatch(setUserInfo(null))
          }
      }, (error) => {
          console.log('error: ', error)
      });
  }
}
