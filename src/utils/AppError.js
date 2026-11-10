// An error that carries an HTTP status code.
class AppError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
  }
}
module.exports = AppError;
