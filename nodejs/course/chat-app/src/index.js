const http = require('http')
const app = require('./app.js')
const server = http.createServer(app)
const socketio = require('socket.io')

const io = socketio(server)


let count = 1;
io.on('connection', (socket) => {
    console.log('new websocket connection');
    
    io.emit('countUpdated', count);
    
    socket.on('increment', () => {
        count++;
        io.emit('countUpdated', count)
    })
})


server.listen(process.env.PORT, () => {
    console.log(`[server] : listing on the http://127.0.0.1:${process.env.PORT}`);
})