import React,{useState} from "react";
import {Autoplay} from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default (props)=>{

  return <div>
     <Swiper
     modules={[Autoplay]}
      
      
      autoplay
    >
     {
       props.imgs.map((item,index)=>{
         return <SwiperSlide style={{width:"100%",height:   "200px"}} key={index}><img style={{width:"100%",heihgt:"100%"}} src={item} alt="photo" /></SwiperSlide>
       })
     }
    </Swiper>
    
  </div>
}