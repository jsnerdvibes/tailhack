import express from 'express'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

let port = process.env.PORT || 4000

app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.send('server is up')
})

app.get('/script',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','script.js'))
})

app.get('/style',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','style.css'))
})

app.listen(port,()=>{
    console.log("server is up at",port)
})