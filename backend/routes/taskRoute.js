const express = require('express')
const router = express.Router()
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require('../controllers/taskController')

// Routes simplified
router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)

// // Get/Read all tasks route
// router.get('/api/tasks', getTasks)

// //Create a task route
// router.post('/api/tasks', createTask)

// // get/read a single task route
// router.get('/api/tasks/:id', getTask)

// // update a single task
// router.put('/api/tasks/:id', updateTask)

// // delete a single task
// router.delete('/api/tasks/:id', deleteTask)

module.exports = router
