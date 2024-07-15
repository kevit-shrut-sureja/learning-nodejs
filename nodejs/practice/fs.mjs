import fs from "fs";

const data = fs.statfsSync('./a.txt') ;

console.log(data)

fs.stat('./a.txt', (error, stats) => {
    console.log(stats)
})