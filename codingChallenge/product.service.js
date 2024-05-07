const { Op } = require("sequelize");
const ProductModel = require("../models/product.model");

// Retrieve all products
exports.getAllProducts = async () => {
  try {
    const products = await ProductModel.findAll();
    return products;
  } catch (error) {
    throw new Error("Error fetching all products");
  }
};

// Retrieve a single product by its ID
exports.getProductById = async (productId) => {
  try {
    const product = await ProductModel.findByPk(productId);
    return product;
  } catch (error) {
    throw new Error("Error fetching product by ID");
  }
};

// Add a new product
exports.addProduct = async (productObj) => {
  try {
    await ProductModel.create({
      ProductName: productObj.ProductName,
      Description: productObj.Description,
      UnitPrice: productObj.UnitPrice,
      Quantity: productObj.Quantity,
      Category: productObj.Category,
      IsDiscountApplied: productObj.IsDiscountApplied,
    });
    return "Product added successfully";
  } catch (error) {
    throw new Error("Error adding product");
  }
};

// Update an existing product
exports.updateProduct = async (productId, productObj) => {
  try {
    const product = await ProductModel.findByPk(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    await product.update(productObj);
    return "Product updated successfully";
  } catch (error) {
    throw error;
  }
};

// Delete a product by its ID
exports.deleteProduct = async (productId) => {
  try {
    const deletedCount = await ProductModel.destroy({
      where: { ProductID: productId },
    });
    if (deletedCount === 0) {
      throw new Error("Product not found");
    }
    return "Product deleted successfully";
  } catch (error) {
    throw error;
  }
};
