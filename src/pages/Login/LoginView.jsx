import React,{useRef,useState} from "react";
import api from "../../api";
export default ()=>{
  const [pw,setpw]= useState("")
  const [username,setusername]= useState("")
  const handle =()=>{
    if(!pw)return
    if(!username)return
    //api.login({pw,userName:username}).then(res=>console.log(res),(err)=>{console.log(err);})
  }
  return <div>
    <label>
      <input value={username} type="text" placeholder="用户名" onChange={(e)=>setusername(e.target.value)}/>
    </label>
    <hr />
    <label>
      <input type="password" value={pw}  placeholder="密码" onChange={(e)=>setpw(e.target.value)}/>
    </label>
    <hr />
    <button onClick={handle}>登录</button>
  </div>
}