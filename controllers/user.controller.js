const sendEmailFun = require("../config/sendEmail");
const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const VerificationEmail = require("../utils/verifyEmailTemplate");
const { generatedAccessToken } = require("../utils/generateAccessToken");
const { generatedRefreshToken } = require("../utils/generateRefreshToken");

exports.registerUserController = async function (req, res) {
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

exports.verifyEmailController = async function (req, res) {
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

    if (user.otpExpires < Date.now()) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "OTP has expired. Please request a new one.",
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Invalid OTP. Please try again.",
      });
    }

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

exports.loginController = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      req.status(400).json({
        message: "User not registered",
        success: false,
        error: true,
      });
    }
    if (user.status !== "Active") {
      req.status(400).json({
        message: "Contact to admin",
        success: false,
        error: true,
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(500).json({
        message: "Check you password",
        success: false,
        error: true,
      });
    }

    const accessToken = await generatedAccessToken(user._id);
    const refreshToken = await generatedRefreshToken(user._id);

    const updateUser = await UserModel.findByIdAndUpdate(user?._id, {
      last_login_date: new Date(),
    });
    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.cookie("accessToken", accessToken, cookiesOption);
    res.cookie("refreshToken", refreshToken, cookiesOption);

    return res.json({
      message: "Login successfully",
      error: false,
      success: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

exports.logoutController = async function (req, res) {
  try {
    const userid = req.userId;

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.clearCookie("accessToken", cookiesOption);
    res.clearCookie("refreshToken", cookiesOption);
    const removeRefreshToken = await UserModel.findByIdAndUpdate(userid, {
      refresh_token: "",
    });

    return res.json({
      message: "Logout successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
