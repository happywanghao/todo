import {combineReducers} from 'redux'
const oldState = [
  {title:'找客户谈合作',complete:false,id:1},
  {title:'去运动',complete:true,id:2},
  {title:'去吃饭',complete:false,id:3}
]
function listReducer(state=oldState,action){
  return state
}
export default combineReducers({list:listReducer})