
// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { userInfo } from './redux/user.redux'
export default combineReducers({ userInfo })
