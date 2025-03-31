const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodroute');
const user = require('./routes/userroute');

const app = express();
dotenv.config();

app.use(express.json()); // Parsing JSON
app.use(cors());

// Serve static files from the 'uploads' directory
app.use('/images', express.static('uploads'));

const db = async () => {
    await mongoose.connect(process.env.mongoURI);
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
        console.log("Connected to mongoDB");
    });
};

app.get("/", (req, res) => {
    res.send("Hello World");
});

db();

// API endpoint
app.use("/api/food", foodRouter);

app.use("/api/user",user);