const express = require('express')
const {httpGetAllLaunches, httpAddLaunch} = require("./launches.controller");

const launchesRouter = express.Router()

launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.post('/', httpAddLaunch)

module.exports = launchesRouter