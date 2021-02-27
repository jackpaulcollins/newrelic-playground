const express = require('express')
const app = express()
const port = 8080
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})