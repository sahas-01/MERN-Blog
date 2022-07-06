const User = require('../models/User');
const Blog = require('../models/Blog');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//User signup controller here
const userSignUp = async (req, res) => {
    // const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(401).json({
                message: 'User already exists, please login',
                success: false,
            });
        }
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            blogs: []
        });
        const payload = {
            user: {
                id: user.id,
            }
        }

        console.log(payload);
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn:
                '20d'
        });
        res.status(200).json({
            message: 'User created successfully',
            success: true,
            token,
        });

    }
    catch (err) {
        res.status(500).json({
            message: 'Error creating user',
            success: false,
        });
        console.log(err);
    }
}


//User login controller here
const userLogin = async (req, res) => {
    // const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({
                message: 'Invalid email or password, please try again',
                success: false,
            });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid password, please try again!',
                success: false,
            });
        }
        const payload = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '20d' });
        res.status(200).json({
            message: 'User logged in successfully',
            success: true,
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                blogs: user.blogs
            }
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error logging in user',
            success: false,
        });
        console.log(err);
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: 'Users retrieved successfully',
            success: true,
            users
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error retrieving users',
            success: false,
        });

    }
}

//Get a user by their id
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            message: 'User retrieved successfully',
            success: true,
            user
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error retrieving user',
            success: false,
        });
    }
}





module.exports = { userSignUp, getAllUsers, userLogin , getUserById };