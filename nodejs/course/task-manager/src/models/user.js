const bcrypt = require('bcrypt')
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require('jsonwebtoken')
const Task = require('./tasks.js')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be a positive number");
            }
        },
    },
    email: {
        type: String,
        unique : true,
        required : true,
        trim: true, 
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        },
    },
    password: {
        type: String,
        minLength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("Password can NOT be 'password'");
            }
        },
    },
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }],
    avatar : {
        type : Buffer
    }
}, {
    timestamps : true 
});

// just for the mongoose this does not get stored in the database in user 
userSchema.virtual('tasks', {
    ref : 'task',
    localField : '_id',
    foreignField : 'author'
})

userSchema.methods.generateAuthToken = async function() {
    try {
        const user = this;
        const token = jwt.sign({ _id : user._id.toString()}, 'this is secret')
        user.tokens = user.tokens.concat({ token })
        await user.save()
        return token;
    } catch (error) {
        throw new Error(error)
    }
}

userSchema.methods.toJSON = function() {
    try {
        const user = this;
        const userObject = user.toObject()

        delete userObject.password;
        delete userObject.tokens;
        delete userObject.avatar;

        return userObject;
    } catch (error) {
        throw new Error(error)
    }
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email : email });

    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this;
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 13);
    } 

    next();
})

userSchema.methods.deleteUserTask = async function () {
    try {
        const user = this;
        console.log(user);
        await Task.deleteMany({ author : user._id})
    } catch (error) {
        throw new Error(error)
    }
}

// DOES NOT WORK ERROR IS REMOVE IS NOT A FUNCTION 
// Delete User task when user is removed
// userSchema.pre('remove', async function(next){
//     try {
//         const user = this;
//         console.log(user);
//         const deleted = await Task.deleteMany({ author : user._id})
//         console.log(deleted);   
//         next()
//     }
//     catch (error){
//         throw new Error(error)
//     }
// })

const User = mongoose.model("User", userSchema);

module.exports = User;
