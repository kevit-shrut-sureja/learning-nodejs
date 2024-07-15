const { Router } = require('express');
const Task = require('../models/tasks.js')
const router = Router();

router.post('/tasks',async (req, res) => {
    console.log(req.body);
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json(error)
    }
});

router.get('/tasks', async(req, res) => {
    try {
    const tasks = await Task.find({});
    res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/tasks/:id', async(req, res) => {
    try {
        const _id = req.params.id
        const task = await Task.findOne();
        console.log(_id);
        if(!task){
            return res.status(404).json()
        }
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

router.patch('/tasks/:id', async(req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedToUpdate = ['description', 'completed'];
        const isValidOperations = updates.every((update) => allowedToUpdate.includes(update))
        if(!isValidOperations){
            return res.status(400).json();
        }
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators : true})
        
        if(!task){
            return res.status(404).json();
        }

        res.json(task)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.delete('/tasks/:id', async(req, res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task){
            return res.status(400).json();
        }

        res.json(task)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router