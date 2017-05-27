import React from 'react'
import store from './redux/store.js'
import {connect} from 'react-redux'
class TodoList extends React.Component{
  constructor(){
    super()
    this.handleClick1=this.handleClick1.bind(this)
  }
  handleClick1(e){
    console.log(e.target.id)
    store.dispatch({type:'COMPLETE',id:e.target.id})
  }
  render(){
    return(
      <div className="todo-list">
        <div className="container">
          <ul>
            {this.props.list.map(item=>
              <li onClick={this.handleClick1} className={item.complete?'completed':''} id={item.id} key={item.id}>{item.title}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  list:state.list
})

export default connect(mapStateToProps)(TodoList)
