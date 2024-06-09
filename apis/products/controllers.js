let products = require("../../data");

const getAllProducts = (req, res) => {
  return res.json(products);
};

const getOneProduct = (req, res) => {
  const id = req.params.id;

  const product = products.find((product) => {
    return product.id == id;
  });

  if (product) return res.json(product);
  else {
    return res.json("there is no product with such id");
  }
};

const createProduct = (req, res) => {
  products.push(req.body);
  return res.json(products);
};

const deleteProduct = (req, res) => {
  const id = req.params.id;

  const filteredProducts = products.filter((product) => {
    if (product.id == id) {
      return false;
    } else {
      return true;
    }
  });
  products = filteredProducts;

  return res.json(filteredProducts);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
};
