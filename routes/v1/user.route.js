const express = require("express");
const userController = require("../../controller/user.controller");
const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/me", verifyToken, userController.getMe);

router.post("/logout", userController.logOut);

// export routes
module.exports = router;
