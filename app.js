const express = require("express");
let products = require("./data");

const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  return res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;

  const product = products.find((product) => {
    return product.id == id;
  });

  if (product) return res.json(product);
  else {
    return res.json("there is no product with such id");
  }
});

app.post("/api/products", (req, res) => {
  products.push(req.body);
  return res.json(products);
});

app.delete("/api/products/:id", (req, res) => {
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
});

app.listen(8000, () => {
  console.log("i am running at 8000");
});
