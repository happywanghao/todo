import axios from 'axios'
function searchGit(){
  return dispatch=>(
    axios.get('https://api.github.com/users/happywanghao')
    .then(res=>dispatch({type:'LOGIN',user:res.data}))
  )
}
export {searchGit}
