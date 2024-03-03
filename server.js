const express=require('express');
require('./config/connect');
const app=express();
app.use(express.json());

const userroutes=require('./routes/utilisateur');
const meetroomroutes=require('./routes/meetingroom');
const reservationroutes=require('./routes/reservation');
const notifroutes=require('./routes/notification');
app.use('/users',userroutes);
app.use('/meetroom',meetroomroutes);
app.use('/reser',reservationroutes);
app.use('/notif',notifroutes);
app.listen(3000,()=>{
    console.log('work server');
})