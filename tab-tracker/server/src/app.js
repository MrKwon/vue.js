const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config') // port num is in ./config/config.js

const app = express() // building express server

app.use(morgan('combined')) // print logs
app.use(bodyParser.json()) // make express easily use json data
app.use(cors()) // allow any host or client to access this

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server start on port ${config.port}`)
  })
