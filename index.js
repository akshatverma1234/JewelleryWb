const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./config/connectDB");
const userRouter = require("./route/user.route.js");
const cookieParser = require("cookie-parser");
const categoryRouter = require("./route/category.route.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Server is running " + process.env.PORT });
});
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running", PORT);
  });
});
