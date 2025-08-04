const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.router.js');
const cors = require('cors');
const app = express();
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const mongoose = require('mongoose');

app.use(cors({
  origin: ['https://intern-dashboard.onrender.com'], 
  credentials: true
}));
app.use(express.json())
app.use('/api/users', userRoutes);
app.set("PORT",(process.env.PORT || 3000))
app.use(cors())
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb", extended:"true"}))

const start = async()=>{
    const connectionDb = await mongoose.connect(MONGO_URL);

    console.log(`Mongo connceted Db Host: ${connectionDb.connection.host}`)
    const PORT = app.get("PORT")
    app.listen(app.get("PORT"),()=>{
        console.log(`Listening on port ${PORT}`);
    });
}

start();
