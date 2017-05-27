import React from 'react'
import {connect} from 'react-redux'
class TodoList extends React.Component{
  render(){
    return(
      <div className="todo-list">
        <div className="container">
          <ul>
            {this.props.list.map(item=>
              <li className={item.complete?'completed':''} key={item.id}>{item.title}</li>
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
