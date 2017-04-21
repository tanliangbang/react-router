import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';

export function setUserInfo(data) {
    return {
        type: actionConstant.SET_USER_INFO,
        userInfo :data
    }
}

export function setLoading(isLoading) {
    return {
        type: actionConstant.LOADING,
        loading :isLoading
    }
}

export function showLoginOrRegist(loginOrRegist) {
    return {
        type: actionConstant.SET_LOGINANDREGIST_MASK,
        loginOrRegist :loginOrRegist
    }
}

export function setChangeUser(showChangeUser) {
    return {
        type: actionConstant.SHOW_CHANGE_USER,
        showChangeUser :showChangeUser
    }
}



export function loginFail(isFail) {
    return {
        type: actionConstant.SET_LOGIN_FAIL,
        loginFail :isFail
    }
}


//sate 1 注册成功 2  用户名已存在  3 注册失败
export function registerFail(isFail) {
    return {
        type: actionConstant.SET_REGIST_FAIL,
        registFail :isFail
    }
}


export const showChangeUser = (showChangeUser) => {
    return dispatch => {
        dispatch(setChangeUser(showChangeUser))
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
               dispatch(showLoginOrRegist(false))
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

export const changeUserInfo = (user) => {
    return dispatch => {
        Tool.post(`/api/users/changeUserInfo`, user, (res) => {
            if(res.statusCode==200){
                dispatch(setUserInfo(res.data))
                dispatch(setChangeUser(false))
            }
        }, (error) => {

        });
    }
}


export const register = (username,password) => {
    return dispatch => {
        Tool.post(`/api/users/register`,{username:username,password:password} , (res) => {
            if(res.statusCode==200){
                dispatch(setUserInfo(res.data))
                dispatch(showLoginOrRegist(false))
            }else if(res.statusCode==511) {
                dispatch(registerFail(true))
            }
        }, (error) => {
               dispatch(registerFail(true))
        });
    }
}

export const getUserInfo = () => {
    return dispatch => {
        Tool.get(`/api/users/getUserInfo`, {}, (res) => {
            if(res.statusCode==200){
                console.log(res);
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
