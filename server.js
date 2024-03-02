const express=require('express');
require('./config/connect');
const app=express();
app.use(express.json());

const userroutes=require('./routes/utilisateur');
app.use('/users',userroutes);
app.listen(3000,()=>{
    console.log('work server');
})