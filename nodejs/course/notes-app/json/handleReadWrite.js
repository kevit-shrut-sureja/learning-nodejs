const fs = require('fs')
const path = './json/notes.json'
function readJSON(){
    const dataBuffer = fs.readFileSync(path);
    const dataJSONString = dataBuffer.toString();
    const dataJSON = JSON.parse(dataJSONString);
    return dataJSON;
}

function writeJSON(data){
    try {
        const dataJSON = JSON.stringify(data);
        fs.writeFileSync(path, dataJSON)
        return true;
    } catch (error) {
        return false   
    }
}
module.exports = {readJSON, writeJSON}