// controllers/userController.js
const Utilisateur = require('../models/utilisateur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const data = req.body;
    const user = new Utilisateur(data);
    const salt = bcrypt.genSaltSync(10);
    const cryptepass = await bcrypt.hashSync(data.password, salt);
    user.password = cryptepass;
    
    try {
        const saved = await user.save();
        res.status(200).send(saved);
    } catch (err) {
        res.status(400).send(err);
    }
};

const loginUser = async (req, res) => {
    const data = req.body;
    const user = await Utilisateur.findOne({ email: data.email });

    if (!user) {
        res.status(404).send('email or password invalid!');
    } else {
        const validpassword = bcrypt.compareSync(data.password, user.password);

        if (!validpassword) {
            res.status(401).send('email or password invalid!');
        } else {
            const payload = {
                _id: user._id,
                email: user.email,
                name: user.name
            };

            const token = jwt.sign(payload, '1234567');
            res.status(200).send({ mytoken: token });
        }
    }
};

const getAllUsers = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.find();
        res.send(utilisateur);
    } catch (err) {
        res.send(err);
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const newdata = req.body;

    try {
        const update = await Utilisateur.findByIdAndUpdate({ _id: id }, newdata);
        res.send(update);
    } catch (err) {
        res.send(err);
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteuser = await Utilisateur.findByIdAndDelete({ _id: id });
        res.send(deleteuser);
    } catch (err) {
        res.send(err);
    }
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    updateUser,
    deleteUser
};
