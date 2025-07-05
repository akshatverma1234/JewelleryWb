const { error } = require("console");
const ProductModel = require("../model/product.model");
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
//Create Product
exports.createProduct = async function (req, res) {
  try {
    let product = new ProductModel({
      name: req.body.name,
      description: req.body.description,
      images: imagesArr,
      brand: req.body.brand,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      catName: req.body.catName,
      catId: req.body.catId,
      subCatId: req.body.subCatId,
      subCat: req.body.subCat,
      thirdsubCat: req.body.thirdsubCat,
      thirdSubCatId: req.body.thirdSubCatId,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      isFeatured: req.body.isFeatured,
      discount: req.body.discount,
    });
    product = await product.save();

    if (!product) {
      return res.status(500).json({
        message: "Product not created",
        success: false,
        error: true,
      });
    }
    imagesArr = [];
    res.status(200).json({
      message: "Product created carefully",
      success: true,
      error: false,
      product: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
//Get Products
exports.getAllProducts = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return res
        .status(404)
        .json({ message: "Page not found", success: false, error: true });
    }
    const products = await ProductModel.find()
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return res.status(500).json({
        message: "Products not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      error: false,
      success: true,
      data: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
//Get all category by id
exports.getAllProductsByCatId = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages && totalPages !== 0) {
      return res.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }
    const products = await ProductModel.find({
      catId: req.params.id,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return res.status(500).json({
        message: "Products not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message:
        products.length > 0
          ? "Products fetched successfully"
          : "No products in this category",
      error: false,
      success: true,
      data: products,
      pagination: {
        page,
        totalPages,
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
//Get product by category name
exports.getAllProductsByCatName = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages && totalPages !== 0) {
      return res.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }
    const products = await ProductModel.find({
      catName: req.query.catName,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return res.status(500).json({
        message: "Products not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message:
        products.length > 0
          ? "Products fetched successfully"
          : "No products in this category",
      error: false,
      success: true,
      data: products,
      pagination: {
        page,
        totalPages,
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

//Get product by sub category id
exports.getAllProductsBySubCatId = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages && totalPages !== 0) {
      return res.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }
    const products = await ProductModel.find({
      subCatId: req.query.subCatId,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return res.status(500).json({
        message: "Products not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message:
        products.length > 0
          ? "Products fetched successfully"
          : "No products in this category",
      error: false,
      success: true,
      data: products,
      pagination: {
        page,
        totalPages,
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
//Get product by sub category name
exports.getAllProductsBySubCatName = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages && totalPages !== 0) {
      return res.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }
    const products = await ProductModel.find({
      subCat: req.query.subCat,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return res.status(500).json({
        message: "Products not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message:
        products.length > 0
          ? "Products fetched successfully"
          : "No products in this category",
      error: false,
      success: true,
      data: products,
      pagination: {
        page,
        totalPages,
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
//Get product by third levelcategory id
exports.getAllProductsByThirdLevelCatId = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages && totalPages !== 0) {
      return res.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }
    const products = await ProductModel.find({
      thirdSubCatId: req.query.thirdSubCatId,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return res.status(500).json({
        message: "Products not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message:
        products.length > 0
          ? "Products fetched successfully"
          : "No products in this category",
      error: false,
      success: true,
      data: products,
      pagination: {
        page,
        totalPages,
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
//Get product by third level category name
exports.getAllProductsByThirdLevelCatName = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages && totalPages !== 0) {
      return res.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }
    const products = await ProductModel.find({
      thirdSubCat: req.query.thirdSubCat,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return res.status(500).json({
        message: "Products not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message:
        products.length > 0
          ? "Products fetched successfully"
          : "No products in this category",
      error: false,
      success: true,
      data: products,
      pagination: {
        page,
        totalPages,
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

//Get all product by price
exports.getAllProductsByPrice = async function (req, res) {
  let productList = [];
  if (req.query.catId !== "" && req.query.catId !== undefined) {
    const productListArr = await ProductModel.find({
      catId: req.query.catId,
    }).populate("category");
    productList = productListArr;
  }
  if (req.query.subCatId !== "" && req.query.subCatId !== undefined) {
    const productListArr = await ProductModel.find({
      subCatId: req.query.subCatId,
    }).populate("category");
    productList = productListArr;
  }
  if (req.query.thirdsubCatId !== "" && req.query.thirdsubCatId !== undefined) {
    const productListArr = await ProductModel.find({
      thirdsubCatId: req.query.thirdsubCatId,
    }).populate("category");
    productList = productListArr;
  }

  const filteredProducts = productList.filter((product) => {
    if (req.query.minPrice && product.price < parseInt(+req.query.minPrice)) {
      return false;
    }
    if (req.query.maxPrice && product.price > parseInt(+req.query.maxPrice)) {
      return false;
    }
    return true;
  });
  return res.status(200).json({
    error: false,
    success: true,
    products: filteredProducts,
    totalPages: 0,
    page: 0,
  });
};

//Get all products by rating
exports.getAllProductsByRating = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages && totalPages !== 0) {
      return res.status(404).json({
        message: "Page not found",
        success: false,
        error: true,
      });
    }

    let products = [];
    if (req.query.catId !== undefined) {
      products = await ProductModel.find({
        rating: req.query.rating,
        catId: req.query.catId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }
    if (req.query.thirdSubCatId !== undefined) {
      products = await ProductModel.find({
        rating: req.query.rating,
        subCatId: req.query.subCatId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }
    if (req.query.subCatId !== undefined) {
      products = await ProductModel.find({
        rating: req.query.rating,
        thirdSubCatId: req.query.thirdSubCatId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }

    if (!products) {
      return res.status(500).json({
        message: "Products not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message:
        products.length > 0
          ? "Products fetched successfully"
          : "No products in this category",
      error: false,
      success: true,
      data: products,
      pagination: {
        page,
        totalPages,
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

//Get all products count
exports.getAllProductsCount = async function (req, res) {
  try {
    const productsCount = await ProductModel.countDocuments();

    if (!productsCount) {
      res.status(500).json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      error: false,
      success: true,
      productsCount: productsCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

//Get all features products
exports.getAllFeaturedProducts = async function (req, res) {
  try {
    const products = await ProductModel.find({
      isFeatured: true,
    }).populate("category");

    if (!products) {
      return res.status(500).json({
        message: "Products not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      error: false,
      success: true,
      products: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

exports.deleteProduct = async function (req, res) {
  const product = await ProductModel.findById(req.params.id).populate(
    "category"
  );
  if (!product) {
    return response.status(404).json({
      message: "Product Not found",
      error: true,
      success: false,
    });
  }
  const images = product.images;
  for (img of images) {
    const imgUrl = img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(". ")[0];
    if (imageName) {
      cloudinary.uploader.destroy(imageName, (error, result) => {});
    }
  }
  const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
  if (!deletedProduct) {
    return res.status(404).json({
      message: "Product not deleted",
      success: false,
      error: true,
    });
  }
  return res.status(200).json({
    success: true,
    error: false,
    message: "Product Deleted!",
  });
};

exports.getProduct = async function (req, res) {
  try {
    const product = await ProductModel.findById(req.params.id).populate(
      "category"
    );
    if (!product) {
      return res.status(404).json({
        message: "The product is not found",
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      error: false,
      success: true,
      product: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

//delete images
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

//Update product
exports.updateProduct = async function (req, res) {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      request.params.id,
      {
        name: request.body.name,
        subCat: request.body.subCat,
        description: request.body.description,
        images: request.body.images,
        brand: request.body.brand,
        price: request.body.price,
        oldPrice: request.body.oldPrice,
        catId: request.body.catId,
        catName: request.body.catName,
        subCat: request.body.subCat,

        subCatId: request.body.subCatId,

        category: request.body.category,
        thirdsubCat: request.body.thirdsubCat,
        thirdsubCatId: request.body.thirdsubCatId,
        countInStock: request.body.countInStock,
        rating: request.body.rating,
        isFeatured: request.body.isFeatured,
        productRam: request.body.productRam,
        size: request.body.size,
        productWeight: request.body.productWeight,
      },
      { new: true }
    );

    if (!product) {
      return response.status(404).json({
        message: "the product can not be updated!",
        status: false,
      });
    }
    imagesArr = [];
    return response.status(200).json({
      message: "The product is updated",
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
