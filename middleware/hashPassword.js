const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hashPassword = async (req, res, next) => {
  if (!req.body.password) return next();
  const salt = await bcrypt.genSalt(5);
  console.log("old: " + req.body.password);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  console.log("new: " + req.body.password);
  next();
};

const createAuthenticationToken = async (req, res) => {
  const token = jwt.sign({ user: { ...req } }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
  return res.status(200).json({
    success: true,
    token,
    user: req,
  });
};

const verifyJWTAuthToken = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Kindly login" });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Unauthorized" });
    req.user = user;
    next();
  });
};

module.exports = {
  hashPassword,
  createAuthenticationToken,
  verifyJWTAuthToken,
};
