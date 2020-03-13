import React from "react";
import styled from "@emotion/styled";

const NoteElement = styled.div`
  border: 5px solid lightgreen;
  margin: 1rem;
  padding: 1rem;
`;

const Note = ({ note, deleteNote, editNote }) => {
  const { title, body, id } = note;

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleEdit = () => {
    editNote(note);
  };

  return (
    <NoteElement>
      <div id={id}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </NoteElement>
  );
};

export default Note;
