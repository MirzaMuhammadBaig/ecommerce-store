const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};

module.exports = { generateRefreshToken };
