import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import connectToDatabase from './config/db.js';

const app=express()
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

connectToDatabase();

app.get('/',(req,res)=>{ 
    res.send("This is a stack overflow clone API")
}) 

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

const PORT=process.env.PORT||5000

 app.listen(PORT,()=>{
    console.log(`app running on http://localhost:${PORT}`)
 })