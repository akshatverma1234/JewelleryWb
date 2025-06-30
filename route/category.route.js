const express = require("express");
const { auth } = require("../middlewares/auth.js");
const { upload } = require("../middlewares/multer.js");
const {
  uploadImages,
  createCategory,
  getCategory,
  getCategoryCount,
  getSubCategoryCount,
  getCategories,
  removeImageFromCloudinary,
  deleteCategory,
} = require("../controllers/category.controller.js");

const categoryRouter = express.Router();

categoryRouter.post(
  "/uploadImages",
  auth,
  upload.array("images"),
  uploadImages
);
categoryRouter.post("/create", auth, createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/get/count", getCategoryCount);
categoryRouter.get("/get/count/subCat", getSubCategoryCount);
categoryRouter.get("/:id", getCategory);
categoryRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
categoryRouter.delete("/:id", auth, deleteCategory);

module.exports = categoryRouter;
