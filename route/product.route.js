const express = require("express");
const { auth } = require("../middlewares/auth.js");
const { upload } = require("../middlewares/multer.js");
const {
  uploadImages,
  createProduct,
  getAllProducts,
  getAllProductsByCatId,
  getAllProductsByCatName,
} = require("../controllers/product.controller.js");
const productRouter = express.Router();

productRouter.post("/uploadImages", auth, upload.array("images"), uploadImages);
productRouter.post("/create", auth, createProduct);
productRouter.get("/getAllProducts", getAllProducts);
productRouter.get("/getAllProductsByCatId/:id", getAllProductsByCatId);
productRouter.get("/getAllProductsByCatName", getAllProductsByCatName);

module.exports = productRouter;
