console.log('starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {

    var notes = fetchNotes();
    var note = {
        title,
        body 
    };

    debugger;

    var duplicateNotes = notes.filter((note) => note.title === title); 
// this is basically saying if the note's title already exists, 
// then don't write it to notes-data.json

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((notes) => notes.title === title );
    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes()
    var newNotes = notes.filter((note) => note.title != title );
    saveNotes(newNotes)
    return notes.length !== newNotes.length  
};  

var logNotes = (note) => {
    console.log(note.title)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    logNotes,
    removeNote
};




