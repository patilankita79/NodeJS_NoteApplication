# NodeJS_NoteApplication
A note application developed using Node.js. This application focuses on Node.js fundamentals
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
<br>
<b>--save flag</b> is used to save the dependency in package.json
<br>

```
$npm install lodash --save
```
```
$npm install yargs --save
```





