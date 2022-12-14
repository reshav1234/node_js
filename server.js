// Building a web server
const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises 


const logEvents = require('./logEvents')
const EventEmitter = require('events')
class Emitter extends EventEmitter{}


// Initialize object
const myEmiitter = new Emitter()

// Define port
const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) =>
{
    console.log(req.url, req.method)
})

server.listen(PORT, () => 
{
    console.log(`Server running on port${PORT}`)
})
// Add listener for the log Event
/*myEmiitter.on('log', (msg) => logEvents(msg))
myEmiitter.emit('log', "Log event emitted.")
*/

