const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/userdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('User Service DB connected');
  } catch (error) {
    console.error('Error connecting to User DB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
