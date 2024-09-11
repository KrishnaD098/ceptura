const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'dhootkrishna123@gmail.com',
  subject: 'New Contact Form Submission',
  text: ''
};

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/ceptura/contacts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  try {
    // Save to database
    const newContact = new Contact({ name, email, phoneNumber, message });
    await newContact.save();

    // Configure email content
    mailOptions.text = `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `;

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send message.' });
      }
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

app.get('/', (req, res) => {
  res.status(200).json({ msg: "Working" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
