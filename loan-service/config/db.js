const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/loandb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Loan Service DB connected');
  } catch (error) {
    console.error('Error connecting to Loan DB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
