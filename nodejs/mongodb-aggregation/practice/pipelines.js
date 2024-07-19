// 1. 
// Suppose there is a dearth in willow production this year and the bat manufacturer can only 
// supply bats for either right-handed or left-handed batsmen but not both. Write a query for 
// the bat manufacturer that groups the players by batting hand so that you can inform him 
// which kind of bat he should put into production to gain maximum revenue. 
const q1 = [{
    $match: {
        batting_hand: { $ne: null }
    }
},
{
    $group: {
        _id: "$batting_hand",
        numberOfBattingHand: {
            $sum: 1
        }
    }
},
{
    $sort: {
        numberOfBattingHand: -1
    }
}];

// 2.
// There is talk of adding cricket to the Olympic sports. But before a conclusive decision can 
// be made, the Olympic board needs to find out if its even feasible to do so. Write a query 
// for the Olympic board informing them of the number of players in each country.

const q2 = [{
    $group: {
        _id: "$country",
        totalPlayers: {
            $sum: 1
        }
    }
}]

// 3. 
// The Olympic board is well aware of the willow crisis. Therefore, to be on the safe side, they
// have one more request for you. They would like to know the number of players of each country 
// that bat with a given hand.

// const q3 = [{
//     $match : {
//         batting_hand : { $ne : null}
//     }
// },
// {
//     $group: {
//         _id: {
//             country: "$country",
//             batting_hand: "$batting_hand"
//         },
//         numberOfPlayers: {
//             $sum: 1
//         }
//     }
// },
// {
//     $sort : {
//         "_id.country" : 1,
//         "_id.batting_hand" : 1
//     }
// }]
const q3 = [{
    $match: {
        batting_hand: { $ne: null }
    }
},
{
    $group: {
        _id: "$country",
        leftHanded: {
            $sum: { $cond: [{ $eq: ["$batting_hand", "Left_Hand"] }, 1, 0] }
        },
        rightHanded: {
            $sum: { $cond: [{ $eq: ["$batting_hand", "Right_Hand"] }, 1, 0] }
        }
    }
},
{
    $sort: {
        "_id": 1,
    }
}]


// 4. We have observed NULL values in our previous results and even though it's important for
//  us as database engineers to know what data is missing, our end users like the bat manufacturer
//  or the Olympic board can't really do much with the NULL values. Let's improve our queries 
// then to exclude the NULL values when grouping the players by batting hand.
const q4 = [{
    $match: {
        batting_hand: { $ne: null }
    }
},
{
    $group: {
        _id: "$batting_hand",
        numberOfBattingHand: {
            $sum: 1
        }
    }
},
{
    $sort: {
        numberOfBattingHand: -1
    }
}];

// 5.
// Similar to Exercise 4, let's count the number of players by non null country.
const q5 = [{
    $match: {
        country: { $ne: null }
    }
},
{
    $group: {
        _id: "$country",
        numberOfPlayers: {
            $sum: 1
        }
    }
},
{
    $sort: { numberOfPlayers: -1 }
}]

// 6.
// One last thing we can do to ease readability for the Olympic board is to sort the players
// in alphabetical order in addition to all the changes we implemented previously. Put all 
// your knowledge together and count number of players of each country that bat with a given 
// hand. Remove null values of Batting_Hand and sort the output in alphabetical order. 

const q6 = [{
    $match: {
        country: { $ne: null },
        batting_hand: { $ne: null }
    }
},
{
    $group: {
        _id: "$country",
        leftHanded: { $sum: { $cond: [{ $eq: ["$batting_hand", "Left_Hand"] }, 1, 0] } },
        rightHanded: { $sum: { $cond: [{ $eq: ["$batting_hand", "Right_Hand"] }, 1, 0] } }
    }
},
{
    $sort: { _id: 1 }
}]

// 7.
// Our employees are members of different departments. Deconstruct the deparments array 
// such that there is a separate document for each department an employee belongs to. 
const q7 = [{
    $unwind: "$_empDepartment"
}]

// 8. In order to find an object's location in an array, include the index position. 
const q8 = [{
    $unwind: {
        path: "$_empDepartment",
        includeArrayIndex: 'indexPosition',
    }
}]

// 9. Let's crunch some numbers! Count the number of departments an employee belongs to.
const q9 = [{
    $addFields: {
        numberOfDepartments : { $size: "$_empDepartment" }
    }
}]

// 10 
// Write a query that counts the number of employees in each department. To make things
// more interesting, perform this action only against employees having empno greater than
// or equal to 3.
const q10 = [{
    $match : {
        _empId : { $gte : 3}
    }
},
{
    $unwind: "$_empDepartment"
},
{
    $group : {
        _id : "$_empDepartment",
        numberOfEmployees : { $sum : 1 }
    }
}]
module.exports = { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 }
