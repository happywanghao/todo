import React from 'react';
import TodoList from './TodoList.js'
const Header=()=>(
  <div className='header'>TODO</div>
)

const Form=()=>(
  <div className='form'>form</div>
)
const Actions=()=>(
  <div className='action'>actions</div>
)
class Main extends React.Component{
  render(){
    return (
      <div className='main'>
        <Header/>
        <TodoList/>
        <Form/>
        <Actions/>
      </div>
    )
  }
}
export default Main
