// console.log('Starting the app.js');

// Load a file system module whih is inbuilt module
const fs = require('fs');

// Load 3rd party module lodash
const _ = require('lodash');

// Load 3rd party module yargs
const yargs = require('yargs');

// Load notes.js file
const  notes = require('./notes.js');

// // Array of command line passed in
// console.log(process.argv);

const titleOptions = {
  describe: 'Title of a note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
}

// const argv = yargs.argv;
const argv = yargs
            .command('add', 'Add a new note', {
              title: titleOptions,
              body: bodyOptions
            })
            .command('list', 'List all notes')
            .command('read', 'Read a note', {
              title: titleOptions
            })
            .command('remove', 'Remove a note', {
              title: titleOptions
            })
            .help()
            .argv;

// // Grab the 3rd argument from command line which is going o be command which user gives
// var command = process.argv[2];

// fetch the command from command line With the use of yarg
var command = argv._[0];
// console.log('Command -->', command);
// console.log('Yargs -->', argv);


if(command == 'add') {
  var note = notes.addNote(argv.title, argv.body);

  // If note object is created
  if(note) {
    console.log('Success -->Note created!');
    notes.logNote(note);

  } else {
    console.log('Warning --> This note title already exists');
  }
} else if(command == 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
      }
    );
  } else if(command == 'read') {
    var note = notes.getNote(argv.title)

    if(note) {
      console.log('Success --> Note found');
      notes.logNote(note);

    } else {
      console.log('Error --> Note not found');
    }

  } else if(command == 'remove') {
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? 'Success --> Note removed' : 'Error --> Note not found';
    console.log(message);

  }
    else {
    console.log('Error --> Command not recognized');
  }
