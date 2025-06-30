const CategoryModel = require("../model/category.model");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

//Upload Images
var imagesArr = [];
exports.uploadImages = async function (req, res) {
  try {
    imagesArr = [];

    const image = req.files;

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

    return res.status(200).json({
      images: imagesArr,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
//Create Category
exports.createCategory = async function (req, res) {
  try {
    let category = new CategoryModel({
      name: req.body.name,
      images: imagesArr,
      parentId: req.body.parentId,
      parentCatName: req.body.parentCatName,
    });

    if (!category) {
      return res.status(500).json({
        message: "Category not created",
        success: false,
        error: true,
      });
    }

    category = await category.save();
    imagesArr = [];

    return res.status(201).json({
      message: "Category Created",
      success: true,
      error: false,
      category: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

//Get Category
exports.getCategories = async function (req, res) {
  try {
    const categories = await CategoryModel.find();
    const categoryMap = {};

    categories.forEach((cat) => {
      categoryMap[cat._id] = { ...cat._doc, children: [] };
    });
    const rootCategories = [];
    categories.forEach((cat) => {
      if (cat.parentId) {
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      } else {
        rootCategories.push(categoryMap[cat._id]);
      }
    });

    return res.status(200).json({
      success: true,
      error: false,
      data: rootCategories,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

//Get Category Count
exports.getCategoryCount = async function (req, res) {
  try {
    const categoryCount = await CategoryModel.countDocuments({
      parentId: undefined,
    });
    if (!categoryCount) {
      res.status(500).json({ success: false, error: true });
    } else {
      res.send({
        categoryCount: categoryCount,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

exports.getSubCategoryCount = async function (req, res) {
  try {
    const SubCategoryCount = await CategoryModel.find();
    if (!SubCategoryCount) {
      res.status(500).json({ success: false, error: true });
    } else {
      const subCatList = [];
      for (let cat of SubCategoryCount) {
        if (cat.parentId !== undefined) {
          subCatList.push(cat);
        }
      }
      res.send({
        SubCategoryCount: subCatList.length,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

//Get Category by id
exports.getCategory = async function (req, res) {
  try {
    const category = await CategoryModel.findById(request.params.id);
    if (!category) {
      res.status(500).json({
        message: "The category with the given ID was not found.",
        error: true,
        success: false,
      });
    }
    return res.status(200).json({
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
//Remove Images

exports.removeImageFromCloudinary = async function (req, res) {
  const imgUrl = req.query.img;
  const urlArr = imgUrl.split("/");
  const image = urlArr[urlArr.length - 1];
  const imageName = image.split(".")[0];

  if (imageName) {
    const res = await cloudinary.uploader.destroy(
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

exports.deleteCategory = async function (req, res) {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        message: "Category not found!",
        success: false,
        error: true,
      });
    }

    // 🔥 Delete all category images from Cloudinary
    const imageDeletePromises = category.images.map((imgUrl) => {
      const imageName = imgUrl.split("/").pop().split(".")[0];
      return cloudinary.uploader.destroy(imageName);
    });

    await Promise.all(imageDeletePromises);

    // 🔥 Get subcategories of the category
    const subCategories = await CategoryModel.find({ parentId: req.params.id });

    for (const subCat of subCategories) {
      // Get 3rd-level subcategories
      const thirdLevel = await CategoryModel.find({ parentId: subCat._id });

      // Delete third-level subcategories
      for (const thirdSubCat of thirdLevel) {
        await CategoryModel.findByIdAndDelete(thirdSubCat._id);
      }

      // Delete the subcategory itself
      await CategoryModel.findByIdAndDelete(subCat._id);
    }

    // 🔥 Finally, delete the main category
    await CategoryModel.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      error: false,
      message: "Category and all related subcategories deleted!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
