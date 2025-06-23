require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure your email transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});

// Reserve endpoint
app.post('/api/reserve', (req, res) => {
  const { name, email, seats, date, time } = req.body;
  console.log('Reservation received:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Seats: ${seats}`);
  console.log(`Date: ${date}`);
  console.log(`Time: ${time}`);

  // Send email to owner
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Order Received',
    text: `Order Details:\nName: ${name}\nEmail: ${email}\nItem: ${item}\nQuantity: ${quantity}`
  }, (err, info) => {
    if (err) {
      console.error('Email error:', err);
      return res.status(500).json({ message: 'Order received, but failed to notify owner.' });
    }
    console.log('Email sent:', info.response); // <-- Add this line
    res.json({ message: 'Order placed successfully! Owner notified.' });
  });
});

// Order endpoint
app.post('/api/order', (req, res) => {
  const { name, email, item, quantity } = req.body;
  console.log('Order received:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Item: ${item}`);
  console.log(`Quantity: ${quantity}`);

  // Send email to owner
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Order Received',
    text: `Order Details:\nName: ${name}\nEmail: ${email}\nItem: ${item}\nQuantity: ${quantity}`
  }, (err, info) => {
    if (err) {
      console.error('Email error:', err);
      return res.status(500).json({ message: 'Order received, but failed to notify owner.' });
    }
    console.log('Email sent:', info.response); // <-- Add this line
    res.json({ message: 'Order placed successfully! Owner notified.' });
  });
});

// Catering endpoint
app.post('/api/catering', (req, res) => {
  const { name, email, event, date, guests } = req.body;
  console.log('Catering request received:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Event: ${event}`);
  console.log(`Date: ${date}`);
  console.log(`Guests: ${guests}`);

  // Send email to owner
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Order Received',
    text: `Order Details:\nName: ${name}\nEmail: ${email}\nItem: ${item}\nQuantity: ${quantity}`
  }, (err, info) => {
    if (err) {
      console.error('Email error:', err);
      return res.status(500).json({ message: 'Order received, but failed to notify owner.' });
    }
    console.log('Email sent:', info.response); // <-- Add this line
    res.json({ message: 'Order placed successfully! Owner notified.' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
app.get('/test', (req, res) => {
  console.log('Test endpoint hit');
  res.send('Backend is working!');
});
const path = require('path');

// Serve static files (adjust the path as needed)
app.use(express.static(path.join(__dirname, '..'))); 
app.post('/api/feedback', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Feedback received:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Only respond with success, do not send email
  res.json({ message: 'Thank you for your feedback! Message sent successfully.' });
});