import React, { useCallback, useEffect, useRef } from "react";
import api from "../../../api";
const winH = document.documentElement.clientHeight //获取设备高度
const LoadMore = (props) => {
  const more = useRef()
  var timer = null
  const wScroll = useCallback( () => {
    if (more.current) {
      if (more.current.getBoundingClientRect().top < winH) {//getBoundingClientRect方法可获取节点距离窗口的位置
        handle()()
      }
    }
  },[])
  //防抖函数
  function handle(params) {
    return function () {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        api.getSearchData({keyword:props.keyword})
        .then(res=>{
          props.getMore(res.data)
        }).catch(err=>{
          console.log(err);
        })
      }, 500);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",wScroll)
    return ()=>{
      window.removeEventListener("scroll",wScroll)
    }
  }, [])

  return (
    <>
      {
        props.more ?
          <div ref={more} style={{ textAlign: "center" }}>
            load more...
          </div> :
          "我是有底线的---"
      }
    </>
  )
}

export default LoadMore