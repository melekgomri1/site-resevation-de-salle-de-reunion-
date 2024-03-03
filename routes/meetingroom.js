const express = require('express');
const router = express.Router();
const meetroomController = require('../controllers/meetingroom');

router.post('/addmeetroom', meetroomController.addmeetingroom);
router.get('/getallroom', meetroomController.getAllRoom);
router.put('/update/:id', meetroomController.updatemeetingroom);
router.delete('/delete/:id', meetroomController.deletemeetingroom);
module.exports = router;