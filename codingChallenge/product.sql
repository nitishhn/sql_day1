create  database productDb;

use productDb;

CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(255),
    Description TEXT,
    UnitPrice DECIMAL(10, 2),
    Quantity INT,
    Category VARCHAR(50),
    IsDiscountApplied BOOLEAN
    );
    
    
    INSERT INTO Product (ProductID, ProductName, Description, UnitPrice, Quantity, Category, IsDiscountApplied)
VALUES
    (1, 'Saree', ' women clothing', 50.00, 100, 'Clothing', false),
    (2, 'Kurta', 'men clothing', 40.00, 80, 'Clothing', false),
    (3, 'Masala Chai', 'Indian spiced tea', 3.50, 200, 'Beverage', false),
    (4, 'Samosa', ' Indian snack filled with spiced potatoes', 1.50, 300, 'Snack', false),
    (5, 'Mango', 'King of fruits in India', 2.00, 150, 'Fruit', false);


    
    ALTER TABLE Product MODIFY ProductID INT AUTO_INCREMENT;