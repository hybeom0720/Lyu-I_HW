const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

const msg = getNotes()

console.log(msg)
console.log(chalk.yellow("success"))

console.log(process.argv)
console.log(process.argv[2])

const command = process.argv[2]

if (command === 'add'){
    console.log('Adding note!')
} else if (command ==="remove"){
    console.log('Removing note')
}