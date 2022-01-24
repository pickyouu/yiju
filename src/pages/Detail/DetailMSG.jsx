import React from "react";
export default (props)=>{
  const {info={}} = props
  
  return <div>
    <p>houseType:{info.houseType}</p>
    <p>info:{info.info}</p>
    <p>price:{info.price}</p>
    <p>rentType:{info.rentType}</p>
    <p>title:{info.title}</p>
    
  </div>
}