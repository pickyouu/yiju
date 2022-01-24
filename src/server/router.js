const express = require("express")
const datas = require("./data.js")
const searchDatas = require("./searchData")
const MOCK = require("mockjs")
let Random = MOCK.Random
const router = express.Router()
const detailData = require('./detail.js')


router.get("/home/hot1",(req,res)=>{
  const {city} = req.query
  res.send(datas.hot2.map(item=> ({...item,title:`${city}${item.title}`})))
})

router.get("/home/hot2",(req,res)=>{
  const {city} = req.query
  res.send(datas.hot2.map(item=> ({...item,title:`${city}${item.title}`})))
})
router.get("/data/searchdata",(req,res)=>{
  const {keyword}=req.query
  console.log("search data of :",keyword);
  // res.send(searchDatas)

  res.send({
    hasMore:Random.boolean(3,7,false),
    datas:(MOCK.mock({
      'datas|5':[ {
        
        id:Random.natural(),
        title:Random.string( 5,10 ),
        houseType:Random.string( 5,10 ),
        price:`<span>${Random.float(3000,100000)}</span>`,
        rentType:Random.string(2),
        img:Random.image('800x600', Random.color(), '#FFF', 'png', Random.string(5))
      
    }]
    })).datas
  })
})

router.get("/detail",(req,res)=>{
  let count=1
  console.log('detail id:',req.query.id);
  function getImgs(){
    
    return Random.image('800x600', Random.color(), '#FFF', 'png', Random.ctitle(5))
    
  }

  const data={
    houseType:Random.string("10"),
    imgs:[
      getImgs(),
      getImgs(),
      getImgs(),
      getImgs(),
      getImgs(),
    ],
    info:Random.cparagraph(3),
    price:Random.natural(),
    rentType:Random.string(2),
    title:Random.ctitle(5)
  }
  res.send(data)
})
router.post('/login',(req,res)=>{
  const {userName,pw} = req.body
  console.log(req.body);
  if(userName && pw){
    res.send({
      status:200,
      token:"fes32#24.%3~220-",
      userName
    })
  }else{
    res.send({
      status:400,
      msg:"用户名密码错误"
    })
  }
})

module.exports=router