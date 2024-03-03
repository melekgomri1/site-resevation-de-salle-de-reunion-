const Meetingroom=require('../models/meetingroom')
const addmeetingroom=async(req,res)=>{
    data=req.body;
    meetrom=new Meetingroom(data);
    meetrom.save()
    .then(
        (savedmeetingroom)=>{
            res.status(200).send(savedmeetingroom)
        }
    ).catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
}
const getAllRoom = async (req, res) => {
    try {
        const Meetingroom1= await Meetingroom.find();
        res.send(Meetingroom1);
    } catch (err) {
        res.send(err);
    }
};
const updatemeetingroom = async (req, res) => {
    const id = req.params.id;
    const newdata = req.body;

    try {
        const update = await Meetingroom.findByIdAndUpdate({ _id: id }, newdata);
        res.send(update);
    } catch (err) {
        res.send(err);
    }
};

const deletemeetingroom = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteuser = await Meetingroom.findByIdAndDelete({ _id: id });
        res.send(deleteuser);
    } catch (err) {
        res.send(err);
    }
};


module.exports={
    addmeetingroom,
    getAllRoom,
    updatemeetingroom,
    deletemeetingroom
};