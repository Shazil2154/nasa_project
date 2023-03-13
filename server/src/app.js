const express = require('express')
const cors = require('cors')
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.route')
const path = require("path")
const morgan = require('morgan')

const ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:3000'

const app = express()

// Express Middlewares
app.use(cors({
    origin: ORIGIN
}))
app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "public")))
app.use('/planets', planetsRouter)
app.use('/launches', launchesRouter)

module.exports = app