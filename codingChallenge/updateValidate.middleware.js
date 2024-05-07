const validateUpdateProduct = (req, res, next) => {
  const { productId } = req.params;
  const { ProductName, UnitPrice, Quantity, Category, IsDiscountApplied } =
    req.body;
  const errors = [];

  // Check if productId is provided and is a valid integer
  if (
    !productId ||
    isNaN(Number(productId)) ||
    !Number.isInteger(Number(productId))
  ) {
    errors.push({ message: "Invalid productId" });
  }

  // Check if ProductName is provided and not empty
  if (ProductName !== undefined && ProductName.trim() === "") {
    errors.push({ message: "ProductName is required" });
  }

  // Check if UnitPrice is provided and is a valid number
  if (
    UnitPrice !== undefined &&
    (isNaN(Number(UnitPrice)) || !Number.isFinite(Number(UnitPrice)))
  ) {
    errors.push({ message: "UnitPrice must be a number" });
  }

  // Check if Quantity is provided and is an integer
  if (
    Quantity !== undefined &&
    (!Number.isInteger(Number(Quantity)) || Number(Quantity) < 0)
  ) {
    errors.push({ message: "Quantity must be a non-negative integer" });
  }

  // Check if Category is provided and not empty
  if (Category !== undefined && Category.trim() === "") {
    errors.push({ message: "Category is required" });
  }

  // Check if IsDiscountApplied is provided and is a boolean
  if (
    IsDiscountApplied !== undefined &&
    typeof IsDiscountApplied !== "boolean"
  ) {
    errors.push({ message: "IsDiscountApplied must be a boolean" });
  }

  // If there are validation errors, return a 400 Bad Request response
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // If validation passed, proceed to the next middleware or route handler
  next();
};

module.exports = validateUpdateProduct;
