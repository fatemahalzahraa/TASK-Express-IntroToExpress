let products = require("../../data");
const Product = require("../../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.json(error);
  }
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;

  // const product = products.find((product) => {
  //   return product.id == id;
  // });
  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ meg: "No product with such ID :( " });
    }
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    await Product.findByIdAndDelete(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(error.status || 500).json(error);
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

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await Product.findByIdAndUpdate(id, req.body);
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
