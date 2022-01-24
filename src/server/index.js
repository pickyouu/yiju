const express = require("express")
const cors = require("cors")
const router = require("./router")
const bodyParser = require("body-parser")

const app  = express()
app.use(cors())
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use("/api",router)

app.listen(5566,()=>{
  console.log('服务器5566 open');
})