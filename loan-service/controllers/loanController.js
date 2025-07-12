const Loan = require('../models/Loan');

// GET all loans
const getLoans = async (req, res) => {
  const loans = await Loan.find();
  res.json(loans);
};

// POST new loan
const createLoan = async (req, res) => {
  const loan = new Loan(req.body);
  await loan.save();
  res.status(201).json(loan);
};

// GET loan by ID
const getLoanById = async (req, res) => {
  const loan = await Loan.findById(req.params.id);
  if (!loan) return res.status(404).json({ message: 'Loan not found' });
  res.json(loan);
};

// DELETE loan
const deleteLoan = async (req, res) => {
  await Loan.findByIdAndDelete(req.params.id);
  res.json({ message: 'Loan deleted' });
};

module.exports = {
  getLoans,
  createLoan,
  getLoanById,
  deleteLoan
};
