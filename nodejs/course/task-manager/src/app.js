const express = require('express');
require('./db/mongoose.js')
const userRoutes = require('./routers/users.js')
const taskRoutes = require('./routers/tasks.js')
const auth = require('./middleware/auth.js')

const app = express()
require('dotenv').config({ path: `../.env.${process.env.NODE_ENV}` });

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next()
})
app.use(express.json())
app.use('/users', userRoutes)
app.use('/tasks', auth, taskRoutes)
app.use('/*', (err, req, res, next) => {
    res.status(400).json({ error : err.message })
})
app.get('/health', (req,res) => res.json({ message : "all good"}))


module.exports = app