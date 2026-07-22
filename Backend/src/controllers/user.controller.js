const { act } = require("react");
const userModel = require("../models/user.model");

async function createUser(req, res) {
  try {
    const user = req.body;

    const newUser = await userModel.createUser(user);

    res.status(201).json({
      success: true,
      message: "utilisateur crée avec succès",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getAllUsers(req, res) {
  try {
    const user = await userModel.getAllUsers();

    res.status(201).json({
      success: true,
      message: "utilisateur récupérés avec succès",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getUserById(req, res) {
  try {
    const id = req.params.id;

    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Utilisateur introuvable",
      });
    }

    res.status(201).json({
      success: true,
      message: "utilisateur crée avec succès",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getUserByEmail(req, res) {
  try {
    const { email } = req.params;

    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Utilisateur introuvable par mail",
      });
    }

    res.status(200).json({
      success: true,
      message: "utilisateur retrouvé",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const user = user.body;

    const updateUser = await userModel.updateUser(id, user);

    res.status(200).json({
      success: true,
      message: "utilisateur modifié",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function updatePassword(req, res) {
  try {
    const id = req.params.id;
    const { password } = req.body;

    const user = await userModel.updatePassword(id, password);

    res.status(200).json({
      success: true,
      message: "Mot de passe modifié",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function updateCustomerType(req, res) {
  try {
    const id = req.params.id;
    const { type_client } = req.body;

    const user = await userModel.updateCustomerType(id, type_client);

    res.status(200).json({
      success: true,
      message: "Type de client modifié",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function activeUser(req, res) {
  try {
    const id = req.params.id;

    const user = await userModel.activeUser(id);

    res.status(200).json({
      success: true,
      massage: "Utilisateur activé",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function desactiveUser(req, res) {
  try {
    const id = req.params.id;

    const user = await userModel.desactiveUser(id);

    res.status(200).json({
      success: true,
      message: "Utilisateur desactivé",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;

    const user = await userModel.deleteUser(id);

    res.status(200).json({
      success: true,
      message: "Utilisateur supprimé",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function countUsers(req, res) {
  try {
    const total = await userModel.countUsers();

    res.status(200).json({
      success: true,
      total,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function emailExists(req, res) {
  try {
    const { email } = req.params;

    const exists = await userModel.emailExists(email);

    res.status(200).json({
      success: true,
      exists,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// function de la suppression multiple des users
async function deleteUsers(req, res) {
  try {
    const { ids } = req.body;

    const users = await userModel.deleteUsers(ids);

    res.status(200).json({
      success: true,
      message: "utilisateurs supprimés",
      deleted: users.length,
      data: users,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: error.message,
    });
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
