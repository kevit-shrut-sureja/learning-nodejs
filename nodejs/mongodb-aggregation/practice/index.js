const { MongoClient } = require('mongodb');
const queries = require('./pipelines.js')
const mongo = new MongoClient('mongodb://localhost:27017/');
const player = mongo.db('aggregation-practice').collection('player');
const emp = mongo.db('aggregation-practice').collection('employee');

async function main() {
    try {
        // const alldoc = await player.aggregate(queries.q1).toArray();
        // const alldoc = await player.aggregate(queries.q2).toArray();
        // const alldoc = await player.aggregate(queries.q3).toArray();
        // const alldoc = await player.aggregate(queries.q4).toArray();
        // const alldoc = await player.aggregate(queries.q5).toArray();
        // const alldoc = await player.aggregate(queries.q6).toArray();
        // const alldoc = await emp.aggregate(queries.q7).toArray();
        // const alldoc = await emp.aggregate(queries.q8).toArray();
        // const alldoc = await emp.aggregate(queries.q9).toArray();
        const alldoc = await emp.aggregate(queries.q10).toArray();

        console.log(alldoc);
        console.log(alldoc.length);
        console.log("---------------completed the query--------------");
    } catch (error) {
        console.error(error);
    }
}

main().finally(() => mongo.close());