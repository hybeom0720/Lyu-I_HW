const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

const msg = getNotes()

console.log(process.argv)
console.log(process.argv[2])

console.log(yargs.argv)