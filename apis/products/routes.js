const products = require("../../data");
const upload = require("../../middlewares/multer");
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

productsRouter.post("/", upload.single("image"), createProduct);

productsRouter.delete("/:id", deleteProduct);

productsRouter.put("/:id", upload.single("image"), updateProduct);

module.exports = productsRouter;
