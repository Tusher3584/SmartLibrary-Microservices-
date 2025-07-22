const Book = require('../models/Book');

// GET all books
const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// POST new book
const createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

// GET book by ID
const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

// PUT update book
const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

// DELETE book
const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
};

module.exports = {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook
};
