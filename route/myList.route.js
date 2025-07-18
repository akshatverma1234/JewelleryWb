const express = require("express");
const { auth } = require("../middlewares/auth.js");
const {
  addToMyListController,
  deleteMyListController,
  getMyListController,
} = require("../controllers/mylist.controller.js");

const myListRouter = express.Router();

myListRouter.get("/", auth, getMyListController);
myListRouter.post("/add", auth, addToMyListController);
myListRouter.delete("/:id", auth, deleteMyListController);

module.exports = myListRouter;
