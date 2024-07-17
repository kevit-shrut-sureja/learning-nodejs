const { MongoClient } = require('mongodb')

const mongo = new MongoClient('mongodb://localhost:27017/');

const db = mongo.db('mongoPractice');

const col = db.collection('restaurants');


async function main(){
    // 1. Write a MongoDB query to display all the documents in the collection restaurants
    const alldoc = await col.find({}).toArray();

    // 2. Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine for all the documents in the collection restaurant
    // const alldoc = await col.find({ }, { projection : {restaurant_id : 1, name : 1, borough : 1, cuisine : 1}}).toArray();

    // 3. Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine, but exclude the field _id for all the documents in the collection restaurant.
    // const alldoc = await col.find( {} , { projection : { _id : 0, restaurant_id : 1, name : 1, borough : 1, cuisine : 1}}).toArray();

    // 4. Write a MongoDB query to display the fields restaurant_id, name, borough, and zip code, but exclude the field _id for all the documents in the collection restaurant.
    // const alldoc = await col.find({}, { projection : { _id : 0, restaurant_id : 1, name : 1, borough : 1, 'address.zipcode' : 1 } }).toArray()

    // 5. Write a MongoDB query to display all the restaurants which are in the borough Bronx.
    // const alldoc = await col.find( { borough : 'Bronx' }).toArray();

    // 6. Write a MongoDB query to display the first 5 restaurants which are in the borough Bronx.
    // const alldoc = await col.find( { borough : 'Bronx'}).limit(5).toArray();
    
    // 7. Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
    // const alldoc = await col.find( { borough : 'Bronx' }).skip(5).limit(5).toArray();

    // 8. Write a MongoDB query to find the restaurants that achieved a score of more than 90.
    // const alldoc = await col.find({ "grades.score" : { $gt : 90 }}).toArray(); // 3

    // 9. Write a MongoDB query to find the restaurants that achieved a score, of more than 80 but less than 100.
    // const alldoc = await col.find({ $and : [{"grades.score" : { $gt : 80 } }, {"grades.score" : {$lt : 100 } }]}).toArray(); // 4
    // const alldoc = await col.find({ "grades.score" : { $gt : 80, $lt : 100 }}).toArray(); // 4

    // 10. Write a MongoDB query to find the restaurants which locate in a latitude value less than -95.754168.
    // const alldoc = await col.find({ "address.coord"  :  { $lt : -95.754168 } }).toArray();

    // 11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and whose grade score is more than 70 and latitude less than -65.754168.
    // const alldoc = await col.find({ $and : [ {cuisine : { $ne : 'American '}}, {"grades.score" :  { score : { $gt : 70}}}, {"address.coord.1" : {$lt : -65.754168}} ] }).toArray()

    // 12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score of more than 70 and located in the longitude less than -65.754168. Note: Do this query without using $and operator.
    // const alldoc = await col.find( { cuisine : { $ne : 'American'}, "grades.score" : { $gt : 70 }, "address.coord.0" : { $lt : -65.754168}}).toArray()

    // 13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belonging to the borough Brooklyn. 
    // The document must be displayed according to the cuisine in descending order.
    // const alldoc = await col.find({ cuisine : {$eq : 'American '}, "grades.grade" : { $eq : "A"}, "borough" : {$ne : "Brooklyn" }}).sort({ cuisine : -1}).toArray()

    // 14. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Wil' as the first three letters of their name.
    // const alldoc = await col.find({name : { $regex : '^Wil'}},{ projection : {restaurant_id : 1, name : 1, borough : 1, cuisine : 1 }}).toArray();

    // 15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as the last three letters of their name.
    // const alldoc = await col.find({name : { $regex : 'ces$'}},{ projection : {restaurant_id : 1, name : 1, borough : 1, cuisine : 1 }}).toArray();


    // 16. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Reg' as three letters somewhere in their name.
    // const alldoc = await col.find({ name : { $regex : 'Reg'}}, { projection : {restaurant_id : 1, name : 1, borough : 1, cuisine : 1}}).toArray();
    
    // 17. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dishes.
    // const alldoc = await col.find({ borough : "Bronx", cuisine : {$in : ['American ', 'Chinese']}}).toArray();
    // const alldoc = await col.find({ borough : "Bronx", $or : [ {cuisine : "American "}, {cuisine : 'Chinese'}]}).toArray();

    // 18. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronx or Brooklyn
    // const alldoc = await col.find({ borough : {$in : ["Staten Island", "Queens", "Bronx", "Brooklyn"]} }, { projection : { restaurant_id : 1, name : 1, borough : 1, cuisine : 1}}).toArray();

    // 19 Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which do not belong to the borough Staten Island or Queens, or Bronxor Brooklyn.
    // const alldoc = await col.find({ borough : { $nin : ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {projection : { restaurant_id : 1, name : 1, borough : 1, cuisine : 1}}).toArray()

    // 20. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which achieved a score that is not more than 10
    // const alldoc = await col.find({ "grades.score" : {$lte : 10}}, {projection : {restaurant_id : 1, name : 1, borough : 1, cuisine : 1}}).toArray()
    
    // 21. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which prepared dishes except 'American' and 'Chinees' or the restaurant's name begins with the letter 'Wil'.
    // const alldoc = await col.find({ $or : [{cuisine : {$nin : ['American', 'Chinees']}}, {name : {$regex : '^Wil'}}]}, {projection : {restaurant_id : 1, name : 1, borough : 1, cuisine : 1}}).toArray()
    
    // 22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many survey dates.
    // const alldoc = await col.find({"grades" : { $elemMatch : { grade : 'A', score : 11, date : { $eq : new Date("2014-08-11T00:00:00Z")}} }}, {projection : { restaurant_id : 1, name : 1, grades : { $elemMatch : { grade : 'A', score : 11, date : { $eq : new Date("2014-08-11T00:00:00Z")}} }}}).toArray();

    // 23. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants where the 2nd element of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
    // const alldoc = await col.find({"grades.1" : {grade : "A", score : 9, date : {$eq : new Date('2014-08-11T00:00:00Z')}}}, { projection : {restaurant_id : 1, name : 1, grades : 1}}).toArray();
    
    // 24. Write a MongoDB query to find the restaurant Id, name, address, and geographical location for those restaurants where the 2nd element of the coord array contains a value that is more than 42 and up to 52.
    // const alldoc = await col.find({ "address.coord.1" : {$gt : 42, $lte : 52}}, { projection : { restaurant_id: 1, name: 1,'address.coord': 1}}).toArray()
    
    // 25. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
    // const alldoc = await col.find({}).sort({ name : 1}).toArray()
    
    // 26. Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns
    // const alldoc = await col.find({}).sort({name : -1}).toArray();

    // 27. Write a MongoDB query to arrange the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.
    // const alldoc = await col.find({}).sort({ cuisine : 1, borough : -1}).toArray();

    // 28. Write a MongoDB query to know whether all the addresses contains the street or not.
    // const alldoc = await col.countDocuments({ "address.street" : { $exists : false }})

    // 29. Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
    // const alldoc = await col.find({ "address.coord" : { $type : "double"}}).toArray()

    // 30. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
    // const alldoc = await col.find({ grades : { $elemMatch : { score : {$mod :[7,0]}}}}, {projection : { restaurant_id : 1, name : 1, grades : { $elemMatch : { score : {$mod :[7,0]}}}}}).toArray();

    // 31. Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name.
    // const alldoc = await col.find({name : {$regex : 'mon'}}, {projection : {restaurant_id : 1, name : 1, borough : 1, "address.coord" : 1, cuisine : 1 }}).map((doc) =>{
    //     const {name, borough, address : { coord }, cuisine } = doc;
    //     const [latitude, longitude] = coord;
    //     return {name, borough, latitude, longitude, cuisine}
    // }).toArray()

    // 32. Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name.  
    // const alldoc = await col.find({name : {$regex : '^Mad'}}, {projection : {restaurant_id : 1, name : 1, borough : 1, "address.coord" : 1, cuisine : 1 }}).map((doc) =>{
    //     const {name, borough, address : { coord }, cuisine } = doc;
    //     const [latitude, longitude] = coord;
    //     return {name, borough, latitude, longitude, cuisine}
    // }).toArray();

    console.log(alldoc)
    console.log(alldoc.length);
} 

main().then(() => console.log("-----------complted the script-----------"))
.finally(() => mongo.close());