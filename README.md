# NodeJS_NoteApplication
A note application developed using Node.js. This application focuses on Node.js fundamentals.<br>
The application involves CRUD operations where, user can add, delete, read and list all the notes. The application can be accessed from command line. <br>
Following command lists all the operations that can be performed in Note application

```
$ node app.js --help
```


<hr>

### Dependencies

Third party module used in this application
<ul>
<li><b>lodash</b></li>
  <li><b>Yargs</b> -> To make the parsing easier</li>
</ul>

I have used <b>Yargs</b> 
<ul>
  <li>for the parsing of command line arguments</li>
  <li>.command() is used to configure all the four commands that are used in this application, to set up description and help functionality</li>
  <li>.help() -> Sets up Yarg to return useful information when user runs the program. Returns all the options available</li>
</ul>

<b>--save flag</b> is used to save the dependency in package.json<br>


```
$npm install lodash --save
```
```
$npm install yargs --save
```

<hr>

### Help Utility
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/1_helpUtility.png" />

### Help Uitlity for add command
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/2_helpUtilityAdd.png" />

### Adding a note
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/3_AddNote.png" />

### Now, listing all the notes
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/4_addAndlistAllNotes.png" />

### To avoid duplication of titles in notes
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/5_DuplicateTitleCase.png" />

### Help Utility to read a note 
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/6_helpUtilityRead.png" />

### Rading a note for the title passed
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/7_readNote.png" />

### Help Utility to remove a note
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/8_helpUtilityRemove.png" />

### Listing all the notes in application
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/10_listAllNotes.png" />

### Remove a note for the title passed
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/9_removeNote.png" />

### Now, listing all the notes to check if the notes are removed or not
<img src="https://github.com/patilankita79/NodeJS_NoteApplication/blob/master/Screenshots/11_removeAndList.png" />




