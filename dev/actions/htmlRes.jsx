//这个叫做action，用于更新reduer中的state
import { getData } from '../utils/fetchData'
import { Tool, merged } from '../Tool';
import * as actionConstant from '../containers/actionConstant';


export const initHtmlList = (response) => ({
    type: actionConstant.INIT_HTML_LIST,
    list: response.content
})

export const initHtmlDetail = (response) => ({
    type: actionConstant.INIT_HTML_DETAIL,
    navMain: response.content
})




export const getHtmlList = () => {
    return dispatch => {
        Tool.get(`/api/res/getResContentList`, {name:"jsRes"}, (response) => {
            dispatch(initHtmlList(response))
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

