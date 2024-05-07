const productController = require("./src/controllers/product.controller");

const express = require("express");
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));
// Middleware to parse JSON bodies
app.use(express.json());

app.use("/product", productController);

app.get("/", function (req, res) {
  let resultStr = "<h1 align='center'>Welcome to productApi <h1/>";
  //  logger.info("Authentication API Development using Express JS");
  res.send(resultStr);
});

app.listen(3002, function () {});
console.log("Server Application is started. Url : http://localhost:3002");

//module.exports = app;
