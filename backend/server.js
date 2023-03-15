const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')
const connectDB = require('./config/connectDB')

const app = express()
const PORT = process.env.PORT || 5000

// middleware, its a function that can ran inside the routes for specific action and have access to req, res and next,
// when the next is called it executes the middleware succeeding the current middleware

// Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://support-task-app.onrender.com'],
  })
)

app.use('/api/tasks', taskRoutes)

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to Home page')
})

// METHOD 2 for connecting MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`)
//     })
//   })
//   .catch((err) => console.log(err))

// METHOD 1 for connecting mongoDB
const startServer = async () => {
  try {
    // connect Data Base
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
startServer()
