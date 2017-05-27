import React from 'react'
class Form extends React.Component{
  constructor(){
    super()

  }
  render(){
    return (
      <div className="form">
        <div className="container">
          <form>
            <input className="text-input" type="text" placeholder="请输入" />
            <input className="submit" type="submit" value=""/>
          </form>
        </div>
      </div>
    )
  }
}

export default Form
