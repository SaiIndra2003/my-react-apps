import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Area from "./CreateArea";

function App() {
  const [notes, addNote] = React.useState([]);

  function setContent(note) {
    addNote((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    addNote((prevNotes) => {
      return prevNotes.filter((Note, index) => {
        return index !== id;
      });
    });
  }
  function giveNote(note, index) {
    return (
      <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        deleteNote={deleteNote}
      />
    );
  }

  return (
      <React.StrictMode>
      <Header />
      <Area setContent={setContent} />
      {notes.map(giveNote)}
      <Footer />
      </React.StrictMode>
  );
}

export default App;
