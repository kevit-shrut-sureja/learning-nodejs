const { addNote, removeNote, editNote } = require('./notes.js')
const yargs = require("yargs");

yargs.version("1.0.0");

yargs.command({
    command : 'add',
    describe : 'Add a new note.',
    builder : {
        title : {
            describe : "Note Title",
            demandOption : true,
            type: 'string'
        },
        body : {
            describe : "Note Body",
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        const result = addNote(argv.title, argv.body)
        if(!result) {
            console.log(("Note already exists or some error occured"));
            return;
        }
        console.log(("Note has been added"));
    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove a note.',
    builder : {
        title : {
            describe : "Note Title",
            demandOption : true,
            type: 'string'
        }
    },
    handler : function(argv){
        const result = removeNote(argv.title)
        if(!result) {
            console.log(("Note NOT Found or some error occured"));
            return;
        }
        console.log(("Note has been removed."));
    }
})

yargs.command({
    command : 'edit',
    describe : 'Edit a note.',
    builder : {
        existingTitle:{
            describe : "Existing Title",
            demandOption : true,
            type : 'string'
        },
        title : {
            describe : "Note Title",
            demandOption : true,
            type: 'string'
        },
        body : {
            describe : "Note Body",
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        const result = editNote(argv.existingTitle, argv.title, argv.body)
        if(!result) {
            console.log(("Note title already exists or Note NOT Found or some error occured"));
            return;
        }
        console.log(("Note has been edited"));
    }
})

yargs.parse();