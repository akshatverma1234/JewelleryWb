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

exports.deleteMyListController = async (req, res) => {
  try {
    const myListItem = await MyListModel.findById(req.params.id);

    if (!myListItem) {
      return res.status(404).json({
        message: "The item with this given id was not found",
        error: true,
        success: false,
      });
    }

    const deletedItem = await MyListModel.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({
        error: false,
        success: false,
        message: "The item is not deleted",
      });
    }
    return res.status(200).json({
      message: "The item removed from my list",
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

exports.getMyListController = async (req, res) => {
  try {
    const userId = req.userId;
    const myListItems = await MyListModel.find({
      userId: userId,
    });

    return res.status(200).json({
      error: false,
      success: true,
      data: myListItems,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || message,
      error: true,
      success: false,
    });
  }
};
