import {SET_LOGIN,RESET_LOGIN} from "../constant"

const defaultState={
  login:false,
  userName:""
}
export default (state=defaultState,action)=>{
  switch (action.type) {
    case SET_LOGIN:
      return (state={login:true,userName:action.userName})
    case RESET_LOGIN:
      return (state=defaultState)
    default:
      return state;
  }
}