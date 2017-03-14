//这个叫做action，用于更新reduer中的state
import { getData } from '../utils/fetchData'
import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';


export const innerComments = (response) => ({
    type: actionConstant.GET_COMMENT_LIST,
    list: response.data.list,
    count:response.data.pageTotal,
})


export const commentsSuccess = () => ({
    type: actionConstant.COMMENT_SUCCESS,
    commentSuccess: true,
})


export const getCommentList = (topic_id,start:start,size:size) => {
    return dispatch => {
        Tool.get(`/api/comments/commentList`, {topic_id:topic_id,start:start,size:size}, (res) => {
            dispatch(innerComments(res))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}

export const comment = (topic_id,content,to_uid,reply_id) => {
    return dispatch => {
        Tool.post(`/api/comments/comment`, {topic_id:topic_id,content:content,to_uid:to_uid,reply_id:reply_id}, (res) => {
            dispatch(commentsSuccess())
            dispatch(getCommentList(topic_id))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}





