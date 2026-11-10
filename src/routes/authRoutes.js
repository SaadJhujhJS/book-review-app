// Register and login.
const router = require("express").Router();
const auth = require("../controllers/authController");

router.post("/register", auth.register);
router.post("/customer/login", auth.login);

module.exports = router;
