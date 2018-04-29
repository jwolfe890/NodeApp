console.log('Starting app.js')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

console.log(process.argv[2])

if (command === 'add') {
   var note = notes.addNote(argv.title, argv.body);
   return note ? console.log("Note created") : console.log("Note already exists")
} else if (command === 'list') {
    var allNotes = notes.getAll();

    console.log(`Printing ${allNotes.length} note(s)`);

    allNotes.forEach((note) => notes.logNotes(note))

} else if (command === 'read') {

    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note found");
        console.log(`Title: ${note.title}`);
    } else {
        console.log("Note not found");
    }


} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message)
} else {
    console.log('Command not recognized');
}