import React from "react";
import {NavLink} from "react-router-dom"
import "./index.less"
function FootBar(props) {
  console.log("footer");
  return(
    <div style={{display:"flex" ,position:"absolute",left:0,right:0,bottom:0,textAlign:"center"}} >
      <div style={{flex:1}}><NavLink to="/home">首页</NavLink></div>
      <div style={{flex:1}}><NavLink to="/shop">商店</NavLink></div>
      <div style={{flex:1}}><NavLink to="/life">服务</NavLink></div>
      <div style={{flex:1}}><NavLink to="/user">用户</NavLink></div>
      
      
      
    </div>
  )
}
export default FootBar