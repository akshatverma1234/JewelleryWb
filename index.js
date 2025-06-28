import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";

dotenv.config();

const app = express();

app.use(cors());

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

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running", PORT);
  });
});
