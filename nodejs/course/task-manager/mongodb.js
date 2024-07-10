const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);
const id = new ObjectId()
console.log(id);
console.log(id.toHexString());
console.log(id.toHexString().length);
console.log(id.id);
console.log(id.id.length);
console.log(id.getTimestamp());

const databaseName = "task-manager"

async function run() {
  try {
    // Establish and verify connection to the database
    const db = client.db(databaseName);
    const usersCollection = db.collection("tasks");
    // const res1 = await usersCollection.insertMany([
    //   {
    //     description : "task 1",
    //     completed : true
    //   },
    //   {
    //     description : "task 3",
    //     completed : true
    //   },
    //   {
    //     description : "task 2",
    //     completed : false
    //   },
    // ]);
    // if(!res1.acknowledged){
    //   console.log("was not able to push the tasks");
    // }

    const res = await usersCollection.findOne({})
    console.log(res._id.getTimestamp().toLocaleString());
    console.log(res);
  } finally {
    // Close the database connection on completion or error
    await client.close();
  }
}
run().catch(console.dir);
