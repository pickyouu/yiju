import axios from "axios"
import login from "../redux/reducers/login"
import { param } from "../server/router"

const base={
  baseurl:"http://localhost:5566",
  homehot1:"/api/home/hot1",
  homehot2:"/api/home/hot2",
  searchdata:"/api/data/searchdata",
  detail:'/api/detail',
  login:"/api/login"
}

const api ={
  getHot1:(city)=>{
    return axios(base.baseurl+base.homehot1+"",{
      params:{
        city
      }  
    })
  },
  getHot2:(city)=>{
    return axios(base.baseurl+base.homehot2+"",{
      params:{
        city
      }
    })
  },
  getSearchData:(params)=>{
    return axios(base.baseurl+base.searchdata,{
      params
    })
  },
  getDetail(id){
    return axios(base.baseurl+base.detail,{
      params:{
        id
      }
    })
  },
  login(params){
    
    return axios.post(base.baseurl+base.login,params)
  }

}
export default api