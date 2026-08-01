const { pool } = require("../config/db");

/**
 * Créer un utilisateur
 */
async function createUser(user) {
  const query = `
    INSERT INTO users
    (first_name, last_name, email, password, role)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [
    user.first_name,
    user.last_name,
    user.email,
    user.password,
    user.role,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

/**
 * Récupérer tous les utilisateurs
 */
async function getAllUsers() {
  const result = await pool.query(`
    SELECT *
    FROM users
    ORDER BY created_at DESC;
  `);

  return result.rows;
}

/**
 * Trouver un utilisateur par son ID
 */
async function getUserById(id) {
  const result = await pool.query(
    `SELECT * FROM users WHERE id = $1`,
    [id]
  );

  return result.rows[0];
}

/**
 * Trouver un utilisateur par email
 */
async function getUserByEmail(email) {
  const result = await pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );

  return result.rows[0];
}

async function getUserWithPasswordByEmail(email) {
  const result = await pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );

  return result.rows[0];
}

/**
 * Modifier un utilisateur
 */
async function updateUser(id, user) {
  const query = `
    UPDATE users
    SET
      first_name = $1,
      last_name = $2,
      email = $3,
      role = $4,
      updated_at = NOW()
    WHERE id = $5
    RETURNING *;
  `;

  const values = [
    user.first_name,
    user.last_name,
    user.email,
    user.role,
    id,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}

/**
 * Modifier uniquement le mot de passe
 */
async function updatePassword(id, password) {
  const result = await pool.query(
    `
    UPDATE users
    SET
      password = $1,
      updated_at = NOW()
    WHERE id = $2
    RETURNING *;
    `,
    [password, id]
  );

  return result.rows[0];
}

/**
 * Modifier le rôle
 */
async function updateRole(id, role) {
  const result = await pool.query(
    `
    UPDATE users
    SET
      role = $1,
      updated_at = NOW()
    WHERE id = $2
    RETURNING *;
    `,
    [role, id]
  );

  return result.rows[0];
}

/**
 * Creer le profil client lie a un compte utilisateur.
 */
async function createClient(userId, status = "regular") {
  const result = await pool.query(
    `
    INSERT INTO clients (user_id, status)
    VALUES ($1, $2)
    RETURNING *;
    `,
    [userId, status]
  );

  return result.rows[0];
}

/**
 * Modifier le statut d'un client.
 */
async function updateCustomerType(id, status) {
  const result = await pool.query(
    `
    UPDATE clients
    SET
      status = $1,
      updated_at = NOW()
    WHERE user_id = $2
    RETURNING *;
    `,
    [status, id]
  );

  return result.rows[0];
}

/**
 * Activer un utilisateur
 */
async function activateUser(id) {
  const result = await pool.query(
    `
    UPDATE users
    SET
      is_active = true,
      updated_at = NOW()
    WHERE id = $1
    RETURNING *;
    `,
    [id]
  );

  return result.rows[0];
}

/**
 * Désactiver un utilisateur
 */
async function deactivateUser(id) {
  const result = await pool.query(
    `
    UPDATE users
    SET
      is_active = false,
      updated_at = NOW()
    WHERE id = $1
    RETURNING *;
    `,
    [id]
  );

  return result.rows[0];
}

/**
 * Supprimer un utilisateur
 */
async function deleteUser(id) {
  await pool.query(
    `
    DELETE FROM users
    WHERE id = $1;
    `,
    [id]
  );
}

/**
 * Compter les utilisateurs
 */
async function countUsers() {
  const result = await pool.query(`
    SELECT COUNT(*) AS total
    FROM users;
  `);

  return Number(result.rows[0].total);
}

/**
 * Vérifier si un email existe
 */
async function emailExists(email) {
  const result = await pool.query(
    `
    SELECT EXISTS(
      SELECT 1
      FROM users
      WHERE email = $1
    ) AS exists;
    `,
    [email]
  );

  return result.rows[0].exists;
}

/*
  Supprimer les utilisateurs en masse
*/ 

async function deleteUsers(ids) {
  if (!ids || ids.length === 0) {
    return [];
  }

  const query = `
    DELETE FROM users
    WHERE id = ANY($1::int[])
    RETURNING *;
  `;

  const result = await pool.query(query, [ids]);

  return result.rows;
}

export function getUserFullName(user) {
  if (!user) return null;
  const firstName = user.first_name || user.firstName || "";
  const lastName = user.last_name || user.lastName || "";
  return `${firstName} ${lastName}`.trim();
}

module.exports = {
  createUser,
  createClient,
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserWithPasswordByEmail,
  updateUser,
  updatePassword,
  updateRole,
  updateCustomerType,
  activateUser,
  deactivateUser,
  deleteUser,
  countUsers,
  emailExists,
  deleteUsers,
  getUserFullName,
};
