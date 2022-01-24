import React,{useState,useEffect} from "react";
import {withRouter} from "react-router-dom"
import SearchInput from "../../components/SearchInput";

const SearchHeader = (props)=>{
  const handle = ()=>{
    window.history.back()
    
  }
  
  return <div>
    <span onClick={handle}>{"< "}</span>
    <SearchInput></SearchInput>
  </div>
}
export default withRouter(SearchHeader)