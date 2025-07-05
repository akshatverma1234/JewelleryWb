const express = require("express");
const { auth } = require("../middlewares/auth.js");
const { upload } = require("../middlewares/multer.js");
const {
  uploadImages,
  createProduct,
  getAllProducts,
  getAllProductsByCatId,
  getAllProductsByCatName,
  getAllProductsBySubCatId,
  getAllProductsBySubCatName,
  getAllProductsByThirdLevelCatName,
  getAllProductsByThirdLevelCatId,
  getAllProductsByPrice,
  getAllProductsByRating,
  getAllProductsCount,
  getAllFeaturedProducts,
  deleteProduct,
  getProduct,
  removeImageFromCloudinary,
  updateProduct,
} = require("../controllers/product.controller.js");
const productRouter = express.Router();

productRouter.post("/uploadImages", auth, upload.array("images"), uploadImages);
productRouter.post("/create", auth, createProduct);
productRouter.get("/getAllProducts", getAllProducts);
productRouter.get("/getAllProductsByCatId/:id", getAllProductsByCatId);
productRouter.get("/getAllProductsByCatName", getAllProductsByCatName);
productRouter.get("/getAllProductsBySubCatId/:id", getAllProductsBySubCatId);
productRouter.get("/getAllProductsBySubCatName", getAllProductsBySubCatName);
productRouter.get(
  "/getAllProductsByThirdLevelCat/:id",
  getAllProductsByThirdLevelCatId
);
productRouter.get(
  "/getAllProductsByThirdLevelCatName",
  getAllProductsByThirdLevelCatName
);
productRouter.get("/getAllProductsByPrice", getAllProductsByPrice);
productRouter.get("/getAllProductsByRating", getAllProductsByRating);
productRouter.get("/getAllProductsCount", getAllProductsCount);
productRouter.get("/getAllFeaturedProducts", getAllFeaturedProducts);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/:id", getProduct);
productRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
productRouter.put("/updateProduct/:id", auth, updateProduct);
module.exports = productRouter;
