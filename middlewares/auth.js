const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    let token =
      req.cookies?.accessToken || req?.headers?.authorization?.split(" ")[1];

    if (!token) {
      token = req.query.token;
    }
    if (!token) {
      return res.status(401).json({
        message: "No token provided. Please log in.",
        error: true,
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token. Unauthorized access.",
        error: true,
        success: false,
      });
    }

    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("JWT Auth Error:", error.message);
    return res.status(401).json({
      message: "Unauthorized. Token invalid or expired.",
      error: true,
      success: false,
    });
  }
};
