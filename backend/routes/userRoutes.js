const router = require('express').Router();
const User = require('../models/User');
const userController = require('../controllers/userController');
const fetchUser = require('../middleware/fetchUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//User signup
router.post('/auth', userController.userSignUp);

//User login
router.post('/login', userController.userLogin);

router.get('/getallusers', userController.getAllUsers);


module.exports = router;