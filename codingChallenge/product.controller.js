const express = require("express");
const router = express.Router();
const ProductService = require("../services/product.service");
const validateCreateProduct = require("../middleware/createValidate.middleware");
const validateUpdateProduct = require("../middleware/updateValidate.middleware");

// Retrieve all products
//http://localhost:3002/product/getAllProducts
router.get("/getAllProducts", async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Retrieve a single product by its ID
//http://localhost:3002/product/getProductById/5
router.get("/getproductById/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await ProductService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error getting product by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Add a new product
//http://localhost:3002/product/createNewProduct
router.post("/createNewproduct", validateCreateProduct, async (req, res) => {
  try {
    const productObj = {
      ProductName: req.body.ProductName,
      UnitPrice: req.body.UnitPrice,
      Quantity: req.body.Quantity,
      Category: req.body.Category,
      IsDiscountApplied: req.body.IsDiscountApplied,
    };

    const result = await ProductService.addProduct(productObj);
    res.status(201).json({ message: result });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update an existing product
//http://localhost:3002/product/updateProductById/5
router.put(
  "/updateproductById/:productId",
  validateUpdateProduct,
  async (req, res) => {
    const productId = req.params.productId;
    const productObj = req.body;
    try {
      const result = await ProductService.updateProduct(productId, productObj);
      res.status(200).json({ message: result });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Delete a product by its ID

//http://localhost:3002/product/deleteProductById/5
router.delete("/deleteproductById/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const result = await ProductService.deleteProduct(productId);
    res.status(200).json({ message: result });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
