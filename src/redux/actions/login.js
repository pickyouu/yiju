import {SET_LOGIN,RESET_LOGIN} from "../constant"

export function setLogin(userName){
  return {
    type:SET_LOGIN,
    userName
  }
}

export function resetLogin(){
  return{
    type:RESET_LOGIN
  }
}