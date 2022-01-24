import React from "react";
import {withRouter} from "react-router-dom"
function  HeadBar2(props) {
  const handle=()=>{
    props.history.go(-1)
  }
  return(
    <div style={{background:"red",display:"flex"}}>
      <div style={{flex:1,textAlign:"center"}} onClick={handle}>{"<"}</div>
       <div style={{flex:8,textAlign:"center"}}>城市选择</div>
    </div>
  )
}
export default withRouter(HeadBar2)