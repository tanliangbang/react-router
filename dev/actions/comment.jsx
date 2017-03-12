//这个叫做action，用于更新reduer中的state
import { getData } from '../utils/fetchData'
import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';


export const innerComments = (response) => ({
    type: actionConstant.GET_COMMENT_LIST,
    list: response.data.list,
    count:response.data.pageTotal,
})




export const getCommentList = (start:start,size:size) => {
    return dispatch => {
        Tool.get(`/api/comments/commentList`, {start:start,size:size}, (res) => {
            dispatch(innerComments(res))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}




