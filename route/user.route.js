const express = require("express");
const {
  registerUserController,
  verifyEmailController,
  loginController,
  logoutController,
} = require("../controllers/user.controller.js");
const { auth } = require("../middlewares/auth.js");

const userRouter = express.Router();

userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginController);
userRouter.get("/logout", auth, logoutController);

module.exports = userRouter;
