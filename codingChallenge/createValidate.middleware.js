const validateCreateProduct = (req, res, next) => {
  const { ProductName, UnitPrice, Quantity, Category, IsDiscountApplied } =
    req.body;
  const errors = [];

  // Check if ProductName is provided and not empty
  if (!ProductName || ProductName.trim() === "") {
    errors.push({ message: "ProductName is required" });
  }

  // Check if UnitPrice is provided and is a valid number
  if (!UnitPrice || isNaN(Number(UnitPrice))) {
    errors.push({ message: "UnitPrice must be a number" });
  }

  // Check if Quantity is provided and is an integer
  if (!Quantity || !Number.isInteger(Number(Quantity))) {
    errors.push({ message: "Quantity must be an integer" });
  }

  // Check if Category is provided and not empty
  if (!Category || Category.trim() === "") {
    errors.push({ message: "Category is required" });
  }

  // Check if IsDiscountApplied is provided and is a boolean
  if (typeof IsDiscountApplied !== "boolean") {
    errors.push({ message: "IsDiscountApplied must be a boolean" });
  }

  // If there are validation errors, return a 400 Bad Request response
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // If validation passed, proceed to the next middleware or route handler
  next();
};

module.exports = validateCreateProduct;
