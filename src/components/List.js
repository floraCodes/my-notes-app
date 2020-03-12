import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const ListContainer = styled.div`
  border: 1px solid black;
  display: flex;
  min-height: 100px;
  min-width: 600px;
`;

const List = ({ notes, deleteNote, editNote }) => {
  return (
    <ListContainer>
      {notes.length
        ? notes.map(note => (
            <Note
              note={note}
              key={note.id}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          ))
        : null}
    </ListContainer>
  );
};

export default List;
