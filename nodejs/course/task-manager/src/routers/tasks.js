const { Router } = require('express');
const Task = require('../models/tasks.js')
const auth = require('../middleware/auth.js')
const router = Router();

router.post('', auth, async (req, res) => {
    try {
        const task = new Task({...req.body, author : req.user._id});
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json(error)
    }
});

//  GET /tasks
router.get('', auth, async(req, res) => {
    const match = {};
    const sort = {};
    if (req.query.completed) {
        if (req.query.completed === "true") {
            match.completed = true;
        } else if (req.query.completed === "false") {
            match.completed = false;
        } else {
            return res.status(400).json({ error: 'Invalid value for completed. Use "true" or "false".' });
        }
    }
    if(req.query.sortBy){
        const parts = req.query.sortBy.split(":");
        if(parts[1] === 'asce')
            sort[parts[0]] = 1
        else if(parts[2] === 'desc')
            sort[parts[2]] = -1;
        else 
            return res.status(400).json({ error : 'Invalid value for sortBy. Use "asce" or "desc".'})
    }
    try {
        await req.user.populate({
            path : 'tasks',
            match,
            options : {
                limit : Number(req.query.limit),
                skip : Number(req.query.skip),
                sort
            }
        });
        res.json(req.user.tasks)
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/:id', async(req, res) => {
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

router.patch('/:id', async(req, res) => {
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
        res.status(400).json(error)
    }
})

router.delete('/:id', auth, async(req, res)=>{
    try {
        const task = await Task.findOneAndDelete({ _id : req.params.id, author : req.user._id})
        
        if(!task){
            return res.status(404).json();
        }

        res.json(task)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router