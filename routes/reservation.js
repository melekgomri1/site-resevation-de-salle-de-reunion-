const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation');

router.post('/addreservation', reservationController.addreservation);
router.get('/getallreservation', reservationController.getAllreservation);
router.put('/update/:id', reservationController.updatereservation);
router.delete('/delete/:id', reservationController.deletereservation);
module.exports = router;