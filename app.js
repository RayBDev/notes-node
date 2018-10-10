console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
let command = argv._[0];
console.log("Command: ", command);
console.log("Yargs", argv);

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    console.log("Title already exists. Please try again");
  } else {
    console.log("Note Added Successfully!");
    console.log("__");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Command not recognized");
}
