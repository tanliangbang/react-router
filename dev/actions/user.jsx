import { SET_USER_INFO } from '../containers/constants'

//设置公司名称
export function setUserInfo(data) {
  return {
    type: SET_USER_INFO,
    data :data
  }
}


export const login = () => {
    return dispatch => {
      dispatch(setUserInfo({name:'bangbang',photo:'aaaa',tips:'1111'}))
    }
}

export const loginOut = () => {
  return dispatch => {
    dispatch(setUserInfo({name:'',photo:'',tips:''}))
  }
}
