console.log('hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express() // building express server

app.use(morgan('combined')) // print logs
app.use(bodyParser.json()) // make express easily use json data
app.use(cors()) // allow any host or client to access this

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

app.listen(process.env.port || 8081)
