// Public routes (no login needed).
const router = require("express").Router();
const books = require("../controllers/bookController");

router.get("/", books.getAll);
router.get("/isbn/:isbn", books.getByIsbn);
router.get("/author/:author", books.getByAuthor);
router.get("/title/:title", books.getByTitle);
router.get("/review/:isbn", books.getReviews);

module.exports = router;
