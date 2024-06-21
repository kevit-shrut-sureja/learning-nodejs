const fs = require('fs')
function writeData(file, data){
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log("Data written in the file.")
}

module.exports = writeData