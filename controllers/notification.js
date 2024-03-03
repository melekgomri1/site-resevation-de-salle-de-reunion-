const notification = require('../models/notification');
const addnotification=async(req,res)=>{
    data=req.body;
    notif=new notification(data);
    notif.save()
    .then(
        (savednotification)=>{
            res.status(200).send(savednotification)
        }
    ).catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
}
const getAllnotification = async (req, res) => {
    try {
        const notif= await notification.find();
        res.send(notif);
    } catch (err) {
        res.send(err);
    }
};
const updatenotification = async (req, res) => {
    const id = req.params.id;
    const newdata = req.body;

    try {
        const update = await notification.findByIdAndUpdate({ _id: id }, newdata);
        res.send(update);
    } catch (err) {
        res.send(err);
    }
};

const deletenotification = async (req, res) => {
    const id = req.params.id;

    try {
        const deletenotification = await notification.findByIdAndDelete({ _id: id });
        res.send(deletenotification);
    } catch (err) {
        res.send(err);
    }
};


module.exports={
    addnotification,
    getAllnotification,
    updatenotification,
    deletenotification
};