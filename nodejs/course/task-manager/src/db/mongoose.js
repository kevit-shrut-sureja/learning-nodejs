const mongoose = require("mongoose");
require("dotenv").config()
main().catch(err => console.log(err));

async function main(){
    try{
        await mongoose.connect(process.env.DB);
        console.log("Mongoose connected");
    }
    finally{
        // mongoose.disconnect();
    }
}