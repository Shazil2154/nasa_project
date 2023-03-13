const http = require('http')
const app = require('./app')
const {loadPlanetsData} = require('./models/planets.model')
const PORT = process.env.port || 8000


async function main() {
    const server = http.createServer(app)

    await loadPlanetsData()
    server.listen(PORT, () => {
        console.log('server listening on port => ' + PORT)
    })
}

main()