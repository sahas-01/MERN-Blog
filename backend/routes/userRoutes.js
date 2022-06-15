const router = require('express').Router();
const User = require('../models/User');
const userController = require('../controllers/userController');

//Add a user to the database
router.post('/auth', userController.addUser);

router.get('/getallusers', userController.getAllUsers);


module.exports = router;