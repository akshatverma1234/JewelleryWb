const MyListModel = require("../model/myList.model");

exports.addToMyListController = async (req, res) => {
  try {
    const userId = req.userId;
    const {
      productId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      discount,
    } = req.body;

    const item = await MyListModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (item) {
      return res.status(200).json({
        message: "Item already in my list",
      });
    }
    const myList = new MyListModel({
      productId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      discount,
      userId,
    });

    const save = await myList.save();

    return res.status(200).json({
      message: "The product added in the my list",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || message,
      error: true,
      success: false,
    });
  }
};
