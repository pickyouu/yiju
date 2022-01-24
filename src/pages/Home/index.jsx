import React,{useState,useEffect} from "react";
import HeadBar from "../../components/HeadBar";
import Swiper from "../../components/Swiper";
import Datas from "./Datas";
import {connect} from "react-redux"

function Home(props) {
  
  
  return (
    <div>
      
      <HeadBar currentCity={props.currentCity.city}></HeadBar>
      <Swiper></Swiper>
      <Datas currentCity={props.currentCity}></Datas>
    </div>
  )
}
export default connect((state)=>(
  {
    currentCity:state.currentCity
  }
),{

})(Home)