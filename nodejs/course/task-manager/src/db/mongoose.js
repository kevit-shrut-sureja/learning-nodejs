const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");
        console.log("Mongoose connected");
    }
    finally{
        // mongoose.disconnect();
    }
}