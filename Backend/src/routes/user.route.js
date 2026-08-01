const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const getUserFullName = require("../models/user.model").getUserFullName;

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authController.me);
router.get("/fullname", (req, res) => {
  const user = req.user;
    if (!user) {
        return res.status(401).json({ success: false, message: "Utilisateur non authentifie." });
    }
    const fullname = getUserFullName(user);
    return res.status(200).json({ fullname });
});

module.exports = router;