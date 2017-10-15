// console.log('File has been executed!');
const fs = require('fs');


// To fetch notes
var fetchNotes = () => {
  // try catch block is added: Reason => Program will work even if there is no notes-json file or the data in JSON is invalid
  try{
    // Fetch the existing notes in notes-data.json so that when we add a new note, the old notes are not removed
    var notesString = fs.readFileSync('notes-data.json');
    // notes = JSON.parse(notesString);

    return JSON.parse(notesString);

  } catch(e) {
    return [];
  }
};

// To save notes
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();

    // New note
    var note = {
      title,
      body
    };


    //Checking if there are any titles already present (To avoid duplication of titles in notes)

    // duplicateNotes[] stores the notes that are already present in notes[] that have a title you are trying to create
    var duplicateNotes = notes.filter((note) => {
      // If the title matches, return true => keep the item in array
      return note.title === title;
    }
  );

  // If the title is already present, that means  duplicateNotes[] is not empty do nothing.
  //If the length of duplicateNotes[] is 0 then add the note to notes[]
  if(duplicateNotes.length === 0) {
    // Adding a note to notes[]
    notes.push(note);
    saveNotes(notes);

    return note;
  }


};

// Returns all the notes regardless of title
var getAll = () => {
  // Fetch the notes
  var notes = fetchNotes();

  return notes;
};

// Returns the body of note for the title passed
var getNote = (title) => {
   // Fetch the notes
   var notes = fetchNotes();

   // Filter notes, getting a note whose title matches with the title of argument
   var filteredNotes = notes.filter((note) => {
       return note.title === title;
     }
   );
   // Return the note -> Return the first item in filteredNotes[]
   return filteredNotes[0];
};

// Remove the note specific to title
var removeNote = (title) => {
    //Fetch the notes
    var notes = fetchNotes();

    // Filter notes, removing the one with the title of argument
    var filteredNotes = notes.filter((note) => {
        return note.title != title;
      }
    );
    // Save new notes[]
    saveNotes(filteredNotes);

    // Returns true if the note is removed.
    return notes.length != filteredNotes.length;

};

var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  console.log('--');
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
