// Protects routes: the user must have logged in (session) with a valid JWT.
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

module.exports = function authenticate(req, res, next) {
  const auth = req.session && req.session.authorization;
  if (!auth) return res.status(403).json({ message: "User not logged in" });

  jwt.verify(auth.accessToken, JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).json({ message: "User not authenticated" });
    req.user = { username: payload.username };
    next();
  });
};
