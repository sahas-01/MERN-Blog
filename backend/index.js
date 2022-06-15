const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();
app.use(cors());
const connectToMongo = require('./db/db');
connectToMongo();
app.use(express.json());


app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}
);
