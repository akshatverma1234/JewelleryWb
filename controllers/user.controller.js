const sendEmailFun = require("../config/sendEmail");
const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const VerificationEmail = require("../utils/verifyEmailTemplate");
const { generatedAccessToken } = require("../utils/generateAccessToken");
const { generatedRefreshToken } = require("../utils/generateRefreshToken");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { error } = require("console");

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

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
      res.status(400).json({
        message: "User not registered",
        success: false,
        error: true,
      });
    }
    if (user.status !== "Active") {
      res.status(400).json({
        message: "Contact to admin",
        success: false,
        error: true,
      });
    }
    if (user.verify_email !== true) {
      return res.status(400).json({
        message: "Your Email is not verify yet please verify your email first",
        error: true,
        success: false,
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

var imagesArr = [];
exports.userAvatarController = async function (req, res) {
  try {
    imagesArr = [];
    const userId = req.userId;
    const image = req.files;

    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(500).json({
        message: "User not found",
        success: false,
        error: true,
      });
    }
    //first remove image from clodinary
    const imgUrl = user.avatar;
    const urlArr = imgUrl.split("/");
    const avatar_image = urlArr[urlArr.length - 1];
    const imageName = avatar_image.split(".")[0];

    if (imageName) {
      const response = await cloudinary.uploader.destroy(
        imageName,
        (error, result) => {}
      );
    }

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };
    for (let i = 0; i < image?.length; i++) {
      const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function (error, result) {
          imagesArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${req.files[i].filename}`);
        }
      );
    }
    user.avatar = imagesArr[0];
    await user.save();

    return res.status(200).json({
      _id: userId,
      avatar: imagesArr[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

exports.removeImageFromCloudinary = async function (req, res) {
  const imgUrl = req.query.img;
  const urlArr = imgUrl.split("/");
  const image = urlArr[urlArr.length - 1];
  const imageName = image.split(".")[0];

  if (imageName) {
    const response = await cloudinary.uploader.destroy(
      imageName,
      (error, result) => {
        // console.log(error, response);
      }
    );
    if (response) {
      res.status(200).send(response);
    }
  }
};

//Update user details
exports.updateUserController = async function (req, res) {
  try {
    const userId = req.userId;
    const { name, email, mobile, password } = req.body;
    const userExist = await UserModel.findById(userId);
    if (!userExist) {
      return res.status(400).send("The user cannot be Updated!");
    }
    let verifyCode = "";
    if (email !== userExist.email) {
      verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    }
    let hashPassword = "";
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashPassword = await bcrypt.hash(password, salt);
    } else {
      hashPassword = userExist.password;
    }
    const updateUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        name: name,
        mobile: mobile,
        email: email,
        verify_email: email !== userExist.email ? false : true,
        password: hashPassword,
        otp: verifyCode !== "" ? verifyCode : null,
        otpExpires: verifyCode !== "" ? Date.now() + 600000 : "",
      },
      { new: true }
    );

    if (email !== userExist.email) {
      await sendEmailFun({
        sendTo: email,
        subject: "Verify email from Verma Jewellers",
        text: "",
        html: VerificationEmail(name, verifyCode),
      });
    }

    return res.json({
      message: "User updated successfully",
      error: false,
      success: true,
      user: updateUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
//Forgot password
exports.forgotPasswordController = async function (req, res) {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "Email not available",
        success: false,
        error: true,
      });
    }

    let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = verifyCode;
    user.otpExpires = Date.now() + 600000;

    await sendEmailFun({
      sendTo: email,
      subject: "Verify email from Verma Jewellers",
      text: "",
      html: VerificationEmail(user.name, verifyCode),
    });
    return res.json({
      message: "check your email",
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
//Verify password
exports.verifyPasswordController = async function (req, res) {
  try {
    const { email, otp } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: "Email not available",
        error: true,
        success: false,
      });
    }
    if (!email || !otp) {
      return res.status(400).json({
        message: "Provide required field email, otp.",
        error: true,
        success: false,
      });
    }
    if (otp !== user.otp) {
      return res.status(400).json({
        message: "Invalid Otp",
        success: false,
        error: true,
      });
    }
    const currentTime = new Date().toISOString();

    if (user.otpExpires < currentTime) {
      return res.status(400).json({
        message: "Otp is expired",
        success: false,
        error: true,
      });
    }
    user.otp = "";
    user.otpExpires = "";
    await user.save();

    return res.status(400).json({
      message: "Verified Otp successfully",
      error: true,
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

//Reset Password
exports.resetPasswordController = async function (req, res) {
  try {
    const { email, newPassword, confirmPassword } = req.body;
    if (!email || !newPassword || !confirmPassword) {
      return res.status(400).json({
        message:
          "Provide the required fields email, newPassword,confirmPassword",
        success: false,
        error: true,
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return response.status(400).json({
        message: "Email is not available",
        error: true,
        success: false,
      });
    }
    if (newPassword !== confirmPassword) {
      return response.status(400).json({
        message: "newPassword and confirmPassword must be same.",
        error: true,
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(confirmPassword, salt);
    user.password = hashPassword;
    await user.save();

    return response.json({
      message: "Password updated successfully.",
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

//Refresh Token
exports.refreshTokenController = async function (req, res) {
  try {
    const refreshToken =
      req.cookies.refreshToken || req?.headers?.authorization?.split(" ")[1];
    if (!refreshToken) {
      return res.status(401).json({
        message: "Invalid token",
        error: true,
        success: false,
      });
    }
    const verifyToken = await jwt.verify(
      refreshToken,
      process.env.SECRET_KEY_REFRESH_TOKEN
    );
    if (!verifyToken) {
      return res.status(401).json({
        message: "token is expired",
        error: true,
        success: false,
      });
    }
    const userId = verifyToken?._id;
    const newAccessToken = await generatedAccessToken(userId);
    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.cookie("accessToken", newAccessToken, cookiesOption);

    return res.json({
      message: "New Access token generated",
      error: false,
      success: true,
      data: {
        accessToken: newAccessToken,
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

exports.userDetailsController = async function (req, res) {
  try {
    const userId = req.userId;
    const user = await UserModel.findById(userId).select(
      " -password -refresh_token"
    );
    return res.json({
      message: "user details",
      data: user,
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something is wrong",
      error: true,
      success: false,
    });
  }
};
