const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
        
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder : {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()

console.log(yargs.argv)