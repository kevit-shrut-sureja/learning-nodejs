const app = require('../src/app.js');
const request = require("supertest")(app);
const Task = require('../src/models/tasks.js')
const mongoose = require('mongoose')
const dbUtils = require('./fixtures/db.js');

beforeEach(dbUtils.setupDatabase)

afterAll(async () => {
    await mongoose.connection.close();
});

test('Should create a task for the user', async () => {
    const response = await request.post('/tasks')
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .send({
            description : 'From my test'
        })
        .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull();
    expect(task.completed).toEqual(false)
})

test('All task for User One', async() => {
    const response = await request.get('/tasks')
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .send()
        .expect(200);
    
    expect(response.body.length).toEqual(2)
})

test('Should not delete other users task', async () => {
    const response = await request.delete(`/tasks/${dbUtils.taskOne._id}`)
        .set('Authorization', `Bearer ${dbUtils.userTwo.tokens[0].token}`)
        .send()
        .expect(404);
    
    const task = await Task.findById(dbUtils.taskOne._id);
    expect(task).not.toBeNull();
})

// test("", async () => {
//     const response = await request
// })

test("Should not create task with invalid description/completed", async () => {
    const emptyDescription = await request.post('/tasks')
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .send({
            description : "",
        })
        .expect(400);

    expect(emptyDescription.body.description).toBe(undefined)

    const invalidComplete = await request.post('/tasks')
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .send({
            description : "asda",
            completed : "hello"
        })
        .expect(400);

    expect(invalidComplete.body.completed).toBe(undefined)
})

test("Should not update task with invalid description/completed", async () => {
    const emptyDescription = await request.patch(`/tasks/${dbUtils.taskOne._id}`)
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .send({
            description : "",
            completed : false
        })
        .expect(400);

    expect(emptyDescription.body.description).toBe(undefined)

    const invalidComplete = await request.patch(`/tasks/${dbUtils.taskOne._id}`)
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .send({
            description : "asda",
            completed : "hello"
        })
        .expect(400);

    expect(invalidComplete.body.completed).toBe(undefined)
})

test("Should delete user task", async () => {
    const response = await request.delete(`/tasks/${dbUtils.taskOne._id}`)
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .expect(200)
    
    const task = await Task.findById(response._id);
    expect(task).toBeNull();
})

test("Should not delete task if unauthenticated", async () => {
    const response = await request.delete(`/tasks/${dbUtils.taskOne._id}`)
        .expect(401)
    
    const task = await Task.findById(dbUtils.taskOne._id);
    expect(task).not.toBeNull()
})

test("Should not update other users task", async () => {
    const response = await request.patch(`/tasks/${dbUtils.taskOne._id}`)
        .set('Authorization', `Bearer ${dbUtils.userTwo.tokens[0].token}`)
        .send({
            description : "Updated task"
        })
        .expect(404)
})

test("Should fetch user task by id", async () => {
    const response = await request.get(`/tasks/${dbUtils.taskOne._id}`)
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .expect(200);
    const task = await Task.findById(dbUtils.taskOne._id);

    expect(response.body._id).toBe(dbUtils.taskOne._id.toString())
    expect(response.body.description).toBe(dbUtils.taskOne.description)
    expect(response.body.completed).toBe(dbUtils.taskOne.completed)
    expect(response.body.author).toBe(dbUtils.taskOne.author.toString())
})