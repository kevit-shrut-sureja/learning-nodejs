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

test("Should not fetch user task by id if unauthenticated", async () => {
    await request.get(`/tasks/${dbUtils.taskOne._id}`)
        .expect(401);
})

test("Should not fetch other users task by id", async() => {
    await request.get(`/tasks/${dbUtils.taskOne._id}`)
        .set('Authorization', `Bearer ${dbUtils.userTwo.tokens[0].token}`)
        .expect(404)
})

test("Should fetch only completed task", async() => {
    const response = await request.get(`/tasks?completed=true`)
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .expect(200)

    for(const task of response.body){
        expect(task.completed).toBe(true);
    }
})

test("Should fetch only incompleted task", async() => {
    const response = await request.get(`/tasks?completed=false`)
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .expect(200)

    for(const task of response.body){
        expect(task.completed).toBe(false);
    }
})

test("Should sort tasks by description/completed/createdAt/updatedAt", async() => {
    async function testingSort(user, field, order = 'asce'){
        console.log(`/tasks?sortBy=${field}:${order}`);
        const response = await request.get(`/tasks?sortBy=${field}:${order}`)
            .set('Authorization', `Bearer ${user.tokens[0].token}`)
            .expect(200)

        const task = response.body;
        for(let i = 1; i < task.length; i++){
            if(field === 'description'){
                const comparison = task[i-1].description.localeCompare(task[i].description)
                expect(order === 'asce' ? comparison <= 0 : comparison >= 0).toBe(true)
            }
            else if(field === 'completed'){
                expect(order === 'asce' ? task[i-1][field] <= task[i][field] : task[i-1][field] >= task[i][field] ).toBe(true)
            }
            else {
                const date1 = new Date(task[i-1][field]);
                const date2 = new Date(task[i][field]);
                expect(order === 'asce' ? date1 <= date2 : date1 >= date2).toBe(true)
            }
        }
    }
    await testingSort(dbUtils.userOne, "description", 'asce')
    await testingSort(dbUtils.userOne, "description", 'desc')
    await testingSort(dbUtils.userOne, "createdAt", 'asce')
    await testingSort(dbUtils.userOne, "createdAt", 'desc')
    await testingSort(dbUtils.userOne, "updatedAt", 'asce')
    await testingSort(dbUtils.userOne, "updatedAt", 'desc')
    await testingSort(dbUtils.userOne, "completed", 'asce')
    await testingSort(dbUtils.userOne, "completed", 'desc')
})

test("Should fetch page of tasks", async() => {
    const taskOneResponse = await request.get('/tasks?limit=1')
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .expect(200);
    console.log(taskOneResponse);
    expect(taskOneResponse.body.length).toEqual(1);
    const task1 = taskOneResponse.body[0]
    const taskTwoResponse = await request.get('/tasks?limit=1&skip=1')
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .expect(200);
    expect(taskTwoResponse.body.length).toEqual(1);
    const task2 = taskTwoResponse.body[0]
    expect(task1).not.toBeNull();
    expect(task2).not.toBeNull();
    expect(task1._id.toString()).not.toBe(task2._id.toString())
    const TwoTotalTask = await request.get('/tasks?limit=2')
        .set('Authorization', `Bearer ${dbUtils.userOne.tokens[0].token}`)
        .expect(200);
    expect(TwoTotalTask.body.length).toBe(2)
})