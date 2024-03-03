const express = require('express');
const router = express.Router();
const notifontroller = require('../controllers/notification');

router.post('/addnotification', notifontroller.addnotification);
router.get('/getallnotifi', notifontroller.getAllnotification);
router.put('/update/:id', notifontroller.updatenotification);
router.delete('/delete/:id', notifontroller.deletenotification);
module.exports = router;