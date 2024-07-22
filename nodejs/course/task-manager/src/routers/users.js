const {Router} = require('express')
const User = require('../models/user.js');
const auth = require('../middleware/auth.js')
const multer = require('multer')
const sharp = require('sharp')
const router = Router();

router.post('/',async (req, res) => {
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

router.post('/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email,req.body.password)
        
        const token = await user.generateAuthToken();

        res.json({ user : user, token})
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save();
        res.json()
    } catch (error) {
        res.status(500).json()
    }
})

router.post('/logout', auth, async(req, res) => {
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

router.get('/', auth, async(req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/:id', auth, async(req, res) => {
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

router.patch('/me',auth, async(req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedToUpdate = ['name', 'email', 'password', 'age'];
        const isValidOperations = updates.every((update)=> allowedToUpdate.includes(update));

        if(!isValidOperations){
            return res.status(400).json()
        }

        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()

        res.json(req.user)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
})

router.delete('/me', auth, async(req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.user._id);

        if(!user){
            return res.status(400).json();
        }
        // deleting all the user tasks with the method
        await user.deleteUserTask();
        
        // await req.user.remove() // DOES NOT WORK
        res.json(req.user)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

const upload = multer({
    limits : {
        fileSize : 3000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error("Please upload a JPG or JPEG."))
        }
        cb(undefined, true)
    }
})

router.post('/me/avatar', auth, upload.single('avatar'), async   (req,res) => {
    const buffer = await sharp(req.file.buffer).resize({ width : 250, height : 250 }).png().toBuffer()
    req.user.avatar = buffer;
    await req.user.save()
    res.send()
})

router.delete('/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined;
    await req.user.save();
    res.json()
})

router.get('/:id/avatar', async(req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        if (!user || !user.avatar) {
            throw new Error("No user Image")
        }
        console.log(req.user);
        res.set('Content-Type', 'image/jpg');
        res.send(user.avatar)
    } catch (error) {
        res.status(404).json()
    }
})

module.exports = router