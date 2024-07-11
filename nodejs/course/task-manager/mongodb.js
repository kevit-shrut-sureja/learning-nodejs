const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);
const id = new ObjectId()
// console.log(id);
// console.log(id.toHexString());
// console.log(id.toHexString().length);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.getTimestamp());

const databaseName = "task-manager"

async function run() {
  try {
    // Establish and verify connection to the database
    const db = client.db(databaseName);
    const taskCollection = db.collection("tasks");
    // -------insert Many
    // const res1 = await taskCollection.insertMany([
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
    // ---------find One
    // const res = await taskCollection.findOne({ description : 'task 1', completed : false}) //null
    // const res = await taskCollection.findOne({ description : 'task 1'}) // entire object with the id
    // const res = await taskCollection.findOne({ _id : "668e69ec4bfe2aa3b9634939" }) // null because the id are stored in the form of the ObjectId
    // const res = await taskCollection.findOne({ _id : new ObjectId("668e69ec4bfe2aa3b9634939") }) // entire object
    // console.log(res);

    // ----------find
    // const res = taskCollection.find({ description : 'task 1'});
    // console.log(await res.toArray()); // entire array
    // console.log(await res.close()); // undefined
    // console.log(await res.toArray()); // []

    // --------task
    // const doc = await db.collection("tasks").findOne({ _id : new ObjectId("668e6cc98f5ba45c5e214f70")});
    // console.log(doc);

    // const docs = await taskCollection.find({ completed : false}).toArray()
    // console.log(docs);

    //---------UpdateOne 

    // const res = await taskCollection.updateOne(
    //   { _id: new ObjectId("668e69ec4bfe2aa3b9634939") }, 
    //   { $unset: { names: '' } }
    // );
    // const res = await taskCollection.updateOne(
    //   { _id: new ObjectId("668e69ec4bfe2aa3b9634939") },
    //   { $unset: { name: false } }
    // );
    // console.log(res);
    
    //---------UpdateMany

    // const res = await taskCollection.updateMany(
    //   { completed : false },
    //   { $set : { completed : true}}
    // );

    // console.log(res);

    // ---------DeleteMany
    // const res = await taskCollection.deleteMany({ completed : true});
    // console.log(res);

    // ---------DeleteOne
    const res = await taskCollection.deleteOne({ _id : new ObjectId("668f6fd25b5f055980ac0d28")});
    console.log(res);
  } finally {
    // Close the database connection on completion or error
    await client.close();
  }
}
run().catch(console.dir);
