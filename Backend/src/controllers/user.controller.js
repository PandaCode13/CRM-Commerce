const userModel = require("../models/user.model");

async function createUser(req, res) {
  try {
    const user = req.body;

    const newUser = await userModel.createUser(user);

    res.status(201).json({
      success: true,
      message: "utilisateur crée avec succès",
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

async function getAllUsers(req, res) {
  try {
    const user = await userModel.getAllUsers();

    res.status(201).json({
      success: true,
      message: "utilisateur récupérés avec succès",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

async function getUserById(req, res) {
  try {
    const id = req.params.id;

    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Utilisateur introuvable"
      });
    }

    res.status(201).json({
      success: true,
      message: "utilisateur crée avec succès",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

async function getUserByEmail(req, res) {
  try {
    const { email } = req.params;

    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Utilisateur introuvable par mail"
      })
    };

    res.status(200).json({
      success: true,
      message: "utilisateur retrouvé",
      data: user
    });

  }
  catch (error) {
    res.status(500).json({
      success: false, 
      message: error.message
    })
  }
};

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
  deleteUsers
}