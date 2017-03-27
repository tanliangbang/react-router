//这个叫做action，用于更新reduer中的state
import { getData } from '../utils/fetchData'
import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';




export const initRightRcommend = (res) => ({
    type: actionConstant.RIGHT_RECOMMEND,
    recommendList: res.data,
})

export const initRightReadyRank = (res) => ({
    type: actionConstant.RIGHT_READYRANK,
    readyRankList: res.data,
})


export const getRightRecommend = (name) => {
    return dispatch => {
        Tool.get(`/api/res/recommend`, {name:name,size:5}, (res) => {
            dispatch(initRightRcommend(res))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}


export const getRightReadyRank = (name) => {
    return dispatch => {
        Tool.get(`/api/res/readyRank`, {name:name,size:5}, (res) => {
            dispatch(initRightReadyRank(res))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}





