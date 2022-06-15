const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/userRoutes');
require('dotenv').config();
app.use(cors());
const connectToMongo = require('./db/db');
connectToMongo();
app.use(express.json());


app.use('/api/v1/user', routes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}
);
