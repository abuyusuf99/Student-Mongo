const { Router } = require('express');
const { studentsController } = require('../controllers/student.controllers');

const router = Router();

router.post('/students', studentsController.createStudent)
router.delete('/students/:id', studentsController.deleteStudents)
router.patch('/students/:id', studentsController.patchStudents)
router.get('/students', studentsController.getStudents)

module.exports = router;