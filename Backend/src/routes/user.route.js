const router = require("express").Router();
const { getMe } = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/auth.middleware");

router.get("/me", authenticate, getMe);

module.exports = router;
