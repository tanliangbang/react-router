//这个叫做action，用于更新reduer中的state
import { getData } from '../utils/fetchData'
import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';


export const initHtmlList = (response) => ({
    type: actionConstant.INIT_HTML_LIST,
    list: response.data.content,
    count:response.data.pageTotal,
})

export const initHtmlDetail = (response) => ({
    type: actionConstant.INIT_HTML_DETAIL,
    htmlDetail: response
})


export const setLoading = (isLoading) => ({
    type: actionConstant.LOADING,
    loading: isLoading
})



export const getHtmlList = (start,size) => {
    return dispatch => {
        Tool.get(`/api/res/getResContentList`, {name:"jsRes",start:start,size:size}, (res) => {
            dispatch(initHtmlList(res))
            dispatch(setLoading(true))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}


export const getHtmlDetail = (id) => {
    return dispatch => {
        Tool.get(`/api/res/getResContentById`, {name:"jsRes",id:id}, (response) => {
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

