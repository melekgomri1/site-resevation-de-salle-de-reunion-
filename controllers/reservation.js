const reservation=require('../models/reservation')
const addreservation=async(req,res)=>{
    data=req.body;
    reservation1=new reservation(data);
    reservation1.save()
    .then(
        (savedreservation)=>{
            res.status(200).send(savedreservation)
        }
    ).catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
}
const getAllreservation = async (req, res) => {
    try {
        const reservation1= await reservation.find();
        res.send(reservation1);
    } catch (err) {
        res.send(err);
    }
};
const updatereservation = async (req, res) => {
    const id = req.params.id;
    const newdata = req.body;

    try {
        const update = await reservation.findByIdAndUpdate({ _id: id }, newdata);
        res.send(update);
    } catch (err) {
        res.send(err);
    }
};

const deletereservation = async (req, res) => {
    const id = req.params.id;

    try {
        const deletereser = await reservation.findByIdAndDelete({ _id: id });
        res.send(deletereser);
    } catch (err) {
        res.send(err);
    }
};


module.exports={
    addreservation,
    getAllreservation,
    updatereservation,
    deletereservation
};