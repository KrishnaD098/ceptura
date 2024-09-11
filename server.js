const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pdfRoutes = require('./backend/pdfProcessing/routes/pdfRoutes');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
// Routes
app.use('/api', pdfRoutes);
// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Could not connect to MongoDB:', err));
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
