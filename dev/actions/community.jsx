//这个叫做action，用于更新reduer中的state
import { getData } from '../utils/fetchData'
import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';



export const initCommunityList = (res) => ({
    type: actionConstant.GET_COMMUNITY_LIST,
    communityList: res.data,
})


export const getCommunityList = () => {
    return dispatch => {
        Tool.get(`/api/res/getResList`, {res_type:"community"}, (res) => {
            dispatch(initCommunityList(res))
        }, (error) => {
            console.log('error: ', error)
        });
    }
}


export const publishArticle = (title,breif,url,content,uid) => {
    var content = {title:title,titleImg:url,from:uid,breif:breif,content:content}
    return dispatch => {
        Tool.post(`/api/res/addResContent`, {onLine:"1",content:JSON.stringify(content),name:"javacommunity"}, (res) => {
             console.log(res)
        }, (error) => {
            console.log('error: ', error)
        });
    }
}





