const {getAllLaunches, addLaunch} = require('../../models/launches.model')

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches())
}

function httpAddLaunch(req, res) {
    addLaunch(req.body)
    return res.status(200)
}

module.exports = {
    httpGetAllLaunches,
    httpAddLaunch
}