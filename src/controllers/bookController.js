// Handles HTTP requests for books. Express 5 forwards async errors automatically.
const bookService = require("../services/bookService");

exports.getAll = async (req, res) => {
  const books = await bookService.getAllBooks();
  res.status(200).send(JSON.stringify(books, null, 4));
};

exports.getByIsbn = async (req, res) => {
  res.status(200).json(await bookService.getBookByIsbn(req.params.isbn));
};

exports.getByAuthor = async (req, res) => {
  res.status(200).json({ booksbyauthor: await bookService.findBooksBy("author", req.params.author) });
};

exports.getByTitle = async (req, res) => {
  res.status(200).json({ booksbytitle: await bookService.findBooksBy("title", req.params.title) });
};

exports.getReviews = async (req, res) => {
  res.status(200).json(await bookService.getReviews(req.params.isbn));
};
