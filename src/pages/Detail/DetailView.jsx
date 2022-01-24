import React,{useEffect,useState}  from "react";
import { withRouter } from "react-router-dom";
import api from "../../api";
import DetailSwiper from "./DetailSwiper";
import DetailMSG from "./DetailMSG";
export default withRouter(
  (props)=>{
    const [detailData,setDetailData]= useState(null)
    useEffect(()=>{
      api.getDetail(props.id).then(res=>{
        if(res.status=="200"){
          setDetailData(res.data)
        }else{
          console.log('网络请求出错');
        }
      })
    },[props.id])
    const handle =()=>{
      window.history.back()
    }
    return <div>
      <div style={{padding:"5px",backgroundColor:"red",textAlign:"center",display:"flex"}}>
      <span style={{flex:1}} onClick={handle}>{'<'}</span>
      <span style={{flex:9}}>详情页</span>
      </div>
      <DetailSwiper imgs={detailData ? detailData.imgs : []}/>
      <DetailMSG info={detailData || {}}></DetailMSG>
      <button>收藏</button>
      <button>购买</button>
    </div>
  }
)