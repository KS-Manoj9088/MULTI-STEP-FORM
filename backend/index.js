const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/userData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("Error connecting to MongoDB:", err));


    const userSchema = new mongoose.Schema({
        email: String,
        password: String,
        leetcode: String,
        github: String,
        linkedin: String,
        firstName: String,
        lastName: String,
        mobile: String
    });

    const User = mongoose.model('User', userSchema);

    app.post('/submit', async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).send("User data saved successfully!");
        } catch (error) {
            res.status(500).send("Error saving data: " + error.message);
        }
    });

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });