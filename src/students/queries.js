const getAllStds = "Select * from students"
const getStdByID = "SELECT * FROM students WHERE id = $1"
const checkEmailExist = "SELECT * FROM students WHERE email = $1";
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES($1, $2, $3, $4)"
const removeStudent = "DELETE FROM students WHERE id = $1";
const updateSudent = "UPDATE students SET name = $1 WHERE id=$2"


module.exports = {
  getAllStds,
  getStdByID,
  checkEmailExist,
  addStudent,
  removeStudent,
  updateSudent
}