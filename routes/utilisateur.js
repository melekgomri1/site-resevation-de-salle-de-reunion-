// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/utilisateur');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/getall', userController.getAllUsers);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
