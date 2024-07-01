const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Import Routes
const authRoute = require('./routes/auth');

// Route Middlewares
app.use('/api/auth', authRoute);

// Serve static files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', req.url));
});

const PORT = process.env.PORT || 5000;

// MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://ankitsingh:ankit%40123@cluster0.h3jnz7g.mongodb.net/CollegeManagement?retryWrites=true&w=majority';

// Connect to DB and start server
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.log('MongoDB connection error:', err);
    });
