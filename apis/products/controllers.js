let products = require("../../data");
const Product = require("../../models/Product");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  const id = req.params.id;

  // const product = products.find((product) => {
  //   return product.id == id;
  // });
  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(400).json({ meg: "No product with such ID :( " });
    }
  } catch (error) {
    return next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    console.log(req.body);
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Product.findByIdAndDelete(id);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }

  // const filteredProducts = products.filter((product) => {
  //   if (product.id == id) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // });
  // products = filteredProducts;

  // return res.json(filteredProducts);
};

const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const updated = await Product.findByIdAndUpdate(id, req.body);
    return res.status(200).json(updated);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
