import express from "express";
import mongoose from "mongoose";
import Cors from 'cors'
import Videos from './dbModel.js'

const app = express()
const port = process.env.PORT || 9000
const connection_url='mongodb+srv://Bunny:<password>@cluster0.c8iyyxf.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())
app.use(Cors())

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

app.get("/",(req,res) => res.status(200).send("tiktok mern clone -- thewebdev"))

app.post('/v2/posts',(req,res)=>{
    const dbVideos =req.body
    Videos.create(dbVideos,(err,data)=>{
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})


app.get('/v2/posts',(req,res)=>{
    Videos.find((err,data)=>{
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.listen(port,() => console.log(`listening on localhost:${port}`))
