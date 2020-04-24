// Import all our dependencies
import IoSocket from '../src/IoSocket'
import dotenv from 'dotenv'

dotenv.config()

let express = require('express')
let app = express()
let server = require('http').Server(app)
let io = require('socket.io')(server)
let port = normalizePort(process.env.IO_PORT || '3000')

const normalizePort = (val) => {
   let port = parseInt(val, 10)
   if (isNaN(port)) {
      return val // named pipe
   }
   if (port >= 0) {
      return port // port number
   }
   return false
}
const listenPort = () => {
   console.log('The server NODEJS With SOCKETIO listen in ' + process.env.IO_URL + ':' + process.env.IO_PORT)
}

server.listen(port, listenPort(port))

// tell express where to serve static files from
app.use(express.static('public'))

/* START SOCKETS */

io.on('connection', (socket)=>{

   console.log('Escuchando socket ID: ' + socket.id)
   IoSocket.load(socket, io)

})

/* END SOCKETS */