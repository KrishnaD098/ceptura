const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const authenticateToken = require('./middleware/authMiddleware'); // Add this line
require('./config/passport');
const authRoutes = require('./routes/authRoutes');
require('./db/mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.AUTH_PORT || 5002;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/", authRoutes);
app.use(authenticateToken);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Auth MongoDB connected'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});
