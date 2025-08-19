const express = require("express");
const {
  registerUserController,
  verifyEmailController,
  loginController,
  logoutController,
  userAvatarController,
  removeImageFromCloudinary,
  updateUserController,
  forgotPasswordController,
  verifyPasswordController,
  resetPasswordController,
  refreshTokenController,
  userDetailsController,
} = require("../controllers/user.controller.js");
const { auth } = require("../middlewares/auth.js");
const { upload } = require("../middlewares/multer.js");

const userRouter = express.Router();

userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginController);
userRouter.get("/logout", auth, logoutController);
userRouter.put(
  "/user-avatar",
  auth,
  upload.array("avatar"),
  userAvatarController
);
userRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
userRouter.put("/:id", auth, updateUserController);
userRouter.post("/forgot-password", forgotPasswordController);
userRouter.post("/verify-forgot-password", verifyPasswordController);
userRouter.post("/reset-password", resetPasswordController);
userRouter.post("/refresh-token", refreshTokenController);
userRouter.get("/user-details", auth, userDetailsController);

module.exports = userRouter;
