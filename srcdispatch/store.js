import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
function rootReducer(state={},action){
  switch (action.type){
    case 'LOGIN':
    return action.user
    default:
    return state
  }
}
let store=createStore(rootReducer,applyMiddleware(thunk))
export default store
