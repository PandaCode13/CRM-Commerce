const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const ID_PATTERN = /^\d+$/;

function parseId(id) {
  return ID_PATTERN.test(String(id)) ? Number(id) : null;
}

function validateIdentity({ first_name, last_name, email }) {
  if (!first_name || !last_name || !email) {
    return "Tous les champs sont obligatoires.";
  }
  if (!EMAIL_PATTERN.test(email)) {
    return "Adresse email invalide.";
  }
  return null;
}

async function createUser(req, res, next) {
  try {
    const { first_name, last_name, email, password, role = "user" } = req.body || {};

    const validationError = validateIdentity({ first_name, last_name, email });
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError });
    }
    if (!password || String(password).length < 8) {
      return res.status(400).json({ success: false, message: "Le mot de passe doit contenir au moins 8 caracteres." });
    }
    if (role !== "user" && role !== "admin") {
      return res.status(400).json({ success: false, message: "Role invalide." });
    }

    const passwordHash = await bcrypt.hash(String(password), 12);
    const newUser = await userModel.createUser({
      first_name,
      last_name,
      email: String(email).trim().toLowerCase(),
      password: passwordHash,
      role,
    });
    await userModel.createClient(newUser.id);

    res.status(201).json({
      success: true,
      message: "utilisateur créé avec succès",
      data: newUser,
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ success: false, message: "Un compte existe déjà avec cette adresse email." });
    }
    return next(error);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    return next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ success: false, message: "Identifiant invalide." });
    }

    const user = await userModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "Utilisateur introuvable" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    return next(error);
  }
}

async function getUserByEmail(req, res, next) {
  try {
    const email = String(req.params.email || "").trim().toLowerCase();
    if (!EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ success: false, message: "Adresse email invalide." });
    }

    const user = await userModel.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ success: false, message: "Utilisateur introuvable par mail" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    return next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ success: false, message: "Identifiant invalide." });
    }

    const { first_name, last_name, email, role } = req.body || {};
    const validationError = validateIdentity({ first_name, last_name, email });
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError });
    }
    if (role !== "user" && role !== "admin") {
      return res.status(400).json({ success: false, message: "Role invalide." });
    }

    const updatedUser = await userModel.updateUser(id, {
      first_name,
      last_name,
      email: String(email).trim().toLowerCase(),
      role,
    });

    res.status(200).json({ success: true, message: "utilisateur modifié", data: updatedUser });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ success: false, message: "Un compte existe déjà avec cette adresse email." });
    }
    return next(error);
  }
}

async function updatePassword(req, res, next) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ success: false, message: "Identifiant invalide." });
    }

    const password = String(req.body?.password || "");
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Le mot de passe doit contenir au moins 8 caracteres." });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await userModel.updatePassword(id, passwordHash);

    res.status(200).json({ success: true, message: "Mot de passe modifié", data: user });
  } catch (error) {
    return next(error);
  }
}

async function updateRole(req, res, next) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ success: false, message: "Identifiant invalide." });
    }

    const role = req.body?.role;
    if (role !== "user" && role !== "admin") {
      return res.status(400).json({ success: false, message: "Role invalide." });
    }

    const user = await userModel.updateRole(id, role);
    res.status(200).json({ success: true, message: "Rôle modifié", data: user });
  } catch (error) {
    return next(error);
  }
}

async function updateCustomerType(req, res, next) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ success: false, message: "Identifiant invalide." });
    }

    const type_client = String(req.body?.type_client || "").trim();
    if (!type_client) {
      return res.status(400).json({ success: false, message: "Type de client obligatoire." });
    }

    const user = await userModel.updateCustomerType(id, type_client);
    res.status(200).json({ success: true, message: "Type de client modifié", data: user });
  } catch (error) {
    return next(error);
  }
}

async function activateUser(req, res, next) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ success: false, message: "Identifiant invalide." });
    }

    const user = await userModel.activateUser(id);
    res.status(200).json({ success: true, message: "Utilisateur activé", data: user });
  } catch (error) {
    return next(error);
  }
}

async function deactivateUser(req, res, next) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ success: false, message: "Identifiant invalide." });
    }

    const user = await userModel.deactivateUser(id);
    res.status(200).json({ success: true, message: "Utilisateur désactivé", data: user });
  } catch (error) {
    return next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ success: false, message: "Identifiant invalide." });
    }

    await userModel.deleteUser(id);
    res.status(200).json({ success: true, message: "Utilisateur supprimé" });
  } catch (error) {
    return next(error);
  }
}

async function countUsers(req, res, next) {
  try {
    const total = await userModel.countUsers();
    res.status(200).json({ success: true, total });
  } catch (error) {
    return next(error);
  }
}

async function emailExists(req, res, next) {
  try {
    const email = String(req.params.email || "").trim().toLowerCase();
    if (!EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ success: false, message: "Adresse email invalide." });
    }

    const exists = await userModel.emailExists(email);
    res.status(200).json({ success: true, exists });
  } catch (error) {
    return next(error);
  }
}

async function deleteUsers(req, res, next) {
  try {
    const ids = Array.isArray(req.body?.ids) ? req.body.ids.map(Number).filter(Number.isInteger) : [];
    if (ids.length === 0) {
      return res.status(400).json({ success: false, message: "Aucun identifiant valide fourni." });
    }

    const users = await userModel.deleteUsers(ids);
    res.status(200).json({
      success: true,
      message: "utilisateurs supprimés",
      deleted: users.length,
      data: users,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
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
};