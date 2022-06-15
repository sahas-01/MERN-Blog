const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1000
    },
    tags: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

module.exports = mongoose.model('Blog', BlogSchema);