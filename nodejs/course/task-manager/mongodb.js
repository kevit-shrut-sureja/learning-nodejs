const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

const databaseName = "task-manager"

async function run() {
  try {
    // Establish and verify connection to the database
    const db = client.db(databaseName);
    const usersCollection = db.collection("tasks");
    const res = await usersCollection.insertMany([
      {
        description : "task 1",
        completed : true
      },
      {
        description : "task 3",
        completed : true
      },
      {
        description : "task 2",
        completed : false
      },
    ]);
    if(!res.acknowledged){
      console.log("was not able to push the tasks");
    }
    console.log(res);
  } finally {
    // Close the database connection on completion or error
    await client.close();
  }
}
run().catch(console.dir);
