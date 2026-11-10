// All settings in one place.
module.exports = {
  PORT: process.env.PORT || 5000,
  SESSION_SECRET: "fingerprint_customer",
  JWT_SECRET: "access",
  JWT_EXPIRES_IN: "1h",
};
