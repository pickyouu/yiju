import React,{useState} from "react";
import CitySelect from 'react-city-select';
import data from '../data.json';
import {withRouter} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { change } from "../../../redux/actions/city";
function CityLists(props) {
  const [cityDatas,setCityDatas] = useState(data.indexCitys)
  const dispatch=useDispatch()
  function handleSelectCity(cityData) {
    dispatch(change(cityData.name))
    props.history.push(`/home`)
  }
  return (
    <div>
       <CitySelect
        // 传入数据
        data={cityDatas}
        
        // 传入回调
        onSelectItem={handleSelectCity}>
      </CitySelect>
    </div>
  )
}

export default withRouter(CityLists)