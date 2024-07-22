const express = require('express');
require('./db/mongoose.js')
const userRoutes = require('./routers/users.js')
const taskRoutes = require('./routers/tasks.js')
const auth = require('./middleware/auth.js')

const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000;


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

app.get('/', (req,res) => res.json({ message : "all good"}))

app.listen(port, () => {
    console.log(`SERVER : Live on the http://localhost:${port}`);
})

// const Task = require('./models/tasks.js')
// const User = require('./models/user.js')

// const main = async () => {
    // const task = await Task.findById('6696078f9bd2a46e67f90331');
    // await task.populate('author')
    // console.log(task);

    // const user = await User.findById('6696077c9bd2a46e67f90320');
    // await user.populate('tasks')
    // console.log(user.tasks);
// }

// main()