import React from 'react'
import store from './redux/store.js'
class Form extends React.Component{
  constructor(){
    super()
  this.handleClick1=this.handleClick1.bind(this)
  }
  handleClick1(e){
    e.preventDefault()
    if(this.input.value){
      store.dispatch({
        type:"ADD_LIST",
        content:this.input.value
      })
    }

    this.input.value=''
  }
  render(){
    return (
      <div className="form">
        <div className="container">
          <form onSubmit={this.handleClick1}>
            <input ref={(item)=>this.input=item} className="text-input" type="text" placeholder="请输入" />
            <input className="submit" type="submit" value=""/>
          </form>
        </div>
      </div>
    )
  }
}

export default Form
