const express = require('express');
require('./db/mongoose.js')
const userRoutes = require('./routers/users.js')
const taskRoutes = require('./routers/tasks.js')
const auth = require('./middleware/auth.js')

const app = express()

const port = process.env.PORT || 3000;


app.use((req, res, next) => {
    console.log(req.method, req.path);
    next()
})
app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)

app.listen(port, () => {
    console.log(`SERVER : Live on the http://localhost:${port}`);
})