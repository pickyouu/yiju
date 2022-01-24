import api from "../../api/index"
import {useEffect,useState} from "react"
function Datas(props) {
  const [hot1,setHot1]=useState([])
  const [hot2,setHot2]=useState([])
  useEffect(()=>{
    api.getHot1(props.currentCity.city).then(res=>{
      setHot1(res.data)
    })
  },[])
  useEffect(()=>{
    api.getHot2(props.currentCity.city).then(res=>{
      setHot2(res.data)
    })
  },[])
  
  return(
    <div>
      {
        hot1.length<1 ? "loading" : <ul>
          <h3>hot1</h3>
          {
            hot1.map(item=>{
              return <li key={item.id}>{item.title}</li>
            })
          }
        </ul>
      }
      <hr />
      {
        hot2.length<1 ? "loading" : <ul>
          <h3>hot2</h3>
          { 
            hot2.map(item=>{
              return <li key={item.id}>{item.title}</li>
            })
          }
        </ul>
      }
    </div>
  )
}

export default Datas