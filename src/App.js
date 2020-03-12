import React, { useState } from "react";
import styled from "@emotion/styled";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
import Modal from "./components/Modal";

const Header = styled.header`
  font-size: 1.5rem;
  text-align: center;
`;
const Main = styled.main`
  text-align: center;
`;

function App() {
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    title: "",
    body: "",
    id: ""
  });

  const addNewNote = note => {
    setNotes([...notes, note]);
  };

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = note => {
    const { title, body, id } = note;

    setEditing(true);
    setCurrentNote({
      title: title,
      body: body,
      id: id
    });
  };

  const updateNote = (id, updatedNote) => {
    setEditing(false);
    setNotes(notes.map(note => (note.id === id ? updatedNote : note)));
  };

  return (
    <>
      <Header>
        <Title title="myNotes" />
      </Header>
      <Main>
        <Form addNewNote={addNewNote} />
        <List notes={notes} deleteNote={deleteNote} editNote={editNote} />
        {editing ? (
          <Modal
            currentNote={currentNote}
            updateNote={updateNote}
            setEditing={setEditing}
          />
        ) : null}
      </Main>
    </>
  );
}

export default App;
