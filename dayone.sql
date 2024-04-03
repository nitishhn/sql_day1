

CREATE DATABASE shoppingCartDb;

USE shoppingCartDb;

CREATE TABLE products(
productID INT PRIMARY KEY,
name VARCHAR(25),
quantityInStock INT ,
unitPrice FLOAT NOT NULL CHECK (unitPrice > 0),
category VARCHAR(50) NOT NULL);


CREATE TABLE users(
userId INT PRIMARY KEY ,
userName VARCHAR(50),
password VARCHAR(50),
contactNumber VARCHAR(10),
address VARCHAR(50)
);


CREATE TABLE cart (
    cartId INT PRIMARY KEY,
    productId INT,
    FOREIGN KEY (productId) REFERENCES products(productId) ON DELETE CASCADE,
    quantity INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
    CHECK (quantity > 0)
);

CREATE TABLE orders(
orderId INT PRIMARY KEY,
cartId INT NOT NULL,
FOREIGN KEY (cartId) REFERENCES cart(cartId) ON DELETE CASCADE,
orderDate DATE,
userId INT,
FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);

INSERT INTO products (productID,name,quantityInStock,unitPrice,category) VALUES
(1,'santoor',10,25,'soap'),
(2,'dettol',12,30,'handWash'),
(3,'clinicplus',30,10,'shampoo');

INSERT INTO users(userId,userName,password,contactNumber,address) VALUES 
(10,'Nitish','nitish@123',819790,'mudhol'),
(20,'Nishant','nish@123',900892,'bagalkot'),
(30,'Aman','aman@213',8123456,'hubli');

INSERT INTO cart (cartId,productID,quantity,userId) VALUES 
(101,3,10,10),
(102,2,12,20),
(103,1,13,30);

INSERT INTO orders(orderId,cartId,orderDate,userId) VALUES
(1000,103,'2024-03-03',30),
(1001,102,'2023-01-01',20),
(1002,101,'2020-03-03',10);

DELETE FROM products WHERE productID=1;


SELECT * FROM  products;

SELECT * FROM products WHERE productID=2;

SELECT * FROM products WHERE quantityInStock=0;

SELECT * FROM  products WHERE unitPrice>20&&unitPrice<40; 


SELECT * FROM orders WHERE orderId=1001;

SELECT * FROM orders WHERE userId=10;

SELECT * FROM  orders  WHERE orderDate='2023-01-01';


 

 



