/*

const { body } = require("express-validator");

const validateRegistration = [
  body("ownerName").notEmpty().withMessage("Owner Name is required."),
  body("contactNumber")
    .notEmpty()
    .isLength({ min: 10, max: 10 })
    .withMessage("Contact Number must be a 10 digit number."),
  body("vehicleModel").notEmpty().withMessage("Vehicle Model is required."),
  body("registrationNumber")
    .notEmpty()
    .matches(/^TS\d{2}[A-Z]{2}\d{4}$/)
    .withMessage("Registration Number must be in the format TS09EA1234."),
  body("vehicleColor").notEmpty().withMessage("Vehicle Color is required."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }
    next();
  },
];

module.exports = validateRegistration;

*/

const { body } = require("express-validator");

const vehicleDataValidator = [
  body("ownerName").notEmpty().withMessage("Owner Name is required."),
  body("contactNumber")
    .notEmpty()
    .isLength({ min: 10, max: 10 })
    .withMessage("Contact Number must be a 10 digit number."),
  body("VehicleModel").notEmpty().withMessage("Vehicle Model is required."),
  body("RegistrationNumber")
    .notEmpty()
    .matches(/^TS\d{2}[A-Z]{2}\d{4}$/)
    .withMessage("Registration Number must be in the format TS09EA1234."),
  body("vehicleColor").notEmpty().withMessage("Vehicle Color is required."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }
    next();
  },
];

module.exports = vehicleDataValidator;
