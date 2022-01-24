import React from "react";

export default ()=>{
  const handle = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  }
  return <div className="backtotop" style={{
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    border:"1px solid black",
    position:"fixed",
    bottom:"30px",
    right:"30px",
    textAlign:"center",
    lineHeight:"50px"
  }}
  onClick={handle}
  >
    top
  </div>
}

