const exp = require('express');
const router = exp.Router();
const task = require('../controller/taskController')

router.route('/').get(task.getAllTask).post(task.createTask)
router.route('/:id').get(task.getSingleTask).patch(task.updateTask).delete(task.deleteTask)

module.exports = router;