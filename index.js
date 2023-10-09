const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const router = require('./src/routes/userRoutes')

app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})