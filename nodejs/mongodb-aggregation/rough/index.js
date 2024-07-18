const { MongoClient } = require('mongodb');

const mongo = new MongoClient("mongodb://localhost:27017/");

const db = mongo.db('sample_mflix');
const movies = db.collection('movies');

async function main() {
    try {
        const start = Date.now()
        // 1. Find the top 5 highest-rated movies released after the year 2000.
        // const alldoc = await movies.aggregate([
        //     {
        //         $match : {
        //             year : 2000 
        //         }
        //     },
        //     {
        //         $project : {
        //             title : 1,
        //             'imdb' : 1
        //         }
        //     },
        //     {
        //         $sort : {
        //             'imdb.rating' : -1,
        //             'imdb.votes' : -1
        //         }
        //     },
        //     {
        //         $limit: 5
        //     }
        // ]).toArray();

        // 2. Get the count of movies in each genre.
        // const alldoc = await movies.aggregate([
        //     {
        //         $unwind : "$genres"
        //     },
        //     {
        //         $group : {
        //             _id : "$genres",
        //             numberOfMovies : { $sum : 1}// use sum : 1 instead of count : { }
        //         }
        //     }
        // ]).toArray()

        // 3. Find the average runtime of movies in each language.
        // const alldoc = await movies.aggregate([
        //     {
        //         $unwind: {
        //             path: "$languages"
        //         }
        //     },
        //     {
        //         $group: {
        //             _id: "$languages",
        //             averageRuntime: {
        //                 $avg: "$runtime"
        //             }
        //         }
        //     }
        // ]).toArray()

        // 4. List all movies that have won at least one award.
        const alldoc = await movies.aggregate([
            {
                $match: { "awards.wins": { $gte: 1 } }
            },
            {
                $project: {
                    title: 1,
                    _id: 0,
                    "awards.wins": 1
                }
            }
        ]).toArray();

        // 5. List 


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