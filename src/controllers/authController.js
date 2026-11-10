// Register and login.
const jwt = require("jsonwebtoken");
const userService = require("../services/userService");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config/config");

exports.register = async (req, res) => {
  const { username, password } = req.body || {};
  await userService.register(username, password);
  res.status(201).json({ message: "User successfully registered. You can now log in" });
};

exports.login = async (req, res) => {
  const { username, password } = req.body || {};
  await userService.validateCredentials(username, password);

  const accessToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  req.session.authorization = { accessToken, username };
  res.status(200).json({ message: "User successfully logged in" });
};
