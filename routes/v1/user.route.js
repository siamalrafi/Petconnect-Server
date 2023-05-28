const express = require("express");
const userController = require("../../controller/user.controller");
// const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();

router.post("/signup", userController.signup);
// router.get("/signup/confirmation/:token", userController.confirmEmail);

router.post("/login", userController.login);

// router.get("/me", verifyToken, userController.getMe);


// export router ---
module.exports = router;
