import React from 'react';
import './note.css';
import { NoteElement, ButtonsContainer, NoteButton } from './noteCss';

const Note = ({ note, deleteNote, editNote }) => {
  const { title, body, id } = note;

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleEdit = () => {
    editNote(note);
  };

  return (
    <NoteElement id={id} className="note">
      <div>
        <h3 className="title">{title}</h3>
        <p className="body">{body}</p>
        <ButtonsContainer className="buttons" role="toolbox">
          <NoteButton
            className="edit-button"
            role="button"
            onClick={handleEdit}
          ></NoteButton>
          <NoteButton
            className="delete-button"
            role="button"
            onClick={handleDelete}
          ></NoteButton>
        </ButtonsContainer>
      </div>
    </NoteElement>
  );
};

export default Note;
