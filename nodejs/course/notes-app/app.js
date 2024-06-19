const { addNote, removeNote, editNote, getNote, getAllNotes } = require('./notes.js')
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
    handler(argv){
        addNote(argv.title, argv.body)
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
    handler(argv){
        removeNote(argv.title)
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
    handler(argv){
        editNote(argv.existingTitle, argv.title, argv.body)
    }
})

yargs.command({
    command : "getNote",
    describe :"get a single note",
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        getNote(argv.title);
    }
})

yargs.command({
    command : "getAllNotes",
    describe :"get all notes",
    handler(){
        getAllNotes();
        
    }
})


yargs.parse();