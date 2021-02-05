const express = require('express')
const app = express()

// parsing the request body in json
app.use(express.json())

// @get request
app.get('/', (_, res) => {
  res.send('Express Server Started')
})

// Starting server
app.listen(process.env.PORT || 3000, () =>
  console.log(`SERVER STARTED ON http://localhost:${process.env.PORT || 3000}`)
)
