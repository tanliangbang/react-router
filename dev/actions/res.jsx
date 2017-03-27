//这个叫做action，用于更新reduer中的state
import { getData } from '../utils/fetchData'
import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';



export const initRes = (response,nowpage,name) => ({
    type: actionConstant.INIT_RESLIST,
    list: response.data.content,
    count:response.data.pageTotal,
    resType:name,
    nowpage:nowpage,
})



export const initHtmlDetail = (response) => ({
    type: actionConstant.INIT_HTML_DETAIL,
    resDetail: response
})


export const setLoading = (isLoading) => ({
    type: actionConstant.LOADING,
    loading: isLoading
})



export const getResList = (nowpage,size,name) => {
    var start = (nowpage-1)*size
    return dispatch => {
        dispatch(setLoading(false))
        Tool.get(`/api/res/getResContentList`, {name:name,start:start,size:size}, (res) => {
            dispatch(initRes(res,nowpage,name))
            dispatch(setLoading(true))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}


export const getResDetail = (id,name) => {
    return dispatch => {
        Tool.get(`/api/res/getResContentById`, {name:name,id:id}, (response) => {
            dispatch(initHtmlDetail(response.data[0]))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}


export const test = () => {
    return dispatch => {
       console.log("点赞成功！")
    }
}

