const express=require('express');
// const receipeRouter = require('./routes/receipeRoute');
const authRouter = require('./routes/authRoutes');
const cookieParser=require('cookie-parser');


//creating Express Application
const app=express();

//Add middleware to parse JSON

app.use(express.json());
app.use(cookieParser());


// app.use('/api/v1/receipes',receipeRouter);
app.use('/api/v1/auth',authRouter);


//Listen Request



module.exports=app;
