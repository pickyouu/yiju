import city from "./city"
import login from "./login"
import {combineReducers} from "redux"
const allReducers = combineReducers({
  currentCity:city,
  login
})

export default allReducers
