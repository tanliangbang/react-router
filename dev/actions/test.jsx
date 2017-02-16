//这个叫做action，用于更新reduer中的state
import { getData } from '../utils/fetchData'
import { Tool, merged } from '../Tool';


export const receiveTest = (response) => ({
    type: 'RECEIVE_TEST',
    navMain: response.content
})


export const getTest = () => {
    return dispatch => {
        Tool.get(`/api/res/getResContentList`, {name:"jsRes"}, (response) => {
            dispatch(receiveTest(response))
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

