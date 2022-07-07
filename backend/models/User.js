const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Blog = require('../models/Blog');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    blogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    phone: {
        type: Number,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
    }
}
);

module.exports = mongoose.model('User', UserSchema);

