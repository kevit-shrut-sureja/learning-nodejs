const { Router } = require('express');
const Task = require('../models/tasks.js')
const auth = require('../middleware/auth.js')
const router = Router();

router.post('/tasks', auth, async (req, res) => {
    try {
        const task = new Task({...req.body, author : req.user._id});
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json(error)
    }
});

router.get('/tasks', auth, async(req, res) => {
    try {
    // const tasks = await Task.find({author : req.user._id});
    // res.status(200).json(tasks)
    await req.user.populate('tasks');
    res.json(req.user.tasks)
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/tasks/:id', auth, async(req, res) => {
    try {
        const _id = req.params.id
        const task = await Task.findOne({ _id, author : req.user._id});
        if(!task){
            return res.status(404).json()
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.patch('/tasks/:id', auth, async(req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedToUpdate = ['description', 'completed'];
        const isValidOperations = updates.every((update) => allowedToUpdate.includes(update))
        if(!isValidOperations){
            return res.status(400).json();
        }
        const task = await Task.findOne({ _id : req.params.id, author : req.user._id})
        // const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(404).json();
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save();
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators : true})        

        res.json(task)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.delete('/tasks/:id', auth, async(req, res)=>{
    try {
        const task = await Task.findOneAndDelete({ _id : req.params.id, author : req.user._id})
        
        if(!task){
            return res.status(400).json();
        }

        res.json(task)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router