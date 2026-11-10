// Business logic for users.
const users = require("../data/users");
const AppError = require("../utils/AppError");

const register = async (username, password) => {
  if (!username || !password) throw new AppError("Username and password are required", 400);
  if (users.some((u) => u.username === username)) throw new AppError("Username already exists", 409);
  users.push({ username, password });
};

const validateCredentials = async (username, password) => {
  if (!username || !password) throw new AppError("Username and password are required", 400);
  const ok = users.some((u) => u.username === username && u.password === password);
  if (!ok) throw new AppError("Invalid username or password", 401);
};

module.exports = { register, validateCredentials };
