require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB (Book Service)');
  app.listen(PORT, () => {
    console.log(`🚀 Book Service running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('❌ MongoDB connection error (Book Service):', err);
});
