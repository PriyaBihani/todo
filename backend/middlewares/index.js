const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    // Authorization
    const token = req.cookies.access_token;
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).redirect("/login");
  }
};

const logger = async (req, res, next) => {
  console.log(req.method, req.url, new Date());
  next();
};

module.exports = {
  authMiddleware,
  logger,
};
