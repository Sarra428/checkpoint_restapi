const express = require ('express');
require('dotenv').config();
const app = express();
const connectDb = require('./config/connectDB');

const studentlistRoute = require('./routes/studentlist');

connectDb();
app.use(express.json());
app.use('/api/studentlist', studentlistRoute);








app.listen(5000, ()=> console.log(`port is running on 5000`))