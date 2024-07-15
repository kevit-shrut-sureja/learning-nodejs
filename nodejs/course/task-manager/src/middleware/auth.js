const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'this is secret');
        console.log(decoded);
        const user = await User.findOne({ _id : decoded._id, 'tokens.token' : token})

        if(!user){
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({ error : "Unauthorized"})
    }
}

module.exports = auth