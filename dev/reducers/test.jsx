/**
 * Created by Administrator on 2017/2/14.
 */
// 初始化状态
let initNavList = {
    navMain: [0,2,3,4,4],
    current: 1
}

export default function test(state = initNavList, action) {
    switch (action.type) {
        case 'RECEIVE_TEST':
            return {
            navMain: action.navMain
        }

        default : return state;

    }
}