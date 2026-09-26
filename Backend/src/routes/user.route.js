const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authenticate = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");

router.use(authenticate);
router.use(isAdmin);

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.get("/count", userController.countUsers);
router.get("/email/:email", userController.getUserByEmail);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.patch("/:id/status", userController.updateCustomerType);
router.patch("/:id/password", userController.updatePassword);
router.patch("/:id/role", userController.updateRole);
router.patch("/:id/deactivate", userController.deactivateUser);
router.patch("/:id/activate", userController.activateUser);
router.delete("/:id", userController.deleteUser);
router.delete("/", userController.deleteUsers);

module.exports = router;