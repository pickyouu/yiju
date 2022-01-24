import React from 'react'
import { Link} from "react-router-dom"
export default function Item(props) {
  const data = props.data
  
  return (
    
      <Link to={`/detail/${data.id}`}> 
        <img src={data.img} alt="photo" style={{display:"block",width:"90vw",height:"25vh"}}/>
      <div>
      
     <p>{data.title}
      {data.houseType}
      {data.rentType}
      </p>
      
      <p dangerouslySetInnerHTML={{__html:data.price+"元/月"}}></p>
      </div>
      </Link>
    
  )
}
