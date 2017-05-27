import React from 'react'
import store from './redux/store.js'
class Actions extends React.Component{
  constructor(){
    super()
    this.handleClick1=this.handleClick1.bind(this)
  }
  handleClick1(e){
    store.dispatch({type:"FILTER",content:e.target.id})
  }
  render(){
    return (
      <div className="actions">
        <div className="container">
          <div id='ALL' onClick={this.handleClick1} className="list"></div>
          <div id='COMPLETED' onClick={this.handleClick1} className="completed"></div>
        </div>
      </div>
    )
  }
}

export default Actions
