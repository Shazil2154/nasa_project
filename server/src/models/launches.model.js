const launches = new Map()

let latestFlightNumber = 100

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-422 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

function getAllLaunches() {
    return Array.from(launches.values())
}

function addLaunch(launch) {
    latestFlightNumber++
    launch['flightNumber'] = latestFlightNumber
    launch['customers'] = ['Zero To Mastery']
    launch['upcoming'] = true
    launch['success'] = true
    launches.set(latestFlightNumber, launch)
}

module.exports = {
    getAllLaunches,
    addLaunch
}