const bcrypt = require("bcryptjs");
const { pool } = require("../config/db");

const SELECT_USER = "id, first_name, last_name, email, role, is_active, created_at, updated_at";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatUser(user) {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    role: user.role,
    isActive: user.is_active,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
}

function validId(value) {
  return Number.isInteger(Number(value)) && Number(value) > 0;
}

exports.getMe = async (req, res, next) => {
  try {
    const result = await pool.query(`SELECT ${SELECT_USER} FROM users WHERE id = $1`, [req.user.id]);
    if (!result.rowCount) return res.status(404).json({ message: "Utilisateur introuvable." });
    return res.json({ user: formatUser(result.rows[0]) });
  } catch (error) { return next(error); }
};

exports.updateMe = async (req, res, next) => {
  try {
    const firstName = req.body.firstName?.trim();
    const lastName = req.body.lastName?.trim();
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;

    if (!firstName || !lastName || !email) return res.status(400).json({ message: "Prénom, nom et email sont obligatoires." });
    if (!emailPattern.test(email)) return res.status(400).json({ message: "Adresse email invalide." });
    if (password && password.length < 8) return res.status(400).json({ message: "Le mot de passe doit contenir au moins 8 caractères." });

    const duplicate = await pool.query("SELECT id FROM users WHERE email = $1 AND id <> $2", [email, req.user.id]);
    if (duplicate.rowCount) return res.status(409).json({ message: "Cet email est déjà utilisé." });

    const values = [firstName, lastName, email];
    let passwordSql = "";
    if (password) {
      values.push(await bcrypt.hash(password, 12));
      passwordSql = `, password = $${values.length}`;
    }
    values.push(req.user.id);
    const result = await pool.query(
      `UPDATE users SET first_name = $1, last_name = $2, email = $3${passwordSql}, updated_at = NOW()
       WHERE id = $${values.length} RETURNING ${SELECT_USER}`,
      values,
    );
    return res.json({ user: formatUser(result.rows[0]) });
  } catch (error) { return next(error); }
};

exports.listUsers = async (req, res, next) => {
  try {
    const result = await pool.query(`SELECT ${SELECT_USER} FROM users ORDER BY created_at DESC`);
    return res.json({ users: result.rows.map(formatUser) });
  } catch (error) { return next(error); }
};

exports.getUserById = async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ message: "Identifiant utilisateur invalide." });
    const result = await pool.query(`SELECT ${SELECT_USER} FROM users WHERE id = $1`, [req.params.id]);
    if (!result.rowCount) return res.status(404).json({ message: "Utilisateur introuvable." });
    return res.json({ user: formatUser(result.rows[0]) });
  } catch (error) { return next(error); }
};

exports.updateUserStatus = async (req, res, next) => {
  try {
    if (!validId(req.params.id) || typeof req.body.isActive !== "boolean") return res.status(400).json({ message: "Identifiant ou statut invalide." });
    if (Number(req.params.id) === req.user.id && !req.body.isActive) return res.status(400).json({ message: "Vous ne pouvez pas désactiver votre propre compte." });
    const result = await pool.query(`UPDATE users SET is_active = $1, updated_at = NOW() WHERE id = $2 RETURNING ${SELECT_USER}`, [req.body.isActive, req.params.id]);
    if (!result.rowCount) return res.status(404).json({ message: "Utilisateur introuvable." });
    return res.json({ user: formatUser(result.rows[0]) });
  } catch (error) { return next(error); }
};

exports.deleteUser = async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ message: "Identifiant utilisateur invalide." });
    if (Number(req.params.id) === req.user.id) return res.status(400).json({ message: "Vous ne pouvez pas supprimer votre propre compte." });
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING id", [req.params.id]);
    if (!result.rowCount) return res.status(404).json({ message: "Utilisateur introuvable." });
    return res.status(204).send();
  } catch (error) { return next(error); }
};
