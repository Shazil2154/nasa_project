const express = require('express')

const app = express()

// Express Middlewares
app.use(express.json())

module.exports = app