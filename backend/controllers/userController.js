const User = require('../models/User');
//Add a user to the database
const addUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    try {
        const users = await User.create({ name, email, password });
        res.status(201).json({
            message: 'User created successfully',
            success: true,
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error creating user',
            success: false,
        });

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

module.exports = { addUser, getAllUsers };