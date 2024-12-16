import express from 'express'
import 'dotenv/config'

const app = express()

let port = process.env.PORT || 4000

app.use(express.static('src'))


app.get('/',(req,res)=>{
    res.send('server is up')
})


app.listen(port,()=>{
    console.log("server is up at",port)
})