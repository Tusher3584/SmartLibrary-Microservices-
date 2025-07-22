require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('✅ Connected to MongoDB (User Service)');
  app.listen(PORT, () => {
    console.log(`🚀 User Service running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('❌ MongoDB connection error (User Service):', err);
});
