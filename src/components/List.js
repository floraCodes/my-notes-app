import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const ListContainer = styled.div`
  border: 5px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, 17rem);
  justify-content: center;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(150px, auto);

  align-items: start;
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
