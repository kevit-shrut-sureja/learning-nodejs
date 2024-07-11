const mongoose = require("mongoose");
const validator = require('validator')

const User = mongoose.model('User', {
    name : {
        type : String,
        required : true,
        trim : true    
    },
    age : {
        type : Number,
        default : 0,
        validate(value){
            if ( value < 0 ){
                throw new Error('Age must be a positive number')
            }
        }
    },
    email : {
        type : String,
        trim : true,
        lowercase : true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password : {
        type : String,
        minLength : 7,
        trim : true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error("Password can NOT be 'password'")
            }
        }
    }
})

const Task = mongoose.model('task', {
    description : {
        type : String,
        required : true,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

main().catch(err => console.log(err));

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");
        // const me = new User({
        //     name : "         shr ut        " ,
        //     email : "    a@a.IOn   ",
        //     password : "passHword"
        // });
        // console.log(me);
        // const res = await me.save();
        // console.log(Object.is(me, res));
        // console.log(res);

        const task = new Task({
            description : "learn mongoose",
            completed: false
        });
        await task.save();
        console.log(task);
    }
    finally{
        mongoose.disconnect();
    }
}