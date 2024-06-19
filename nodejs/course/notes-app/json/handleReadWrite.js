const fs = require('fs')
const path = './json/notes.json'
function readJSON(){
    try {
        const dataBuffer = fs.readFileSync(path);
        const dataJSONString = dataBuffer.toString();
        return  JSON.parse(dataJSONString);
    } catch (error) {
        return [] // if file does note exist
    }
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