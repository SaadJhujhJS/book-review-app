// Add / modify / delete reviews. The username always comes from the verified JWT.
const bookService = require("../services/bookService");
const AppError = require("../utils/AppError");

exports.addOrUpdate = async (req, res) => {
  const text = req.query.review || (req.body && req.body.review);
  if (!text) throw new AppError("Review text is required (?review=... or JSON body)", 400);

  const { updated, reviews } = await bookService.addOrUpdateReview(req.params.isbn, req.user.username, text);
  res.status(200).json({ message: updated ? "Review updated" : "Review added", reviews });
};

exports.remove = async (req, res) => {
  await bookService.deleteReview(req.params.isbn, req.user.username);
  res.status(200).json({ message: `Review for ISBN ${req.params.isbn} deleted` });
};
