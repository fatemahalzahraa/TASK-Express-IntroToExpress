const express = require("express");
let products = require("./data");
const productsRouter = require("./apis/products/routes");
const connecttDB = require("./database");

const app = express();

app.use(express.json());

app.use("/api/products", productsRouter);

connecttDB();
app.listen(8000, () => {
  console.log("i am running at 8000");
});
