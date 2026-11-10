// Protected routes: mounted at /customer/auth (login required, see app.js).
const router = require("express").Router();
const reviews = require("../controllers/reviewController");

router.put("/review/:isbn", reviews.addOrUpdate);
router.delete("/review/:isbn", reviews.remove);

module.exports = router;
