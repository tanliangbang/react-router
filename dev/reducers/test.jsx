/**
 * Created by Administrator on 2017/2/14.
 */
// 初始化状态
let initTestList = {
    navMain: [],
    current: 1
}

export default function test(state = initTestList, action) {
    switch (action.type) {
        case 'RECEIVE_TEST':
            return {
            navMain: action.navMain
        }

        default : return state;

    }
}