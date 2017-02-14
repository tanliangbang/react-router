//这个叫做action，用于更新reduer中的state
import { getData } from 'utils/fetchData'


const receiveTest = (response) => ({
    type: 'RECEIVE_TEST',
    navMain: response.data
})

//获取服务器的参数，并且返回一个异步的dispatch，dispatch的对象是自己定义的action
export const getTest = () => async (dispatch, getState) => {
    try {
        let response = await getData(`/api/res/getResContentList`)
        await dispatch(receiveTest(response))
    } catch (error) {
        console.log('error: ', error)
    }
}