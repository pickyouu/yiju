import { INIT_CITY,CHANGE_CITY } from "../constant";

export const init = (city)=> ({type:INIT_CITY,city})
export const change=(city)=>({type:CHANGE_CITY,city})