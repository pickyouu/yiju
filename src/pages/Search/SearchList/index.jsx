import React,{useEffect,useState} from "react";
import api from "../../../api";
import Item from "./Item"
import LoadMore from "./LoadMore";

function SearchList(props){
  const [searchData,setSearchData]=useState([])
  const [more,setMore]=useState(true)
  const handle =(data)=>{
    
    setSearchData((state)=>{
      return [...state,...data.datas]
    })
    setMore(data.hasMore)
  }
  useEffect(()=>{
    api.getSearchData({keyword:props.keyword})
    .then(res=>{
      if(res.status==200){
        setSearchData(res.data.datas)
        setMore(res.data.hasMore)
      }
    }).catch(err=>{
      console.log(err);
    })
    return ()=>{
      
    }
  },[props.keyword])

  return (
    <div>
      {
        searchData.length>0 ?
        <>
          {
            searchData.map((item,index)=><Item data={item} key={index}></Item>)
          }
          <LoadMore more={more} getMore={handle} keyword={props.keyword}></LoadMore>
        </>
        : "loading"

      }
      
    </div>
  )
}

export default SearchList