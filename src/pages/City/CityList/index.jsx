import React from "react";
import {withRouter} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { change } from "../../../redux/actions/city";
const citys =[
  {id:Math.random(),city:"广州"},
  {id:Math.random(),city:"重庆"},
  {id:Math.random(),city:"成都"},
  {id:Math.random(),city:"深圳"},
  {id:Math.random(),city:"北京"},
  {id:Math.random(),city:"上海"},
]
function  CityList(props) {
  const dispatch = useDispatch()
  const getCity=(city)=>{
    dispatch(change(city))
    props.history.push(`/home`)
  }

  return(
    <div>
      热门城市:
      <ul>
      {
        citys.map(item=>{
          return <li onClick={()=>getCity(item.city)} key={item.id}>{item.city}</li>
        })
      }
      </ul>
    </div>
  )
}
export default withRouter(CityList)