/*


const express = require("express");
const router = express.Router();

const vehicleValidate = require("../middleware/vehicle.register.middleware");

const { validationResult } = require("express-validator");

router.post("/registerVehicle", validateRegistration, function (req, res) {
  const errors = validationResults(req);

  if (!error.isEmpty()) {
    const formattedErrors = [];
    errors.array().map((err) => formattedErrors.push({ [err.path]: err.msg }));

    return res.status(422).json({
      success: false,
      errors: formattedErrors,
    });
  }

  const {
    ownerName,
    contactNumber,
    vehicleModel,
    registrationNumber,
    vehicleColor,
  } = req.body;

  res.send({ success: true });
});

module.exports = router;

*

const express = require("express");
const router = express.Router();

const { validationResult } = require("express-validator");
const validateRegistration = require("../middleware/vehicle.register.middleware");

router.post("/registerVehicle", validateRegistration, function (req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors
      .array()
      .map((err) => ({ [err.param]: err.msg }));
    return res.status(422).json({
      success: false,
      errors: formattedErrors,
    });
  }

  const {
    ownerName,
    contactNumber,
    vehicleModel,
    registrationNumber,
    vehicleColor,
  } = req.body;

  // Here you can proceed with your registration logic

  res.send({ success: true });
});

module.exports = router;

*/

const express = require("express");
const router = express.Router();
const vehicleDataValidator = require("../middleware/vehicle.register.middleware");
const { validationResult } = require("express-validator");

router.post("/registration", vehicleDataValidator, function (req, res) {
  // Extracts the validation errors of an express request
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());

    const formattedErrors = [];
    errors.array().map((err) => formattedErrors.push({ [err.path]: err.msg }));
    // errors.array().map(err => formattedErrors.push({ [err.msg]: err.path }));
    console.log(formattedErrors);

    return res.status(422).json({
      success: false,
      errors: formattedErrors,
    });
  }

  let {
    OwnerName,
    ContactNumber,
    VehicleModel,
    RegistrationNumber,
    VehicleColor,
  } = req.body;

  console.log(
    `RegistrationNumber : ${RegistrationNumber}, VehicleModel : ${VehicleModel}, VehicleColor : ${VehicleColor}, OwnerName : ${OwnerName}, ContactNumber : ${ContactNumber}`
  );

  res.send({ success: true });
});

module.exports = router;
