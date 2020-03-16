import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
import Modal from "./components/Modal";

const LOCAL_STORAGE_KEY = "storage-myNotes";

const Header = styled.header`
  font-size: 1.5rem;
  text-align: center;
`;
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 70vw;
  margin: 0 auto;
  padding: 1rem 2rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
    max-width: 95vw;
  }
`;

function App() {
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    title: "",
    body: "",
    id: ""
  });

  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageNotes) {
      setNotes(storageNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

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
        {editing ? (
          <Modal
            currentNote={currentNote}
            updateNote={updateNote}
            setEditing={setEditing}
          />
        ) : null}
        <Form addNewNote={addNewNote} />
        <List notes={notes} deleteNote={deleteNote} editNote={editNote} />
      </Main>
    </>
  );
}

export default App;
