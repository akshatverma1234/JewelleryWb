const mongoose = require("mongoose");

const cartProductSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const CartProductModel = mongoose.model("cartProduct", cartProductSchema);
module.exports = CartProductModel;
