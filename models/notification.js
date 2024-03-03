const mongoose=require('mongoose')
const notification=new mongoose.Schema({
    type:String,
    message:String,
    reservation:{type:mongoose.Schema.Types.ObjectId,ref:'reservation'},
    recipient:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
});
module.exports=mongoose.model('notif',notification);