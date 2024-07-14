import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
const app=express()
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
  console.log('mongoDB is connected')
}).catch(err=>{console.log(err)})
app.listen(3000,()=>{
  console.log('Server is running on port 3000')
})
//E64pcTM0nnWEcxD6