const pool = require('../../db')
const { getAllStds, getStdByID, checkEmailExist, addStudent, removeStudent, updateSudent} = require('./queries')

const getStudents = (req, res) => {
  // console.log("getting students");

  pool.query(getAllStds, (error, result) => {
    if (error) throw error
    res.status(200).json(result.rows);
  })
}

const getStudentsByID = (req, res) => {
  const id = parseInt(req.params.id)
  
  pool.query(getStdByID,[id], (error, result) => {
    if (error) throw error
    res.status(200).json(result.rows)
  })
}

const addNewStudent= (req, res) => {
  const {name, email, age, dob} = req.body; 
  //check if email exist
  pool.query(checkEmailExist, [email], (error, results) => {
    
    if (results.rows.length){
      res.send("Email already exist")
    }

    //add student to database
    pool.query(addStudent, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).send("Student Created Successfully!")
    })
  })
}

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(req.params.)
  pool.query(getStdByID, [id], (error, result) =>{
    
    const noStudentFound = !result.rows.length;
    if(noStudentFound){
      res.send("Student does not exist");      
    }
    pool.query(removeStudent, [id], ((errors, results) => {
      if (errors) throw errors;
      res.status(200).send('Student removed successfully')
     }))
    
  })
}

const updateRecord = (req, res) => {
  const id = parseInt(req.params.id)
  const {name} = req.body
  
  pool.query(getStdByID, [id], (error, result) => {
    const noStudentFound = !result.rows.length;
    console.log(noStudentFound)
    if(noStudentFound){
      res.send("Student does not exist")
    }

    pool.query(updateSudent, [name, id], (errors, results) => {
      if(errors) throw errors
      res.status(200).send("student updated successfully")
    })
  })
}

module.exports = {
  getStudents,
  getStudentsByID,
  addNewStudent,
  deleteStudent,
  updateRecord,
}