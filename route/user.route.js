const express = require("express");
const {
  registerUserController,
  verifyEmailController,
} = require("../controllers/user.controller.js");

const userRouter = express.Router();

userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmailController);

module.exports = userRouter;
