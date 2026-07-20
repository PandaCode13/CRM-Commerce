const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.startsWith("Bearer ") ? authorization.slice(7) : null;

  if (!token) return res.status(401).json({ message: "Jeton d'authentification requis." });
  if (!process.env.JWT_SECRET) return res.status(500).json({ message: "JWT_SECRET est manquant." });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: Number(payload.sub), role: payload.role };
    return next();
  } catch {
    return res.status(401).json({ message: "Jeton invalide ou expiré." });
  }
}

function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.status(403).json({ message: "Accès non autorisé." });
    return next();
  };
}

module.exports = { authenticate, authorize };
