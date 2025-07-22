const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bookdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Book Service DB connected');
  } catch (error) {
    console.error('Error connecting to Book DB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
