const http = require('http')
const app = require('./app')
const PORT = process.env.port || 8000


const server = http.createServer(app)

server.listen(PORT, () => {
    console.log('server listening on port => ' + PORT)
})