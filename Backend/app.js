const express = require('express')
const cors = require('cors')
const dotenv= require('dotenv')
const mongoose = require('mongoose')

const app = express()
dotenv.config()

app.use(express.json());  //parsing data
app.use(cors())


 const db = async () =>{
    await mongoose.connect(process.env.mongoURI)
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port http://localhost:${process.env.PORT} `);
        console.log("Connected to mongoDB");
    })

 }

app.get("/" ,(req,res) =>{
    res.send("Hello World");
})


db();