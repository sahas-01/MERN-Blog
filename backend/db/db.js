const mongoose = require('mongoose');

const connectToMongo = () => {
    // console.log(process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI, async () => {
        console.log(process.env.MONGODB_URI);
        await console.log('Connected to MongoDB');
    });

}

module.exports = connectToMongo;

