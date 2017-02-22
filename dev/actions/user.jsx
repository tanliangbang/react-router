const SET_USER_INFO = 'SET_USER_INFO';
const SET_LOGIN = 'SET_LOGIN';

export function setUserInfo(data) {
  return {
    type: SET_USER_INFO,
    data :data
  }
}

export function setLogin(isShowLogin) {
    return {
        type: SET_LOGIN,
        isShowLogin :isShowLogin
    }
}


export const login = () => {
    return dispatch => {
      dispatch(setUserInfo({name:'bangbang',photo:'aaaa',tips:'1'}))
    }
}

export const loginOut = () => {
  return dispatch => {
    dispatch(setUserInfo({name:'',photo:'',tips:''}))
  }
}
