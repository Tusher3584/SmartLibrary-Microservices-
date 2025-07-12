require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const loanRoutes = require('./routes/loanRoutes');

const app = express();
app.use(express.json());
app.use('/api/loans', loanRoutes);

const PORT = process.env.PORT || 5002;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB (Loan Service)');
  app.listen(PORT, () => {
    console.log(`🚀 Loan Service running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('❌ MongoDB connection error (Loan Service):', err);
});
