const { readJSON, writeJSON } = require('./json/handleReadWrite.js');
const chalk = require('chalk')

function addNote(title, body){
    const notes = readJSON();
    // debugger
    for(const note of notes){
        if(note.title === title){
            console.log(chalk.red.inverse.bold("Note already exists"));
            return;
        }
    }
    notes.push({title, body});
    const isDataWritten = writeJSON(notes);
    // debugger
    if(!isDataWritten) {
        console.log(chalk.red.inverse.bold("Some error occured"));
        return;
    }
    console.log(chalk.green.inverse.bold("Note has been added"));
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
    if(indexToBeRemoved === -1){
        console.log(chalk.red.inverse.bold("Note NOT Found"));
        return;
    }
    notes.splice(indexToBeRemoved, 1);
    const isDataWritten = writeJSON(notes);
    if(!isDataWritten) {
        console.log(chalk.red.inverse.bold("some error occured"));
        return;
    }
    console.log(chalk.green.inverse.bold("Note has been removed."));
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
    if(indexToBeEdited === -1){
        console.log(chalk.red.inverse.bold("Note NOT Found"));

    }
    notes.forEach((note, index) => {
        if(note.title === newTitle && index !== indexToBeEdited){
            console.log(chalk.red.inverse.bold("Note title already exists"));
            return;
        }
    })
    notes[indexToBeEdited] = {
        title : newTitle === "" ? notes[indexToBeEdited].title : newTitle,
        body : newBody === "" ? notes[indexToBeEdited].body : newBody,
    }
    const isDataWritten = writeJSON(notes);
    if(!isDataWritten) {
        console.log(chalk.red.inverse.bold("Note title already exists or Note NOT Found or some error occured"));
        return;
    }
    console.log(chalk.green.inverse.bold("Note has been edited"));
}

function getNote(title){
    console.log(title);
    const notes = readJSON();
    const note = notes.find((note) => note.title === title);
    if(note === -1){
        console.log(chalk.red.inverse.bold("Note does note exist."))
        return;
    }
    console.log(chalk.green.inverse.bold("Found the Note"));
    console.log("title : " , note.title);
    console.log("body : " , note.body);
}

function getAllNotes(){
    const notes =  readJSON();
    notes.forEach((note, index) => {
        console.log(chalk.yellow.inverse("note : ", index + 1));
        console.log("title : " , note.title);
        console.log("body : " , note.body);

    });
}
module.exports = { addNote, removeNote, editNote, getAllNotes, getNote }