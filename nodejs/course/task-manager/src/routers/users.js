const {Router} = require('express')
const User = require('../models/user.js');
const auth = require('../middleware/auth.js')

const router = Router();

router.post('/users',async (req, res) => {
    console.log(req.body);
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json(error)
    }
});

router.post('/users/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email,req.body.password)
        
        const token = await user.generateAuthToken();
        
        res.json({ user : user.getPublicProfile(), token})
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save();
        res.json()
    } catch (error) {
        res.status(500).json()
    }
})

router.post('/users/logout', auth, async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token
        })
        await req.user.save();

        res.json()
    } catch (error) {
        res.status(500).json()
    }
})

router.get('/users', auth, async(req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/users/:id', auth, async(req, res) => {
    try {
        const _id = req.params.id
        const user = await User.findOne({_id});
        if(!user){
            return res.status(404).json()
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.patch('/users/:id',auth, async(req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedToUpdate = ['name', 'email', 'password', 'age'];
        const isValidOperations = updates.every((update)=> allowedToUpdate.includes(update));

        if(!isValidOperations){
            return res.status(400).json()
        }

        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators : true});

        if(!user){
            return res.status(404).json();
        }

        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
})

router.delete('/users/:id',auth, async(req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user){
            return res.status(400).json();
        }

        res.json(user)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router