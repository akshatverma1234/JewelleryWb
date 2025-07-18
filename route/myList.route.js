const express = require("express");
const { auth } = require("../middlewares/auth.js");
const {
  addToMyListController,
} = require("../controllers/mylist.controller.js");

const myListRouter = express.Router();

myListRouter.post("/add", auth, addToMyListController);
module.exports = myListRouter;
