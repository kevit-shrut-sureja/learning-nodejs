const fs = require('fs');
const csv = require('csv-parser');

const { MongoClient } = require('mongodb');

const mongo = new MongoClient('mongodb://localhost:27017');

const col = mongo.db('aggregation-practice').collection('player')

const promises = [];

fs.createReadStream('/home/kevit/Downloads/Player.csv')
    .pipe(csv())
    .on('data', (data) => {
        try {
            result = col.insertOne({
                _id: Number(data.Player_Id),
                player_name: data.Player_Name === "NULL" ? null : data.Player_Name,
                dob: data.dob === "NULL" ? null : (new Date(new Date(data.DOB).setMinutes(330))),
                batting_hand: data.Batting_Hand === "NULL" ? null : data.Batting_Hand,
                bowling_skill: data.Bowling_Skill === "NULL" ? null : data.Bowling_Skill,
                country: data.Country === "NULL" ? null : data.Country,
                is_umpire: data.Is_Umpire,
                umpire_rank: data[''] === '' ? null : data['']
            });
            promises.push(result);
        } catch (error) {
            throw new Error(error)
        }
    })
    .on('end', () => {
        const p = Promise.allSettled(promises);
        p.then((data) => {
            let rejectedCount = 0;
            for (const d of data) {
                if (d.status === "rejected") {
                    console.log(d.reason);
                    rejectedCount++;
                }
            }
            console.log("Rejected : ", rejectedCount);
            console.log("---------Push all in the promises-----------");
            mongo.close();
        })
    });

