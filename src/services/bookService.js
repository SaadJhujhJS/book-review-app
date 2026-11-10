// Business logic for books and reviews. Every function returns a Promise,
// so controllers can use async/await and requests never block each other.
const books = require("../data/books");
const AppError = require("../utils/AppError");

const getAllBooks = () => Promise.resolve(books);

const getBookByIsbn = (isbn) => {
  const book = books[isbn];
  return book ? Promise.resolve(book) : Promise.reject(new AppError("Book not found", 404));
};

const findBooksBy = (field, value) => {
  const needle = value.toLowerCase();
  const matches = Object.entries(books)
    .filter(([, book]) => book[field].toLowerCase().includes(needle))
    .map(([isbn, book]) => ({ isbn, ...book }));
  return matches.length
    ? Promise.resolve(matches)
    : Promise.reject(new AppError(`No books found for ${field} "${value}"`, 404));
};

const getReviews = async (isbn) => (await getBookByIsbn(isbn)).reviews;

const addOrUpdateReview = async (isbn, username, text) => {
  const book = await getBookByIsbn(isbn);
  const updated = book.reviews[username] !== undefined;
  book.reviews[username] = text;
  return { updated, reviews: book.reviews };
};

const deleteReview = async (isbn, username) => {
  const book = await getBookByIsbn(isbn);
  if (book.reviews[username] === undefined) {
    throw new AppError("You have no review for this book", 404);
  }
  delete book.reviews[username];
};

module.exports = { getAllBooks, getBookByIsbn, findBooksBy, getReviews, addOrUpdateReview, deleteReview };
