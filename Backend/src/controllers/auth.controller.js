const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

function publicUser(user) {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    role: user.role,
    typeClient: user.type_client,
    isActive: user.is_active,
    createdAt: user.created_at,
  };
}

function createToken(user) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET doit etre defini dans le fichier .env.");
  }

  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}

function getRegistrationData(body) {
  return {
    firstName: String(body.firstName || body.first_name || "").trim(),
    lastName: String(body.lastName || body.last_name || "").trim(),
    email: String(body.email || "").trim().toLowerCase(),
    password: String(body.password || ""),
  };
}

async function register(req, res, next) {
  try {
    const { firstName, lastName, email, password } = getRegistrationData(req.body);

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ success: false, message: "Tous les champs sont obligatoires." });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, message: "Adresse email invalide." });
    }
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Le mot de passe doit contenir au moins 8 caracteres." });
    }
    if (await userModel.emailExists(email)) {
      return res.status(409).json({ success: false, message: "Un compte existe deja avec cette adresse email." });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await userModel.createUser({
      first_name: firstName,
      last_name: lastName,
      email,
      password: passwordHash,
      role: "user",
      type_client: "regular",
    });

    return res.status(201).json({ token: createToken(user), user: publicUser(user) });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ success: false, message: "Un compte existe deja avec cette adresse email." });
    }
    return next(error);
  }
}

async function login(req, res, next) {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "L'email et le mot de passe sont obligatoires." });
    }

    const user = await userModel.getUserWithPasswordByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, message: "Email ou mot de passe incorrect." });
    }
    if (!user.is_active) {
      return res.status(403).json({ success: false, message: "Ce compte est desactive." });
    }

    return res.status(200).json({ token: createToken(user), user: publicUser(user) });
  } catch (error) {
    return next(error);
  }
}

async function me(req, res, next) {
  try {
    const user = await userModel.getUserById(req.user.id);
    if (!user || !user.is_active) {
      return res.status(401).json({ success: false, message: "Session invalide." });
    }
    return res.status(200).json({ user: publicUser(user) });
  } catch (error) {
    return next(error);
  }
}

module.exports = { register, login, me };
