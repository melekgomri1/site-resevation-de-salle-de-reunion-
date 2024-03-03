const mongoose=require('mongoose');
const reservation=new mongoose.Schema({
    stratdatetime:Date,
    enddatetime:Date,
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    room:{type:mongoose.Schema.Types.ObjectId,ref:'Mettingroom'},
});
module.exports=mongoose.model('reservation',reservation);