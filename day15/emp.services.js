const { Op } = require("sequelize");

const EmployeeModel = require("../models/emp.model");
//const DepartmentService = require("./departmentService");

// Read All Employees
exports.getAllEmployees = async () => {
  try {
    const employees = await EmployeeModel.findAll();
    return employees;
  } catch (error) {
    throw new Error("Error while fetching employees: " + error.message);
  }
};

// Read Single Employee by ID

exports.getEmpByID = async (id) => {
  let empArray = await empModel.findByPk(id);
  return empArray;
};

/*

// Read Employees by Department
exports.getEmployeesByDepartment = async (departmentId) => {
  try {
    // Use DepartmentService to get department details
    const department = await DepartmentService.getDepartmentById(departmentId);
    if (!department) {
      throw new Error(Department with ID ${departmentId} not found.);
    }

    // Use Sequelize's find all with condition
    const employees = await EmployeeModel.findAll({
      where: {
        departmentId: departmentId,
      },
    });

    return employees;
  } catch (error) {
    throw new Error(
      "Error while fetching employees by department: " + error.message
    );
  }
};

*/
