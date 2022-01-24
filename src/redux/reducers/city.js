import {INIT_CITY,CHANGE_CITY} from "../constant/index"

const initCity={
  city:"广州"
}

const reducer = (state=initCity,actions)=>{
  switch (actions.type) {
    case INIT_CITY:
      return {city:actions.city}
    case CHANGE_CITY:
      return {city:actions.city} 
    default:
      return state
  }
}
export default reducer