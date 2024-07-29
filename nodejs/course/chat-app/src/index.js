const http = require('http')
const app = require('./app.js')
const server = http.createServer(app)
const socketio = require('socket.io')
const Filter = require('bad-words')

const io = socketio(server)

io.on('connection', (socket) => {
    console.log("WebSocket connection created");

    socket.emit("message", 'Welcome!!')    
    socket.broadcast.emit("message", 'New user has joined in !!')

    socket.on('sendMessage', (msg, callback) => {
        const filter = new Filter()

        if (filter.isProfane(msg)){
            return callback('Profainty is not allowed!!')
        }

        io.emit('message', msg)
        callback("Delivered!")
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left')
    })

    socket.on('sendLocation', (position, callback) =>{
        io.emit('message', `https://google.com/maps?q=${position.lat},${position.long}`)
        callback()
    })
})

server.listen(process.env.PORT, () => {
    console.log(`[server] : listing on the http://127.0.0.1:${process.env.PORT}`);
})