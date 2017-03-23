//这个叫做action，用于更新reduer中的state
import { getData } from '../utils/fetchData'
import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';


export const initHtmlList = (response,nowpage) => ({
    type: actionConstant.INIT_HTML_LIST,
    list: response.data.content,
    count:response.data.pageTotal,
    nowpage:nowpage
})

export const initjsList = (response,nowpage) => ({
    type: actionConstant.INIT_JS_LIST,
    list: response.data.content,
    count:response.data.pageTotal,
    nowpage:nowpage,
})



export const initHtmlDetail = (response) => ({
    type: actionConstant.INIT_HTML_DETAIL,
    htmlDetail: response
})


export const setLoading = (isLoading) => ({
    type: actionConstant.LOADING,
    loading: isLoading
})



export const getHtmlList = (nowpage,size,name) => {
    var start = (nowpage-1)*size
    return dispatch => {
        dispatch(setLoading(false))
        Tool.get(`/api/res/getResContentList`, {name:name,start:start,size:size}, (res) => {
            if(name=="jsRes"){
                dispatch(initjsList(res,nowpage))
            }else{
                dispatch(initHtmlList(res,nowpage))
            }
            dispatch(setLoading(true))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}


export const getHtmlDetail = (id,name) => {
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

