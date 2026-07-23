// auth.middleware.js
const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Token manquant."
    });
  }

  const token = authHeader.slice(7);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Token invalide."
    });

  }
}

module.exports = authenticate;
