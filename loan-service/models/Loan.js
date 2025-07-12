const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  userId: String,
  bookId: String,
  loanDate: Date,
  returnDate: Date
});

module.exports = mongoose.model('Loan', loanSchema);
