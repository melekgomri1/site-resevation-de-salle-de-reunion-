const mongoose=require('mongoose');
const Meetingroom=mongoose.model('Mettingroom',{
    name:{
        type:String
    },
    capacity:{
        type:Number
    },
    equipment:{
        type:String
    }
})
module.exports=Meetingroom;