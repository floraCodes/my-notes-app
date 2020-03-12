import React from "react";
import styled from "@emotion/styled";

const NoteElement = styled.div`
  border: 1px solid green;
`;

const Note = ({ note, deleteNote }) => {
  const { title, body, id } = note;

  const handleClick = e => {
    deleteNote(id);
  };
  return (
    <NoteElement>
      <div id={id}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          Delete
        </button>
      </div>
    </NoteElement>
  );
};

export default Note;
