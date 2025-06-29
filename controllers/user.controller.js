const sendEmailFun = require("../config/sendEmail");
const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const VerificationEmail = require("../utils/verifyEmailTemplate");

const registerUserController = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please provide name, email, and password",
        error: true,
        success: false,
      });
    }

    const existingUser = await UserModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already registered with this email",
        error: true,
        success: false,
      });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      email,
      name,
      password: hashedPassword,
      otp: verifyCode,
      otpExpires: new Date(Date.now() + 10 * 60 * 1000),
    });

    await user.save();

    await sendEmailFun(
      email,
      "Verify Email",
      "",
      VerificationEmail(name, verifyCode)
    );

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    );

    return res.status(200).json({
      success: true,
      error: false,
      message: "User registered successfully! Please verify your email.",
      token,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      message: error.message || "Internal server error",
      error: true,
      success: false,
    });
  }
};

const verifyEmailController = async function (req, res) {
  try {
    const { email, otp } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    // ✅ Check if OTP has expired first
    if (user.otpExpires < Date.now()) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "OTP has expired. Please request a new one.",
      });
    }

    // ✅ Then check if OTP matches
    if (user.otp !== otp) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Invalid OTP. Please try again.",
      });
    }

    // ✅ If both checks passed
    user.verify_email = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    return res.status(200).json({
      error: false,
      success: true,
      message: "Email verified successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error",
      success: false,
      error: true,
    });
  }
};

module.exports = {
  registerUserController,
  verifyEmailController,
};
