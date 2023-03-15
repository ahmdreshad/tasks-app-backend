const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB



///////// run this method in server.js not here /////////////////////////

// METHOD 1 for connecting mongoDB
// const startServer = async () => {
//   try {
//     // connect Data Base
//     await connectDB()
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
// startServer()

