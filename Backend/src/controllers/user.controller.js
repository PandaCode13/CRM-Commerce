const { pool } = require("../config/db");

exports.getMe = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT id, first_name, last_name, email, role, avatar, created_at FROM users WHERE id = $1", [req.user.id]);
    if (!result.rowCount) return res.status(404).json({ message: "Utilisateur introuvable." });
    const user = result.rows[0];
    return res.json({ user: { id: user.id, firstName: user.first_name, lastName: user.last_name, email: user.email, role: user.role, avatar: user.avatar, createdAt: user.created_at } });
  } catch (error) { return next(error); }
};
