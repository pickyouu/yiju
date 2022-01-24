import React,{useState,useEffect}  from "react";
import {withRouter} from "react-router-dom"

let timer = null
function SearchInput(props){

  let path = props.history.loaction ? props.history.loaction : ""
 
  const [keyWord,setKeyWord]=useState("")
  const handle=(e)=>{
    if(e.key=="Enter" && keyWord!=""){
      props.history.push("/search/"+keyWord)
      setKeyWord("")
    }
  }
  const handle2=(e)=>{
    
   setKeyWord(e.target.value)
  }
 
  return (
    
       <input type="text" placeholder="输入" onKeyUp={handle} value={keyWord} onChange={handle2}/>
    
  )
}
export default withRouter(SearchInput)