import {combineReducers} from 'redux'
const oldState = [
  {title:'找客户谈合作',complete:false,id:1},
  {title:'去运动',complete:true,id:2},
  {title:'去吃饭',complete:false,id:3}
]
const nowState={
  nowState:"ALL"
}
function listReducer(state=oldState,action){
  switch (action.type) {
    case "COMPLETE":
      return state.map(item=>({...item,complete:item.id.toString()===action.id?!item.complete:item.complete}))
    case "ADD_LIST":
      return [...state,{title:action.content,complete:false,id:Date.now()}]
    default:
      return state
  }
}
function setFilter(state=nowState,action){
  switch (action.type) {
    case 'FILTER':
      return {nowState:action.content}
    default:
      return state
  }
}
export default combineReducers({list:listReducer,filter:setFilter})
