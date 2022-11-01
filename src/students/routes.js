const {Router} = require('express')
const router = Router();

const {getStudents, getStudentsByID, addNewStudent, deleteStudent, updateRecord} = require('./controllers')



router.get('/', getStudents)
router.get('/:id', getStudentsByID)
router.post('/', addNewStudent)
router.delete('/:id', deleteStudent )
router.put("/:id", updateRecord)

module.exports = router