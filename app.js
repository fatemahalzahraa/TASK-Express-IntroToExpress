const express = require("express");
let products = require("./data");
const productsRouter = require("./apis/products/routes");
const connecttDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");

const app = express();

app.use(express.json());

app.use("/media", express.static(path.join(__dirname, "media")));

app.use(morgan("dev"));
app.use(cors());

app.use("/api/products", productsRouter);

app.use(notFound);
app.use(errorHandler);

connecttDB();
app.listen(8000, () => {
  console.log("i am running at 8000");
});
