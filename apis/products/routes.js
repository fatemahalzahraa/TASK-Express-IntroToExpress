const products = require("../../data");
const {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controllers");

const express = require("express");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);

productsRouter.get("/:id", getOneProduct);

productsRouter.post("/", createProduct);

productsRouter.delete("/:id", deleteProduct);

productsRouter.put("/:id", updateProduct);

module.exports = productsRouter;
