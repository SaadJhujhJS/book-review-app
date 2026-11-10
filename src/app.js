// Builds the Express app: middleware first, then routes, then error handlers.
const express = require("express");
const session = require("express-session");
const { SESSION_SECRET } = require("./config/config");
const authenticate = require("./middleware/auth");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(express.json());
app.use(session({ secret: SESSION_SECRET, resave: true, saveUninitialized: true }));

app.use("/", bookRoutes);                              // public
app.use("/", authRoutes);                              // register + login
app.use("/customer/auth", authenticate, reviewRoutes); // login required

app.use(notFound);
app.use(errorHandler);

module.exports = app;
