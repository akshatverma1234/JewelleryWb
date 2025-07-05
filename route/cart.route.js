const express = require("express");
const { auth } = require("../middlewares/auth.js");
const {
  addToCartItemController,
  getCartItemController,
  updateCartItemController,
  deleteCartItemController,
} = require("../controllers/cart.controller.js");

const cartRouter = express.Router();

cartRouter.post("/add", auth, addToCartItemController);
cartRouter.get("/get", auth, getCartItemController);
cartRouter.post("/update-qty", auth, updateCartItemController);
cartRouter.delete("/delete-cart-item", auth, deleteCartItemController);

module.exports = cartRouter;
