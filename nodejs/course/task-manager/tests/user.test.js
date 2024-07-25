const app = require('../src/app.js');
const request = require("supertest")(app);
const User = require('../src/models/user.js')
const mongoose = require('mongoose')
const { userOne, userOneId, setupDatabase} = require('./fixtures/db.js')

beforeEach(setupDatabase)

afterAll(async () => {
    await mongoose.connection.close();
});

test("signing a new user", async () => {
    const response = await request.post('/users').send({
        name: 'gg',
        email: 'ggg@gmail.com',
        password: '1234567'
    }).expect(201);

    // Assert that the database has changed
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull()

    // Assersation about the response
    expect(response.body).toMatchObject({
        user : {
            name : 'gg',
            email : 'ggg@gmail.com'
        },
        token : user.tokens[0].token
    })

    // Asserting the password is hashed 
    expect(user.password).not.toBe('1234567')
})

test("Should loging a existing user", async () =>{
    const response = await request.post('/users/login').send({
        email : userOne.email,
        password : '1234567'
    }).expect(200);

    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token)
})

test("Should not login a nonexisting user", async () =>{
    await request.post('/users/login').send({
        email : userOne.email,
        password : "incorrectpass"
    }).expect(400);
})

test("Should get the user profile", async () => {
    // console.log(`Bearer ${userOne.tokens[0].token}`);
    await request
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get the user profile for unauthenticated user', async() =>{
    await request
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete the account of the user', async() => {
    const response = await request
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOneId);
    expect(user).toBeNull();
})

test('Should not delete the account of the unauthenticated user', async() => {
    await request
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should upload avatar image', async() => {
    await request
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach("avatar", "tests/fixtures/img.png")
        .expect(200)
    
    const user = await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test("Should update valid user field", async() => {
    const updatedName = "shrut sureja";
    const response = await request
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name : updatedName
        })
        .expect(200);

    expect(response.body.name).toEqual(updatedName)
})

test("Should not update the invalid fields", async() => {
    await request
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location : "mumbai"
        })
        .expect(400 )
})

test('Should not sign user with invalid email/username/password', async() => {
    const wrongEmail1 = await request.post('/users')
        .send({
            name : 'shrut',
            email : 'g@.com',
            password : '1234567'
        })
        .expect(400);
    expect(wrongEmail1.body.user).toBe(undefined);

    const wrongEmail2 = await request.post('/users')
        .send({
            name : 'shrut',
            email : 'g@s.',
            password : '1234567'
        })
        .expect(400);
        console.log(wrongEmail2);
    expect(wrongEmail2.body.user).toBe(undefined);

    const noUserName = await request.post('/users')
        .send({
            name : '',
            email : "g@g.com",
            password : "1234556"
        })
        .expect(400)
    
    expect(noUserName.body.user).toBe(undefined);

    const shortPassword = await request.post('/users')
        .send({
            name : 'asdsads',
            email : "g@g.com",
            password : "123"
        })
        .expect(400)
    
    expect(shortPassword.body.user).toBe(undefined)
})

test('Should not update if the user is unauthenticated', async() => {
    await request.patch('/users/me')
        .send({
            name : "shrut",
            email : "g@g.com"
        })
        .expect(401)
})

test('Should not sign user with invalid email/username/password', async() => {
    const wrongEmail1 = await request.patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name : 'shrut',
            email : 'g@.com',
            password : '1234567'
        })
        .expect(400);
    expect(wrongEmail1.body.user).toBe(undefined);

    const wrongEmail2 = await request.patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name : 'shrut',
            email : 'g@s.',
            password : '1234567'
        })
        .expect(400);
        console.log(wrongEmail2);
    expect(wrongEmail2.body.user).toBe(undefined);

    const noUserName = await request.patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name : '',
            email : "g@g.com",
            password : "1234556"
        })
        .expect(400)
    
    expect(noUserName.body.user).toBe(undefined);

    const shortPassword = await request.patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name : 'asdsads',
            email : "g@g.com",
            password : "123"
        })
        .expect(400)
    
    expect(shortPassword.body.user).toBe(undefined)
})

test('Should delete the user if unauthenticated', async () => {
    await request.delete('/users/me')
        .expect(401)
})