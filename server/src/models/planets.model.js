const {parse} = require('csv-parse')
const fs = require('fs')

const habitablePlanets = []

function loadPlanetsData() {
    return new Promise((res, rej) => {
        fs.createReadStream(__dirname + '../../../data/kepler_data.csv')
            .pipe(parse({
                comment: '#',
                columns: true,
            }))
            .on('data', (data) => {
                if (isHabitablePlanet(data)) habitablePlanets.push(data)
            })
            .on("error", (error) => {
                console.log(error)
                rej(error)
            })
            .on('end', () => {
                console.log(`${habitablePlanets.length} habitable planets found`)
                res(habitablePlanets)
            })
    })
}

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6
}

function getAllPlanets() {
    return habitablePlanets
}

module.exports = {
    getAllPlanets,
    loadPlanetsData,
}