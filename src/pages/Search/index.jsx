import React,{useState,useCallback} from "react";
import {withRouter} from "react-router-dom"
import SearchList from "./SearchList";
import SearchHeader from "./SearchHeader";
import BackToTop from "./BackToTop";

function Search(props){
  
  
  return (
    <>
    <BackToTop></BackToTop>
    <SearchHeader></SearchHeader>
    <hr />
    <SearchList keyword={props.match.params.keyword}></SearchList>
    
    </>
  )
}

export default withRouter(Search)