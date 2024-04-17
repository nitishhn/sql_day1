const db = require("../database/db");

exports.getAllRegisteredUsers = async () => {
  let [userArray] = await db.query("select * from users");
  return userArray;
};

exports.getRegisteredUserById = async (userID) => {
  let [userArray] = await db.query(
    "select * from users where userID=" + userID
  );
  return userArray[0];
};

exports.deleteRegisteredUserById = async (userID) => {
  let [userArray] = await db.query("delete from users where userID=" + userID);
};

exports.addNewUser = async (userInfo) => {
  const { name, address, dob, aadhaarNumber, panNumber, email, password } =
    userInfo;

  const sql =
    "INSERT INTO users (name, address, dob, aadhaar_number, pan_number, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)";

  try {
    let [result] = await db.query(sql, [
      name,
      address,
      dob,
      aadhaarNumber,
      panNumber,
      email,
      password,
    ]);
    return result.insertId;
  } catch (error) {
    console.error("Error occurred while adding new user:", error);
    throw error;
  }
};
