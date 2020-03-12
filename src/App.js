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

  const addNewNote = note => {
    setNotes([...notes, note]);
  };

  return (
    <>
      <Header>
        <Title title="myNotes" />
      </Header>
      <Main>
        <Modal />
        <Form addNewNote={addNewNote} />

        <List notes={notes} />
      </Main>
    </>
  );
}

export default App;
