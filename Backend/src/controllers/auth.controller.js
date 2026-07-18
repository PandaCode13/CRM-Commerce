const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { pool } = require("../config/db");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function publicUser(user) {
  return { id: user.id, firstName: user.first_name, lastName: user.last_name, email: user.email, role: user.role, avatar: user.avatar };
}

function createToken(user) {
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET est manquant dans le fichier .env");
  return jwt.sign({ sub: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });
}

exports.register = async (req, res, next) => {
  try {
    const firstName = req.body.firstName?.trim();
    const lastName = req.body.lastName?.trim();
    const email = req.body.email?.trim().toLowerCase();
    const { password } = req.body;
    if (!firstName || !lastName || !email || !password) return res.status(400).json({ message: "Prénom, nom, email et mot de passe sont obligatoires." });
    if (!emailPattern.test(email)) return res.status(400).json({ message: "Adresse email invalide." });
    if (password.length < 8) return res.status(400).json({ message: "Le mot de passe doit contenir au moins 8 caractères." });
    const existing = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
    if (existing.rowCount) return res.status(409).json({ message: "Un compte existe déjà avec cet email." });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await pool.query("INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, first_name, last_name, email, role, avatar", [firstName, lastName, email, hashedPassword]);
    const user = result.rows[0];
    return res.status(201).json({ token: createToken(user), user: publicUser(user) });
  } catch (error) { return next(error); }
};

exports.login = async (req, res, next) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const { password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email et mot de passe sont obligatoires." });
    const result = await pool.query("SELECT id, first_name, last_name, email, password, role, avatar, is_active FROM users WHERE email = $1", [email]);
    const user = result.rows[0];
    if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: "Email ou mot de passe incorrect." });
    if (!user.is_active) return res.status(403).json({ message: "Ce compte est désactivé." });
    return res.json({ token: createToken(user), user: publicUser(user) });
  } catch (error) { return next(error); }
};
