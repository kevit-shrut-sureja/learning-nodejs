const { MongoClient } = require('mongodb');

const mongo = new MongoClient("mongodb+srv://shrutsureja:xCQZenIcXoW9bIQH@cluster0.yp6bser.mongodb.net");

const db = mongo.db('sample_mflix');

async function main(){
    try {
        const start = Date.now()
        // 1. Find the top 5 highest-rated movies released after the year 2000.
        const alldoc = await db.collection('movies').aggregate([
            {
                $match : {
                    year : 2000 
                }
            },
            {
                $project : {
                    title : 1,
                    'imdb' : 1
                }
            },
            {
                $sort : {
                    'imdb.rating' : -1,
                    'imdb.votes' : -1
                }
            },
            {
                $limit: 5
            }
        ]).toArray();

        // 2. 

        console.log(alldoc);
        console.log(alldoc.length);
        console.log("---------------Compledted the Operation-------------------");
        console.log("Completed operation in : ", Math.floor((Date.now() - start)), "ms");
    } catch (error) {
        console.error(error);
    }
}

main().finally(() => {
    mongo.close();
})