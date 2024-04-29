/*
const express = require("express");

const { body, validationResult } = require("express-validator");

const vehicleRouter = require("./src/controller/vehicle.controller");

const app = express();

// Register all middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", vehicleRouter);

// Sample data structure to store registered vehicles
let registeredVehicles = [];

// Root endpoint
app.get("/", function (req, res) {
  res.send("API Development using Express JS");
});

// Listen on port 3002
app.listen(3002, function () {
  console.log("Server Application is started. Url : http://localhost:3002");
});

*/

const express = require("express");
const userRouter = require("./src/controller/user.controller");

const app = express();
// register all middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", userRouter);

app.get("/", function (req, res) {
  res.send("API Development using Express JS");
});

app.listen(3002, function () {});
console.log("Server Application is started. Url : http://localhost:3002");
