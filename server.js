const express = require('express')
const app = express()
const db = require('./models')

/* @Middlewares */
// Parses urlencoded bodies
app.use(express.urlencoded({ extended: true }))

// Parses json
app.use(express.json())

// Basic_routes
app.get('/', (_, res) => res.send('Express Server'))

// Connecting to a database using promises
db.sequelize
  .sync()
  .then(() => console.log(`DB connected Successfully ✅`))
  .catch((err) => console.log(`Error:  ${err.message}`))

// Starting server
app.listen(process.env.PORT || 3000, () =>
  console.log(
    `Server started on http://localhost:${process.env.PORT || 3000} 💻`
  )
)

// Connecting and syncing server async await
//const connectToDB = async () => {
//  try {
//    await db.sequelize.sync()
//    console.log(`DB connected Successfully ✅`)
//  } catch (err) {
//    /* handle error */
//    console.log(`Error: ${err.message}`)
//  }
//}
//
//connectToDB()
