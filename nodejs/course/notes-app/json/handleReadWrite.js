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
        const dataJSON = JSON.stringify(data, null, 2); // so that we can see the data in a more good way
        fs.writeFileSync(path, dataJSON)
        return true;
    } catch (error) {
        return false   
    }
}
module.exports = {readJSON, writeJSON}