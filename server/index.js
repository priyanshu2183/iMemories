const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')


// importing routes
const postRoutes= require( "./routes/Posts.js")
// now we can use all the functions of app in express
const app= express(); 

// POST routes
app.use('/posts',postRoutes);

 
 

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const ConnectionUrl="mongodb+srv://priyanshu:Priyanshu21@cluster0.ohoirst.mongodb.net/"
const PORT=process.env.PORT || 5000;

mongoose.connect(ConnectionUrl).then(()=>app.listen(PORT,()=>{console.log(`Server listening on port ${PORT}`)}))
 .catch((error)=>{
   console.log(error.message);}
 )

   
 