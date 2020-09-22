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
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
        
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function(){
        console.log('listing the note')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('reading the note')
    }
})

yargs.parse()

console.log(yargs.argv)