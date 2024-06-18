const { readJSON, writeJSON } = require('./json/handleReadWrite.js')
function addNote(title, body){
    const notes = readJSON();
    for(const note of notes){
        if(note.title === title){
            return false;
        }
    }
    notes.push({title, body});
    const isNoteAdded = writeJSON(notes);
    return isNoteAdded;
}

function removeNote(existingTitle){
    const notes = readJSON();
    let indexToBeRemoved = -1;
    for (let i = 0 ; i < notes.length; i++) {
        if(notes[i].title === existingTitle){
            indexToBeRemoved = i;
            break;
        }
    };
    if(indexToBeRemoved === -1)return false;
    notes.splice(indexToBeRemoved, 1);
    const isNoteDeleted = writeJSON(notes);
    return isNoteDeleted;
}

function editNote(existingTitle, newTitle, newBody){
    const notes = readJSON();
    let indexToBeEdited = -1;
    for (let i = 0 ; i < notes.length; i++) {
        if(notes[i].title === existingTitle){
            indexToBeEdited = i;
            break;
        }
    };
    if(indexToBeEdited === -1) return false;
    for(const note of notes){
        if(note.title === newTitle){
            return false;
        }
    }
    notes[indexToBeEdited] = {
        title : newTitle === "" ? notes[indexToBeEdited].title : newTitle,
        body : newBody === "" ? notes[indexToBeEdited].body : newBody,
    }
    const isNoteEdited = writeJSON(notes);
    return isNoteEdited
}

module.exports = { addNote, removeNote, editNote }