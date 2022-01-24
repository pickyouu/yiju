import React from "react";
import {useSelector} from "react-redux"
function CurrentCity(props) {
  const currentCity = useSelector(state=>state.currentCity.city)
  return(
    <div style={{textAlign:"center",padding:5}}>
      当前城市:{currentCity}
    </div>
  )
}
export default CurrentCity