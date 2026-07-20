const router = require("express").Router();
const users = require("../controllers/user.controller");
const { authenticate, authorize } = require("../middlewares/auth.middleware");

router.use(authenticate);

router.get("/me", users.getMe);
router.patch("/me", users.updateMe);

router.get("/", authorize("admin"), users.listUsers);
router.get("/:id", authorize("admin"), users.getUserById);
router.patch("/:id/status", authorize("admin"), users.updateUserStatus);
router.delete("/:id", authorize("admin"), users.deleteUser);

module.exports = router;
