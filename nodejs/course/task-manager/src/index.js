const app = require('./app.js')

const port = process.env.PORT;

app.listen(port, () => {
    console.log(process.env.NODE_ENV, `../.env.${process.env.NODE_ENV}`)
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