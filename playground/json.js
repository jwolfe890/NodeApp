const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);


fs.writeFile('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
// note
console.log(typeof note);
console.log(note.title);




// try {
//     fs.writeFileSync('notes.json', originalNoteString);
// } catch (err) {
//     console.log('Error writing Notes.json:' + err.message)
// }