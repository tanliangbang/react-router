/**
 * Created by admin on 2017/2/14.
 */
import axios from 'axios'

//封装好的get和post接口，调用方法情况action文件

export const getData = (url, param) => {
    return (
        axios.get(`${url}`, {
            params: param
        })
    )
}

export const postData = (url, param) => {
    return (
        axios.post(`${url}`, param)
    )
}