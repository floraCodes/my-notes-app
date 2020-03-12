import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const ListContainer = styled.div`
  border: 1px solid black;
  display: flex;
`;

const List = ({ notes, deleteNote }) => {
  return (
    <ListContainer>
      {notes.length
        ? notes.map(note => (
            <Note note={note} key={note.id} deleteNote={deleteNote} />
          ))
        : null}
    </ListContainer>
  );
};

export default List;
