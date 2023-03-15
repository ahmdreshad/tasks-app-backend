const mongoose = require('mongoose')

// we use model in db for how the data will be stored
// we use this Schema for how our code should be organized in database
// we can say its some type of validation to our DB
const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a task'],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
