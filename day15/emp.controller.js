/* const empService = require("../services/emp.services");

const express = require("express");
const emp_router = express.Router();

emp_router.get("/allEmps", async (req, res) => {
  let empArr = await empService.getAllEmployees();

  res.send(empArr);
});
module.exports = emp_router;

router.get("/Depts", async function (req, res) {
  let dataObj = {};
  dataObj.deptsArray = await deptService.getAllDepartments();
  res.render("deptList", dataObj);
});

*/

const empService = require("../services/emp.services");

const express = require("express");
const emp_router = express.Router();

emp_router.get("/allEmps", async (req, res) => {
  let resObj = {};
  resObj.empArr = await empService.getAllEmployees();
  //res.send(resObj);

  res.render("empList", resObj);
});

emp_router.get("/EmpList", async (req, res) => {
  let resObj = {};

  let { id } = req.query;
  if (id == null || id == undefined) {
    id = 999;
  }
  resObj.empArr = await empService.getEmpByID(id);
  res.send(resObj);

  //res.render("empList", resObj.empArr);
});

module.exports = emp_router;
