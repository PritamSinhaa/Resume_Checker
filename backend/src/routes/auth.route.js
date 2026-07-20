const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");

// Register
authRouter.post("/register", authController.registerUserController);
authRouter.post("/login", authController.loginUserController);

module.exports = authRouter;
