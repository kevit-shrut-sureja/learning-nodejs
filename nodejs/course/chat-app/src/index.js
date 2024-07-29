const http = require('http')
const app = require('./app.js')
const server = http.createServer(app)
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage, generateLocationMessage } = require('./utils/message.js')
const db = require('./utils/users.js')

const io = socketio(server)

io.on('connection', (socket) => {
    console.log("WebSocket connection created");


    socket.on('join', (options, callback) => {
        const { user, error } = db.addUser({ id: socket.id, ...options })

        if (error) {
            return callback(error)
        }

        socket.join(user.room)
        
        socket.emit("message", generateMessage("Admin", 'Welcome!!'))
        socket.broadcast.to(user.room).emit("message", generateMessage("Admin", `${user.username} has joined!`))
        

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: db.getUsers(user.room)
        })
        // io.to.emit -> to all members of that room
        // socket.broadcast.to.emit -> limiting to a specific room
    })

    socket.on('sendMessage', (msg, callback) => {
        const user = db.getUser(socket.id)

        const filter = new Filter()

        if (filter.isProfane(msg)) {
            return callback('Profainty is not allowed!!')
        }

        io.to(user.room).emit('message', generateMessage(user.username, msg))
        callback("Delivered!")
    })

    socket.on('disconnect', () => {
        const user = db.removeUser(socket.id);

        if (user){
            io.to(user.room).emit('message', generateMessage("Admin", `${user.username} has left!`))
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: db.getUsers(user.room)
            })
        }
    })

    socket.on('sendLocation', (position, callback) => {
        const user = db.getUser(socket.id)
        io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://google.com/maps?q=${position.lat},${position.long}`))
        callback()
    })
})

server.listen(process.env.PORT, () => {
    console.log(`[server] : listing on the http://127.0.0.1:${process.env.PORT}`);
})