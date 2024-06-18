const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer);
const dataJSON = dataBuffer.toString();

const user = JSON.parse(dataJSON);

console.log(user);
user.name = "Shrut";
user.age = 20;

const userJSON = JSON.stringify(user);
const dataWritten = fs.writeFileSync('1-json.json', userJSON)
console.log(dataWritten);