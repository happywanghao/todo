import React from 'react'
import {connect} from 'react-redux'
import {searchGit} from './actions.js'
import axios from 'axios'
class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(searchGit())
  }
  render(){
    console.log(this.props);
    return (
      <div>22</div>
    )
  }
}
let mapStateToProps=state=>({num:state})
// let MapDispatchToProps=dispatch=>({add:()=>dispatch({type:"VALUE",value:'99999999'})})
export default connect(mapStateToProps)(App)
