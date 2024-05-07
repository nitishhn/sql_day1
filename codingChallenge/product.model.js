const db = require("../database/db");
const { DataTypes } = require("sequelize");

const ProductModel = db.define(
  "Product",
  {
    ProductID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ProductName: { type: DataTypes.STRING(255), allowNull: false },
    Description: { type: DataTypes.TEXT, allowNull: true },
    UnitPrice: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    Quantity: { type: DataTypes.INTEGER, allowNull: false },
    Category: { type: DataTypes.STRING(50), allowNull: true },
    IsDiscountApplied: { type: DataTypes.BOOLEAN, allowNull: false },
  },
  {
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    timestamps: false, // Disable timestamps (createdAt and updatedAt) for this model
  }
);

module.exports = ProductModel;
