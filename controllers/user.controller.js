const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export async function registerUserController(req, res) {
  let user;
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "please provide email,name,password",
        error: true,
        success: false,
      });
    }

    user = await UserModel.find({ email: email });

    if (user) {
      return res.json({
        message: "User already Registered with this email",
        error: true,
        success: false,
      });
    }
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new UserModel({
      email: email,
      name: name,
      password: hashedPassword,
    });

    await user.save();

    const verifyEmail = await sendEmail({
      sendTo: email,
      subject: "Verify Email",
      html: "",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
