console.log("Starting notes.js");

const fs = require("fs");

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  let duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log("Getting all notes");
};

const getNote = title => {
  let notes = fetchNotes();
  let filteredNote = notes.filter(note => note.title === title);
  return filteredNote[0];
};

const removeNote = title => {
  //fetch notes
  let notes = fetchNotes();
  //filter notes, removing one with title of argument
  let filteredNotes = notes.filter(note => note.title !== title);
  //save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = note => {
  console.log("__");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
