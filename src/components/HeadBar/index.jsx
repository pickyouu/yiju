import React,{useState,useEffect} from "react";
import {withRouter} from "react-router-dom"
import SearchInput from "../SearchInput";

function HeadBar(props) {
  const handle=()=>{
    props.history.push("/city")
    }
  /* 
  useEffect(()=>{setCurrentCity(props.CurrentCity)},[])
  const handle =()=>{
    props.history.push(`/city/${CurrentCity}`)
  } */
  return(
    <div style={{display:"flex",background:"red",padding:5}}>
      <div onClick={handle} style={{flex:3}}>{props.currentCity} <span>👇</span></div>
      <div style={{flex:8}}>
       <SearchInput></SearchInput>
      </div>
      <div style={{flex:1}}>❀</div>
    </div>
  )
}
export default withRouter(HeadBar)