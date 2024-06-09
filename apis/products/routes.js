const {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
} = require("./controllers");

const express = require("express");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);

productsRouter.get("/:id", getOneProduct);

productsRouter.post("/", createProduct);

productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
