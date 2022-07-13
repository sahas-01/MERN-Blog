const router = require('express').Router();
const User = require('../models/User');
const userController = require('../controllers/userController');
const fetchUser = require('../middleware/fetchUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const parser = require('../middleware/cloudinary.config.js');
//User signup
router.post('/auth', userController.userSignUp);

//User login
router.post('/login', userController.userLogin);

router.get('/getallusers', userController.getAllUsers);

router.get('/getuser/:id', userController.getUserById);


module.exports = router;